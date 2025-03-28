import { Container, Flex, Title, Text, Anchor } from "@mantine/core";

const AhimsaHeader = () => {
  return (
    <Container size="lg" py={20}>
      <Flex
        justify="space-between"
        align="end"
        style={{
          borderBottom: "1px solid #8a6e60",
          paddingBottom: "15px",
          fontFamily: '"Habibi", serif',
        }}
      >
        <Flex direction="column">
          <Title
            order={1}
            size={30}
            style={{
              color: "#8a6e60",
              marginBottom: 0,
              fontFamily: '"Habibi", serif',
              fontWeight: 400,
            }}
          >
            Ahimsa House of Dogs
          </Title>
          <Text
            size="xl"
            style={{
              color: "#8a6e60",
              marginTop: 5,
              fontFamily: '"Habibi", serif',
              fontWeight: 400,
            }}
          >
            A Positive-Only Board & Train Program.
          </Text>
        </Flex>

        <Flex
          gap="md"
          align="end"
          style={{
            fontFamily: '"Habibi", serif',
            fontWeight: 400,
          }}
        >
          <Anchor
            href="/"
            size="lg"
            style={{
              color: "#8a6e60",
              textDecoration: "none",
              fontFamily: '"Habibi", serif',
              fontWeight: 400,
            }}
          >
            Welcome
          </Anchor>
          <Anchor
            href="/about"
            size="lg"
            style={{
              color: "#8a6e60",
              textDecoration: "none",
              fontFamily: '"Habibi", serif',
              fontWeight: 400,
            }}
          >
            About
          </Anchor>
          <Anchor
            href="/contact"
            size="lg"
            style={{
              color: "#8a6e60",
              textDecoration: "none",
              fontFamily: '"Habibi", serif',
              fontWeight: 400,
            }}
          >
            Contact
          </Anchor>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AhimsaHeader;
