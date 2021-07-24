import { Box } from "@chakra-ui/react";

import NavbarList from "./NavbarList";

const Nav = (props: any) => <Box as="nav" w="100%" {...props} />;
interface NavbarProps {
  children: any;
  onMouseExit: any;
}
export default function Navbar(props: NavbarProps) {
  return (
    <Nav>
      <NavbarList onMouseExit={props.onMouseExit}>{props.children}</NavbarList>
    </Nav>
  );
}
