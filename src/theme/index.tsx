import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";

import "./index.css";
import { global } from "./global";
import Button from "./components/Button";

export default function ThemeProvider(props: any) {
  return (
    <AnimateSharedLayout>
      <ChakraProvider
        theme={extendTheme(
          withDefaultColorScheme({ colorScheme: baseTheme.colors.green[500] }),
          {
            fonts: {
              body: "karla, serif",
              heading: "karla, sans-serif",
            },
            style: {
              global,
            },
            spacing: {
              spacer: "28px",
            },
            components: {
              Button,
            },
          }
        )}
        {...props}
      />
    </AnimateSharedLayout>
  );
}
