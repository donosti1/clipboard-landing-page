import React from "react";
import {Stack, Text} from "@chakra-ui/react";

const HeroPhrase = () => {
  return (
    <Stack alignItems="center" className="HeroPhrase" paddingY={12} spacing={3}>
      <Text as="h1" color="secondary.500" fontSize="5xl" fontWeight="700" letterSpacing="-1.5px">
        A history of everything you copy
      </Text>
      <Text color="secondary.200" fontSize="xl" maxWidth="container.md" textAlign="center">
        Clipboard allows you to track and organize everything you copy. Instantly access your
        clipboard on all your devices.
      </Text>
    </Stack>
  );
};

export default HeroPhrase;
