import { List } from "@chakra-ui/react";
import { NavbarItemTitle, DropdownSlot } from "./elements";

interface NavbarItemProps {
  onMouseEnter: any;
  title: string;
  children: any;
}
export default function NavbarItem(props: NavbarItemProps) {
  const { onMouseEnter, title, children } = props;
  return (
    <List
      variant="NavbarItemContainer"
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
    >
      <NavbarItemTitle>{title}</NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </List>
  );
}
