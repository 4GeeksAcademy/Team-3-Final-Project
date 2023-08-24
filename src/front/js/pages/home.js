import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Enter from "./Enter.jsx"; // Import the Enter component

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Enter /> 
			
			

		</div>
	);
};
