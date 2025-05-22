import React, {useState, useEffect} from "react";
import { getAllLogos, createLogo, updateLogo, deleteLogo } from "../../Service/LogoService";

import '../Styles/AssetsPage.css';
import SideBar from "./SideBar";

const AssetsPage = () => {
    const [assets, setAssets] = useState([]);
    const [newAsset, setNewAsset] = useState({
        imageName: '',
        imageUrl: ''
    });

    const loadAssets = async () =>
    {
        const response = await getAllLogos();
        setAssets(response.data);
    }

    const handleAdd = async() => {
        try {
            const payload = {
                imageName: newAsset.imageName,
                imageUrl: newAsset.imageUrl
            };
            await createLogo(payload);
            alert("New Logo Added successfully!");
            setNewAsset({
                imageName: '',
                imageUrl: ''
            });
            loadAssets();
        }
        catch(error)
        {
            alert('Error adding Logo: ' + error.response.data.message);
        }
    };

    const handleCancel = () => {
        setNewAsset({ imageName: '', imageUrl: '' });
    };


    const handleEdit = async (id, updateData) =>
    {
        try {
            const payload = {
                ...updateData,
                imageUrl: updateData.imageUrl
            };
            await updateLogo(id, payload);
            alert("Updated Successfully!");
        }
        catch(error)
        {
            alert("Update Failed! " + error.message);
        }
    }
    const handleDelete = async (id) => {
        try {
            await deleteLogo(id);
            alert("Deleted Successfully!");
            loadAssets();
        }
        catch(error)
        {
            alert("Failed to Delete: " + error.message);
        }
    };

    const handleInputChange = (e, idx, field) => {
        const updateLogo = [...assets];
        updateLogo[idx][field] = e.target.value;
        setAssets(updateLogo);
    };


    useEffect(() => {
        const token = localStorage.getItem('isLoggedIn');
        if(!token) return;
        loadAssets();
    },[]);

    return (
        <div className='asset-content'>
            <SideBar/>
            <div className='table-container'>
                <h2 className='title'>Assets List</h2>
                <table className='asset-table'>
                    <thead>
                        <tr>
                            <th>Image Name</th>
                            <th>URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className='new-row'>
                            <td><input value={newAsset.imageName} placeholder='Enter Logo Name' onChange={(e) => setNewAsset({...newAsset, imageName: e.target.value})}/></td>
                            <td><input value={newAsset.imageUrl} placeholder='Enter Logo URL' onChange={(e) => setNewAsset({...newAsset, imageUrl: e.target.value})}/></td>
                            <td>
                                <button onClick={handleAdd} className='add-btn'>Add</button>
                                <button onClick={handleCancel} className='cancel-btn'>Cancel</button>
                            </td>
                        </tr>
                        {assets.map((asset, idx) => (
                            <tr key={asset.id}>
                                <td><input value={asset.imageName || ''} onChange={(e) => handleInputChange(e, idx, 'imageName')} /></td>
                                <td><input value={asset.imageUrl || ''} onChange={(e) => handleInputChange(e, idx, 'imageUrl')} /></td>

                                <td>
                                    <button onClick={() => handleEdit(asset.id, asset)}>Save</button>
                                    <button onClick={() => handleDelete(asset.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AssetsPage;