import { Container, Heading, SimpleGrid, VStack, Box, Icon, Text } from '@chakra-ui/react';
import { FaLock, FaUserFriends, FaStar, FaList, FaShareAlt, FaSync } from 'react-icons/fa';
import { FaGift } from "react-icons/fa6";
import { PiHandTapFill } from "react-icons/pi";

const defaultFeatures = [
  { icon: FaStar, label: 'Unique\nWishlists' },
  { icon: FaUserFriends, label: 'Friend\nSharing' },
  { icon: FaGift, label: 'Item\nDetails' },
  { icon: FaList, label: 'Organized\nLists' },
  { icon: FaShareAlt, label: 'Modern\nDesign' },
  { icon: PiHandTapFill, label: 'Responsive\nLayout' },
  { icon: FaLock, label: 'Secure\nLogin' },
  { icon: FaSync, label: 'Real-time\nSync' },
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
            <VStack key={f.label} spacing={3}>
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
                <Text fontSize="3xl" fontWeight="semibold" textAlign="center" whiteSpace="pre-line">
                    {f.label}
                </Text>
            </VStack>
            );
        })}
      </SimpleGrid>
    </Container>
  );
}