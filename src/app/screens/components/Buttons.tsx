import React from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";
interface IButtonComps {
  id: number;
  label: string;
  bgColor: string;
  borderColor: string;
  hoverColor: string;
}
const buttonInfo = [
  {
    id: 0,
    label: "Download for iOS",
    bgColor: "primary.500",
    hoverColor: "primary.400",
    borderColor: "primary.800",
  },
  {
    id: 1,
    label: "Download for Mac",
    bgColor: "primary.700",
    hoverColor: "primary.600",
    borderColor: "primary.900",
  },
];
const StyledButton = (props: IButtonComps) => {
  return (
    <Button
      _hover={{
        backgroundColor: `${props.hoverColor}`,
        cursor: "pointer",
      }}
      backgroundColor={props.bgColor}
      borderBottomWidth={3}
      borderColor={props.borderColor}
      borderLeftWidth={2}
      borderRightWidth={2}
      borderTopWidth={1}
      color="white"
      size="lg"
    >
      {props.label}
    </Button>
  );
};
const ctaButtons = buttonInfo.map((but) => <StyledButton key={but.id} {...but} />);
const Buttons = () => {
  return (
    <>
      <Stack className="Buttons" direction="row" spacing={6}>
        {ctaButtons}
      </Stack>
    </>
  );
};

export default Buttons;
