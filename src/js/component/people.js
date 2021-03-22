import React, { useContext } from "react";
import PropTypes from "prop-types";
import starwars from "../../img/starwars.png";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPeople = () => {
	const { store, actions } = useContext(Context);
	// const changeHeart = favorite => {
	// 	var isInArray = store.favorites.includes(favorite);
	// 	if (isInArray) {
	// 		return <i className="fas fa-heart" />;
	// 	} else {
	// 		return <i className="far fa-heart" />;
	// 	}
	// };
	return store.people !== undefined
		? store.people.map((item, index) => {
				return (
					<div key={index} className="col">
						<div className="card cardSize">
							<img src={starwars} className="card-img-top sizeImage mx-auto" />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Gender: {item.gender}</p>
								<p className="card-text">Hair Color: {item.hairColor}</p>
								<p className="card-text">Eyes Color: {item.eyeColor}</p>
								<Link to="/fullview">
									<button
										onClick={() => {
											actions.showFullviewPeople(index);
										}}
										type="button"
										className="btn btn-primary">
										Learn More
									</button>
								</Link>
								<button
									onClick={() => {
										actions.addFavorite(item.name);
									}}
									type="button"
									className="btn btn-outline-warning float-right">
									{/* <i className="far fa-heart" /> */}
									<i className={actions.changeHeart(item.name)} />
								</button>
							</div>
						</div>
					</div>
				);
		  })
		: "loading...";
};

// This is a backup
// const CardPeople = props => {
// 	return (
// 		<div className="card cardSize">
// 			<img src={starwars} className="card-img-top sizeImage mx-auto" />
// 			<div className="card-body">
// 				<h5 className="card-title">{props.title}</h5>
// 				<p className="card-text">Gender: {props.gender}</p>
// 				<p className="card-text">Hair Color: {props.hairColor}</p>
// 				<p className="card-text">Eyes Color: {props.eyeColor}</p>
// 				<button type="button" className="btn btn-primary">
// 					Learn More
// 				</button>
// 				<button type="button" className="btn btn-outline-warning float-right">
// 					<i className="far fa-heart" />
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// CardPeople.propTypes = {
//     // Share for both cards
//     title: PropTypes.string,
//     // For characters
//     gender: PropTypes.string,
//     hairColor: PropTypes.string,
//     eyeColor: PropTypes.string
//     // onclick: PropTypes.func
// };

export default CardPeople;
