import React from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";

import Phrase from "./components/Phrase";
import Buttons from "./components/Buttons";

const BottomCTA = () => {
  return (
    <>
      <Stack alignItems="center" className="BottomCTA" paddingBottom={16} spacing={0}>
        <Phrase
          phrase="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard."
          title="Clipboard for iOS and Mac OS"
        />
        <Buttons />
      </Stack>
    </>
  );
};

export default BottomCTA;
