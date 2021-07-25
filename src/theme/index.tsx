import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";

import "./index.css";
import { global } from "./global";

export default function ThemeProvider(props: any) {
  return (
    <ChakraProvider
      theme={extendTheme(
        {
          fonts: {
            body: "karla, serif",
            heading: "karla, sans-serif",
          },
          style: {
            global,
          },
          colors: {
            base: baseTheme.colors.blue,
            white: "#fff",
            grey: "#f1f4f8b0",
            "dark-grey": "#6b7c93",
            green: "#24b47e",
            teal: "#4F96CE",
            blue: "#6772e5",
            "dark-blue": "#4F3EF5",
          },
          spacing: {
            spacer: "28px",
          },
          components: {
            Button: {
              defaultProps: {
                variant: "ghost",
              },
            },
          },
        },
        withDefaultColorScheme({ colorScheme: "base" })
      )}
      {...props}
    />
  );
}
