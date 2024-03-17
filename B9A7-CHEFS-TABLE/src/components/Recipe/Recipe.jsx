import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Recipe = (props) => {
	return (
		<div className="flex flex-col p-6 border border-neutral-400 rounded-3xl">
			<img
				src="/Rectangle 1.png"
				alt=""
				className="w-full object-cover h-[200px] rounded-2xl object-center mb-6"
			/>
			<h3 className="recipe-title text-xl font-semibold mb-4">
				Spaghetti Bolognese
			</h3>
			<p className="recipe-desc font-firaSans text-[#878787] mb-10">
				Classic Italian pasta dish with savory meat sauce.
			</p>
			<h4 className="ingredients-section text-lg text-[#282828] font-medium mb-4">
				Ingredients: <span>6</span>
			</h4>
			<ul className="list-disc list-inside pl-2 font-firaSans text-lg leading-8 text-[#878787] mb-10">
				<li>500g ground beef</li>
				<li>1 onion, chopped</li>
				<li>2 cloves garlic, minced</li>
			</ul>
			<div className="time-calories flex gap-4 mb-6">
				<div className="time flex gap-2 items-center">
					<FontAwesomeIcon icon={faClock} />
					<p className="cook-duration">
						<span>30</span> minutes
					</p>
				</div>
				<div className="calories flex gap-2 items-center">
					<AiOutlineFire className="text-xl" />
					<p className="calorie-amount">
						<span>600</span> minutes
					</p>
				</div>
			</div>
			<button className="btn bg-theme rounded-full text-lg font-medium p-3">
				Want to Cook
			</button>
		</div>
	);
};

Recipe.propTypes = {};

export default Recipe;
