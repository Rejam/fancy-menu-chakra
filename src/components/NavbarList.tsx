import { ListContainer, List } from "./elements";

interface NavbarListProps {
  children: any;
  onMouseLeave: any;
}
export default function NavbarList(props: NavbarListProps) {
  const { onMouseLeave, children } = props;
  return (
    <ListContainer onMouseLeave={onMouseLeave}>
      <List>{children}</List>
    </ListContainer>
  );
}
