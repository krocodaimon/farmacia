import { Link } from "react-router-dom";
import logo from "/src/imgs/logofarm.png";  

function Navbar() {
  return (
    <div className="w-full bg-indigo-300 text-white flex justify-between items-center py-4 px-8 h-20">
      <Link to="/home" className="flex items-center gap-2">
        <img
          src={logo}  
          alt="Logo Farm+"  
          className="h-36 w-16 rounded-full object-cover"  // 
        />
      </Link>
      <div className="flex gap-4">
        <Link to="/categorias" className="text-white text-lg font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-yellow-400 hover:text-white hover:scale-105">
          Categorias
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
