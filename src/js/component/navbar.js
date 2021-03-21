import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDelete = index => {
		// alert("quiero eliminar" + index);
		actions.deleteFavorite(index);
	};
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img width="120px" src={starwars} alt="Logo" />
					</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites <span className="badge badge-light">{store.favorites.length}</span>
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{store.favorites.length !== 0 ? (
								store.favorites.map((item, index) => {
									return (
										<a key={index} className="dropdown-item">
											{item}{" "}
											<i
												onClick={e => {
													handleDelete(index);
												}}
												className="fas fa-trash float-right"
											/>
										</a>
									);
								})
							) : (
								<p className="text-center">empty</p>
							)}

							{/* <Link to="/demo">
							<a className="dropdown-item">
								Action <i className="fas fa-trash float-right" />
							</a>
							</Link>
							<a className="dropdown-item">
								Another action <i className="fas fa-trash float-right" />
							</a>
							<a className="dropdown-item">
								Something else here <i className="fas fa-trash float-right" />
							</a> */}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
