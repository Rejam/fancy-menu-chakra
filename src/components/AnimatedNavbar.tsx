import { useState } from "react";

import Navbar from "./Navbar";
import ProductsDropdown from "./ProductsDropdown";
import DevelopersDropdown from "./DevelopersDropdown";
import CompanyDropdown from "./CompanyDropdown";
import NavbarItem from "./NavbarItem";
import DropdownContainer from "./DropdownContainer";
import CurrentDropdown from "./CurrentDropdown";

const navbarConfig = [
  { title: "Products", dropdown: ProductsDropdown },
  { title: "Developers", dropdown: DevelopersDropdown },
  { title: "Company", dropdown: CompanyDropdown }
];

export default function AnimatedNavbar() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const onMouseEnter = (i: number) => {
    const isLastActive = activeIndices[activeIndices.length - 1] === i;
    if (isLastActive) return;
    setActiveIndices((cur) => [...cur, i]);
  };

  const onMouseExit = () => {
    setActiveIndices([]);
  };

  let CurrentDropdown: any;
  const currentIndex = activeIndices[activeIndices.length - 1];

  if (typeof currentIndex === "number")
    CurrentDropdown = navbarConfig[currentIndex].dropdown;

  return (
    <Navbar onMouseExit={onMouseExit}>
      {navbarConfig.map((n, index) => {
        return (
          <NavbarItem
            bg="blue.700"
            title={n.title}
            index={index}
            onMouseEnter={onMouseEnter}
          >
            {currentIndex === index && (
              <DropdownContainer>
                <CurrentDropdown />
              </DropdownContainer>
            )}
          </NavbarItem>
        );
      })}
    </Navbar>
  );
}
