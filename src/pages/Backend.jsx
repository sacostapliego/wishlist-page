import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import FeaturesSection from '../components/sections/FeaturesSection';
import { FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiExpo, SiRender } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";


const defaultFeatures = [
  { icon: FaPython, label: 'Python Support' },
  { icon: RiSupabaseFill, label: 'Database Integration' },
  { icon: FaAws, label: 'Image Handling' },
  { icon: SiRender, label: 'API Deployment' },
];

export default function Backend() {
  return (
    <VStack align="start" spacing={12} pt={8}>
      <Container 
        id="hero"
        maxW="container.lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Text mb={14} fontSize="xl" fontWeight="bold">
          [IMAGE OF BACKEND ARCHITECTURE DIAGRAM HERE]
        </Text>
      </Container>
      <FeaturesSection features={defaultFeatures} />
    </VStack>
  );
}