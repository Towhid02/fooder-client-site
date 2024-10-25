import './Header.css'

const Header = () => {
    return (
        <div id='header'  className=' w-full  flex items-center py-20 px-10'>
            <div id='header-content' className="text-left flex-1 items-center gap-6 bottom-60 left-5 max-w-[60%] m-5  text-black font-moli pl-20">
        <h2 className=' font-bold lg:text-6xl md:text-3xl sm:text-xl capitalize mb-5 text-orange-200'>Order Your favourite food here</h2>
        <p className=" lg:text-3xl md:text-xl sm:text-lg mb-5">We are not just hungry, We are foodie. Feed your cravings, not your wallet. Discover the world of food. Order your favorite food here. Explore your menu here.</p>
        <button className='btn btn-accent'>View menu</button>
            </div>
            <div className=" flex-1 ">
                <img className='w-full m-auto' src="/public/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Header;