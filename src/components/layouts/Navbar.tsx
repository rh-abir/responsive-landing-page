import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className=" h-16 fixed w-full bg-white z-10"
    >
      <nav className="w-full h-full max-w-[1230px] mx-auto flex justify-between items-center px-[20px]">
        <span className="text-3xl">IRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
