import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Recipe = ({ recipe, handleWantToCook }) => {
	const {
		id,
		recipe_image,
		recipe_name,
		short_description,
		ingredients,
		preparing_time,
		calories,
	} = recipe;
	return (
		<div className="flex flex-col p-6 border border-neutral-400 rounded-3xl justify-between">
			<div>
				<img
					src="/Rectangle 1.png"
					alt=""
					className="w-full object-cover h-[200px] rounded-2xl object-center mb-6"
				/>
				<h3 className="recipe-title text-xl font-semibold mb-4">
					{recipe_name}
				</h3>
				<p className="recipe-desc font-firaSans text-[#878787] mb-3">
					{short_description}
				</p>
				<h4 className="ingredients-section text-lg text-[#282828] font-medium mb-2">
					Ingredients: <span>{ingredients.length}</span>
				</h4>
				<ul className="list-disc list-inside pl-2 font-firaSans text-lg leading-8 text-[#878787] mb-5">
					{ingredients.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</div>

			<div>
				<div className="time-calories flex gap-4 mb-6">
					<div className="time flex gap-2 items-center">
						<FontAwesomeIcon icon={faClock} />
						<p className="cook-duration">
							<span>{preparing_time}</span> minutes
						</p>
					</div>
					<div className="calories flex gap-2 items-center">
						<AiOutlineFire className="text-xl" />
						<p className="calorie-amount">
							<span>{calories}</span> calories
						</p>
					</div>
				</div>
				<button
					className="btn bg-theme rounded-full text-lg font-medium px-4"
					onClick={() => {
						handleWantToCook(id);
					}}
				>
					Want to Cook
				</button>
			</div>
		</div>
	);
};

Recipe.propTypes = {};

export default Recipe;
