import React from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";

import Phrase from "./components/Phrase";
import TopFeaturesDescription from "./components/TopFeaturesDescription";

const featuresItems = [
  {
    id: 0,
    title: "Quick Search",
    feature:
      "Easily search your snippets by content, category, web address, application, and more. ",
  },
  {
    id: 1,
    title: "iCloud Sync",
    feature: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    id: 2,
    title: "Complete History",
    feature: "Retrieve any snippets from the first moment you started using the app.",
  },
];
const TopFeatures = () => {
  const items = featuresItems.map((it) => <TopFeaturesDescription key={it.id} {...it} />);

  return (
    <>
      <Stack
        backgroundImage="url('/assets/image-computer.png')"
        backgroundPosition={["0%  100%", "-25%  100%"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["contain", "60%"]}
        className="TopFeatures"
        spacing={24}
        width="100%"
      >
        <Stack>
          <Phrase
            phrase="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
            title="Keep track of your snippets"
          />
        </Stack>
        <Stack direction="row-reverse" paddingBottom={28} paddingRight={32}>
          <Stack spacing={12} width="35%">
            {items}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TopFeatures;
