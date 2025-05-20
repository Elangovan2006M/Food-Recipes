import React, { useState, useEffect } from "react";
import {
  getAllSubscribers,
  searchSubscribers,
  deleteSubscriber,
  subscribeWithEmail,
} from "../../Service/SubscribeService";

import "../Styles/SubscribePage.css";
import SideBar from "./SideBar";

const PAGE_SIZE = 5;

const SubscribePage = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const loadSubscribers = async (pageNumber = 0) => {
    try {
      const res = await getAllSubscribers(pageNumber, PAGE_SIZE);
      setSubscribers(res.data.content || []);
      setTotalPages(res.data.totalPages || 1);
      setPage(pageNumber);
      setIsSearching(false);
    } catch (err) {
      alert("Error loading subscribers: " + err.message);
    }
  };

  const handleSubscribe = async () => {
    try {
      await subscribeWithEmail(newEmail);
      alert("Subscription added!");
      setNewEmail("");
      loadSubscribers(); // Refresh list
    } catch (err) {
      alert("Error subscribing: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSubscriber(id);
      alert("Subscriber deleted!");
      if (isSearching) {
        handleSearch(); // Refresh search result
      } else {
        loadSubscribers(page); // Refresh current page
      }
    } catch (err) {
      alert("Error deleting: " + err.message);
    }
  };

  const handleSearch = async (pageNumber = 0) => {
    try {
      const res = await searchSubscribers(searchTerm, pageNumber, PAGE_SIZE);
      setSubscribers(res.data.content || []);
      setTotalPages(res.data.totalPages || 1);
      setPage(pageNumber);
      setIsSearching(true);
    } catch (err) {
      alert("Search error: " + err.message);
    }
  };

  const handleCancel = () => {
    setNewEmail("");
  };

  const handlePageChange = (direction) => {
    const nextPage = direction === "next" ? page + 1 : page - 1;
    if (nextPage >= 0 && nextPage < totalPages) {
      isSearching ? handleSearch(nextPage) : loadSubscribers(nextPage);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  return (
    <div className="asset-content">
        <SideBar/>
      <div className="table-container">
        <h2 className="title">Subscribed Emails</h2>

        <div className="top-bar">
          <input
            value={searchTerm}
            placeholder="Search email..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => handleSearch()}>Search</button>
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
                <button onClick={handleSubscribe} className="add-btn">
                  Add
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                  Cancel
                </button>
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

        <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <button onClick={()=>handlePageChange("prev")} disabled={page === 0} style={{backgroundColor:"#1e2730",borderRadius:"5px",color:"white"}}>Prev</button>
        <span style={{ margin: '0 1rem' }}>Page {page + 1} of {totalPages}</span>
        <button onClick={()=>handlePageChange("next")} disabled={page + 1 >= totalPages} style={{backgroundColor:"#1e2730",borderRadius:"5px",color:"white"}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default SubscribePage;
