import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const editUser = async (e) => {
    e.preventDefault();

    try {
      await axios.patch("http://localhost:5000/users/" + id, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    console.log("ini di render");
    const response = await axios.get(`http://localhost:5000/users/${id}`);

    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  return (
    <div>
      <div className='colums mt-5 is-centered'>
        <div className='column is-half'>
          <form action='' onSubmit={editUser}>
            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='input'
                  type='text'
                  placeholder='Name'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input'
                  type='email'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Gender</label>
              <div className='control'>
                <div className='select is-fullwidth'>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <button type='submit' className='button is-success'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
