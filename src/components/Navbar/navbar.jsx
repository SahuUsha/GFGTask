// import React from 'react'
// import gfglogo from '../../assets/gfglogo.png'
// // import image from './src/assets/image.png'
// // import {Link} from 'react-router-dom'
// import  {NavLink , Link} from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <nav className='border-2 border-red-600'>
//         <div>
//             <img src={gfglogo} className='h-[2rem]'  alt="" />
//         </div>
//         <div>
//           <ul>
//               <li>
//                 <Link to="/">Home</Link>
//              </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import gfglogo from '../../assets/gfglogo.png';
import { NavLink, Link } from 'react-router-dom';
import Developers from '../../pages/Developers';
import Open from '../../pages/Open';

const Navbar = () => {
  return (
    <div className='px-[5rem] lg:pr-[12rem] lg:pl-[12rem]  pt-11 font-inter '>
      <nav className=" flex flex-col  lg:flex-row justify-between">
        <div className='flex items-center justify-center'>
          <Link to="/">
          <img src={gfglogo} className="h-[2.2rem] " alt="GFG Logo" />
          </Link>
        </div>
        <div className=''> 
          <ul className='flex flex-row lg:text-[1.3rem] sd:text-[1rem] md:text-[1.3rem] justify-center font-semibold flex-wrap gap-6 lg:gap-14' >
              {/* Add the 'to' prop to the Link component */}
              <Link to="/Products">Products</Link>
              <Link to="/Resources">Resources</Link>
              <Link to="/Developers">Developers</Link>
             <Open/>
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
