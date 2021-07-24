import {
  DropdownSection,
  Logo,
  Icon,
  Heading,
  // Products
  ProductsDropdownContainer,
  ProductsSection,
  SubProductsList,
  WorksWithStripe
} from "./elements";

export default function ProductsDropdown() {
  return (
    <ProductsDropdownContainer>
      <DropdownSection>
        <ProductsSection>
          <li>
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <Heading color="blue">Payments</Heading>
              <p>A complete payments platform</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">Billing</Heading>
              <p>Build and scale your recurring business model</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="teal" />
            </div>
            <div>
              <Heading color="teal">Connect</Heading>
              <p style={{ marginBottom: 0 }}>
                Everything platforms need to get sellers paid
              </p>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        <SubProductsList>
          <li>
            <Heading noMarginBottom>Sigma</Heading>
            <div>Your business data at your fingertips.</div>
          </li>
          <li>
            <Heading noMarginBottom>Atlas</Heading>
            <div>The best way to start an internet business.</div>
          </li>
          <li>
            <Heading noMarginBottom>Radar</Heading>
            <div>Fight fraud with machine learning.</div>
          </li>
        </SubProductsList>
        <WorksWithStripe>
          <Heading noMarginBottom>
            <a href="/">
              <Icon /> Works with Stripe
            </a>
          </Heading>
        </WorksWithStripe>
      </DropdownSection>
    </ProductsDropdownContainer>
  );
}
