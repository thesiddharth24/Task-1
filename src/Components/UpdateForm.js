import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { updateContact } from './../Store/Slice';
import toast from "react-hot-toast";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


function UpdateForm() {
  const navigate = useNavigate();
  const {id} = useParams();
//   console.log(id); 
  const contacts = useSelector(state => state.contacts);
  const contact = contacts.filter((eachContact) => eachContact.id === id);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [status, setStatus] = useState(contact.status);


  useEffect(()=> {
        setFirstName(contact.firstName);
        setLastName(contact.lastName);
        setStatus(contact.status);
        console.log(firstName);
  },[contact])
  
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'status':
        setStatus(value); // Ensure status is updated correctly
        break;
      default:
        break;
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    toast.success('Successfully toasted!');
    console.log(firstName,lastName,status);
    dispatch(updateContact({ id,firstName, lastName, status }));

    
    setFirstName('');
    setLastName('');
    setStatus('active');
    navigate('/');
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        
      <form onSubmit={handleUpdate}>
        <label htmlFor="firstName" className="text-3xl">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName" className="text-3xl">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="status" className="text-3xl">Status: </label>
        <select name="status" id="status" value={status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <br />
        <div className="flex justify-center align-center gap-1">
          <button type="submit" className="block my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
