import React from "react";
import {Grid, Icon, Image, Stack, Text} from "@chakra-ui/react";

import Logo from "/assets/logo.svg";

import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
const navItems = [
  {id: 0, label: "FAQs"},
  {id: 1, label: "Contact Us"},
  {id: 2, label: "Privacy Policy"},
  {id: 3, label: "Press Kit"},
  {id: 4, label: "Install Guide"},
];
const navBar = navItems.map((ni) => (
  <Text key={ni.id} _hover={{cursor: "pointer", color: "primary.500"}}>
    {ni.label}
  </Text>
));
const socialItems = [
  {id: 0, icon: AiFillFacebook},
  {id: 1, icon: AiOutlineTwitter},
  {id: 2, icon: AiOutlineInstagram},
];
const socialBar = socialItems.map((ni) => (
  <Icon
    key={ni.id}
    _hover={{cursor: "pointer", color: "primary.500"}}
    as={ni.icon}
    height={8}
    width={8}
  />
));
const Footer = () => {
  return (
    <>
      <Stack
        alignSelf="center"
        backgroundColor="secondary.100"
        direction={["row", "row"]}
        justifyContent="space-between"
        paddingTop={[8, 10]}
        paddingX={[4, 32]}
        paddingY={[4, 8]}
        spacing={0}
        width="100%"
      >
        <Image alt="logo" height={16} src={Logo} width={16} />
        <Grid
          color="secondary.500"
          columnGap={20}
          fontSize="lg"
          gridAutoFlow="column"
          paddingRight={24}
          rowGap={4}
          templateRows="repeat(2,1fr)"
        >
          {navBar}
        </Grid>
        <Stack alignItems="center" color="secondary.500" direction={["row", "row"]} spacing={4}>
          {socialBar}
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
