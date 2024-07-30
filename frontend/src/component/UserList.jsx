import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, [users]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
  };

  return (
    <div>
      <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
          <button
            onClick={() => navigate("/add")}
            className='button is-success my-2'>
            Add User
          </button>
          <table className='table is-striped is-fullwidth'>
            <thead>
              <tr>
                <td>No</td>
                <td>Name</td>
                <td>Email</td>
                <td>Gender</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/edit/${user.id}`)}
                      class='button mx-2 is-small is-info'>
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      class='button is-small is-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
