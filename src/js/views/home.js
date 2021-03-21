import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	let characters = store.people;
	let planets = store.planets;
	console.log(characters);

	function characterCards() {
		return store.people !== undefined
			? characters.map((item, index) => {
					return (
						<div key={index} className="col">
							<Card title={item.name} />
						</div>
					);
			  })
			: "loading...";
	}

	function planetsCards() {
		return store.planets !== undefined
			? planets.map((item, index) => {
					return (
						<div key={index} className="col">
							<Card title={item.name} />
						</div>
					);
			  })
			: "loading...";
	}

	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="row horizontal-scroll-wrapper">{characterCards()}</div>
			<h1 className="text-danger mt-2">Planets</h1>
			<div className="row horizontal-scroll-wrapper">{planetsCards()}</div>
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
