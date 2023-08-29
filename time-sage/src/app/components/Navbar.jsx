import React from "react";
import Calendar from "./Calendar";
import Clock from "./Clock";
import Image from "next/image";
import clock from "../../../public/images/clock.svg";
import bars from "../../../public/images/bars.svg";

const Navbar = () => {
	return (
		<div className="navbar bg-colorOne font-Poppins fixed top-0 z-50 h-16">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-8 rounded-full">
							<Image src={bars} alt="icon" />
						</div>
					</label>
					<div
						tabIndex={0}
						className="menu menu-md uppercase dropdown-content mt-5 z-[1] p-2 shadow bg-colorOne rounded-box w-80 md:w-80 lg:w-80">
						<div>
							<Calendar />
						</div>
					</div>
				</div>
				<div className="ml-10">
					<a href="#" className="btn btn-ghost text-2xl uppercase">
						Add Event
					</a>
				</div>
			</div>
			<div className="navbar navbar-end ">
				<div className=" dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-9 rounded-full">
							<Image src={clock} alt="icon" />
						</div>
					</label>
					<div
						tabIndex={0}
						className="menu dropdown-content ml-5 mt-5 p-2 z-[1] shadow bg-colorOne rounded-full w-fit">
						<Clock />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
