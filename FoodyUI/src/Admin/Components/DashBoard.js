import React, { useState, useEffect } from 'react';
import { getAllAdmins } from '../Service/AdminService';
import { getBlogCount } from '../../Service/BlogService';
import { getSubscriberCount } from '../../Service/SubscribeService';
import { getAllRecipes } from '../../Service/RecipeService';

import '../Styles/DashBoard.css';
import SideBar from './SideBar';

const Dashboard = () => {
    const [adminCount, setAdminCount] = useState(0);
    const [recipeCount, setRecipeCount] = useState(0);
    const [blogCount, setBlogCount] = useState(0);
    const [subscriberCount, setSubscriberCount] = useState(0);

    const [admins, setAdmins] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getAllAdmins().then(response => {
            setAdmins(response.data || []);
            setAdminCount((response.data && response.data.length) || 0);
        }).catch(console.error);

        loadRecipes(0);

        getBlogCount().then(response => {
            setBlogCount(response.data);
        }).catch(console.error);

        getSubscriberCount().then(response => {
            setSubscriberCount(response.data);
        }).catch(console.error);
    }, []);

    const loadRecipes = (page) => {
        getAllRecipes(page).then(response => {
            const newRecipes = response.data.content || [];
            // setRecipes(prev => [...prev, ...newRecipes]);
            setRecipes(prev => {
            if (page === 0) return newRecipes; // Fresh load
            const existingIds = new Set(prev.map(r => r.id));
            const filteredNew = newRecipes.filter(r => !existingIds.has(r.id));
            return [...prev, ...filteredNew];
        });
            setRecipeCount(response.data.totalElements || 0);
            setTotalPages(response.data.totalPages || 1);
            setCurrentPage(response.data.number); // current page from backend
        }).catch(console.error);
    };

    const handleLoadMore = () => {
        if (currentPage + 1 < totalPages) {
            loadRecipes(currentPage + 1);
        }
    };

    return (
        <div className='dashboard-container'>
            <SideBar />
            <h2 className='dashboard-title'>
                Welcome to Plate<span className='highlight-style'>Stream's</span> Admin Dashboard
            </h2>

            {/* Count Boxes */}
            <div className='dashboard-counts'>
                <div className='count-box'><h3 className='count-box-title'>Admins</h3><p className='count-number'>{adminCount}</p></div>
                <div className='count-box'><h3 className='count-box-title'>Recipes</h3><p className='count-number'>{recipeCount}</p></div>
                <div className='count-box'><h3 className='count-box-title'>Blogs</h3><p className='count-number'>{blogCount}</p></div>
                <div className='count-box'><h3 className='count-box-title'>Subscribers</h3><p className='count-number'>{subscriberCount}</p></div>
                <div className='fill-box'><p>Note: System maintenance scheduled for 10 PM tonight.</p></div>
            </div>

            {/* Admin & Recipe Listings */}
            <div className='dashboard-listing'>
                <div className='admin-listing'>
                    <h3 className='admin-listing-title'>Admins List</h3>
                    <div className='scroll-list'>
                        {admins.length > 0 ? (
                            admins.map(admin => <p key={admin.id}>{admin.email}</p>)
                        ) : <p>No admins found.</p>}
                    </div>
                </div>

                <div className='top-recipes-listing'>
                    <h3 className='admin-listing-title'>Recipes List</h3>
                    <div className='scroll-list'>
                        {recipes.length > 0 ? (
                            recipes.map(recipe => <p key={recipe.id}>{recipe.foodName}</p>)
                        ) : <p>No recipes found.</p>}
                    </div>

                    {currentPage + 1 < totalPages && (
                        <button className='loadmore-btn' onClick={handleLoadMore}>
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
