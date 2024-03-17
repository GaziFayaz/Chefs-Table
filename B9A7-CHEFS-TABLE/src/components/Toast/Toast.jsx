import React from "react";

const Toast = () => {
	return (
		<div className="toast toast-end">
			<div className="alert alert-error">
				<span>Recipe is already being prepared or cooked</span>
			</div>
		</div>
	);
};

export default Toast;
