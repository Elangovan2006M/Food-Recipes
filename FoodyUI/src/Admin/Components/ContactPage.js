import React, {useState, useEffect} from 'react';
import { getAllSocialMedia, createSocialMedia, updateSocialMedia, deleteSocialMedia } from '../../Service/SocialMediaService';
import '../Styles/ContactPage.css'
import SideBar from './SideBar';

const ContactPage = () =>
{
    const[links, setLinks] = useState([]);

    const[newContact, setNewContact] = useState({
        name: '',
        url: ''
    });


    const loadLinks = async () =>
    {
        const response = await getAllSocialMedia();
        setLinks(response.data);
    }

    const handleAdd = async() => {
        try {
            const payload = {
                ...newContact,
                name: newContact.name,
                url: newContact.url
            };
            await createSocialMedia(payload);
            alert("New Social media contact link Added successfully!");
            setNewContact({
                name: '',
                url: ''
            });
            loadLinks();
        }
        catch(error)
        {
            alert('Error adding contact: ' + error.message);
        }
    };

    const handleCancel = () => {
        setNewContact({ name: '', url: '' });
    };


    const handleEdit = async (id, updateData) =>
    {
        try {
            const payload = {
                ...updateData,
                url: updateData.url
            };
            await updateSocialMedia(id, payload);
            alert("Updated Successfully!");
        }
        catch(error)
        {
            alert("Update Failed! " + error.message);
        }
    }
    const handleDelete = async (id) => {
        try {
            await deleteSocialMedia(id);
            alert("Deleted Successfully!");
            loadLinks();
        }
        catch(error)
        {
            alert("Failed to Delete: " + error.message);
        }
    };

    const handleInputChange = (e, idx, field) => {
        const updatedLinks = [...links];
        updatedLinks[idx][field] = e.target.value;
        setLinks(updatedLinks);
    };


    useEffect(() => {
        loadLinks();
    },[]);

    return (
        <div className='contact-content'>
            <SideBar/>
            <div className='table-container'>
                <h2 className='title'>Contact List</h2>
                <table className='contact-table'>
                    <thead>
                        <tr>
                            <th>Platform</th>
                            <th>URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className='new-row'>
                            <td><input value={newContact.name} placeholder='Enter Social Media Platform Name' onChange={(e) => setNewContact({...newContact, name: e.target.value})}/></td>
                            <td><input value={newContact.url} placeholder='Enter Social Media URL' onChange={(e) => setNewContact({...newContact, url: e.target.value})}/></td>
                            <td>
                                <button onClick={handleAdd} className='add-btn'>Add</button>
                                <button onClick={handleCancel} className='cancel-btn'>Cancel</button>
                            </td>
                        </tr>
                        {links.map((link, idx) => (
                            <tr key={link.id}>
                                <td><input value={link.name || ''} onChange={(e) => handleInputChange(e, idx, 'name')} /></td>
                                <td><input value={link.url || ''} onChange={(e) => handleInputChange(e, idx, 'url')} /></td>

                                <td>
                                    <button onClick={() => handleEdit(link.id, link)}>Save</button>
                                    <button onClick={() => handleDelete(link.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContactPage;