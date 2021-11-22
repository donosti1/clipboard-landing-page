import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      400: "#5dccbb",
      500: "hsl(171, 66%, 44%)",
      600: "#8896ff",
      700: "hsl(233, 100%, 69%)",
    },
    secondary: {
      200: "hsl(201, 11%, 66%)",
      500: "hsl(210, 10%, 33%)",
    },
  },
  sizes: {
    container: {
      md: "660px",
      xl: "1440px",
    },
  },
  fonts: {
    body: "Bai Jamjuree",
    heading: "Bai Jamjuree",
  },
  components: {},
});
