import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Badge,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Fireicon from "../icons/Fireicon.svg";

function FireAlertBox() {
  const bgColor = "#F50858";
  const textColor = "white";

  return (
    <Box
      bg={bgColor}
      borderRadius="md"
      padding={2}
      shadow="md"
      color={textColor}
    >
      <Heading size="sm" textAlign="center" mr={10}>
        Alerta de incendio
      </Heading>
      <Box colorScheme="white" rounded="full" fontSize="ms" textAlign="right">
        90% Alto{" "}
      </Box>

      <Box
        as="img"
        src={Fireicon}
        w={8}
        h={8}
        fill={textColor}
        size="sm"
        mt={-12}
      >
        {/* ... tu código SVG para el termómetro ... */}
      </Box>

      <Text fontSize="sm" textAlign="left">
        Cámara 1 zona norte 2
      </Text>
      <Heading size="sm" textAlign="left">
        Aeródromo Peldehue
      </Heading>
      <Text fontSize="2xs" textAlign="left">
        -33.11606126821251, -70.728643958156
      </Text>

      <Button
        size="xs"
        variant="outline"
        colorScheme="white"
        bgColor="gray.800"
      >
        Revisar evento
      </Button>
    </Box>
  );
}

export default FireAlertBox;
