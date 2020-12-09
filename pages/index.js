import Head from "next/head";
import {
  chakra,
  Flex,
  Avatar,
  Divider,
  Grid,
  Box,
  HStack,
  Link,
  Heading,
  Icon,
  IconButton,
  Text,
  Container,
} from "@chakra-ui/react";

const siteConfig = {
  repo: {
    url: "https://github.com/hypeserver/talks",
  },
  discord: {
    url: "discordlink",
  },
  slack: {
    url: "",
  },
};

const DiscordIcon = (props) => (
  <svg viewBox="0 0 146 146" {...props}>
    <path
      fill="currentColor"
      d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
      fillRule="nonzero"
    />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
    />
  </svg>
);

export default function Home() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="3xl" centerContent>
        <Head>
          <title>Hypeserver Talks</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <chakra.header
          transition="box-shadow 0.2s"
          pos="fixed"
          top="0"
          zIndex="1"
          left="0"
          right="0"
          width="full"
        >
          <chakra.div height="10rem" mx="auto" maxW="1200px">
            <Flex
              w="100%"
              h="100%"
              px="6"
              align="center"
              justify="space-between"
            >
              <Flex align="center">
                <img src="/logo.png" width={80} alt="Hypeserver Logo" />
              </Flex>

              <Flex
                justify="flex-end"
                w="100%"
                maxW="824px"
                align="center"
                color="gray.400"
              >
                <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                  <Link
                    isExternal
                    aria-label="Go to Chakra UI GitHub page"
                    href={siteConfig.repo.url}
                  >
                    <Icon
                      as={GithubIcon}
                      transition="color 0.2s"
                      w="5"
                      h="5"
                      _hover={{ color: "gray.600" }}
                    />
                  </Link>
                  <Link
                    isExternal
                    aria-label="Go to Chakra UI Discord page"
                    href={siteConfig.discord.url}
                  >
                    <Icon
                      as={DiscordIcon}
                      transition="color 0.2s"
                      w="5"
                      h="5"
                      _hover={{ color: "gray.600" }}
                    />
                  </Link>
                </HStack>
              </Flex>
            </Flex>
          </chakra.div>
        </chakra.header>
        <Box pt={{ base: "14rem", md: "12rem" }} pb={{ base: "0", md: "5rem" }}>
          <main>
            <Heading mb={5}>Hypeserver Talks</Heading>
            <Text fontSize="xl" opacity={0.7}>
              Welcome to our bi-weekly happy streaming materials.
            </Text>
            <Grid
              mt={10}
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              gap={6}
            >
              <Box w="100%" bg="white" boxShadow="lg" p="6" rounded="md">
                <Text fontSize="sm" opacity={0.5} pb={4}>
                  Feb 12, 2020
                </Text>
                <Divider />
                <Box
                  as="a"
                  target="_blank"
                  rel="noopener"
                  display="flex"
                  pt={4}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Box fontSize="sm" pl={5}>
                    <Heading as="h2" size="md" pb={1}>
                      Master of Github Actions
                    </Heading>
                    <Text size="sm" opacity={0.7}>
                      Kamyar Ghasemlou
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box w="100%" bg="white" boxShadow="lg" p="6" rounded="md">
                <Text fontSize="sm" opacity={0.5} pb={4}>
                  Feb 24, 2020
                </Text>
                <Divider />
                <Box
                  as="a"
                  target="_blank"
                  rel="noopener"
                  display="flex"
                  pt={4}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/kent-c-dodds"
                  />
                  <Box fontSize="sm" pl={5}>
                    <Heading as="h2" size="md" pb={1}>
                      Don't test my happiness
                    </Heading>
                    <Text size="sm" opacity={0.7}>
                      Kerem Sevencan
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box w="100%" bg="white" boxShadow="lg" p="6" rounded="md">
                <Text fontSize="sm" opacity={0.5} pb={4}>
                  March 6, 2020
                </Text>
                <Divider />
                <Box
                  as="a"
                  target="_blank"
                  rel="noopener"
                  display="flex"
                  pt={4}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Box fontSize="sm" pl={5}>
                    <Heading as="h2" size="md" pb={1}>
                      Why you touch my hair?
                    </Heading>
                    <Text size="sm" opacity={0.7}>
                      Eralp Karaduman
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box w="100%" bg="white" boxShadow="lg" p="6" rounded="md">
                <Text fontSize="sm" opacity={0.5} pb={4}>
                  March 18, 2020
                </Text>
                <Divider />
                <Box
                  as="a"
                  target="_blank"
                  rel="noopener"
                  display="flex"
                  pt={4}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Box fontSize="sm" pl={5}>
                    <Heading as="h2" size="md" pb={1}>
                      You need some money
                    </Heading>
                    <Text size="sm" opacity={0.7}>
                      Burak Can
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </main>
        </Box>
        <footer>
          <a href="yoklink" target="_blank" rel="noopener noreferrer">
            © 2020 Hypeserver. Your cool tech dealers.
          </a>
        </footer>
      </Container>
    </Box>
  );
}
