import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ToggleColorModeButton from "./ToggleColorModeButton";

const NavBar = () => {
  return (
    <HStack p={4} align="center" justifyContent="space-between">
      <HStack>
        <Image
          src={logo}
          alt="Logo"
          boxSize="60px"
          objectFit="cover"
          rounded="md"
        ></Image>
        <Text fontSize="xl" lineHeight="60px" m={0}>
          NavBar
        </Text>
      </HStack>
      <ToggleColorModeButton />
    </HStack>
  );
};

export default NavBar;
