import { Box, BoxProps, ButtonProps, Button } from "@chakra-ui/react";

const NavbarItemContainer = (props: BoxProps) => (
  <Box
    as="li"
    position="relative"
    listStyleType="none"
    ml="0.5rem"
    justifyContent="center"
    margin="0"
    _first={{
      ml: 0,
    }}
    {...props}
  />
);

const hoverStyles = {
  opacity: 0.7,
  outline: "none",
};
const NavbarItemTitle = (props: ButtonProps) => (
  <Button
    border="0"
    borderRadius="0"
    fontWeight="bold"
    fontSize="18px"
    padding="1.5rem 1.5rem 1.2rem 1.5rem"
    color="white"
    fontFamily="inherit"
    display="flex"
    justifyContent="center"
    transition="opacity 250ms"
    cursor="pointer"
    position="relative"
    h="unset"
    zIndex="2"
    _hover={{ ...hoverStyles }}
    _focus={{ ...hoverStyles }}
    {...props}
  />
);

const DropdownSlot = (props: BoxProps) => (
  <Box
    position="absolute"
    left="50%"
    transform="translateX(-50%)"
    perspective="1000px"
    {...props}
  />
);

interface NavbarItemProps {
  onMouseEnter: any;
  title: string;
  children: any;
}
export default function NavbarItem(props: NavbarItemProps) {
  const { title, children } = props;
  return (
    <NavbarItemContainer onFocus={props.onMouseEnter} {...props}>
      <NavbarItemTitle>{title}</NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemContainer>
  );
}
