import './Header.css'



const Header = () => (
    <div id='header' className='  hero min-h-svh bg-bannerBg bg-cover'>
         <div className="hero-overlay  bg-opacity-50"></div>
        <div className=' hero-content flex lg:flex-row flex-col items-center justify-center p-5 lg:max-w-7xl mx-auto relative'>
            <div className='lg:w-1/2 lg:space-y-6 lg:px-10 relative z-20'>
                {/* <div className='flex gap-0 lg:gap-2'>
            <img src="/public/assets/playstore.png" alt="playstore" className='w-28 h-10' />
            <img src="/public/assets/appstore.png" alt="appstore" className='w-28 h-10' />
        </div> */}
                <div className='z-10'>

                </div>
                <h1 className='font-bold lg:text-5xl md:text-3xl sm:text-xl capitalize m-5 text-orange-200 font-galada'>

                    <span className='text-red-400'>Delicious</span>  Meals Delivered to Your Doorsteps.</h1>
                <p className=" lg:text-2xl md:text-xl sm:text-lg m-5 text-white font-bold">We are not just hungry, We are foodie. Feed your cravings, not your wallet. Discover the world of food. Order your favorite food here. Explore your menu here.</p>
                {/* <div className='flex gap-3'>
                    <button className='bg-red-500 px-3 py-2 z-20 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all'>Order Now</button>
                    <button className='bg-white px-3 py-2 rounded-lg border z-20 border-red-500 text-red-500 hover:bg-white hover:scale-110 transition-all'>Contact Now</button>
                </div> */}

            </div>
            <div className='  relative'>
                <img src="/public/assets/pizza.webp" alt="food" className=' mx-auto spin w-96 ' />
                <div
                    // variant="outline" 
                    className='bg-red-50 gap-1 text-lg flex border-red-200 border  items-center absolute bottom-16  lg:right-14 px-4 py-2 rounded-full'>
                    <img src="/public/assets/time.png" alt='time' className='lg:w-12 lg:h-12 w-6' />
                    <p className='leading-4 text-sm font-semibold'>Super Fast<br /> Delivery</p>
                </div>
                <img src="/public/assets/tomatocut.png" alt="tomato" className='absolute hidden lg:block lg:bottom-20 lg:left-4 lg:w-32 w-20' />
                <div
                    // variant="outline"
                    className='bg-red-50 leading-none flex flex-col gap-1 text-lg px-4 py-2 border-red-200 border  absolute top-10 right-36 rounded-full items-center'>
                    <p className='leading-4 text-sm font-semibold '>Good Rating</p>
                    <div className='flex '>
                        <img src="/public/assets/star.png" width={15} height={15} alt='star' />
                        <img src="/public/assets/star.png" width={15} height={15} alt='star' />
                        <img src="/public/assets/star.png" width={15} height={15} alt='star' />
                        <img src="/public/assets/star.png" width={15} height={15} alt='star' />
                        <img src="/public/assets/star-outline.png" width={15} height={15} alt='star' />

                    </div>
                </div>
                <div
                    // variant="outline" 
                    className=' flex flex-col bg-red-50 border-red-200 border  px-6 py-2 absolute top-64 left-64 lg:top-16 lg:left-24  rounded-full items-center'>
                    {/* <Image src={'/restaurant.png'} width={28} height={25} /> */}
                    <h1 className=' text-red-500 lg:text-xl md:text-lg font-bold'>100+ </h1>
                    <p className=' text-sm font-semibold'>Restaurants </p>
                </div>
            </div>
            {/* <img src={tomato} alt="tomato" className='absolute top-1 left-0 w-20 ' /> */}
            {/* <img src={tomato} alt="tomato" className='absolute top-1 left-20 w-20 ' />
    <img src={tomato} alt="tomato" className='absolute top-1 left-30 w-20 ' />
    <img src={tomato} alt="tomato" className='absolute top-1 left-40 w-20 ' /> */}
            {/* <img src="/public/assets/cabbage.png" alt="cabbage" className='absolute top-72 lg:top-[410px] left-5 z-10 lg:w-44 w-20' /> */}
        </div>
    </div>
);

export default Header;