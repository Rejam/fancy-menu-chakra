import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Heading,
  HeadingLink,
  LinkList,
  Icon,
  DropdownSection,
} from "../shared";

const CompanyDropdownContainer = ({ sx, ...props }: BoxProps) => (
  <Box w={["calc(100vw - 2rem)", null, "23rem"]} {...props} />
);

export default function CompanyDropdown() {
  return (
    <CompanyDropdownContainer>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon />
              About Stripe
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
      <motion.div layoutId="menu-sub">
        <DropdownSection bg="gray.200">
          <div>
            <Heading>
              <Icon />
              From the Blog
            </Heading>
            <LinkList ml="1.5rem">
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
      </motion.div>
    </CompanyDropdownContainer>
  );
}
