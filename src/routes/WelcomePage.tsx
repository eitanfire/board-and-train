import React from "react";
import {
  Container,
  Grid,
  Text,
  Title,
  List,
  Box,
  AppShell,
} from "@mantine/core";

const WelcomePage: React.FC = () => {
  return (
    <AppShell c="customColor.6" h="100vh">
      <Container style={{ paddingTop: 50, position: "relative" }}>
        <Grid gutter="lg">
          <Grid.Col span={6}>
            <Box>
              <Text
                ta="right"
                style={{
                  fontSize: "clamp(2.25rem, 3vw, 3.25rem)",
                  fontWeight: 2000,
                  lineHeight: "1.2",
                }}
              >
                Communicate.
              </Text>
              <Text
                ta="end"
                style={{
                  fontSize: "clamp(2.25rem, 3vw, 3.25rem)",
                  fontWeight: 2000,
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
                fontSize: "clamp(5rem, 6.75dvw, 7.25rem)",
                fontWeight: 2000,
                lineHeight: "1.2",
              }}
            >
              Bond.
            </Text>
          </Grid.Col>

          <Grid.Col style={{ position: "relative", minHeight: "500px" }}>

            <Box
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px",
              }}
            >
              <Title
                fs="italic"
                style={{
                  lineHeight: "1.2",
                  marginBottom: "10px",
                  fontWeight: 400,
                  fontSize: "clamp(2.75rem, 3vw, 3.25rem)",
                }}
              >
                Real Support
              </Title>
              <Box style={{ fontWeight: 500, fontSize: "2rem" }}>
                {" "}
                <Text
                  size="lg"
                  style={{
                    textIndent: "70px",
                    lineHeight: "1.5",
                    marginBottom: "10px",
                    fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                  }}
                >
                  for dog owners who want more than <em>just</em> instruction.
                </Text>
                &nbsp;
                <Text
                  style={{
                    textIndent: "70px",
                    lineHeight: "1.5",
                    marginBottom: "10px",
                    fontSize: "clamp(1.25rem, 1.5vw, 1.75rem)",
                  }}
                >
                  I used to think boarding and training your dog was a copout.
                  How will you bond with your dog if you outsource all the
                  training? Owners need to understand the training process in
                  order to understand their dogs. It is our responsibility as
                  dog lovers to learn how dogs communicate and grow. There is
                  some truth to these ideals, but/and… Over the years my own
                  life got a lot more complicated. I got married, started a
                  family, and found myself with FAR less time to dedicate to my
                  animals. Becoming a parent made me rethink just about
                  everything in life, including the board and train model of dog
                  training. Just as it takes a village to raise a child, why
                  shouldn’t it take a village to train a dog? I started to see
                  the board and train model as a form of deep support for people
                  who might be struggling (because the struggle can be real) and
                  who are also completely dedicated to their pet’s well-being. I
                  have designed my stay & train program (aka board & train)
                </Text>
                &nbsp;
                <Text
                  ta="right"
                  size="lg"
                  style={{
                    lineHeight: "1.5",
                    fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                  }}
                >
                  Get to know your dog better{" "}
                  <Box
                    style={{
                      display: "block", // Changed from inline-block to block
                      fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                      marginBottom: "1rem", // Add spacing between blocks
                    }}
                  >
                    <Text
                      style={{
                        display: "inline",
                        fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                      }}
                    >
                      with
                    </Text>{" "}
                    <Text
                      td="underline"
                      style={{
                        display: "inline",
                        fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                      }}
                    >
                      full-time support
                    </Text>{" "}
                    <Text
                      style={{
                        display: "inline",
                        fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        WebkitHyphens: "auto",
                        msHyphens: "auto",
                        overflow: "visible",
                        lineHeight: 1.3,
                        lang: "en",
                      }}
                    >
                      from a professional trainer.
                    </Text>
                  </Box>
                </Text>
                &nbsp;
                <Text
                  style={{
                    textIndent: "70px",
                    lineHeight: "1.5",
                    marginBottom: "10px",
                    fontSize: "clamp(1.25rem, 1.5vw, 1.75rem)",
                  }}
                >
                  I’ve already spent years and dollars developing my knowledge
                  and skills as a dog trainer, so why should you?
                </Text>
                &nbsp;
                <Box
                  style={{
                    maxWidth: "100%",
                  }}
                >
                  <Text
                    size="lg"
                    style={{
                      display: "block", // Ensure this is a block element
                      lineHeight: "1.5",
                      fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                    }}
                  >
                    Rest assured, knowing your dog will{" "}
                    <em>learn new things </em>
                    without experiencing any pain or fear.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
              }}
            >
              &nbsp; &nbsp;
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontSize: "clamp(2.25rem, 2vw, 2.75rem)",
                }}
              >


    <Text
      style={{
        lineHeight: "1.5",
        marginBottom: "30px",
        fontSize: "clamp(1.25rem, 1.5vw, 1.75rem)",
        width: "100%", 
      }}
    >
      <div style={{ textIndent: "70px" }}>
        My top priority for dogs in my care is to minimize stress and
        to never ever create any new fear or anxiety (understanding
        that some dogs come to me with existing fears and anxieties).
        I accomplish this do-no-harm approach by adhering to the
        following:{" "}
      </div>
      <List 
        type="ordered"
        style={{ 
          paddingLeft: "70px",
          marginTop: "10px" 
        }}
      >
        <List.Item>
          I only use positive reinforcement training methods—{" "}
          <em>only</em>.
        </List.Item>
        <List.Item>
          Dogs stay in my quiet and calm home training environment.
        </List.Item>
        <List.Item>
          We engage in tons of enrichment and play.
        </List.Item>
      </List>
    </Text>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    size="lg"
                    style={{
                      zIndex: 2,
                      fontWeight: 500,
                      fontSize: "clamp(2.5rem, 2.5vw, 3rem)",
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
                      fontSize: "clamp(2.5rem, 2.5vw, 3rem)",
                      lineHeight: "1.2",
                    }}
                  >
                    I'm Haley.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
};

export default WelcomePage;
