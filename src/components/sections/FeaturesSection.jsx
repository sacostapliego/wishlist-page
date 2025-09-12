import { Container, Heading, SimpleGrid, VStack, Box, Icon, Text } from '@chakra-ui/react';
import { FaStar, FaLock, FaBolt, FaCloud, FaHeart, FaList, FaShareAlt, FaSync } from 'react-icons/fa';

const defaultFeatures = [
  { icon: FaStar, label: 'Modern UI' },
  { icon: FaLock, label: 'Interactive Design' },
  { icon: FaBolt, label: 'Fast Performance' },
  { icon: FaCloud, label: 'Cloud Sync' },
  { icon: FaHeart, label: 'User Favorites' },
  { icon: FaList, label: 'Organized Lists' },
  { icon: FaShareAlt, label: 'Easy Sharing' },
  { icon: FaSync, label: 'Sync' },
];

export default function FeaturesSection({ id = 'features', features = defaultFeatures }) {
  return (
    <Container id={id} maxW="container.lg" py={{ base: 16, md: 24 }}>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        rowGap={{ base: 14, md: 20 }}
        justifyItems="center"
        >
        {features.map((f) => {
            const I = f.icon;
            return (
            <VStack key={f.label} spacing={3} maxW="110px">
                <Box
                h="64px"
                borderRadius="20px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 200ms ease, border-color 200ms ease"
                _hover={{ transform: 'translateY(-6px)', borderColor: 'whiteAlpha.600' }}
                >
                <Icon as={I} boxSize={14} color="whiteAlpha.800" />
                </Box>
                <Text fontSize="3xl" fontWeight="semibold" textAlign="center">
                {f.label}
                </Text>
            </VStack>
            );
        })}
      </SimpleGrid>
    </Container>
  );
}