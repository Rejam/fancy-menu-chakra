import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

import AnimatedNavbar from "./components/AnimatedNavbar";

const Main = (p: any) => <Box as="main" minH="100vh" {...p} />;
const AppContainer = (p: any) => (
  <Box display="flex" flex-direction="column" background="appBg" {...p} />
);

export default function App() {
  return (
    <ChakraProvider
      theme={extendTheme({
        colors: {
          appBg: "#53f"
        },
        components: {
          List: {
            parts: ["list"],
            baseStyle: {
              // listStyle: "none",
              // listStyleType: "none",
              color: "green"
            },
            defaultProps: {
              // listStyle: "none",
              // listStyleType: "none",
              color: "red"
            }
          }
        }
      })}
    >
      <AppContainer>
        <AnimatedNavbar />
        <Main></Main>
      </AppContainer>
    </ChakraProvider>
  );
}
