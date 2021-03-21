import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";
export const Navbar = () => {
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
							Favorites <span className="badge badge-light">4</span>
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{/* <Link to="/demo"> */}
							<a className="dropdown-item">
								Action <i className="fas fa-trash" />
							</a>
							{/* </Link> */}
							<a className="dropdown-item">
								Another action <i className="fas fa-trash" />
							</a>
							<a className="dropdown-item">
								Something else here <i className="fas fa-trash float-right" />
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
