
import { slide as Menu } from 'react-burger-menu';
import SideBarLinks from "../../components/SideLinks";
import { React, useState} from 'react';





export default props => {
 const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }
       //const btnbutton = document.querySelector(".header-subcontainer")
      // btnbutton.addEventListener("click", showSideBar)
  

    
  return (
    <Menu
    isOpen={isOpen}
    onOpen={handleIsOpen}
    onClose={handleIsOpen}
    >
    
     <SideBarLinks closeSideBar={closeSideBar} />
      
    </Menu>
  );
};