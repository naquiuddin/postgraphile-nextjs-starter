import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core";

import theme from "../theme";

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};
