import React from "react";
import Calendar from "./Calendar";
import Clock from "./Clock";
import Image from "next/image";
import clock from "../../../public/images/clock.svg";
import calendar from "../../../public/images/calendar.svg";

const Navbar = () => {
	return (
		<div className="navbar bg-colorOne font-Poppins fixed top-0 z-50 h-16">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-square avatar">
						<div className="w-10">
							<Image src={calendar} alt="icon" />
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
				<div>
					<h3 className="text-colorFive ml-3 font-Poppins font-semibold cursor-default">
						My Calendar
					</h3>
				</div>
			</div>
			<div className="navbar navbar-end ">
				<div>
					<h3 className="text-colorFive mr-3 font-Poppins font-semibold cursor-default">
						My Clock
					</h3>
				</div>
				<div className=" dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-square avatar">
						<div className="w-10">
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
