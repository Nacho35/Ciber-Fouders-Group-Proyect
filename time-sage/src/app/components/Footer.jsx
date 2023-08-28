import React from "react";
import notebook from "../../../public/images/notebook.svg";
import github from "../../../public/images/github.svg";
import web from "../../../public/images/world.svg";
import linkedin from "../../../public/images/linkedin.svg";
import Image from "next/image";
const Footer = () => {
	return (
		<footer className="footer items-center p-6 bg-colorOne text-neutral-content">
			<div className="items-center grid-flow-col">
				<p className=" font-semibold">
					<Image src={notebook} alt="icon" />
					Fast Diary 2023 Ignacio Morales
				</p>
			</div>
			<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<a className="mx-3" href="https://github.com/Nacho35">
					<Image src={github} alt="icon" />
				</a>
				<a
					className="mx-3"
					href="https://portfolio-ignacio-morales.netlify.app/">
					<Image src={web} alt="icon" />
				</a>
				<a
					className="mx-3"
					href="https://www.linkedin.com/in/ignacio-morales35/">
					<Image src={linkedin} alt="icon" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
