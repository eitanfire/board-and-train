import React from "react";
import {
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  Group,
  Paper,
  Box,
  Button,
  Grid,
  Card,
  Image,
  Space,
  Divider,
  Accordion,
} from "@mantine/core";
import { IconCheck, IconPaw, IconHeart } from "@tabler/icons-react";
import cookieThePom from "../assets/cookie-the-pom-unsplash.jpg";
import fabianGieske from "../assets/fabian-gieske-unsplash.jpg";
import trainerWithBall from "../assets/trainer-with-ball.png";
import remiImage from "../assets/Remi.jpeg";
import femaleTrainer from "../assets/ftrainer.png";
import maleTrainer from "../assets/mtrainer.png";
import Hero from "./Hero";

const Content: React.FC = () => {
  return (
    <Container size="xl" py="xl">
      <Hero />
      <Box mt="xl">
        {" "}
        <Grid mb="xl" gutter="xl">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box>
              <Title order={2} mb="md">
                A Life-Changing Learning Experience
              </Title>
              <Text mb="lg">
                Forget about old-fashioned, boot camp-style dog training
                programs that use questionable methods and include little (if
                any) instruction for you! Haley's Longmont Camp + Coaching
                programs combine the powerful learning boost that comes through
                positive reinforcement board & train camp, with the lasting
                behavior change that comes through private coaching sessions. So
                you and your dog can live a happier life together.
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Image
              src={femaleTrainer}
              radius="md"
              alt="Happy dog being trained"
              height={280}
              fit="cover"
              style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
            />
          </Grid.Col>
        </Grid>
      </Box>

      <Paper
        p="xl"
        radius="md"
        withBorder
        mb="xl"
        bg="rgba(232, 241, 250, 0.5)"
      >
        <Title order={2} mb="md">
          Camp + Coaching programs are perfect for:
        </Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <List
              spacing="sm"
              size="md"
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Leash reactivity</List.Item>
              <List.Item>Leash manners</List.Item>
              <List.Item>
                Impulse control around food, toys, and doorways
              </List.Item>
              <List.Item>Stay/Settling skills</List.Item>
              <List.Item>Coming when called</List.Item>
            </List>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <List
              spacing="sm"
              size="md"
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Polite manners during greetings</List.Item>
              <List.Item>Confidence building</List.Item>
              <List.Item>
                Comfort with handling, petting, and grooming
              </List.Item>
              <List.Item>...and more!</List.Item>
            </List>
          </Grid.Col>
        </Grid>
        <Space h="md" />
        <Text c="dimmed" fz="sm">
          Note: Board & Train Camp + Coaching programs are not suitable for
          working on potty training goals or separation anxiety issues, or for
          behavior issues that are highly specific to a certain person or
          location (try Private Coaching instead!).
        </Text>
      </Paper>

      {/* How It Works Section */}
      <Title order={2} mb="md">
        How Haley's Board & Train Camp Works:
      </Title>
      <Accordion multiple defaultValue={["before"]} mb="xl">
        <Accordion.Item value="before">
          <Accordion.Control>
            <Text fw={700}>Before Camp</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text mb="xs">You and your coach will:</Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconPaw size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                Set fair, positive goals for you and your dog
              </List.Item>
              <List.Item>
                Determine the environmental setup, relationship dynamics,
                wellness routines, and skills and/or behavior therapy exercises
                you and your dog will need, to achieve your goals and support
                your dog's behavioral health
              </List.Item>
              <List.Item>
                Get started with pre-camp training exercises that prep your dog
                to get the most out of their camp experience
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="during">
          <Accordion.Control>
            <Text fw={700}>During Camp</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text mb="xs">Your coach will:</Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconPaw size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                Provide your dog with daily, positive training & behavior
                modification sessions to move you and your dog closer to your
                goals
              </List.Item>
              <List.Item>
                Work with our canine care team to implement your dog's canine
                behavioral health support plan while they are at camp
              </List.Item>
              <List.Item>
                Track and log behavior & training progress, adjusting as needed
              </List.Item>
              <List.Item>
                Communicate frequently to share new insights about your dog,
                their learning style and their behavioral needs; to share
                successes; and to collaborate on potential program or mission
                adjustments as needed
              </List.Item>
              <List.Item>
                Include you in the learning process via at-home learning
                materials and in-facility coaching sessions with your dog (the
                number of in-camp coaching sessions will be determined by your
                coach, but it is generally about 1 per week)
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="after">
          <Accordion.Control>
            <Text fw={700}>After Camp</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text mb="xs">You will:</Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconPaw size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                Continue where camp left off, with continued private coaching
                sessions
              </List.Item>
              <List.Item>
                Continue to track and log progress, and communicate frequently
                with your coach via your Collaborative Coaching board
              </List.Item>
              <List.Item>
                Become part of our alumni family, and have the option to attend
                our free and/or low-cost alumni classes, participate in
                twice-monthly Zoom Q&A's, and get support in our alumni-only
                Facebook group.
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Paper
        p="xl"
        radius="md"
        withBorder
        mb="xl"
        bg="rgba(245, 248, 250, 0.8)"
      >
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Text size="lg">
              Haley's Longmont's Camp + Coaching programs cost $1395/week and
              are designed for dogs ages 5 months and older (if you have a dog
              younger than 5 months, try Puppy Camp!). Dogs stay at our
              beautiful Longmont facility. Programs last between 1-4 weeks and
              include private coaching sessions for you, plus lifetime access to
              free and/or low-cost alumni classes.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Image
              src={trainerWithBall}
              alt="Trainer with ball"
              radius="md"
              height={200}
              fit="contain"
            />
          </Grid.Col>
        </Grid>
      </Paper>

      <Title order={2} ta="center" mb="xl">
        Meet Our Expert Trainers
      </Title>
      <Grid gutter="xl" mb="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
            <Grid>
              <Grid.Col span={5}>
                <Image
                  src={femaleTrainer}
                  alt="Female trainer"
                  radius="md"
                  height={180}
                  fit="cover"
                />
              </Grid.Col>
              <Grid.Col span={7}>
                <Title order={3} size="h4" mb="xs">
                  Sarah Johnson
                </Title>
                <Text size="sm" mb="md" c="dimmed">
                  Certified Dog Trainer
                </Text>
                <Text size="sm">
                  Sarah specializes in behavior modification and has 8+ years of
                  experience working with dogs of all breeds and sizes. Her
                  patient approach helps anxious dogs build confidence.
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
            <Grid>
              <Grid.Col span={5}>
                <Image
                  src={maleTrainer}
                  alt="Male trainer"
                  radius="md"
                  height={180}
                  fit="cover"
                />
              </Grid.Col>
              <Grid.Col span={7}>
                <Title order={3} size="h4" mb="xs">
                  Michael Torres
                </Title>
                <Text size="sm" mb="md" c="dimmed">
                  Senior Dog Behavior Specialist
                </Text>
                <Text size="sm">
                  Michael has worked with over 500 dogs and specializes in leash
                  reactivity and confidence building. His energy and enthusiasm
                  make training sessions fun and effective.
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
      </Grid>

      <Box py="xl" mb="xl">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title order={2} mb="lg">
              Ready to Get Started?
            </Title>
            <Text mb="xl" size="lg">
              Book a free discovery call with our Facility Program Manager,
              Vanesa Vizuete, so we can learn more about whether Camp + Coaching
              might be the right fit for you and your pup! Or, connect with us
              now at 971-358-8787 or Longmont@haleysdogtraining.com. Our client
              services team would love to learn more about your dog and your
              goals, and help you determine the best way to get started with us!
            </Text>
            <Button size="lg" radius="md" color="blue">
              Book Your Free Discovery Call
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Image
              src={remiImage}
              radius="md"
              alt="Remi the dog"
              height={300}
              fit="cover"
              style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
            />
          </Grid.Col>
        </Grid>
      </Box>

      <Divider my="xl" />

      <Title order={2} ta="center" mb="xl">
        Behavioral Health Facility
      </Title>

      <Grid gutter="xl" mb="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
            <Card.Section>
              <Image
                src={cookieThePom}
                height={200}
                alt="Our facility"
                fit="cover"
              />
            </Card.Section>
            <Box pt="md">
              <Title order={3} mb="sm">
                Located in Longmont, CO
              </Title>
              <Text>
                Located in the St. John's neighborhood of Longmont, CO, our
                Behavioral Health Facility is home to both Haley's Longmont and
                the Animal Behavior Clinic of Longmont, which gives access to
                veterinary behaviorists, certified veterinary technicians,
                certified behavior consultants and trainers, & our skilled,
                compassionate care staff all under the same roof. Like all
                Haley's facilities, we are staffed 24/7.
              </Text>
            </Box>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
            <Card.Section>
              <Image
                src={fabianGieske}
                height={200}
                alt="Outdoor play yards"
                fit="cover"
              />
            </Card.Section>
            <Box pt="md">
              <Title order={3} mb="sm">
                Outdoor Play Yards & Versatile Neighborhoods
              </Title>
              <Text>
                We have multiple fenced outdoor play yards where dogs can run,
                play, and train, either in small groups or individually. Our
                property includes beautiful landscaping for enriching
                sniff-walks, and off-property walks can be tailored for each
                dog's needs as we are nestled between quiet neighborhoods and
                parks or more busy city streets depending on which direction you
                take.
              </Text>
            </Box>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
            <Card.Section>
              <Image
                src={remiImage}
                height={200}
                alt="Learning environment"
                fit="cover"
              />
            </Card.Section>
            <Box pt="md">
              <Title order={3} mb="sm">
                Designed for Learning
              </Title>
              <Text>
                Our campus is designed to facilitate learning and support the
                behavioral health of dogs in our care. From enrichment and
                activity stations, to traffic flow and temperature sensors,
                every element is selected to help dogs and humans feel relaxed
                and comfortable.
              </Text>
            </Box>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
            <Card.Section>
              <Image
                src={trainerWithBall}
                height={200}
                alt="Real-life rooms"
                fit="cover"
              />
            </Card.Section>
            <Box pt="md">
              <Title order={3} mb="sm">
                'Real Life' Rooms
              </Title>
              <Text>
                Our real-life learning spaces allow for effective teaching and
                behavior therapy that transfers back home – whether working on
                guest protocol, mealtime manners, or "home office etiquette".
              </Text>
            </Box>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Important Facts Section */}
      <Title order={2} mb="xl" ta="center">
        8 Important Facts about Haley's Camp + Coaching
      </Title>

      <Accordion multiple mb="xl">
        <Accordion.Item value="fact1">
          <Accordion.Control>
            <Text fw={700}>1. It's fantastic…when it's the right fit.</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              Board & Train Camp + Coaching can be a truly life-changing program
              for dogs and their humans, but only when it's the right fit for
              all involved. We will determine whether Camp + Coaching – or
              another program – is the best option for you and your dog during
              your kickoff consultation. When it comes to program suitability,
              we consider not just your training goals, but your dog's
              individual behavior profile and issues, your home environment,
              family/relationship dynamics, your own personal outlook on
              training & behavior, and more.
              <Space h="xs" />
              We want you and your dog to have a positive, productive experience
              with us; that can only happen if we select a program type that is
              well-suited to your goals, your dog, and your situation.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="fact2">
          <Accordion.Control>
            <Text fw={700}>2. Your involvement is required.</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              This program is not structured like a traditional "boot camp",
              where owner instruction is often limited or not provided at all.
              Instead, the included coaching for you begins before camp, then
              continues during camp, and long after your dog goes back home.
              Why? Our goal is to help you create lasting behavior change, in a
              way that protects and enhances their dog's long-term behavioral
              health. That takes time and significant, ongoing involvement from
              you.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="fact3">
          <Accordion.Control>
            <Text fw={700}>3. We move at your dog's pace.</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              Our goal is to help you make as much progress as possible toward
              your goals while your dog is at camp; we will troubleshoot and
              work hard as a team to do so. But we won't add more pressure to
              your dog or force them into situations or circumstances they
              aren't ready for, in an attempt to meet expectations about how
              fast your dog "should" learn. That's why we provide extensive
              post-camp support via collaborative coaching sessions and lifetime
              free alumni classes.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="fact4">
          <Accordion.Control>
            <Text fw={700}>4. We want you to understand your dog better.</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              Our goal is not only to make progress toward your goals, but to
              help you learn a whole lot about your dog in the process. As your
              coach communicates through your dog's Collaborative Coaching
              board, and as you participate in coaching sessions, you will gain
              invaluable insights into your dog's learning style, their
              strengths and their challenges, and how they perceive the world
              around them.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="fact5">
          <Accordion.Control>
            <Text fw={700}>
              5. We use positive methods, and do not use aversive equipment.
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              We do not use aversive equipment such as electronic collars, prong
              collars, and slip chains. If you currently use this equipment with
              your dog, please know there is no judgment cast your way– we KNOW
              how much you love your dog! If you are curious to learn more about
              why and how we do things differently here at Haley's, we welcome
              the opportunity to have that discussion with you in a safe,
              supportive manner.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="fact6">
          <Accordion.Control>
            <Text fw={700}>
              6. We work and problem-solve using a team-based approach.
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              Coaches communicate regularly with our senior behavior leadership
              team, and with your dog's other care providers as necessary, about
              program design and execution during and after your dog's camp.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="fact7">
          <Accordion.Control>
            <Text fw={700}>7. We are not the cheapest option available.</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              Our facilities are staffed 24/7, with a very low staff-to-dog
              ratio. Haley's team members are employees, not independent
              contractors; they have access to benefits such as worker's
              compensation, paid sick time and vacation, healthcare, and more.
              We help with continuing education and certification costs. Our
              team members at every level make a fair, living wage; they are
              also highly skilled, dedicated, and committed to helping our
              clients succeed.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="fact8">
          <Accordion.Control>
            <Text fw={700}>8. We are here to support you and your dog.</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>
              If you are trying your best, we will move mountains to help you
              and your dog live a happier life together (seriously).
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Grid gutter={0} mb="xl">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Image
            src={cookieThePom}
            height={400}
            alt="Happy dog"
            fit="cover"
            style={{ borderRadius: "0 0 0 16px" }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper p="xl" radius={0} h="100%" bg="rgba(232, 241, 250, 0.7)">
            <Title order={2} ta="center" mb="xl">
              What Clients are Saying about Us:
            </Title>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Paper p="lg" radius="md" withBorder mb="md" bg="white">
                  <Group align="apart" mb="xs">
                    <Title order={4}>Lucy, Retha & Family</Title>
                    <ThemeIcon color="yellow" size={32} radius="xl">
                      <IconHeart size={18} />
                    </ThemeIcon>
                  </Group>
                  <Text>
                    "Super professional, effective, and EVERYTHING is all about
                    positive training, nothing negative. I love that. I also
                    love that Julie asked me what we wanted our Great Dane to
                    do, and worked specifically on those things They really
                    listen to what each family needs. I loved Julie so much, I
                    got another Great Dane so she could train her, too!! 😉 I
                    couldn't be happier with the results of BOTH dogs."
                  </Text>
                </Paper>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Paper p="lg" radius="md" withBorder mb="md" bg="white">
                  <Group align="apart" mb="xs">
                    <Title order={4}>Glitchie & Family</Title>
                    <ThemeIcon color="yellow" size={32} radius="xl">
                      <IconHeart size={18} />
                    </ThemeIcon>
                  </Group>
                  <Text>
                    "Jess Stone was absolutely fantastic with Glitchie (g), my
                    little rescue. G was a pandemic puppy and while incredibly
                    playful, was very nervous about encountering people and dogs
                    in our housing area, which manifested as aggression. Jess
                    was great; I watched G pick up life-skills to help her
                    diffuse her energy and anxieties in amazing ways."
                  </Text>
                </Paper>
              </Grid.Col>
            </Grid>
          </Paper>
        </Grid.Col>
      </Grid>

      <Box mt="xl" py="xl" ta="center">
        <Button size="lg" radius="md" color="blue">
          Book Your Free Discovery Call
        </Button>
      </Box>
    </Container>
  );
};

export default Content;
