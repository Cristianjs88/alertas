import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
    Flex,
    Button,
    useToast,
    Box,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  
  const AlertHistory = () => {
    const [alerts, setAlerts] = useState([
      {
        id: 1, // Asigna un ID único a cada alerta
        fecha: "2023-10-26",
        tipoEvento: "Incendio forestal",
        ubicacion: "Pichulemu, Zona 1",
        nivelRiesgo: "Alto",
        estado: "Activo",
      },
      {
        id: 2, // Asigna un ID único a cada alerta
        fecha: "2023-10-25",
        tipoEvento: "Movimiento inusual",
        ubicacion: "Las Araucarias",
        nivelRiesgo: "Medio",
        estado: "Controlado",
      },
      {
        id: 3, // Asigna un ID único a cada alerta
        fecha: "2023-10-24",
        tipoEvento: "Presencia de humo",
        ubicacion: "Pichulemu, Zona 2",
        nivelRiesgo: "Bajo",
        estado: "Activo",
      },
    ]);
  
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedAlert, setSelectedAlert] = useState(null);
  
    const handleAlertClick = (alert) => {
      setSelectedAlert(alert);
      onOpen();
    };
  
    return (
      <Box borderWidth="1px" borderRadius="md" p={4} bg="gray.700"> {/* Contenedor con estilos */}
        <TableContainer>
          <Table variant="simple" color="white"> 
            <Thead>
              <Tr>
                <Th>FECHA</Th>
                <Th>TIPO DE EVENTO</Th>
                <Th>UBICACIÓN</Th>
                <Th>NIVEL DE RIESGO</Th>
                <Th>ESTADO</Th>
              </Tr>
            </Thead>
            <Tbody>
              {alerts.map((alert) => (
               <Tr key={alert.id} onClick={() => handleAlertClick(alert)}>
               <Td>{alert.fecha}</Td>
               <Td>{alert.tipoEvento}</Td>
               <Td>{alert.ubicacion}</Td>
               <Td>{alert.nivelRiesgo}</Td>
               <Td>{alert.estado}</Td>
             </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Detalles de la alerta</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedAlert && (
                <>
                  <Text fontSize="lg" fontWeight="bold">
                    Fecha: {selectedAlert.fecha}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Tipo de evento: {selectedAlert.tipoEvento}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Ubicación: {selectedAlert.ubicacion}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Nivel de riesgo: {selectedAlert.nivelRiesgo}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    Estado: {selectedAlert.estado}
                  </Text>
                  {/* Puedes añadir más información sobre la alerta aquí */}
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  };
  
  export default AlertHistory;