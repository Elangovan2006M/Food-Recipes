import React, {useState, useEffect} from 'react';
import { getAllAdmins } from '../Service/AdminService';
import { getBlogCount } from '../Service/AdminBlogService';
import { getSubscriberCount } from '../Service/AdminSubscriberService';
import { getAllRecipes } from '../../Service/RecipeService';

import '../Styles/DashBoard.css';
import SideBar from './SideBar';

const Dashboard = () => {

    const[adminCount, setAdminCount] = useState(0);
    const[recipeCount, setRecipeCount] = useState(0);
    const[blogCount, setBlogCount] = useState(0);
    const[subscriberCount, setSubscriberCount] = useState(0);


    const [ admins, setAdmins ] = useState([]);
    const [ recipes, setRecipes ] = useState([]);

    useEffect(() => {
        getAllAdmins().then(response => {
            setAdmins(response.data || []);
            setAdminCount((response.data && response.data.length) || 0);

        }).catch(console.error);

        getAllRecipes().then(response => {
            setRecipes(response.data.content || []);
            setRecipeCount(response.data.totalElements || 0);
        }).catch(console.error);


        getBlogCount().then(response => {
            setBlogCount(response.data);
        }).catch(console.error);

        getSubscriberCount().then(response => {
            setSubscriberCount(response.data);
        }).catch(console.error);
    }, []);

    return (
        <div className='dashboard-container'>
            <SideBar/>
            <h2 className='dashboard-title'>Welcome to Plate<span className='highlight-style'>Stream's</span> Admin Dashboard</h2>
            <div className='dashboard-counts'>
                <div className='count-box'>
                    <h3 className='count-box-title'>
                        Admins
                        {/* admin-icon */}
                    </h3>
                        <p className='count-number'>{adminCount}</p>
                </div>
                <div className='count-box'>
                    <h3 className='count-box-title'>
                        Recipes
                        {/* recipe-icon */}
                    </h3>
                        <p className='count-number'>{recipeCount}</p>

                </div>
                <div className='count-box'>
                    <h3 className='count-box-title'>
                        Blogs
                        {/* blog-icon */}
                    </h3>
                        <p className='count-number'>{blogCount}</p>
                </div>

                <div className='count-box'>
                    <h3 className='count-box-title'>
                        Subscribers
                        {/* subscriber-icon */}
                    </h3>
                        <p className='count-number'>{subscriberCount}</p>

                </div>

                <div className='fill-box'>
                    <p>Note: System maintenance scheduled for 10 PM tonight.</p>
                </div>
            </div>
            <div className='dashboard-listing'>
                <div className='admin-listing'>
                    <h3 className='admin-listing-title'>Admins List</h3>
                    {/* displaying admins name with this container scrolling */}
                    <div className='scroll-list'>
                        {admins.length > 0 ? (
                            admins.map(admin => (
                                <p key={admin.id}>{admin.email}</p>
                            ))
                        ) : (
                            <p>No admins found.</p>
                        )}
                    </div>
                </div>
                <div className='top-recipes-listing'>
                    <h3 className='admin-listing-title'>Recipes List</h3>
                    {/* displaying top recipes name with this container scrolling */}
                    <div className='scroll-list'>
                        {recipes.length > 0 ? (
                            recipes.map(recipe => (
                                <p key={recipe.id}>{recipe.foodName}</p>
                            ))
                        ) : (
                            <p>No recipes found.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;