import React from "react";
import {Stack, Text} from "@chakra-ui/react";
interface PhraseComponents {
  title: string;
  phrase: string;
}
const Phrase = (props: PhraseComponents) => {
  return (
    <Stack alignItems="center" className="Phrase" paddingY={12} spacing={3}>
      <Text as="h1" color="secondary.500" fontSize="4xl" fontWeight="700" letterSpacing="-1px">
        {props.title}
      </Text>
      <Text color="secondary.200" fontSize="lg" maxWidth="container.md" textAlign="center">
        {props.phrase}
      </Text>
    </Stack>
  );
};

export default Phrase;
