import { Box, BoxProps } from "@chakra-ui/react";
import { Heading, HeadingLink, LinkList, Icon } from "../shared";

const DropdownSection = (props: BoxProps) => (
  <Box
    padding="var(--chakra-space-7)"
    position="relative"
    z-index="1"
    {...props}
  />
);

const CompanyDropdownContainer = ({ sx, ...props }: BoxProps) => (
  <Box width="23rem" {...props} />
);

export default function CompanyDropdown() {
  return (
    <CompanyDropdownContainer>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> About Stripe
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />
              Customers
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />
              Jobs
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />
              Environment
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />
            From the Blog
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <a href="/">Stripe Atlas &rsaquo;</a>
            </li>
            <li>
              <a href="/">Stripe Home &rsaquo;</a>
            </li>
            <li>
              <a href="/">Improved Fraud Detection &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownContainer>
  );
}
