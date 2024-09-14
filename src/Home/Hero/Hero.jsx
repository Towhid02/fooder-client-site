

const Hero = () => {
    return (
        <div>
            <div
  className="bg-cover bg-center w-full min-h-screen items-center  relative  bg-bannerBg  hero"
  
  >
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white font-itim"><mark className="btn btn-ghost text-6xl text-orange-500 font-galada">Fooder</mark> <br /> Cafe & Restaurant</h1>
      <p className="mb-5 text-white font-serif text-xl ">
      We are not just hungry, We are foodie. Feed your cravings, not your wallet. Discover the world of food. Order your favorite food here. Explore your menu here.
      </p>
      <button className="btn glass  text-sm text-white font-moli font-bold mt-5"> View Menu</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;