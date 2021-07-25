import { Box, BoxProps, ButtonProps, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import DropdownContainer from "../Dropdowns/DropdownContainer";

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

const MotionBox = motion(Box);
interface IndicatorProps extends BoxProps {
  indicatorColor: string;
}
const Indicator = ({ indicatorColor, ...props }: IndicatorProps) => (
  <MotionBox
    position="absolute"
    backgroundColor={indicatorColor || "#fff"}
    minH="100%"
    minW="100%"
    inset={0}
    borderRadius="0"
    layoutId="indicator"
    animate={{ backgroundColor: indicatorColor }}
    transition={spring}
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
const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

interface NavbarItemProps extends BoxProps {
  onMouseEnter: any;
  title: string;
  children: any;
  indicatorColor?: string;
  isActive?: boolean;
}
export default function NavbarItem(props: NavbarItemProps) {
  const {
    title,
    indicatorColor = "rgba(255,255,255, 0)",
    isActive = false,
    children,
    ...rest
  } = props;
  return (
    <NavbarItemContainer onFocus={props.onMouseEnter} {...rest}>
      <NavbarItemButton>
        {isActive && <Indicator indicatorColor={indicatorColor} />}
        <Box as="span" zIndex="1">
          {title}
        </Box>
      </NavbarItemButton>
      {isActive && (
        <DropdownSlot>
          <DropdownContainer>{children}</DropdownContainer>
        </DropdownSlot>
      )}
    </NavbarItemContainer>
  );
}
