import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";
import RecipesSidebar from "../RecipesSidebar/RecipesSidebar";
import { useEffect, useState } from "react";

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [wantToCookRecipes, setWantToCookRecipes] = useState([]);
	const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);
	const [totalTime, setTotalTime] = useState(0);
	const [totalCalorie, setTotalCalorie] = useState(0);

	useEffect(() => {
		fetch("recipes.json")
			.then((res) => res.json())
			.then((recipes) => setRecipes(recipes));
	}, []);

	const handleWantToCook = (id) => {
		if (!wantToCookRecipes.find((recipe) => recipe.id === id)) {
			const recipe = recipes.find((recipe) => recipe.id === id);
			setWantToCookRecipes([...wantToCookRecipes, recipe]);
			setTotalTime((totalTime + recipe.preparing_time));
			setTotalCalorie((totalCalorie + recipe.calories));
		}
	};

	const handlePreparing = (id) => {
		
		const recipe = recipes.find((recipe) => recipe.id === id);
		setWantToCookRecipes(
			wantToCookRecipes.filter((recipe) => recipe.id !== id)
		);
		setCurrentlyCookingRecipes([...currentlyCookingRecipes, recipe]);
		console.log(currentlyCookingRecipes);
	};

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
					{recipes.map((recipe) => (
						<Recipe
							key={recipe.id}
							recipe={recipe}
							handleWantToCook={handleWantToCook}
						/>
					))}
				</div>
				<RecipesSidebar
					wantToCookRecipes={wantToCookRecipes}
					handlePreparing={handlePreparing}
					currentlyCookingRecipes={currentlyCookingRecipes}
					totalTime={totalTime}
					totalCalorie={totalCalorie}
				/>
			</div>
		</div>
	);
};

Recipes.propTypes = {};

export default Recipes;
