import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const Caret = () => (
  <Box position="absolute" top="-20px" left="calc(50% - 10px)">
    <MotionBox
      layoutId="dropdown-caret"
      width="0"
      height="0"
      borderWidth="10px"
      borderStyle="solid"
      borderColor="transparent transparent #fff"
      zIndex="2"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  </Box>
);

const DropdownBackground = (props: BoxProps) => (
  <motion.div layoutId="dropdown">
    <Box
      transformOrigin="0 0"
      backgroundColor="#fff"
      borderRadius="4px"
      overflow="hidden"
      position="relative"
      boxShadow="0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)"
      {...props}
    />
  </motion.div>
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
      <Caret />
      <DropdownBackground>{children}</DropdownBackground>
    </Box>
  );
}
