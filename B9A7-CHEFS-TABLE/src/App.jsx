import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Recipes from "./components/Recipes/Recipes";
import Toast from "./components/Toast/Toast";
import { useEffect, useState } from "react";

function App() {
	const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    if(isToast){
      setInterval(() => {
				setIsToast(false);
		}, 4000);
    }
  }, [isToast])
  

	const showToast = () => {
		setIsToast(true);
	};
	return (
		<div className="mx-40">
			<Navbar />
			<Banner />
			<Recipes showToast={showToast} />
			{isToast && <Toast />}
		</div>
	);
}

export default App;
