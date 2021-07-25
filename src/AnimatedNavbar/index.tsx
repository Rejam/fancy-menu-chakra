import { useState } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

import NavbarList from "./NavBar/NavbarList";
import ProductsDropdown from "./Dropdowns/ProductsDropdown";
import DevelopersDropdown from "./Dropdowns/DevelopersDropdown";
import CompanyDropdown from "./Dropdowns/CompanyDropdown";
import NavbarItem from "./NavBar/NavbarItem";
import { useColors } from "../utils/useColors";

const navbarConfig = [
  { title: "Products", dropdown: ProductsDropdown, color: "red.500" },
  { title: "Developers", dropdown: DevelopersDropdown, color: "#0f0" },
  { title: "Company", dropdown: CompanyDropdown, color: "#00f" },
];

const Navbar = (props: BoxProps) => (
  <Box as="nav" w="100%" mx="auto" {...props} />
);

export default function AnimatedNavbar() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const lastActive = activeIndices[activeIndices.length - 1];
  const colors = useColors(["green.800", "blue.800", "purple.800"]);

  const onMouseEnter = (newIndex: number) => {
    const isSameLastActive = lastActive === newIndex;
    if (isSameLastActive) return;
    setActiveIndices((cur) => [...cur, newIndex]);
  };

  const onMouseLeave = () => setActiveIndices([]);

  if (!navbarConfig) return null;

  return (
    <Navbar>
      <NavbarList onMouseLeave={onMouseLeave}>
        {navbarConfig.map((n, index: number) => {
          const isActive = lastActive === index;
          const Dropdown = n.dropdown;
          return (
            <NavbarItem
              key={n.title}
              title={n.title}
              onMouseEnter={() => onMouseEnter(index)}
              isActive={isActive}
              indicatorColor={colors[index]}
            >
              <Dropdown />
            </NavbarItem>
          );
        })}
      </NavbarList>
    </Navbar>
  );
}
