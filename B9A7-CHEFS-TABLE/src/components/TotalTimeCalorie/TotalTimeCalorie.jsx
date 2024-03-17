const TotalTimeCalorie = ({totalTime, totalCalorie}) => {
	return (
		<div className="self-end">
			<div className="flex px-6 pb-4 gap-6">
				<div className="total-time-block flex flex-col">
					<h4 className="total-time-heading text-center">Total time</h4>
					<h4 className="total-time  text-center">{totalTime}</h4>
				</div>
				<div className="total-calorie-block flex flex-col">
					<h4 className="total-calorie-heading text-center">Total Calorie</h4>
					<h4 className="total-calorie text-center">{totalCalorie}</h4>
				</div>
			</div>
		</div>
	);
};

export default TotalTimeCalorie;
