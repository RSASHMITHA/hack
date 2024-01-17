import React, { useState, useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from './UserContext';
import './URegister.css';
const URegister = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null);
  const [signupDetails, setSignupDetails] = useState({ 
    dob:"",
    age: "",
    aadhar: "",
    acc: "",
    gender: "",
    mobile: "",
    occup: "",
    email: "",
    password: "",
    nationality: "",
    state: "",
    address: "",
    username: "",
   });
   
   const { setUser } = useContext(UserContext); 

  const checkUserExists = async (name) => {
      const response = await axios.get('https://65a770fd94c2c5762da6a8fc.mockapi.io/reg');
      return response.data.some(user => user.username === name);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      console.log('User already exists. Redirecting to login...');
      navigate('/ulogin');
      return;
    }

    if (confirm !== signupDetails.password){
      alert('Password and Confirm Password are not same...')
      return;
    }

    axios.post('https://65a770fd94c2c5762da6a8fc.mockapi.io/reg', signupDetails)
      .then(response => {
        console.log('Signup successful:', response.data);
        setUser(response.data);
        navigate('/sidebar');
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    // alert(e.target.name);
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div className='whole'>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
    <div >
      <form onSubmit={handleSignup}>
      <br></br>
      <h2 className='m'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REGISTER</h2>

        <table>
          <tbody>
          <tr>
          <td><b>NAME :</b></td>
          <td>
            <input
              type="text"
              name="username"
              value={signupDetails.username}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
        <td><b>DOB :</b></td>
          <td>
            <input
              type="date"
              name="dob"
              value={signupDetails.dob}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>

        <tr>
        <td><b>AGE :</b></td>
          <td>
            <input
              type="text"
              name="age"
              value={signupDetails.age}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>AADHAR NUMBER :</b></td>
          <td>
            <input
              type="tel"
              name="aadhar"
              value={signupDetails.aadhar}
              onChange={handleInputChange}
              pattern="[0-9]{12}"
              required
            />
          </td>
        </tr>

        <tr>
          <td><b>Account NUMBER :</b></td>
          <td>
            <input
              type="tel"
              name="acc"
              value={signupDetails.acc}
              onChange={handleInputChange}
              pattern="[0-9]{17}"
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>GENDER :</b></td>
          <td>
              <select name="gender" onChange={handleInputChange}>
                <option></option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
          </td>
        </tr>


        <tr>
          <td><b>MOBILE NUMBER :</b></td>
          <td>
            <input
              type="tel"
              name="mobile"
              value={signupDetails.mobile}
              onChange={handleInputChange}
              pattern="[0-9]{10}"
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>OCCUPATION :</b></td>
          <td>
            <input
                type="text"
                name="occup"
              value={signupDetails.occup}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>


        <tr>
          <td><b>EMAIL :</b></td>
          <td>
            <input
              type="email"
              name="email"
              value={signupDetails.email}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>PASSWORD :</b></td>
          <td>
            <input
              type="password"
              name="password"
              value={signupDetails.password}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>


        <tr>
          <td><b>CONFIRM PASSWORD :</b></td>
          <td>
            <input
              type="password"
              name="confirmPassword"
              value={confirm}
              onChange={handleConfirmPassword}
              required
            />
          </td>
        </tr>
             
        
        <tr>
          <td><b>NATIONALITY :</b></td>
          <td>
            <input
                type="text"
                name="nationality"
              value={signupDetails.nationality}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>

        <tr>
          <td><b>STATE :</b></td>
          <td>
            <input
                type="text"
                name="state"
              value={signupDetails.state}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>


        <tr>
          <td><b>ADDRESS :</b></td>
          <td>
            <input
                type="text"
                name="address"
              value={signupDetails.address}
              onChange={handleInputChange}
                required
            />
          </td>
        </tr>


        <tr>
            <td colSpan="2" style={{ textAlign: 'center' }}>
              <button type="submit">Register</button>
            </td>
        </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
    </div>
  );
};

export default URegister;
