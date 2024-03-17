import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";
import RecipesSidebar from "../RecipesSidebar/RecipesSidebar";

const Recipes = (props) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="recipes-title text-4xl font-semibold mb-6">Our Recipes</h1>
			<p className="recipes-desc w-3/5 text-[16px] text-center mb-12">
				Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
				vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
				mauris aenean neque.
			</p>
      <div className="flex w-full gap-6">
        <div className="recipe-cards w-3/5 grid grid-cols-2 gap-6">
          <Recipe/>
          <Recipe/>
          <Recipe/>
        </div>
        <RecipesSidebar/>
      </div>
		</div>
	);
};

Recipes.propTypes = {};

export default Recipes;
