import React, { useState, useEffect } from "react";
import {
  createUser,
  deleteUser,
  getUserByEmail,
  getAllUsers,
} from "../../Service/UserService";
import SideBar from "./SideBar";
import "../Styles/SubscribePage.css"; // Reuse styles

const PAGE_SIZE = 10;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ userName: "", email: "", password: "" });
  const [searchEmail, setSearchEmail] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const loadUsers = async (pageNumber = 0) => {
    try {
      const res = await getAllUsers(pageNumber, PAGE_SIZE);
      setUsers(res.data.content || []);
      setTotalPages(res.data.totalPages || 1);
      setPage(pageNumber);
      setIsSearching(false);
    } catch (err) {
      alert("Error loading users: " + err.message);
    }
  };

  const handleCreate = async () => {
    try {
      await createUser(newUser);
      alert("User created!");
      setNewUser({ userName: "", email: "", password: "" });
      loadUsers();
    } catch (err) {
      alert("Error creating user: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      alert("User deleted!");
      isSearching ? handleSearch() : loadUsers(page);
    } catch (err) {
      alert("Error deleting user: " + err.message);
    }
  };

  const handleSearch = async () => {
    if (!searchEmail.trim()){
        loadUsers(0);
    }
    try {
      const res = await getUserByEmail(searchEmail.trim());
      setUsers([res.data]);
      setTotalPages(1);
      setPage(0);
      setIsSearching(true);
    } catch (err) {
      alert("No user found: " + err.message);
      setUsers([]);
    }
  };

  const handleCancel = () => {
    setNewUser({ userName: "", email: "", password: "" });
  };

  const handlePageChange = (direction) => {
    const nextPage = direction === "next" ? page + 1 : page - 1;
    if (nextPage >= 0 && nextPage < totalPages) {
      isSearching ? handleSearch() : loadUsers(nextPage);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="asset-content">
      <SideBar />
      <div className="table-container">
        <h2 className="title">User Management</h2>

        <div className="top-bar">
          <input
            value={searchEmail}
            placeholder="Search by email..."
            onChange={(e) => setSearchEmail(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <table className="asset-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="new-row">
              <td>
                <input
                  placeholder="Username"
                  value={newUser.userName}
                  onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder="Password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
              </td>
              <td></td>
              <td>
                <button onClick={handleCreate} className="add-btn">Add</button>
                <button onClick={handleCancel} className="cancel-btn">Cancel</button>
              </td>
            </tr>

            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: '1rem' }}>
          <button
            onClick={() => handlePageChange("prev")}
            disabled={page === 0}
            style={{ backgroundColor: "#1e2730", borderRadius: "5px", color: "white" }}
          >
            Prev
          </button>
          <span style={{ margin: '0 1rem' }}>
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={page + 1 >= totalPages}
            style={{ backgroundColor: "#1e2730", borderRadius: "5px", color: "white" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
