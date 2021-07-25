import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  DropdownSection,
  Heading,
  LinkList,
  HeadingLink,
  Icon,
} from "../shared";

const DevelopersDropdownContainer = (props: BoxProps) => (
  <Box w={["calc(100vw - 2rem)", null, "25rem"]} {...props} />
);
const Flex = (props: BoxProps) => <Box display="flex" {...props} />;

export default function DevelopersDropdown() {
  return (
    <DevelopersDropdownContainer>
      <DropdownSection>
        <div>
          <Heading>Documentation</Heading>
          <p>Start integrating Stripe&rsquo;s products and tools</p>
          <Flex>
            <Box mr="48px">
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a href="/">Elements</a>
                </li>
                <li>
                  <a href="/">Checkout</a>
                </li>
                <li>
                  <a href="/">Mobile apps</a>
                </li>
              </LinkList>
            </Box>
            <div>
              <h4>Popular Topics</h4>
              <LinkList>
                <li>
                  <a href="/">Apple Pay</a>
                </li>
                <li>
                  <a href="/">Testing</a>
                </li>
                <li>
                  <a href="/">Launch Checklist</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <motion.div layoutId="menu-sub">
        <DropdownSection bg="gray.200">
          <ul>
            <HeadingLink>
              <a href="/">
                <Icon /> Full API Reference
              </a>
            </HeadingLink>
            <HeadingLink>
              <a href="/">
                <Icon /> API Status
              </a>
            </HeadingLink>
            <HeadingLink>
              <a href="/">
                <Icon /> Open Source
              </a>
            </HeadingLink>
          </ul>
        </DropdownSection>
      </motion.div>
    </DevelopersDropdownContainer>
  );
}
