import { HStack, IconButton, Switch, Text } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ToggleColorModeButton() {
  // const { colorMode, toggleColorMode } = useColorMode();

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleColorMode = () => setTheme(isDark ? "light" : "dark");

  return (
    <>
      <IconButton aria-label="Toggle color mode" onClick={toggleColorMode}>
        {isDark ? <Moon /> : <Sun />}
      </IconButton>
      <HStack>
        <Switch.Root
          colorPalette="blue"
          checked={isDark}
          onCheckedChange={() => toggleColorMode()}
        >
          <Switch.HiddenInput />
          <Switch.Control />
        </Switch.Root>
        <Text>{isDark ? "Dark Mode" : "Light Mode"}</Text>
      </HStack>
    </>
  );
}

export default ToggleColorModeButton;
