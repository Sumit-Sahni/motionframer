import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from "../assests/Logo2.jpg";
import { motion } from "framer-motion";
import { db } from "../firebase";

const NavbarComp = () => {
    const [nav, setNav] = useState(true);
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const [visitorCount, setVisitorCount] = useState(0);

    const handleNavbar = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            } else {
                setIsTopOfPage(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // TOTAL VISITORS LOGIC
    useEffect(() => {
      const fetchVisitorCount = async () => {
          try {
              const hasVisited = localStorage.getItem('hasVisited');
              const docRef = db.collection('visitors').doc('count');
              const doc = await docRef.get();
              
              if (doc.exists) {
                  const currentCount = doc.data().count;
                  setVisitorCount(currentCount);

                  if (!hasVisited) {
                      await docRef.update({ count: currentCount + 1 });
                      localStorage.setItem('hasVisited', 'true');
                      setVisitorCount(currentCount + 1);
                      console.log(`Visitor count updated to ${currentCount + 1}`);
                  }
              } else {
                  if (!hasVisited) {
                      await docRef.set({ count: 1 });
                      localStorage.setItem('hasVisited', 'true');
                      setVisitorCount(1);
                      console.log('Visitor count initialized to 1');
                  }
              }
          } catch (error) {
              console.error("Error fetching/updating visitor count: ", error);
          }
      };

      fetchVisitorCount();
  }, []);

    const navbarBackground = isTopOfPage ? "" : " bg-[#0e1423] shadow-xl transition duration-500 delay-200";

    return (
        <div className={`${navbarBackground} w-full h-[80px] z-10 fixed bg-[#0a192f] text-white`}>
            <div className='px-12 flex justify-between items-center w-full h-full'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className='flex items-center'>
                    <Link to="/"><img src={Logo} alt='logo' width={40} /></Link>
                </motion.div>
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='hidden md:flex items-center text-xl font-light mx-4'>
                    <h1 className='text-blue font-bold'><a href="https://feeff6b9.evogym-bfv.pages.dev/" target="_blank" rel="noopener noreferrer" className='text-sm'>React Js</a></h1>
                    <Link className="mx-8 text-sm" to='/Ui'>Ui</Link>
                    <Link className="mx-8 text-sm">
                    <p>Total Visitors - {visitorCount}</p>
                    </Link>
                    <button className="mx-4 hover:bg-gray-900 hover:border-dotted border-spacing-1 font-semibold text-[#64ffda] py-2 px-2 border-2 border-[#64ffda] rounded">
                        <Link to="https://drive.google.com/file/d/1GoT5y92ZlqxENP_eZqJOIiGVg3k6J78N/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='text-red-600 font-semibold'>resume</Link>
                    </button>
                </motion.ul>
                <div className='md:hidden' onClick={handleNavbar}>
                    {!nav ? <AiOutlineClose size={30} className="cursor-pointer" /> : <AiOutlineMenu size={30} className="cursor-pointer" />}
                </div>
            </div>

            <ul className={nav ? "hidden" : `absolute bg-[#0a192f] text-white w-full h-[800vh] px-8 md:hidden text-3xl`}>
                <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <Link to="/Ui" className='cursor-pointer'>UI</Link>
                </li>
                <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <button className="hover:bg-gray-900 hover:border-dotted border-spacing-1 font-semibold text-[#ffffff] rounded">
                        <Link to="https://drive.google.com/file/d/1GoT5y92ZlqxENP_eZqJOIiGVg3k6J78N/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='text-red-600 font-semibold'>resume</Link>
                    </button>
                </li>
                <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <h1><a href="https://e22929cd.typescript-f18.pages.dev/" target="_blank" rel="noopener noreferrer">React Js</a></h1>
                </li>
                <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                  <p>Total Visitors - {visitorCount}</p>
                </li>
            </ul>
        </div>
    );
}

export default NavbarComp;
