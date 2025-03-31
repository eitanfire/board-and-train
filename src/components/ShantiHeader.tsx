import { Link } from "@tanstack/react-router";
import { Container, Flex, Title, Text, AppShell } from "@mantine/core";

const ShantiHeader = () => {
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
              Shanti Stay & Train
            </Title>
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
              { to: "/", label: "welcome" },
              { to: "/about", label: "about" },
              { to: "/contact", label: "contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
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
        A positive reinforcement board and train program for dogs.
      </Container>
    </AppShell>
  );
};

export default ShantiHeader;
