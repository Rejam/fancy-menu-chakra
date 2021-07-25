import { motion } from "framer-motion";
import { Box, BoxProps, Text } from "@chakra-ui/react";

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
          <Heading color="blue.500" mb={2}>
            Documentation
          </Heading>
          <Text fontWeight="700">
            Start integrating Stripe&rsquo;s products and tools
          </Text>
          <Flex mt={2}>
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
                <Icon backgroundColor="blue.400" /> Full API Reference
              </a>
            </HeadingLink>
            <HeadingLink>
              <a href="/">
                <Icon backgroundColor="blue.400" /> API Status
              </a>
            </HeadingLink>
            <HeadingLink>
              <a href="/">
                <Icon backgroundColor="blue.400" /> Open Source
              </a>
            </HeadingLink>
          </ul>
        </DropdownSection>
      </motion.div>
    </DevelopersDropdownContainer>
  );
}
