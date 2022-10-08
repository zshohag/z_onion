import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import FoodItem from './FoodItem';

const Foods = () => {

    const [foods]  = useFetch()
    const [menuTab,setMenuTab] = useState('Breakfast')

    const handelMenuTab = (type) => {
        setMenuTab(type)
    }



    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6" >
            {/* MENU TAB */}
            <div className='flex items-center justify-center space-x-6 ' >
                <p className={ menuTab === 'Breakfast' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins" } onClick={() => handelMenuTab('Breakfast')} >Breakfast</p>
                <p className={ menuTab === 'Lunch' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins" } onClick={() => handelMenuTab('Lunch')} >Lunch</p>
                <p className={ menuTab === 'Dinner' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handelMenuTab('Dinner')} >Dinner</p>

            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12" >
                    {
                        foods.filter( (item) => menuTab === item.type ).map(item => <FoodItem key={item.id} {...item} />)
                    }
                </div>




        </section>
    );
};

export default Foods;