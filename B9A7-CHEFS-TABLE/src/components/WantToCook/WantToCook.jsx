import React from "react";
import PropTypes from "prop-types";

const WantToCook = ({ wantToCookRecipes, handlePreparing }) => {
	return (
		<div className="w-full mb-8 font-firaSans">
			<h1 className="want-to-cook-title text-center text-2xl font-semibold">
				Want to cook: <span>{wantToCookRecipes.length}</span>
			</h1>
			<hr className="w-1/2 text-center mx-auto" />
			{wantToCookRecipes.length ? (
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
						<tbody className="text-gray-400 leading-6">
							{wantToCookRecipes.map((recipe, index) => {
								return (
									<tr key={index}>
										<th>{index + 1}</th>
										<td>{recipe.recipe_name}</td>
										<td>{recipe.preparing_time}</td>
										<td>{recipe.calories}</td>
										<td>
											<button
												className="btn bg-theme rounded-full"
												onClick={() => handlePreparing(recipe.id)}
											>
												Preparing
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

WantToCook.propTypes = {};

export default WantToCook;
