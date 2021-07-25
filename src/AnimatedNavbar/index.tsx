import { useState } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

import NavbarList from "./NavBar/NavbarList";
import ProductsDropdown from "./Dropdowns/ProductsDropdown";
import DevelopersDropdown from "./Dropdowns/DevelopersDropdown";
import CompanyDropdown from "./Dropdowns/CompanyDropdown";
import NavbarItem from "./NavBar/NavbarItem";
import DropdownContainer from "./Dropdowns/DropdownContainer";

const navbarConfig = [
  { title: "Products", dropdown: ProductsDropdown },
  { title: "Developers", dropdown: DevelopersDropdown },
  { title: "Company", dropdown: CompanyDropdown },
];

const Navbar = (props: BoxProps) => (
  <Box as="nav" w="100%" mx="auto" {...props} />
);

export default function AnimatedNavbar() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const onMouseEnter = (i: number) => {
    const isLastActive = activeIndices[activeIndices.length - 1] === i;
    if (isLastActive) return;
    setActiveIndices((cur) => [...cur, i]);
  };

  const onMouseLeave = () => {
    setActiveIndices([]);
  };

  const currentIndex = activeIndices[activeIndices.length - 1];
  // const currentIndex = 0;

  const isValidDropdownIndex = typeof currentIndex === "number";
  if (!navbarConfig) return null;
  const CurrentDropdown = isValidDropdownIndex
    ? navbarConfig[currentIndex].dropdown
    : undefined;

  return (
    <Navbar>
      <NavbarList onMouseLeave={onMouseLeave}>
        {navbarConfig.map((n, index) => {
          return (
            <NavbarItem
              key={n.title}
              title={n.title}
              onMouseEnter={() => onMouseEnter(index)}
            >
              {CurrentDropdown && index === currentIndex ? (
                <DropdownContainer>
                  <CurrentDropdown />
                </DropdownContainer>
              ) : null}
            </NavbarItem>
          );
        })}
      </NavbarList>
    </Navbar>
  );
}
