import React from "react";
import { Container, Grid, Text, Title, Image, Box } from "@mantine/core";

const HomePage: React.FC = () => {
  return (
    <Container style={{ paddingTop: 50, position: "relative" }}>
      <Grid gutter="lg">
        <Grid.Col span={6}>
          <Box>
            <Text
              ta="right"
              style={{
                fontSize: "3rem",
                fontWeight: 2000,
                color: "#8a6e60", // Brownish-Green
                lineHeight: "1.2",
              }}
            >
              Communicate.
            </Text>
            <Text
              ta="right"
              style={{
                fontSize: "3rem",
                fontWeight: 2000,
                color: "#8a6e60",
                lineHeight: "1.2",
              }}
            >
              Connect.
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text
            style={{
              fontSize: "6.75rem",
              fontWeight: 2000,
              color: "#8a6e60",
              lineHeight: "1.2",
            }}
          >
            Bond.
          </Text>
        </Grid.Col>

        <Grid.Col style={{ position: "relative", minHeight: "500px" }}>
          <Box
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              opacity: 0.2, // Light opacity for readability
              zIndex: 1,
            }}
          >
            <Image
              src="/src/assets/dog-pet-animal-continuous-one-line-art-drawing-dog-icon-simple-outline-vector-illustration_1083542-648.png"
              alt="Dog Illustration"
              fit="contain"
              width="100%"
              height="100%"
            />
          </Box>

          <Box
            style={{
              position: "relative",
              zIndex: 2,
              color: "#8a6e60",
              padding: "20px",
            }}
          >
            <Title
              fs="italic"
              style={{
                lineHeight: "1.2",
                marginBottom: "10px",
                fontWeight: 400,
                fontSize: "3rem",
              }}
            >
              Real Support
            </Title>
            <Box style={{ fontWeight: 500, fontSize: "2rem" }}>
              {" "}
              {/* Increased from 2.75rem to 3rem */}
              <Text
                size="lg"
                style={{
                  textIndent: "70px",
                  lineHeight: "1.5",
                  marginBottom: "10px",
                  fontSize: "2.5rem",
                }}
              >
                for dog owners who want more than <em>just</em> instruction.
              </Text>
              &nbsp;
              <Text
                ta="right"
                size="lg"
                style={{
                  lineHeight: "1.5",
                  marginBottom: "10px",
                  fontSize: "2.5rem",
                }}
              >
                Get to know your dog better
              </Text>
              <Box
                style={{
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  fontSize: "2.5rem",
                }}
              >
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    fontSize: "2.5rem",
                  }}
                >
                  with
                </Text>{" "}
                <Text
                  td="underline"
                  style={{
                    display: "inline-block",
                    fontSize: "2.5rem",
                  }}
                >
                  full-time support
                </Text>{" "}
                <Text
                  style={{
                    display: "inline-block",
                    fontSize: "2.5rem",
                  }}
                >
                  from a professional trainer.
                </Text>
              </Box>
              &nbsp;
              <Text
                size="lg"
                style={{
                  lineHeight: "1.5",
                  marginBottom: "10px",
                  fontSize: "2.5rem",
                }}
              >
                Rest assured, knowing your dog will <em>learn new things </em>
                without experiencing any pain or fear.
              </Text>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              fontSize: "2.5rem",
            }}
          >
            <Text
              size="lg"
              style={{
                zIndex: 2,
                fontWeight: 500,
                fontSize: "2.75rem",
                color: "#8a6e60",
                lineHeight: "1.2",
                marginRight: "0.5rem",
              }}
            >
              Hello there,
            </Text>
            <Text
              fs="italic"
              style={{
                zIndex: 2,
                fontWeight: 500,
                fontSize: "2.75rem",
                color: "#8a6e60",
                lineHeight: "1.2",
              }}
            >
              I'm Haley.
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HomePage;
