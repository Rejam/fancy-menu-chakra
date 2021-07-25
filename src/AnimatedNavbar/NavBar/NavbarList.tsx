import { chakra, ListProps } from "@chakra-ui/react";

const MainNavList = (props: ListProps) => (
  <chakra.ul
    mx="0"
    display="flex"
    justifyContent="center"
    position="relative"
    {...props}
  />
);

interface NavbarListProps {
  children: any;
  onMouseLeave: any;
}
export default function NavbarList(props: NavbarListProps) {
  const { onMouseLeave, children } = props;
  return <MainNavList onMouseLeave={onMouseLeave}>{children}</MainNavList>;
}
