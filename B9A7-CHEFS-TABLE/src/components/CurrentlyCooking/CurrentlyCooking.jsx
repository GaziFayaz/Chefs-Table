import React from "react";
import PropTypes from "prop-types";

const CurrentlyCooking = ({ currentlyCookingRecipes, handleFinish }) => {
	return (
		<div className="w-full mb-8 text-center  font-firaSans">
			<h1 className="currently-cooking-title text-2xl font-semibold">
				Currently cooking: <span>{currentlyCookingRecipes.length}</span>
			</h1>
			<hr className="w-1/2 text-center mx-auto" />
			{currentlyCookingRecipes.length ? (
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Time</th>
								<th>Calories</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="text-gray-400">
							{currentlyCookingRecipes.map((recipe, index) => {
								return (
									<tr key={index}>
										<th>{index + 1}</th>
										<td>{recipe.recipe_name}</td>
										<td>{recipe.preparing_time}</td>
										<td>{recipe.calories}</td>
										<td>
											<button
												className="btn bg-warning rounded-full"
												onClick={() => handleFinish(recipe.id)}
											>
												Finish
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

CurrentlyCooking.propTypes = {};

export default CurrentlyCooking;
