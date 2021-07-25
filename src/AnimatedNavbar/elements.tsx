import { Box, BoxProps, Heading as ChakraHeading } from "@chakra-ui/react";

// Shared

export const DropdownSection = (props: BoxProps) => (
  <Box
    as="section"
    padding="var(--chakra-space-7)"
    position="relative"
    zIndex={1}
    {...props}
  />
);

export const Logo = ({ color = "blue", ...props }: BoxProps) => (
  <Box
    width="38px"
    height="38px"
    marginRight="16px"
    borderRadius="100%"
    opacity="0.6"
    backgroundColor={`var(--chakra-colors-${color})`}
    {...props}
  />
);

export const Icon = (props: BoxProps) => (
  <Box
    width="13px"
    height="13px"
    marginRight="13px"
    backgroundColor="var(--chakra-colors-blue)"
    opacity="0.8"
    display="inline-block"
    {...props}
  />
);

export interface HeadingProps extends BoxProps {
  color?: any;
}
export const HeadingLink = (props: HeadingProps) => <Box as="li" {...props} />;
export const Heading = ({ color, ...props }: HeadingProps) => (
  <ChakraHeading
    as="h3"
    textTransform="uppercase"
    fontWeight="bold"
    fontSize="1.1rem"
    color={
      color ? `var(--chakra-colors-${color})` : "var(--chakra-colors-blue)"
    }
    {...props}
  />
);

export const LinkList = (props: BoxProps) => <Box as="ul" ml={0} {...props} />;

export const WorksWithStripe = (props: BoxProps) => (
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
