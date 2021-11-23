import React from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";

import Logo from "/assets/logo.svg";

import HeroPhrase from "./components/HeroPhrase";
import Buttons from "./components/Buttons";
const Hero = () => {
  return (
    <Stack alignItems="center" paddingBottom={16} spacing={0}>
      <Image alt="logo" height={[32, 32]} src="assets/logo.svg" width={[32, 32]} />
      <HeroPhrase />
      <Buttons />
    </Stack>
  );
};

export default Hero;
