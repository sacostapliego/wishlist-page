import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export default function Landing() {
  return (
    <VStack align="start" spacing={16} pt={8}>
      <Container id="hero" maxW="container.lg">
        <Heading size="2xl" mb={4}>Build wishlists fast</Heading>
        <Text fontSize="lg" opacity={0.8}>
          A short hero section so you can scroll and see the header become transparent.
        </Text>
        <Box h="50vh" />
      </Container>

      <Container id="features" maxW="container.lg">
        <Heading size="xl" mb={4}>Features</Heading>
        <Text opacity={0.8}>Feature copy goes here.</Text>
        <Box h="120vh" />
      </Container>

      <Container id="pricing" maxW="container.lg">
        <Heading size="xl" mb={4}>Pricing</Heading>
        <Box h="80vh" />
      </Container>

      <Container id="faqs" maxW="container.lg" pb={24}>
        <Heading size="xl" mb={4}>FAQs</Heading>
        <Box h="60vh" />
      </Container>
    </VStack>
  );
}