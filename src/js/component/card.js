import React from "react";
import PropTypes from "prop-types";
import starwars from "../../img/starwars.png";

export const Card = props => (
	<div className="card cardSize">
		<img src={starwars} className="card-img-top sizeImage mx-auto" />
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">
				Some quick example text to build on the card title and make up the bulk of the cards content.
			</p>
			<button type="button" className="btn btn-primary">
				Learn More
			</button>
			<button type="button" className="btn btn-outline-warning float-right">
				<i className="far fa-heart" />
			</button>
		</div>
	</div>
);

Card.propTypes = {
	// Share for both cards
	title: PropTypes.string,
	// For characters
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string,
	// For planets
	population: PropTypes.string,
	terrain: PropTypes.string
};
