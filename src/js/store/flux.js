const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [
				{
					properties: {
						height: "172",
						mass: "77",
						hair_color: "blond",
						skin_color: "fair",
						eye_color: "blue",
						birth_year: "19BBY",
						gender: "male",
						created: "2021-03-19T18:55:40.819Z",
						edited: "2021-03-19T18:55:40.819Z",
						name: "Luke Skywalker",
						homeworld: "https://www.swapi.tech/api/planets/1",
						url: "https://www.swapi.tech/api/people/1"
					},
					description: "A person within the Star Wars universe",
					_id: "5f63a36eee9fd7000499be42",
					uid: "1",
					__v: 0
				}
			],
			planets: [
				{
					properties: {
						diameter: "10465",
						rotation_period: "23",
						orbital_period: "304",
						gravity: "1 standard",
						population: "200000",
						climate: "arid",
						terrain: "desert",
						surface_water: "1",
						created: "2021-03-19T18:55:40.825Z",
						edited: "2021-03-19T18:55:40.825Z",
						name: "Tatooine",
						url: "https://www.swapi.tech/api/planets/1"
					},
					description: "A planet.",
					_id: "5f7254c11b7dfa00041c6fae",
					uid: "1",
					__v: 0
				}
			],
			favorites: [],
			learnmore: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: (URL, OBJ) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */

				// let URL = "https://www.swapi.tech/api/people";
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				fetch(URL, requestOptions)
					.then(response => response.json())
					.then(result => {
						if (OBJ == "people") {
							setStore({ people: result.results });
						}
						if (OBJ == "planets") {
							setStore({ planets: result.results });
						}
					})
					.catch(error => console.log("error", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: favorite => {
				// Condition to prevent add a duplicated favorite
				var isInArray = getStore().favorites.includes(favorite);
				if (!isInArray) {
					setStore({ favorites: getStore().favorites.concat(favorite) });
				}
			},
			deleteFavorite: index => {
				const newArrayFavorites = getStore().favorites.filter((item, indexOld) => {
					// Returned all elements except the item we want to delete.
					return index !== indexOld;
				});
				setStore({ favorites: newArrayFavorites });
			},
			changeHeart: favorite => {
				var isInArray = getStore().favorites.includes(favorite);
				if (isInArray) {
					return "fas fa-heart";
				} else {
					return "far fa-heart";
				}
			},
			showFullviewPeople: index => {
				const viewSelected = getStore().people[index];
				setStore({ learnmore: [viewSelected, "people"] });
			},
			showFullviewPlanets: index => {
				// console.log(index);
				const viewSelected = getStore().planets[index];
				// console.log(viewSelected);
				setStore({ learnmore: [viewSelected, "planets"] });
				// console.log(getStore().learnmore);
			},
			findPeople: name => {
				let myPeople = [];
				for (let index = 0; index < getStore().people.length; index++) {
					if (getStore().people[index].name === name) {
						// console.log(getStore().people[index]);
						myPeople = [getStore().people[index], "people"];
					}
				}
				return myPeople;
			},
			findPlanets: name => {
				let myPlanets = [];
				for (let index = 0; index < getStore().planets.length; index++) {
					if (getStore().planets[index].name === name) {
						// console.log(getStore().planets[index]);
						myPlanets = [getStore().planets[index], "planets"];
					}
				}
				return myPlanets;
			},
			showFullview: name => {
				let testPeople = getActions().findPeople(name).length;
				let testPlanets = getActions().findPlanets(name).length;
				let people = getActions().findPeople(name);
				let planets = getActions().findPlanets(name);
				// console.log(people);
				// console.log(planets);
				if (testPeople !== 0) {
					setStore({ learnmore: people });
					// console.log(getStore().learnmore);
				} else {
					setStore({ learnmore: planets });
					// console.log(getStore().learnmore);
				}
				// console.log(testPeople, testPlanets);
			},
			getFavbyID: position => {
				setStore({ productsByID: [] });
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user/" + position + "/carlist")
					.then(response => response.json())
					.then(result => {
						console.log(result);
						getActions().saveInSessionArray("carrito", result);
						let carritoJSON = result;
						console.log("Lo que cargue de carrito", carritoJSON);
						if (carritoJSON != null)
							return carritoJSON.map((item, index) => {
								setStore({ productsByID: getStore().productsByID.concat(item) });
								getActions().getProductbyID(item.product_id);
								console.log("Esto es lo que tengo", item);
								console.log("Mi product id", item.product_id);
							});
					})
					.catch(error => console.log("Error loading list.", error));
			},
			// Este metodo lo que hace es agregar a la base de datos el producto al carrito por usuario
			posFavbyID: (newData, position) => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/user/" + position + "/favorites", requestOptions)
					.then(response => {
						console.log(response.json());
						if (response.ok) {
							// setStore({ loginResponse: "Item added!" });
							// return response.json();
						} else {
							// setStore({ loginResponse: "It was not possible to add the item." });
							// return response.json();
						}
					})
					// .then(result => console.log(result))
					.then(result => {
						console.log("Item added!", result);
					})
					.catch(error => console.log("Error saving item.", error));
			},
			deleteFavbyID: position => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/carlist/" + position, requestOptions)
					.then(resp => resp.json())
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("Error trying to delete from the list.", error));
			}
		}
	};
};

export default getState;
