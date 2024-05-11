import { Link } from "react-router-dom";
function SideBar({setVariable}) {
    return (
      <>
       <div className="flex flex-col gap-5">
       <Link to="/"className="font-bold text-xl font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setVariable("Contact")}>Contact</Link>
       <Link to="/map" className="font-bold text-xl font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setVariable("Charts and Maps")}>Charts and Maps</Link>
       <div className="font-bold text-xl">SideBar</div>
       </div>

      </>
    );
  }


export default SideBar;