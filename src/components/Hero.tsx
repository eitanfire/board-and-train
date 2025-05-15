import { Box, Overlay, Title, Text, Paper, Container } from "@mantine/core";
import fabianGieske from "../assets/fabian-gieske-unsplash.jpg";

const Hero = () => {
  return (
    <Paper withBorder p="xl" radius="md" bg="orange.0">
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          withBorder
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${fabianGieske})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.9) 100%)"
            opacity={0.85}
            zIndex={0}
            radius="md"
          />

          <Container
            size="lg"
            style={{ position: "relative", zIndex: 1, textAlign: "center" }}
          >
            <Title order={1} mb="md">
              Board & Train Camp + Coaching
            </Title>
            <Title order={3} mb="lg" fw={400} c="dimmed">
              Our Most Comprehensive Educational Program
            </Title>
            <Text size="lg" mb="lg">
              Struggling with your dog's training or behavior? Let us give you
              and your dog the skills you need to confidently navigate life
              together, with a fully customized, positive reinforcement Camp +
              Coaching program with Haley's Longmont.
            </Text>
          </Container>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Hero;
