
import {useDispatch} from 'react-redux';
import { removeContact } from "./../Store/Slice";
import { useNavigate} from 'react-router-dom';


function ProfileCard(props) {
  const navigate = useNavigate();
 
  const dispatch = useDispatch();


  const {contact} = props;
  const {id,firstName,lastName,status} = contact;
 
  const Delete = () => {
    dispatch(removeContact(id));
  }

  const update = ()=> {
    navigate("/update/"+id);
  }


    return (
      <>
       <div className="first max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-400 dark:border-gray-400">
               <h3>Name:{firstName}</h3>
               <h3>Last: {lastName}</h3>
               <h3>Status:{status}</h3>
               <button type="button" onClick={update} className="inline my-2 text-white bg-green-700 hover:bg-green-700  focus:ring-4 focus:bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:bg-green-700  dark:hover:bg-green-700  focus:outline-none dark:focus:ring-blue-800">Edit</button>
               <button type="button" onClick={Delete} className="my-2 text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:bg-red-700 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
       </div>  

      </>
    );
  }


export default ProfileCard;