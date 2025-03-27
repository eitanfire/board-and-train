import React from "react";
import { Container, Grid, Text, Title, Image, Box } from "@mantine/core";

const HomePage: React.FC = () => {
  return (
    <Container
      style={{
        paddingTop: 50,
        // backgroundColor: "rgba(139, 58, 58, 0.4)", // Reddish-brown overlay with opacity
      }}
    >
      <Grid gutter="lg">
        <Grid.Col span={6}>
          <Box>
            <Text
              style={{ fontSize: "3rem", fontWeight: 2000, color: "#8B3A3A" }}
            >
              Communicate.
            </Text>
            <Text
              style={{ fontSize: "3rem", fontWeight: 2000, color: "#8B3A3A" }}
              mt="sm"
            >
              Connect.
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text
            style={{ fontSize: "5rem", fontWeight: 2000, color: "#8B3A3A" }}
            mt="sm"
          >
            Bond.
          </Text>
        </Grid.Col>
        <Grid.Col>
          <Box>
            <Title style={{ color: "#8B3A3A" }}> Real Support </Title>
            <Text mt="xl" size="lg" style={{ color: "#8B3A3A" }}>
              for dog owners who want more than just instruction.
            </Text>
            <Text mt="md" size="lg" style={{ color: "#8B3A3A" }}>
              Get to know your dog better with full-time support from a
              professional trainer.
            </Text>
            <Text mt="md" size="lg" style={{ color: "#8B3A3A" }}>
              Rest assured, knowing your dog will learn new things without
              experiencing any pain or fear.
            </Text>
            <Text
              mt="xl"
              size="lg"
              style={{ fontWeight: 500, fontSize: "2.75rem", color: "#8B3A3A" }}
            >
              Hello there, I’m Haley.
            </Text>
          </Box>
        </Grid.Col>

        {/* Right Column (Image) */}
        <Grid.Col>
          <div style={{ position: "relative" }}>
            <Image
              src="/src/assets/dog-pet-animal-continuous-one-line-art-drawing-dog-icon-simple-outline-vector-illustration_1083542-648.png"
              alt="Dog Illustration"
              fit="contain"
              width="100%"
            />
            <div
              style={{
                zIndex: -1,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none", // Makes sure the image remains interactive
              }}
            />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HomePage;
