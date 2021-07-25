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

export const Logo = ({ color, ...props }: BoxProps) => (
  <Box
    width="38px"
    height="38px"
    marginRight="16px"
    borderRadius="100%"
    opacity="0.6"
    backgroundColor={color}
    {...props}
  />
);

export const Icon = (props: BoxProps) => (
  <Box
    width="13px"
    height="13px"
    marginRight="13px"
    backgroundColor="blue.500"
    opacity="0.8"
    display="inline-block"
    {...props}
  />
);

export interface HeadingProps extends BoxProps {
  color?: any;
}
export const HeadingLink = (props: HeadingProps) => <Box as="li" {...props} />;
export const Heading = ({ ...props }: HeadingProps) => (
  <ChakraHeading
    as="h3"
    textTransform="uppercase"
    fontWeight="bold"
    fontSize="1.1rem"
    {...props}
  />
);

export const LinkList = (props: BoxProps) => <Box as="ul" ml={0} {...props} />;
