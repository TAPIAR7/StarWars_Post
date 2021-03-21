import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import CardPeople from "../component/people";
import CardPlanets from "../component/planets";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	let characters = store.people;
	let planets = store.planets;
	console.log(characters);

	// const addFavorite = newFavorite => {
	// 	if (store.favorites.length > 0) {
	// 		let newArray = store.favorites;
	// 		actions({ favorites: newArray.push(newFavorite) });
	// 	}
	// 	if (store.favorites.length === 0) {
	// 		actions({ favorites: newFavorite });
	// 	}
	// };

	// This is a backup
	// function characterCards() {
	// 	return store.people !== undefined
	// 		? characters.map((item, index) => {
	// 				return (
	// 					<div key={index} className="col">
	// 						<CardPeople
	// 							title={item.name}
	// 							gender={item.gender}
	// 							hairColor={item.hair_color}
	// 							eyeColor={item.eye_color}
	// 							// onclick={addFavorite(item.name)}
	// 						/>
	// 					</div>
	// 				);
	// 		  })
	// 		: "loading...";
	// }

	// function planetsCards() {
	// 	return store.planets !== undefined
	// 		? planets.map((item, index) => {
	// 				return (
	// 					<div key={index} className="col">
	// 						<CardPlanets title={item.name} population={item.population} terrain={item.terrain} />
	// 					</div>
	// 				);
	// 		  })
	// 		: "loading...";
	// }

	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			{/* <div className="row horizontal-scroll-wrapper">{characterCards()}</div> */}
			<div className="row horizontal-scroll-wrapper">
				<CardPeople />
			</div>
			<h1 className="text-danger mt-2">Planets</h1>
			{/* <div className="row horizontal-scroll-wrapper">{planetsCards()}</div> */}
			<div className="row horizontal-scroll-wrapper">
				<CardPlanets />
			</div>
		</div>
	);
	// <div className="text-center mt-5">
	// 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// </div>
};
