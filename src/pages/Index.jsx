import { Container, Text, VStack, Button, useToast } from "@chakra-ui/react";
import { FaFilePdf, FaFileWord } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleConversion = () => {
    // Simulate the conversion process
    toast({
      title: "Conversion Started",
      description: "Your PDF is being converted to an editable Word document.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      toast({
        title: "Conversion Successful",
        description: "Your document has been converted. Check your downloads folder.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 3000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">PDF to Word Converter</Text>
        <Text>Convert your PDF documents to editable Word format with high accuracy OCR, preserving layout and specialized support for the Lao language.</Text>
        <Button leftIcon={<FaFilePdf />} colorScheme="red" onClick={handleConversion}>
          Convert PDF
        </Button>
        <Button leftIcon={<FaFileWord />} colorScheme="blue">
          Download Word
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
