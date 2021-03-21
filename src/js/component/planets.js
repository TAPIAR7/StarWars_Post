import React, { useContext } from "react";
import PropTypes from "prop-types";
import starwars from "../../img/starwars.png";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const CardPlanets = () => {
	const { store, actions } = useContext(Context);

	return store.planets !== undefined
		? store.planets.map((item, index) => {
				return (
					<div key={index} className="col">
						<div className="card cardSize">
							<img src={starwars} className="card-img-top sizeImage mx-auto" />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Terrain: {item.terrain}</p>
								<p className="card-text">Population: {item.population}</p>
								<button type="button" className="btn btn-primary">
									Learn More
								</button>
								<button
									onClick={() => {
										actions.addFavorite(item.name);
									}}
									type="button"
									className="btn btn-outline-warning float-right">
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					</div>
				);
		  })
		: "loading...";
};

// Backup code
// const CardPlanets = props => {
// 	return (
// 		<div className="card cardSize">
// 			<img src={starwars} className="card-img-top sizeImage mx-auto" />
// 			<div className="card-body">
// 				<h5 className="card-title">{props.title}</h5>
// 				<p className="card-text">Terrain: {props.terrain}</p>
// 				<p className="card-text">Population: {props.population}</p>
// 				<button type="button" className="btn btn-primary">
// 					Learn More
// 				</button>
// 				<button onClick={props.onclick} type="button" className="btn btn-outline-warning float-right">
// 					<i className="far fa-heart" />
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// CardPlanets.propTypes = {
// 	// Share for both cards
// 	title: PropTypes.string,
// 	// For planets
// 	population: PropTypes.string,
// 	terrain: PropTypes.string,
// 	onclick: PropTypes.func
// };

export default CardPlanets;
