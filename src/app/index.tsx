import React, {useEffect} from "react";
import {
  Button,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {BsAlarm} from "react-icons/bs";

import Hero from "./screens/Hero";
import TopFeatures from "./screens/TopFeatures";
import Services from "./screens/Services";
import Features from "./screens/Features";
/* import Carousel from "./screens/Carousel"; */
import BottomCTA from "./screens/BottomCTA";
import Footer from "./screens/Footer";
/* Sections:
  Hero
  TopFeatures
  Services
  Features
  Carousel
  BottomCTA
  Footer
  //Comp:
  HeroPhrase
  Buttons
  Phrase
  TopFeaturesDescription
  FeaturesDescription
  FooterNav
  SocialIcons
*/
const App: React.FC = () => {
  /* const item = [{id: 0, icon: BsAlarm}];
  const icons = item.map((it) => <Icon key={it.id} as={it.icon} color="white" />); */
  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
  }, []);

  return (
    <>
      <Stack
        alignItems="center"
        backgroundImage={[
          "url('/assets/bg-header-mobile.png')",
          "url('/assets/bg-header-desktop.png')",
        ]}
        backgroundPosition={["50%  0%", "50%  2px"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["contain", "contain"]}
        minHeight="100vh"
        paddingTop={32}
        role="main"
        spacing={0}
      >
        <Hero />
        <TopFeatures />
        <Services />
        <Features />
        {/* <Carousel /> */}
        <BottomCTA />
        <Footer />

        {/* {icons} */}
      </Stack>
    </>
  );
};

export default App;
