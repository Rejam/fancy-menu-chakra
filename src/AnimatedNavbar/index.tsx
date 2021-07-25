import { useState } from "react";
import { Flipper } from "react-flip-toolkit";
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
  const lastActive = activeIndices[activeIndices.length - 1];

  const onMouseEnter = (newIndex: number) => {
    const isSameLastActive = lastActive === newIndex;
    if (isSameLastActive) return;
    setActiveIndices((cur) => [...cur, newIndex]);
  };

  const onMouseLeave = () => setActiveIndices([]);

  if (!navbarConfig) return null;

  return (
    <Flipper flipKey={lastActive}>
      <Navbar>
        <NavbarList onMouseLeave={onMouseLeave}>
          {navbarConfig.map((n, index) => {
            const isActive = lastActive === index;
            const Dropdown = n.dropdown;
            return (
              <NavbarItem
                key={n.title}
                title={n.title}
                onMouseEnter={() => onMouseEnter(index)}
                zIndex={999 - index}
                indicator={
                  isActive ? (
                    // <Box
                    //   w="calc(100% - 3rem)"
                    //   mx="auto"
                    //   minW="50px"
                    //   h="200%"
                    //   bg="white"
                    // />
                    <Box
                      w="100%"
                      pt="100%"
                      bg="rgba(0,0,0, 0.2)"
                      borderRadius="16px"
                      transform="translateY(-25%) skewX(-10deg)"
                    />
                  ) : null
                }
              >
                {isActive ? (
                  <DropdownContainer>
                    <Dropdown />
                  </DropdownContainer>
                ) : null}
              </NavbarItem>
            );
          })}
        </NavbarList>
      </Navbar>
    </Flipper>
  );
}
