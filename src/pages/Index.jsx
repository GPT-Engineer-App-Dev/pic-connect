import { Box, Container, Flex, VStack, HStack, Text, Button, Image, Spacer, Link } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="2xl" fontWeight="bold">PhotoShare</Text>
        <Spacer />
        <HStack spacing={4}>
          <Button leftIcon={<FaHome />} variant="ghost" color="white">Home</Button>
          <Button leftIcon={<FaUser />} variant="ghost" color="white">Profile</Button>
          <Button leftIcon={<FaUpload />} variant="ghost" color="white">Upload</Button>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={4}>
        {/* Sidebar */}
        <Box w="25%" p={4} bg="gray.100" borderRadius="md">
          <VStack spacing={4}>
            <Box textAlign="center">
              <Image borderRadius="full" boxSize="100px" src="https://via.placeholder.com/100" alt="Profile Picture" />
              <Text mt={2} fontSize="lg" fontWeight="bold">User Name</Text>
            </Box>
            <Box w="100%">
              <Text fontSize="md" fontWeight="bold" mb={2}>Suggested Friends</Text>
              <VStack spacing={2} align="start">
                <Text>User 1</Text>
                <Text>User 2</Text>
                <Text>User 3</Text>
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Feed */}
        <Box w="75%" p={4}>
          <VStack spacing={4}>
            <Box w="100%" bg="gray.100" p={4} borderRadius="md">
              <Image src="https://via.placeholder.com/600x400" alt="Photo 1" />
              <Text mt={2}>Caption for Photo 1</Text>
            </Box>
            <Box w="100%" bg="gray.100" p={4} borderRadius="md">
              <Image src="https://via.placeholder.com/600x400" alt="Photo 2" />
              <Text mt={2}>Caption for Photo 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="blue.500" color="white" p={4} mt={4} justify="center">
        <HStack spacing={4}>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
          <Link href="#" color="white">Privacy Policy</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;