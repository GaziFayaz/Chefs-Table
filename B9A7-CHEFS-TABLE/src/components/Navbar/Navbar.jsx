import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-regular-svg-icons'

const Navbar = (props) => {
	return (
		<div className="navbar bg-base-100 p-0 my-12">
			<div className="dropdown">
				<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					tabIndex={0}
					className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
							<a>Home</a>
						</li>
						<li>
            <a>Recipes</a>
						</li>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Search</a>
						</li>
				</ul>
			</div>
			<div className="flex justify-between w-full">
				<a className="text-3xl font-bold">Recipe Calories</a>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Home</a>
						</li>
						<li>
            <a>Recipes</a>
						</li>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Search</a>
						</li>
					</ul>
				</div>
				<div className="flex gap-2">
					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered w-24 md:w-auto"
						/>
					</div>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<button className="btn btn-circle bg-theme">
								<FontAwesomeIcon icon={faCircleUser} className="text-3xl"/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
