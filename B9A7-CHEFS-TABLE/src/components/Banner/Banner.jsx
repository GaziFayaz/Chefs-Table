const Banner = () => {
	return (
		<div className="w-full bg-banner-pattern bg-cover bg-center rounded-3xl flex flex-col items-center justify-center text-center px-48 py-28 gap-6 mb-12">
			<h1 className="banner-title text-base-100 text-[52px] font-bold leading-[76px]">
				Discover an exceptional cooking class tailored for you!
			</h1>
			<p className="banner-desc text-lg leading-[30px] text-base-100">
				Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
				Database and solve 500+ coding problems to become an exceptionally well
				world-class Programmer.
			</p>
      <div className="flex gap-6 pt-4">
        <button className="btn rounded-full bg-theme border-none">Explore Now</button>
      <button className="btn rounded-full bg-transparent border-base-100 text-base-100">Our Feedback</button>
      </div>
      
		</div>
	);
};

export default Banner;
