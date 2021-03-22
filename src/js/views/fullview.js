import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

export const Fullview = () => {
	const { store, actions } = useContext(Context);
	console.log(store.learnmore);

	const planetOrPeople = () => {
		if (store.learnmore[1] === "people") {
			return (
				<div className="row border-top border-warning">
					<div className="col mt-4 text-center text-danger">
						<h5>Name</h5>
						<p>{store.learnmore[0].name}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Birth Year</h5>
						<p>{store.learnmore[0].birth_year}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Gender</h5>
						<p>{store.learnmore[0].gender}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Height</h5>
						<p>{store.learnmore[0].height}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Skin Color</h5>
						<p>{store.learnmore[0].skin_color}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Eye Color</h5>
						<p>{store.learnmore[0].eye_color}</p>
					</div>
				</div>
			);
		} else if (store.learnmore[1] === "planets") {
			return (
				<div className="row border-top border-warning">
					<div className="col mt-4 text-center text-danger">
						<h5>Name</h5>
						<p>{store.learnmore[0].name}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Climate</h5>
						<p>{store.learnmore[0].climate}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Population</h5>
						<p>{store.learnmore[0].population}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Orbital Period</h5>
						<p>{store.learnmore[0].orbital_period}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Rotation Period</h5>
						<p>{store.learnmore[0].rotation_period}</p>
					</div>
					<div className="col mt-4 text-center text-danger">
						<h5>Diameter</h5>
						<p>{store.learnmore[0].diameter}</p>
					</div>
				</div>
			);
		} else {
			return <span className="display-3 text-danger">Return to home page and select one item...</span>;
		}
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src={starwars} className="imageFullview" />
				</div>
				<div className="col">
					{store.learnmore[0] !== undefined ? (
						<h1 className="text-center">{store.learnmore[0].name}</h1>
					) : (
						<span className="display-3 text-danger">Return to home page and select one item...</span>
					)}
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam sapien, sagittis id
						vulputate at, semper mollis nibh. Ut gravida varius lacus vel feugiat. Ut rutrum leo diam, vel
						malesuada justo gravida vel. Fusce et tempus tellus, id mollis nunc. Donec interdum nisl justo,
						sed lacinia dolor eleifend sit amet. Aenean blandit mauris at diam efficitur ullamcorper. Fusce
						risus ipsum, rhoncus non nisi at, viverra volutpat nisl. Sed gravida tincidunt enim vulputate
						dapibus. Integer et ante condimentum, dignissim risus a, mollis orci.
					</p>
				</div>
			</div>
			{planetOrPeople()}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
