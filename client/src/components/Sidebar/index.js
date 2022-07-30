import { slide as Menu } from 'react-burger-menu';
import SideBarLinks from "../../components/SideLinks";
import { React, useState } from 'react';

const Sidebar = props => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

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

export default Sidebar;