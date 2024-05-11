import { useEffect, useState } from 'react';

function Header(props) {
  const {path,setVariable}=props;
  const temp = path;
  
  
  useEffect(()=>{
    if(temp.includes("map")){
      setVariable("MAP");
    }else if(temp.includes("update")){
      setVariable("Update Contact");
    }else if(temp.includes("add")){
      setVariable("Add Contact");
    }else{
      setVariable("Contacts");
    }
  },[setVariable,temp])
  
    return (
      // console.log(window.location.href);
      <>
       <div className="flex flex-row flex-wrap justify-center align-middle text-white font-bold h-12">
         <h1 className="my-8 font text-2xl">{props.variable}</h1>
       </div>

      </>
    );
  }


export default Header;