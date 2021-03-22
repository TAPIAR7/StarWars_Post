import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

export const Fullview = () => {
	const { store, actions } = useContext(Context);
	console.log(store.learnmore);
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
			<div className="row border-top border-warning">
				<div className="col text-center text-danger">
					<h5>Name</h5>
					<p>Name</p>
				</div>
				<div className="col text-center text-danger">
					<h5>Birth Year</h5>
					<p>Birth</p>
				</div>
				<div className="col text-center text-danger">
					<h5>Gender</h5>
					<p>Gender</p>
				</div>
				<div className="col text-center text-danger">
					<h5>Height</h5>
					<p>Gender</p>
				</div>
				<div className="col text-center text-danger">
					<h5>Skin Color</h5>
					<p>Gender</p>
				</div>
				<div className="col text-center text-danger">
					<h5>Eye Color</h5>
					<p>Gender</p>
				</div>
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
