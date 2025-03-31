import { Link } from "@tanstack/react-router";
import { Container, Flex, Title, Text, AppShell } from "@mantine/core";

const AhimsaHeader = () => {
  return (
    <AppShell c="customColor.5">
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
                marginTop: 5,
                fontFamily: "Habibi, serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 24px)",
                display: "block",
              }}
            >
              A Positive-Only <br className="mantine-hidden-from-xs" /> Board &
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
              { to: "/", label: "Welcome" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-customColor-1"
                style={{
                  textDecoration: "none",
                  fontFamily: "Habibi, serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.8vw, 22px)",
                }}
              >
                {label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </AppShell>
  );
};

export default AhimsaHeader;
