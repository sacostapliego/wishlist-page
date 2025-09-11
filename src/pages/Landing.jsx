import { Box, Container, Heading, HStack, Text, VStack, Image} from '@chakra-ui/react';

import photo1 from '../assets/screenshots/1.png';
import photo2 from '../assets/screenshots/2.png';
import photo3 from '../assets/screenshots/3.png';

export default function Landing() {
  return (
    <VStack align="start" spacing={12} pt={8}>
      <Container 
      id="hero" 
      maxW="container.lg" 
      display={'flex'} 
      flexDirection={'column'} 
      alignItems={'center'}
      textAlign={'center'}
      >
        <Text mb={16} fontSize={'6xl'} fontWeight={'bold'}> 
          A modern way to create, share, and manage your wishlist.
        </Text>
         <HStack justify={"center"} gap={8} w={'full'} flex={1}>
          <Image shadow={"md"} borderRadius={6} h={"2xl"} src={photo2}/>
          <Image shadow={"md"} borderRadius={6} h={"3xl"} src={photo1}/>
          <Image shadow={"md"} borderRadius={6} h={"2xl"} src={photo3}/>
         </HStack>
        <Box h="50vh" />
      </Container>

      <Container id="features" maxW="container.lg">
        <Heading size="xl" mb={4}>Features</Heading>
        <Text opacity={0.8}>Feature copy goes here.</Text>
        <Box h="120vh" />
      </Container>
    </VStack>
  );
}