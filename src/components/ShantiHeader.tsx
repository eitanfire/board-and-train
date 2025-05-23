import { Link } from "@tanstack/react-router";
import { Container, Flex, Title, AppShell } from "@mantine/core";

const ShantiHeader = () => {
  return (
    <AppShell c="customColor.6">
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
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Title
                c="customColor.6"
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
            </Link>
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
                style={{
                  textDecoration: "none",
                  fontFamily: "Habibi, serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.8vw, 22px)",
                  color: "#8a6e60",
                }}
              >
                {label}
              </Link>
            ))}
          </Flex>
        </Flex>
        A positive reinforcement board & train program for dogs… and their
        people.
      </Container>
    </AppShell>
  );
};

export default ShantiHeader;
