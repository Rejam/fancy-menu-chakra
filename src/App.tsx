import { Box, BoxProps } from "@chakra-ui/react";

import AnimatedNavbar from "./AnimatedNavbar";
import ThemeProvider from "./theme";
// import AnimatedNavbar from "./old";

const AppContainer = (p: BoxProps) => (
  <Box
    bg="base.500"
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
