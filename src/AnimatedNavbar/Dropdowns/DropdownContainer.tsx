import { Flipped } from "react-flip-toolkit";
import { Box, BoxProps } from "@chakra-ui/react";

const Caret = (props: BoxProps) => (
  <Box
    className="caret"
    position="absolute"
    display={["none", null, "block"]}
    width="0"
    height="0"
    borderWidth="10px"
    borderStyle="solid"
    borderColor="transparent transparent #fff"
    top="-20px"
    left="calc(50% - 10px)"
    zIndex="2"
    {...props}
  />
);

const DropdownBackground = (props: BoxProps) => (
  <Box
    transformOrigin="0 0"
    backgroundColor="#fff"
    borderRadius="4px"
    overflow="hidden"
    position="relative"
    boxShadow="0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)"
    {...props}
  />
);

interface DropdownContainerProps extends BoxProps {
  children: any;
}
export default function DropdownContainer({
  children,
  ...props
}: DropdownContainerProps) {
  return (
    <Box {...props}>
      <Flipped flipId="dropdown-caret">
        <Caret />
      </Flipped>
      <Flipped flipId="dropdown">
        <DropdownBackground>{children}</DropdownBackground>
      </Flipped>
    </Box>
  );
}
