import { Container, Flex, Title, Text, Anchor } from "@mantine/core";

const AhimsaHeader = () => {
  return (
    <Container size="100%" px="md" py={20}>
      <Flex
        justify="space-between"
        align="end"
        style={{
          borderBottom: "1px solid #8a6e60",
          paddingBottom: "15px",
          fontFamily: "Habibi, serif",
        }}
      >
        <Flex direction="column">
          <Title
            order={1}
            style={{
              color: "#8a6e60",
              marginBottom: 0,
              fontFamily: "Habibi, serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 36px)",
            }}
          >
            Ahimsa House of Dogs
          </Title>
          <Text
            style={{
              color: "#8a6e60",
              marginTop: 5,
              fontFamily: "Habibi, serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 24px)",
              display: "block", // Makes the text a block element
            }}
          >
            A Positive-Only <br className="mantine-hidden-from-md" /> Board &
            Train Program.
          </Text>
        </Flex>

        <Flex
          gap="md"
          align="end"
          style={{
            fontFamily: "Habibi, serif",
            fontWeight: 400,
          }}
        >
          {[
            { href: "/", label: "Welcome" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Anchor
              key={href}
              href={href}
              style={{
                color: "#8a6e60",
                textDecoration: "none",
                fontFamily: "Habibi, serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.8vw, 22px)",
              }}
            >
              {label}
            </Anchor>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default AhimsaHeader;
