import { Container, Grid, Box, Center } from "@mantine/core";

import { AppShell } from "@mantine/core";

const AboutPage = () => {
  return (
    <AppShell c="customColor.5">
      <Container style={{ paddingTop: 50, position: "relative", fontSize: "2rem" }}>
        <Center>
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, md: 8 }} offset={{ md: 2 }}>
              <Box style={{ textAlign: "center" }}>
                <div>
                  <h1>About Me</h1>
                  <p>
                    I'm Haley! I'm dedicated to providing the best services for
                    your pet's training and care.
                  </p>
                  <p>I am here to help you and your furry friends.</p>
                </div>
              </Box>
            </Grid.Col>
          </Grid>
        </Center>
      </Container>
    </AppShell>
  );
};

export default AboutPage;
