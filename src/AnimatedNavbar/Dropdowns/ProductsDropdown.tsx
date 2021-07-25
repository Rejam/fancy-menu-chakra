import { Box, BoxProps, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { DropdownSection, Logo, Icon, Heading, HeadingProps } from "../shared";

const ProductsDropdownContainer = (props: BoxProps) => (
  <Box w={["calc(100vw - 2rem)", null, "29rem"]} {...props} />
);
const ProductsSection = (props: BoxProps) => <Box as="ul" {...props} />;
const SubProductsListHeading = (props: HeadingProps) => (
  <Heading as="h3" {...props} />
);
const WorksWithStripe = (props: BoxProps) => (
  <Box
    display="flex"
    borderTop="2px solid #fff"
    justifyContent="center"
    alignItems="center"
    marginTop="var(--chakra-space-7)"
    paddingTop="var(--chakra-space-7)"
    {...props}
  />
);

export default function ProductsDropdown() {
  return (
    <ProductsDropdownContainer>
      <DropdownSection>
        <ProductsSection>
          <Flex>
            <div>
              <Logo color="blue.500" />
            </div>
            <div>
              <SubProductsListHeading color="green.500">
                Payments
              </SubProductsListHeading>
              <p>A complete payments platform</p>
            </div>
          </Flex>
          <Flex mt="1rem">
            <div>
              <Logo color="green.500" />
            </div>
            <div>
              <SubProductsListHeading color="blue.500">
                Billing
              </SubProductsListHeading>
              <p>Build and scale your recurring business model</p>
            </div>
          </Flex>
          <Flex mt="1rem">
            <div>
              <Logo color="purple.500" />
            </div>
            <div>
              <SubProductsListHeading color="purple">
                Connect
              </SubProductsListHeading>
              <p style={{ marginBottom: 0 }}>
                Everything platforms need to get sellers paid
              </p>
            </div>
          </Flex>
        </ProductsSection>
      </DropdownSection>
      <motion.div layoutId="menu-sub">
        <DropdownSection bg="gray.200">
          <SimpleGrid
            gridTemplateColumns={["auto auto"]}
            alignItems="center"
            columnGap="1rem"
          >
            <Heading fontSize="lg">Sigma</Heading>
            <div>Your business data at your fingertips.</div>
            <Heading fontSize="lg">Atlas</Heading>
            <div>The best way to start an internet business.</div>
            <Heading fontSize="lg">Radar</Heading>
            <div>Fight fraud with machine learning.</div>
          </SimpleGrid>
          <WorksWithStripe>
            <Heading>
              <a href="/">
                <Icon /> Works with Stripe
              </a>
            </Heading>
          </WorksWithStripe>
        </DropdownSection>
      </motion.div>
    </ProductsDropdownContainer>
  );
}
