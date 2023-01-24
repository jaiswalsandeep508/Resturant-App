import React, { useState } from "react";
import Menu from "./menuApi";
import NavBar from "./NavBar";
import MenuCard from "./MenuCard";
import "./style.css";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = () =>
      Menu.filter((currElem) => {
        return currElem.category === category;
      });

    setMenuData(updatedList);
  };

  return (
    <>
      <NavBar menuList={menuList} filterItem={filterItem} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
