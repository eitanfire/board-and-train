import React from "react";
import { Container, Flex, Title, Text, Anchor } from "@mantine/core";

const AhimsaHeader = () => {
  return (
    <Container size="lg" py={20}>
      <Flex
        justify="space-between"
        align="center"
        style={{
          borderBottom: "1px solid #8a6e60",
          paddingBottom: "15px",
          fontFamily: '"Habibi", serif',
        }}
      >
        <Flex direction="column">
          <Title
            order={1}
            size={24}
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
            size="sm"
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
          style={{
            fontFamily: '"Habibi", serif',
            fontWeight: 400,
          }}
        >
          <Anchor
            href="/"
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
