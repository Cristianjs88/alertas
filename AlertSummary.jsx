import React, { useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import VectorDireccional from "../icons/VectorDireccional.svg";
import FireIcon from "../icons/Fireicon.svg";
import Smoke from "../icons/PrecenciaDeHumo.svg";
import Calendario from "../icons/VectorCalendario.svg";
import MarcadorReloj from "../icons/MarcadorReloj.svg";

const SmokeIcon = () => (
  <Box as="img" src={Smoke} alt="Icono de Humo" w={10} h={10} />
);

const CalendarioIcon = () => (
  <Box as="img" src={Calendario} alt="Icono de Calendario" w={4} h={4} />
);

const MarcadorRelojIcon = () => (
  <Box as="img" src={MarcadorReloj} alt="Icono de Reloj" w={4} h={4} />
);

const FireIconComponent = () => (
  <Box as="img" src={FireIcon} alt="Icono de Fuego" w={10} h={10} />
);
const Direccional = () => (
  <Box as="img" src={VectorDireccional} alt="Icono de Fuego" w={6} h={6} />
);

const AlertSummary = () => {
  const bgColor = useColorModeValue("#2A3140", "#2A3140");
  const textColor = useColorModeValue("white", "gray.800");
  const alerts = [
    {
      icon: () => (
        <Box bg="blue.400" p={1} borderRadius="md">
          <SmokeIcon />
        </Box>
      ),
      title: "Presencia de humo",
      date: "05/05/24",
      time: "10:11 am",
      camera: "Cámara 1 zona sur 4",
      location: "Pichulémú, Zona 1",
      risk: "bajo",
      riskLevel: "20%",
    },
    {
      icon: () => (
        <Box bg="yellow.400" p={1} borderRadius="md">
          <img src={VectorDireccional} alt="Icono Vector Direccional" />
        </Box>
      ),
      title: "Movimiento inusual",
      date: "05/05/24",
      time: "10:11 am",
      camera: "Cámara 1 zona sur 4",
      location: "Pichulémú, Zona 1",
      risk: "medio",
      riskLevel: "45%",
    },
    {
      icon: () => (
        <Box bg="red.400" p={1} borderRadius="md">
          <FireIconComponent />
        </Box>
      ),
      title: "Presencia de humo",
      date: "05/05/24",
      time: "10:11 am",
      camera: "Cámara 1 zona sur 4",
      location: "Pichulémú, Zona 1",
      risk: "alto",
      riskLevel: "90%",
    },
  ];

  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      bg={bgColor}
      borderRadius="md"
      padding={2}
      shadow="md"
      color={textColor}
      maxW="100%"
      maxH="95%"
      mt={0}
      alignItems="center"
    >
      <IconButton
        icon={<ArrowLeftIcon />}
        onClick={() => handleScroll("left")}
        aria-label="Scroll Left"
        bg={bgColor}
        color={textColor}
        _hover={{ bg: bgColor }}
        mr={2}
      />
      <Flex
        ref={scrollContainerRef}
        overflowX="auto"
        alignItems="center"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        <Flex gap={2}>
          {alerts.map((alert, index) => (
            <AlertItem key={index} alert={alert} />
          ))}
        </Flex>
      </Flex>
      <IconButton
        icon={<ArrowRightIcon />}
        onClick={() => handleScroll("right")}
        aria-label="Scroll Right"
        bg={bgColor}
        color={textColor}
        _hover={{ bg: bgColor }}
        ml={2}
      />
    </Flex>
  );
};

const AlertItem = ({ alert }) => {
  const bgColor = useColorModeValue("gray.900", "gray.700");
  const textColor = useColorModeValue("white", "white");
  const riskColor =
    alert.risk === "alto" ? "red" : alert.risk === "medio" ? "orange" : "green";

  return (
    <Box
      bg={bgColor}
      borderRadius="xs"
      p={2}
      shadow="dark"
      color={textColor}
      flexShrink={0}
      alignItems="center"
      textAlign="right"
      width="200px" // para evitar que se expanda más allá de su contenido
    >
      <Flex alignItems="center" mb={2}>
        <alert.icon />
        <Heading size="sm" ml={2}>
          {alert.title}
        </Heading>
      </Flex>
      <Flex alignItems="center" mb={1}>
        <CalendarioIcon />
        <Text fontSize="xs" ml={1}>
          {alert.date}
        </Text>
      </Flex>
      <Flex alignItems="center" mb={1}>
        <MarcadorRelojIcon />
        <Text fontSize="xs" ml={1}>
          {alert.time}
        </Text>
      </Flex>
      <Text fontSize="xs" mb={1} lineHeight="1.2">
        {alert.camera}
      </Text>
      <Text fontSize="xs" mb={1} lineHeight="1.2">
        {alert.location}
      </Text>
      <Badge
        variant="solid"
        colorScheme={riskColor}
        rounded="full"
        fontSize="xs"
        px={1}
        mt={2}
      >
        {alert.riskLevel} {alert.risk}
      </Badge>
    </Box>
  );
};

export default AlertSummary;
