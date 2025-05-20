import React, { useState, useEffect } from "react";
import { getAllSubscribers, searchSubscribers, deleteSubscriber, subscribeWithEmail } from "../../Service/SubscribeService";

import "../Styles/SubscribePage.css";

const SubscribePage = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [newEmail, setNewEmail] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const loadSubscribers = async () => {
    try {
        const res = await getAllSubscribers();
        setSubscribers(res.data.content || []);
    } catch (err) {
        alert("Error loading subscribers: " + err.message);
    }
    };

    const handleSubscribe = async () => {
    try {
        await subscribeWithEmail(newEmail);
        alert("Subscription added!");
        setNewEmail("");
        loadSubscribers();
    } catch (err) {
        alert("Error subscribing: " + err.message);
    }
    };

    const handleDelete = async (id) => {
    try {
        await deleteSubscriber(id);
        alert("Subscriber deleted!");
        loadSubscribers();
    } catch (err) {
        alert("Error deleting: " + err.message);
    }
    };

    const handleSearch = async () => {
    try {
        const res = await searchSubscribers(searchTerm);
        setSubscribers(res.data.content || []);
    } catch (err) {
        alert("Search error: " + err.message);
    }
    };

    const handleCancel = () => {
    setNewEmail("");
    };

    useEffect(() => {
    loadSubscribers();
    }, []);

    return (
    <div className="asset-content">
        <div className="table-container">
        <h2 className="title">Subscribed Emails</h2>

        <div className="top-bar">
            <input
            value={searchTerm}
            placeholder="Search email..."
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>

        <table className="asset-table">
            <thead>
            <tr>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody>
            <tr className="new-row">
                <td>
                <input
                    value={newEmail}
                    placeholder="Enter email to subscribe"
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                </td>
                <td>
                <button onClick={handleSubscribe} className="add-btn">Add</button>
                <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                </td>
            </tr>

            {subscribers.map((subscriber) => (
                <tr key={subscriber.id}>
                <td>{subscriber.email}</td>
                <td>
                    <button onClick={() => handleDelete(subscriber.id)}>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default SubscribePage;
