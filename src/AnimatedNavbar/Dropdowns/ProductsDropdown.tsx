import { Box, BoxProps, Flex, SimpleGrid } from "@chakra-ui/react";

import {
  DropdownSection,
  Logo,
  Icon,
  Heading,
  WorksWithStripe,
  HeadingProps,
} from "../shared";

const ProductsSection = ({ sx = {}, ...props }: BoxProps) => (
  <Box as="ul" {...props} />
);

const ProductsDropdownContainer = (props: BoxProps) => (
  <Box width={"29rem"} {...props} />
);

const SubProductsListHeading = (props: HeadingProps) => (
  <Heading as="h3" {...props} />
);

export default function ProductsDropdown() {
  return (
    <ProductsDropdownContainer>
      <DropdownSection>
        <ProductsSection>
          <Flex>
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <SubProductsListHeading color="blue">
                Payments
              </SubProductsListHeading>
              <p>A complete payments platform</p>
            </div>
          </Flex>
          <Flex mt="1rem">
            <div>
              <Logo color="green" />
            </div>
            <div>
              <SubProductsListHeading color="green">
                Billing
              </SubProductsListHeading>
              <p>Build and scale your recurring business model</p>
            </div>
          </Flex>
          <Flex mt="1rem">
            <div>
              <Logo color="teal" />
            </div>
            <div>
              <SubProductsListHeading color="teal">
                Connect
              </SubProductsListHeading>
              <p style={{ marginBottom: 0 }}>
                Everything platforms need to get sellers paid
              </p>
            </div>
          </Flex>
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
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
    </ProductsDropdownContainer>
  );
}
