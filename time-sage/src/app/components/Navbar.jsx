import React from "react";

const Navbar = () => {
	return (
		<div className="navbar bg-colorOne font-Poppins">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-md uppercase dropdown-content mt-5 z-[1] p-2 shadow bg-colorOne rounded-box w-52">
						<li>
							<a href="#">Homepage</a>
						</li>
						<li>
							<a href="#">Add Event</a>
						</li>
					</ul>
				</div>
				<div className="navbar-center self-center">
					<a href="#" className="btn btn-ghost text-xl uppercase">
						Fast Diary
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
