import React from "react";
import ToDoContainer from "./ToDoContainer";
import ToDo from "./Todo";

//create your first component
const Home = () => {


	return (
		<>
			<div className="card">
				<h1 className="Title">To Dos</h1>
				<ToDoContainer />
				
			

			</div>
		</>
	);
};

export default Home;
