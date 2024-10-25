/* eslint-disable react/prop-types */
import './exploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ( {category, setCategory}) => {
    return (
        <div className=" flex flex-col gap-5 my-10">
            <h1 className=' font-bold text-4xl font-galada'>Explore Our Menu</h1>
            <p className=' font-itim text-xl '>Choose from a diverse menu featuring a delectable array of dishes.</p>
            <div className='flex justify-between items-center gap-5 text-center mx-5 '>
                {menu_list.map((item, index)=> {
                    return (
                    <div onClick={()=> setCategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index}>
                        <img className={category===item.menu_name?"circle": ""} src={item.menu_image} alt="" />
                        <p className=' font-moli text-sm'>{item.menu_name}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ExploreMenu;