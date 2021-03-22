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
				console.log(index);
				const viewSelected = getStore().planets[index];
				console.log(viewSelected);
				setStore({ learnmore: [viewSelected, "planets"] });
				console.log(getStore().learnmore);
			}
		}
	};
};

export default getState;
