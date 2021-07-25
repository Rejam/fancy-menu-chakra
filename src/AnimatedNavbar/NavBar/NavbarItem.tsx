import { Box, BoxProps, ButtonProps, Button } from "@chakra-ui/react";

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

const hoverStyles = {
  // opacity: 0.7,
  outline: "none",
  // textDecoration: ["underline", null, "none"],
};
const NavbarItemTitle = (props: ButtonProps) => (
  <Button
    display="flex"
    justifyContent="center"
    p="1.5rem 1.5rem 1.2rem 1.5rem"
    h="unset"
    fontSize="18px"
    fontWeight="bold"
    color="white"
    border="0"
    borderRadius="0"
    transition="opacity 250ms"
    boxShadow="none !important"
    _focus={{ bg: "base.600" }}
    // _focus={{ bg: "base.600" }}
    // _hover={{ ...hoverStyles }}
    // _focus={{ ...hoverStyles }}
    cursor="pointer"
    zIndex="2"
    {...props}
  />
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
      <NavbarItemTitle>{title}</NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemContainer>
  );
}
