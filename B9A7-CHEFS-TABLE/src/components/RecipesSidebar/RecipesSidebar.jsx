import React from "react";
import PropTypes from "prop-types";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToCook from "../WantToCook/WantToCook";
import TotalTimeCalorie from "../TotalTimeCalorie/TotalTimeCalorie";

const RecipesSidebar = ({
	wantToCookRecipes,
	handlePreparing,
	currentlyCookingRecipes,
  totalTime,
  totalCalorie
}) => {
	return (
		<div className="flex-1">
			<div className="flex flex-col border border-neutral-400 rounded-3xl">
				<WantToCook
					wantToCookRecipes={wantToCookRecipes}
					handlePreparing={handlePreparing}
				/>
				<CurrentlyCooking currentlyCookingRecipes={currentlyCookingRecipes} />
        <TotalTimeCalorie totalTime={totalTime} totalCalorie={totalCalorie}/>
			</div>
		</div>
	);
};

RecipesSidebar.propTypes = {};

export default RecipesSidebar;
