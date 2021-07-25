import { useToken } from "@chakra-ui/react";

export const useColors = (chakraColorStrings: string | string[]) => {
  const colors = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    typeof chakraColorStrings === "string"
      ? [chakraColorStrings]
      : chakraColorStrings
    // a single fallback or fallback array matching the length of the previous arg
  );
  return colors;
};
