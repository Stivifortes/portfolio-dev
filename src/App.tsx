import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";


function navigateToNavbarItem(itemRef: any) {  
  const extraOffset = 150;
  const topOfElement = itemRef.current.offsetTop - extraOffset;
  window.scroll({
    top: topOfElement,
    behavior: "smooth",
  });
}

export enum Location {
  CONTACT="contact",
  ABOUT="about"
}
function App() {

  const [aboutReference,setAboutReference] = useState()
  const [contactReference,setContactReference] = useState()
  const [showScrollTop, setShowScrollTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setShowScrollTop(true)
      }else{
        setShowScrollTop(false)
      }
    })
  }, [])

  function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  }
  
  function getRef(ref: any, location: Location = Location.ABOUT) {
   if(location === Location.ABOUT){
    setAboutReference(ref)
   }else{
    setContactReference(ref)
   }
  }
  
  return (
    <>
      <div className="bg-white-bg dark:bg-stone-900 dark:text-stone-300 text-stone-900 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
            <Header/>
            <Intro executeScroll={() => navigateToNavbarItem(aboutReference)}/>
            <About onRefChange={getRef} executeScroll={() =>  navigateToNavbarItem(contactReference)}/>
            <Timeline />
            <Portfolio/>
            <Contact onRefChange={getRef}/>
            <Footer/>
            {
              showScrollTop ? <button id="scroll-btn" onClick={scrollToTop} 
              className="bg-slate-500 p-2 rounded-xl fixed bottom-10 right-10 text-white">
                <ArrowUpCircleIcon width={30}/>
              </button> : null
            }
            <ToastContainer/>
        </div>
    </div>
    </>
  )
}

export default App
