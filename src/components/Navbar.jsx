// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 shadow-md h-16 flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">

//           <h1 className="text-xl font-semibold text-indigo-400">
//             Lakshman
//           </h1>

//           {/* Desktop */}
//           <div className="hidden md:flex space-x-8 text-gray-300">
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/experience">Experience</Link>
//             <Link to="/projects">Projects</Link>
//             <Link to="/contact">Contact</Link>
//           </div>

//           {/* Mobile */}
//           <button
//             className="md:hidden text-white text-3xl"
//             onClick={() => setOpen(!open)}
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="fixed top-16 left-0 w-full bg-slate-800 z-40 flex flex-col space-y-4 px-6 py-6 text-gray-300 md:hidden">
//           <Link to="/" onClick={() => setOpen(false)}>Home</Link>
//           <Link to="/about" onClick={() => setOpen(false)}>About</Link>
//           <Link to="/experience" onClick={() => setOpen(false)}>Experience</Link>
//           <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
//           <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;



import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-md z-[1000]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

          <h1 className="text-xl font-semibold text-indigo-400">
            Lakshman
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-300">
            <Link to="/" className="hover:text-indigo-400">Home</Link>
            <Link to="/about" className="hover:text-indigo-400">About</Link>
            <Link to="/experience" className="hover:text-indigo-400">Experience</Link>
            <Link to="/projects" className="hover:text-indigo-400">Projects</Link>
            <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="fixed top-16 left-0 w-full bg-slate-800 z-[999] flex flex-col space-y-4 px-6 py-6 text-gray-300 md:hidden shadow-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;