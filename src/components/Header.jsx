import { useEffect, useState, useRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Stack,
  Text,
  Drawer,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
    { label: 'Frontend', to: '/frontend' },
    { label: 'Backend', to: '/backend' },
  ];

export default function Header({ brand = 'BluJays Wishlist', transparentUntil = '#hero', wishlistUrl }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overTransparentZone, setOverTransparentZone] = useState(true);
    const headerRef = useRef(null);
  
    useEffect(() => {
      const update = () => {
        const el = document.querySelector(transparentUntil);
        const headerH = headerRef.current?.offsetHeight ?? 64;
        if (!el) return setOverTransparentZone(false);
        const rect = el.getBoundingClientRect();
        // Transparent while the header overlaps the target section
        setOverTransparentZone(rect.bottom > headerH);
      };
      update();
      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      return () => {
        window.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
      };
    }, [transparentUntil]);
  
    const bg = overTransparentZone ? 'transparent' : 'blackAlpha.700';
    const borderColor = overTransparentZone ? 'transparent' : 'whiteAlpha.200';
  
    return (
        <Box
          ref={headerRef}
          as="header"
          position="sticky"
          top={0}
          zIndex="banner"
          bg={bg}
          color="whiteAlpha.900"
          borderBottomWidth="1px"
          borderBottomColor={borderColor}
          transition="background-color 0.2s ease, border-color 0.2s ease"
        >
          <Flex
            as="nav"
            mx="auto"
            w="100%"
            maxW="7xl"
            px={{ base: 4, md: 6 }}
            h="96px"
            align="center"
            justify="space-between"
          >
        {/* Left: Brand */}
        <HStack spacing={3}>
          <Box boxSize="24px" borderRadius="6px" bgGradient="linear(to-br, blue.500, cyan.400)" />
          <ChakraLink as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Text fontWeight="semibold" letterSpacing="-0.02em" fontSize="x-large">
              {brand}
            </Text>
          </ChakraLink>
        </HStack>

        {/* Right: Desktop nav */}
        <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
        {navLinks.map((l) => (
                    <Button
                      key={l.label}
                      as={RouterLink}
                      to={l.to}
                      variant="ghost"
                      justifyContent="flex-start"
                      onClick={onClose}
                    >
                      {l.label}
                    </Button>
                  ))}
          <HStack spacing={2} pl={2}>
            <Button
              as="a"
              href={wishlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              size="lg"
              padding={6}
              color={"white"}
              backgroundColor={"#1e1e1e"}
            >
              Go To Wishlist App
            </Button>
          </HStack>
        </HStack>

        {/* Mobile: Hamburger */}
        <IconButton
          aria-label="Open menu"
          variant="ghost"
          display={{ base: 'inline-flex', md: 'none' }}
          onClick={onOpen}
          icon={<GiHamburgerMenu />}
        />

        {/* Chakra Drawer */}
        <Drawer.Root placement="right" open={isOpen} onOpenChange={(e) => (e.open ? onOpen() : onClose())}>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Title>Menu</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Stack spacing={2} pt={2}>
                {navLinks.map((l) => (
                    <Button
                      key={l.label}
                      as={RouterLink}
                      to={l.to}
                      variant="ghost"
                      justifyContent="flex-start"
                      onClick={onClose}
                    >
                      {l.label}
                    </Button>
                  ))}
                  <Button as="a" href={wishlistUrl} colorScheme="blue" onClick={onClose}>Get started</Button>
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Flex>
    </Box>
  );
}