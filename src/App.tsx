import { Box, BoxProps } from "@chakra-ui/react";

import AnimatedNavbar from "./AnimatedNavbar";
import ThemeProvider from "./theme";

const AppContainer = (p: BoxProps) => (
  <Box
    bgGradient="linear(to-r, green.400, blue.500)"
    display="flex"
    flexDirection="column"
    minH="100vh"
    {...p}
  />
);
const Main = (p: BoxProps) => <Box as="main" {...p} />;

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <AnimatedNavbar />
        <Main></Main>
      </AppContainer>
    </ThemeProvider>
  );
}
