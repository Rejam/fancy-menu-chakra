import {
  Box,
  BoxProps,
  ListProps,
  UnorderedList,
  ListItem,
  ListItemProps,
  Heading as ChakraHeading,
  Button,
  ButtonProps,
  Container,
  ContainerProps
} from "@chakra-ui/react";

// Nav
// export const NavbarItemContainer = (props: ListItemProps) => (
//   <ListItem
//     position="relative"
//     marginLeft="0.5rem"
//     _first={{
//       ml: 0
//     }}
//     {...props}
//   />
// );

const hoverStyles = {
  opacity: 0.7,
  outline: "none"
};
export const NavbarItemTitle = (props: ButtonProps) => (
  <Button
    background="transparent"
    border="0"
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
    zIndex="2"
    _hover={{ ...hoverStyles }}
    _focus={{ ...hoverStyles }}
    {...props}
  />
);

export const DropdownSlot = (props: BoxProps) => (
  <Box
    position="absolute"
    left="50%"
    transform="translateX(-50%)"
    perspective="1000px"
    {...props}
  />
);

// DropDowns

export const DropdownSection = (props: BoxProps) => (
  <Box padding="var(--spacer)" position="relative" zIndex={1} {...props} />
);

export const ListContainer = (props: ContainerProps) => {
  return <Container {...props} />;
};
export const List = (props: ListProps) => (
  <UnorderedList
    display="flex"
    justifyContent="center"
    margin="0"
    w="100%"
    bg="blue"
    {...props}
  />
);

export const Logo = ({ color, ...props }: BoxProps) => (
  <Box
    width={"38px"}
    height={"38px"}
    marginRight={"16px"}
    borderRadius={"100%"}
    opacity={"0.6"}
    backgroundColor={color ? `var(--${color})` : "var(--blue)"}
    {...props}
  />
);

export const Icon = (props: BoxProps) => (
  <Box
    width="13px"
    height="13px"
    margin-right="13px"
    background-color="var(--blue)"
    opacity="0.8"
    display="inline-block"
    {...props}
  />
);

interface HeadingProps extends BoxProps {
  noMarginBottom?: boolean;
  color?: any;
}
export const Heading = ({ color, noMarginBottom, ...props }: HeadingProps) => (
  <ChakraHeading
    textTransform="uppercase"
    fontWeight="bold"
    fontSize="1.1rem"
    marginTop={0}
    marginBottom={noMarginBottom ? 0 : "1rem"}
    color={color ? `var(--${color})` : "var(--blue)"}
    {...props}
  />
);

// products
export const ProductsDropdownContainer = (props: BoxProps) => (
  <Box width={"29rem"} {...props} />
);

export const SubProductsList = (props: ListProps) => (
  <UnorderedList
    sx={{
      li: {
        marginBottom: "1rem",
        display: "flex"
      },
      h3: {
        marginRight: "1rem",
        width: "3.2rem",
        display: "block"
      },
      a: {
        color: "var(--dark-grey)"
      }
    }}
    {...props}
  />
);

export const ProductsSection = (props: ListProps) => (
  <UnorderedList
    sx={{
      li: {
        display: "flex"
      }
    }}
    {...props}
  />
);

export const WorksWithStripe = (props: BoxProps) => (
  <Box
    display="flex"
    borderTop="2px solid #fff"
    justifyContent="center"
    alignItems="center"
    marginTop="var(--spacer)"
    paddingTop="var(--spacer)"
    sx={{
      h3: {
        marginBottom: 0
      }
    }}
    {...props}
  />
);
