import React, {useEffect} from "react";
import {Stack} from "@chakra-ui/react";
/* import {BsAlarm} from "react-icons/bs"; */

import Hero from "./screens/Hero";
import TopFeatures from "./screens/TopFeatures";
import Services from "./screens/Services";
import Features from "./screens/Features";
import Carousel from "./screens/Carousel";
import BottomCTA from "./screens/BottomCTA";
import Footer from "./screens/Footer";

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
        paddingTop={[24, 32]}
        paddingX={[4, 0]}
        role="main"
        spacing={0}
      >
        <Hero />
        <TopFeatures />
        <Services />
        <Features />
        <Carousel />
        <BottomCTA />

        {/* {icons} */}
      </Stack>
      <Footer />
    </>
  );
};

export default App;
