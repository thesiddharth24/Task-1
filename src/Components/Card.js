import ProfileCard from "./ProfileCard";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Card() {
  
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const navigate = useNavigate();
  const click = ()=> {
    navigate("/add");
  }



    return (
      
       <>
           <div className="flex justify-center align-center gap-1">
           <button type="button" onClick={click} className="block my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Contact</button>
           </div>
           <div className="flex flex-row flex-wrap gap-2 max-h-full mx-4 justify-center">
             {
               contacts.map((eachContact,id)=>(
                 < ProfileCard key={id} contact={eachContact}/> 
               ))
             }
            </div>       
           
       </>   

     
    );
  }


export default Card;