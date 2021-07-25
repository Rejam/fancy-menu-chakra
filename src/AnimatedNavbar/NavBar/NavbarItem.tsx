import { Box, BoxProps, ButtonProps, Button } from "@chakra-ui/react";
import { Flipped } from "react-flip-toolkit";

const NavbarItemContainer = (props: BoxProps) => (
  <Box
    as="li"
    position={[null, null, "relative"]}
    listStyleType="none"
    ml="0.5rem"
    justifyContent="center"
    m="0"
    _first={{
      ml: 0,
    }}
    {...props}
  />
);

const NavbarItemButton = (props: ButtonProps) => (
  <Button variant="NavItemBtn" {...props} />
);

const DropdownSlot = (props: BoxProps) => (
  <Box
    position="absolute"
    left={["1rem", null, "50%"]}
    right={["1rem", null, "unset"]}
    transform={[null, null, "translateX(-50%)"]}
    perspective="1000px"
    {...props}
  />
);

interface NavbarItemProps extends BoxProps {
  onMouseEnter: any;
  title: string;
  children: any;
}
export default function NavbarItem(props: NavbarItemProps) {
  const { title, children } = props;
  return (
    <NavbarItemContainer onFocus={props.onMouseEnter} {...props}>
      <NavbarItemButton>{title}</NavbarItemButton>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemContainer>
  );
}
