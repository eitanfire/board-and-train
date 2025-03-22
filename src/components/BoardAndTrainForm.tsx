import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  Group,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Checkbox,
  Button,
  Card,
  Image,
  Grid,
  Divider,
  Box,
  Stepper,
  FileInput,
  Anchor,
  List,
  Paper,
  Stack,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconCheck,
} from "@tabler/icons-react";

// Styles could be defined here or in a separate file
const PRIMARY_COLOR = "#3B82F6"; // A nice blue color

interface TrainingProgram {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: number;
  image: string;
}

const trainingPrograms: TrainingProgram[] = [
  {
    id: "basic",
    title: "Basic Obedience",
    duration: "2 Weeks",
    description:
      "Perfect for puppies or dogs needing to learn basic commands and manners.",
    price: 1200,
    image: "/images/basic-training.jpg",
  },
  {
    id: "advanced",
    title: "Advanced Obedience",
    duration: "3 Weeks",
    description:
      "For dogs that know the basics but need more reliable behaviors in distracting environments.",
    price: 1800,
    image: "/images/advanced-training.jpg",
  },
  {
    id: "behavioral",
    title: "Behavioral Modification",
    duration: "4 Weeks",
    description:
      "Specialized program for dogs with specific behavioral issues like anxiety, reactivity, or aggression.",
    price: 2400,
    image: "/images/behavioral-training.jpg",
  },
];

const BoardAndTrainForm: React.FC = () => {
  const [active, setActive] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      // Owner Information
      ownerName: "",
      email: "",
      phone: "",
      address: "",

      // Dog Information
      dogName: "",
      breed: "",
      age: null as number | null,
      gender: "" as "Male" | "Female" | "",
      weight: null as number | null,
      neutered: false,

      // Program Details
      programId: "",
      startDate: null as Date | null,
      specialRequirements: "",
      dietaryRestrictions: "",
      medications: "",

      // Additional Services
      extraGrooming: false,
      advancedTrainingTools: false,
      inHomeFollowUp: false,

      // Agreements
      agreeToPolicies: false,
      agreeToPayment: false,
    },

    validate: {
      ownerName: (value) =>
        value.trim().length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^\d{10}$/.test(value.replace(/\D/g, ""))
          ? null
          : "Please enter a valid 10-digit phone number",
      dogName: (value) =>
        value.trim().length < 1 ? "Dog name is required" : null,
      breed: (value) => (value.trim().length < 2 ? "Breed is required" : null),
      age: (value) => (value === null ? "Age is required" : null),
      gender: (value) => (!value ? "Please select gender" : null),
      programId: (value) =>
        !value ? "Please select a training program" : null,
      startDate: (value) => (!value ? "Please select a start date" : null),
      agreeToPolicies: (value) =>
        !value ? "You must agree to our policies" : null,
      agreeToPayment: (value) =>
        !value ? "You must agree to the payment terms" : null,
    },
  });

  const validateFields = () => {
    if (active === 0) {
      return form.validate();
    }
    if (active === 1) {
      return form.validate();
    }
    if (active === 2) {
      return form.validate();
    }
    return form.validate();
  };

  const nextStep = () => {
    const validation = validateFields();
    if (!validation.hasErrors) {
      setActive((current) => current + 1);
    }
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleProgramSelect = (programId: string) => {
    setSelectedProgram(programId);
    form.setFieldValue("programId", programId);
  };

  const handleSubmit = (values: typeof form.values) => {
    const form = useForm({
      initialValues: {
        // Owner Information
        ownerName: "",
        email: "",
        phone: "",
        address: "",

        // Dog Information
        dogName: "",
        breed: "",
        age: null as number | null,
        gender: "" as "Male" | "Female" | "",
        weight: null as number | null,
        neutered: false,

        // Program Details
        programId: "",
        startDate: null as Date | null,
        specialRequirements: "",
        dietaryRestrictions: "",
        medications: "",

        // Additional Services
        extraGrooming: false,
        advancedTrainingTools: false,
        inHomeFollowUp: false,

        // Agreements
        agreeToPolicies: false,
        agreeToPayment: false,
      },

      validate: {
        ownerName: (value) =>
          value.trim().length < 2 ? "Name must have at least 2 letters" : null,
        email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        phone: (value) =>
          /^\d{10}$/.test(value.replace(/\D/g, ""))
            ? null
            : "Please enter a valid 10-digit phone number",
        dogName: (value) =>
          value.trim().length < 1 ? "Dog name is required" : null,
        breed: (value) => (value.trim().length < 2 ? "Breed is required" : null),
        age: (value) => (value === null ? "Age is required" : null),
        gender: (value) => (!value ? "Please select gender" : null),
        programId: (value) =>
          !value ? "Please select a training program" : null,
        startDate: (value) => (!value ? "Please select a start date" : null),
        agreeToPolicies: (value) =>
          !value ? "You must agree to our policies" : null,
        agreeToPayment: (value) =>
          !value ? "You must agree to the payment terms" : null,
      },
    });
    // Here you would typically send the form data to your backend
    console.log("Form submitted with values:", values);

    // Show success notification
    notifications.show({
      title: "Application Submitted!",
      message: `We've received your application for ${values.dogName}. We'll be in touch soon!`,
      color: "green",
      icon: <IconCheck size={16} />,
    });

    // Reset form and go back to first step
    form.reset();
    setActive(0);
  };

  const renderProgramCards = (selectedProgram: string | null) => {
    return (
      <Grid>
        {trainingPrograms.map((program) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={program.id}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{
                borderColor:
                  selectedProgram === program.id ? PRIMARY_COLOR : undefined,
                borderWidth: selectedProgram === program.id ? 2 : 1,
                cursor: "pointer",
              }}
              onClick={() => handleProgramSelect(program.id)}
            >
              <Card.Section>
                <Image
                  src={program.image}
                  height={160}
                  alt={program.title}
                  fallbackSrc="https://placehold.co/400x200?text=Program+Image"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} fz="lg">
                  {program.title}
                </Text>
                <Text c={PRIMARY_COLOR} fw={700}>
                  ${program.price}
                </Text>
              </Group>

              <Text fz="sm" c="dimmed">
                {program.description}
              </Text>

              <Text mt="sm" fz="sm">
                Duration: {program.duration}
              </Text>

              <Button
                variant={selectedProgram === program.id ? "filled" : "light"}
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => handleProgramSelect(program.id)}
              >
                {selectedProgram === program.id
                  ? "Selected"
                  : "Select This Program"}
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    );
  };

  return (
    <Container size="lg" py={40}>
      <Title order={1} ta="center" mb={50} c={PRIMARY_COLOR}>
        Dog Board & Train Application
      </Title>

      <Paper withBorder shadow="md" p={30} radius="md" mb={40}>
        <Stepper
          active={active}
          onStepClick={setActive}
          color="blue"
        >
          <Stepper.Step label="Owner Information" description="Your details">
            <Box mt={30}>
              <form>
                <Grid>
                  <Grid.Col span={12}>
                    <TextInput
                      label="Full Name"
                      placeholder="Your name"
                      required
                      {...form.getInputProps("ownerName")}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Email"
                      placeholder="your@email.com"
                      required
                      {...form.getInputProps("email")}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Phone Number"
                      placeholder="(123) 456-7890"
                      required
                      {...form.getInputProps("phone")}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <TextInput
                      label="Address"
                      placeholder="Your address"
                      {...form.getInputProps("address")}
                    />
                  </Grid.Col>
                </Grid>
              </form>
            </Box>
          </Stepper.Step>

          <Stepper.Step label="Dog Information" description="About your dog">
            <Box mt={30}>
              <form>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Dog's Name"
                      placeholder="Name"
                      required
                      {...form.getInputProps("dogName")}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Breed"
                      placeholder="Breed or mix"
                      required
                      {...form.getInputProps("breed")}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <NumberInput
                      label="Age (years)"
                      placeholder="Age"
                      min={0.1}
                      max={20}
                      required
                      {...form.getInputProps("age")}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Select
                      label="Gender"
                      placeholder="Select"
                      required
                      data={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                      ]}
                      {...form.getInputProps("gender")}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <NumberInput
                      label="Weight (lbs)"
                      placeholder="Approximate"
                      min={1}
                      max={200}
                      required
                      {...form.getInputProps("weight")}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Checkbox
                      label="Spayed/Neutered"
                      {...form.getInputProps("neutered", { type: "checkbox" })}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <FileInput
                      label="Upload a photo of your dog (optional)"
                      placeholder="Choose file"
                      accept="image/*"
                    />
                  </Grid.Col>
                </Grid>
              </form>
            </Box>
          </Stepper.Step>

          <Stepper.Step
            label="Program Selection"
            description="Choose a program"
          >
            <Box mt={30}>
              {renderProgramCards(selectedProgram)}

              <Box mt={40}>
                <DatePickerInput
                  label="Preferred Start Date"
                  placeholder="Select a date"
                  required
                  minDate={new Date()}
                  {...form.getInputProps("startDate")}
                />

                <Textarea
                  label="Special Requirements"
                  placeholder="Any specific training goals or concerns?"
                  mt="md"
                  autosize
                  minRows={3}
                  {...form.getInputProps("specialRequirements")}
                />

                <Textarea
                  label="Dietary Restrictions"
                  placeholder="Any food allergies or special diets?"
                  mt="md"
                  autosize
                  minRows={2}
                  {...form.getInputProps("dietaryRestrictions")}
                />

                <Textarea
                  label="Medications"
                  placeholder="List any medications your dog takes"
                  mt="md"
                  autosize
                  minRows={2}
                  {...form.getInputProps("medications")}
                />

                <Divider
                  my="xl"
                  label="Additional Services"
                  labelPosition="center"
                />

                <Group>
                  <Checkbox
                    label="Extra Grooming Sessions (+$150)"
                    {...form.getInputProps("extraGrooming", {
                      type: "checkbox",
                    })}
                  />

                  <Checkbox
                    label="Advanced Training Tools Package (+$100)"
                    {...form.getInputProps("advancedTrainingTools", {
                      type: "checkbox",
                    })}
                  />

                  <Checkbox
                    label="In-Home Follow-Up Session (+$200)"
                    {...form.getInputProps("inHomeFollowUp", {
                      type: "checkbox",
                    })}
                  />
                </Group>
              </Box>
            </Box>
          </Stepper.Step>

          <Stepper.Step label="Review & Agree" description="Final step">
            <Box mt={30}>
              <Title order={3} mb="md">
                Review Your Application
              </Title>

              <Stack gap={8}>
                <Paper withBorder p="md">
                  <Title order={4} mb="sm">
                    Owner Information
                  </Title>
                  <List>
                    <List.Item>
                      <strong>Name:</strong> {form.values.ownerName}
                    </List.Item>
                    <List.Item>
                      <strong>Email:</strong> {form.values.email}
                    </List.Item>
                    <List.Item>
                      <strong>Phone:</strong> {form.values.phone}
                    </List.Item>
                    <List.Item>
                      <strong>Address:</strong> {form.values.address}
                    </List.Item>
                  </List>
                </Paper>

                <Paper withBorder p="md">
                  <Title order={4} mb="sm">
                    Dog Information
                  </Title>
                  <List>
                    <List.Item>
                      <strong>Name:</strong> {form.values.dogName}
                    </List.Item>
                    <List.Item>
                      <strong>Breed:</strong> {form.values.breed}
                    </List.Item>
                    <List.Item>
                      <strong>Age:</strong> {form.values.age} years
                    </List.Item>
                    <List.Item>
                      <strong>Gender:</strong> {form.values.gender}
                    </List.Item>
                    <List.Item>
                      <strong>Weight:</strong> {form.values.weight} lbs
                    </List.Item>
                    <List.Item>
                      <strong>Spayed/Neutered:</strong>{" "}
                      {form.values.neutered ? "Yes" : "No"}
                    </List.Item>
                  </List>
                </Paper>

                <Paper withBorder p="md">
                  <Title order={4} mb="sm">
                    Program Details
                  </Title>
                  <List>
                    <List.Item>
                      <strong>Selected Program:</strong>{" "}
                      {trainingPrograms.find(
                        (p) => p.id === form.values.programId
                      )?.title || "None selected"}
                    </List.Item>
                    <List.Item>
                      <strong>Start Date:</strong>{" "}
                      {form.values.startDate
                        ? form.values.startDate.toLocaleDateString()
                        : "Not selected"}
                    </List.Item>
                    {form.values.specialRequirements && (
                      <List.Item>
                        <strong>Special Requirements:</strong>{" "}
                        {form.values.specialRequirements}
                      </List.Item>
                    )}
                    {form.values.dietaryRestrictions && (
                      <List.Item>
                        <strong>Dietary Restrictions:</strong>{" "}
                        {form.values.dietaryRestrictions}
                      </List.Item>
                    )}
                    {form.values.medications && (
                      <List.Item>
                        <strong>Medications:</strong> {form.values.medications}
                      </List.Item>
                    )}
                  </List>
                </Paper>

                {(form.values.extraGrooming ||
                  form.values.advancedTrainingTools ||
                  form.values.inHomeFollowUp) && (
                  <Paper withBorder p="md">
                    <Title order={4} mb="sm">
                      Additional Services
                    </Title>
                    <List>
                      {form.values.extraGrooming && (
                        <List.Item>Extra Grooming Sessions (+$150)</List.Item>
                      )}
                      {form.values.advancedTrainingTools && (
                        <List.Item>
                          Advanced Training Tools Package (+$100)
                        </List.Item>
                      )}
                      {form.values.inHomeFollowUp && (
                        <List.Item>In-Home Follow-Up Session (+$200)</List.Item>
                      )}
                    </List>
                  </Paper>
                )}
              </Stack>

              <Box mt={30}>
                <Title order={4} mb="sm">
                  Agreements
                </Title>

                <Checkbox
                  mb="md"
                  label="I understand and agree to the boarding and training policies, including vaccination requirements and cancellation policy."
                  required
                  {...form.getInputProps("agreeToPolicies", {
                    type: "checkbox",
                  })}
                />

                <Checkbox
                  mb="md"
                  label="I understand that a 50% deposit is required to secure my spot, with the remaining balance due at drop-off."
                  required
                  {...form.getInputProps("agreeToPayment", {
                    type: "checkbox",
                  })}
                />

                <Text size="sm" c="dimmed" mb="lg">
                  By submitting this form, you agree to our{" "}
                  <Anchor href="#" target="_blank">
                    Terms of Service
                  </Anchor>{" "}
                  and{" "}
                  <Anchor href="#" target="_blank">
                    Privacy Policy
                  </Anchor>
                  .
                </Text>
              </Box>
            </Box>
          </Stepper.Step>

          <Stepper.Completed>
            <Box mt={40} ta="center">
              <Title order={2} mb="md" c="green">
                Application Submitted Successfully!
              </Title>
              <Text mb="xl">
                Thank you for your interest in our Board & Train program. We'll
                review your application and contact you soon to discuss next
                steps and schedule an evaluation.
              </Text>
              <Button onClick={() => setActive(0)} color="blue">
                Submit Another Application
              </Button>
            </Box>
          </Stepper.Completed>
        </Stepper>

        <Group justify="space-between" mt="xl">
          {active > 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active === 4 ? (
            <Button onClick={() => setActive(0)} color="blue">
              Start Over
            </Button>
          ) : active < 4 ? (
            <Button onClick={nextStep} color="blue">
              {active === 3 ? "Submit Application" : "Next Step"}
            </Button>
          ) : null}
        </Group>
      </Paper>

      <Paper withBorder p="xl" radius="md" bg="blue.0">
        <Title order={3} mb="md">
          Why Choose Our Board & Train Program?
        </Title>
        <List icon={<IconCheck color={PRIMARY_COLOR} />} spacing="md">
          <List.Item>
            Professional trainers with over 15 years of experience
          </List.Item>
          <List.Item>
            Customized training plans based on your dog's specific needs
          </List.Item>
          <List.Item>Comfortable, cage-free boarding environment</List.Item>
          <List.Item>Daily updates with photos and progress reports</List.Item>
          <List.Item>Take-home materials and follow-up support</List.Item>
        </List>
      </Paper>
    </Container>
  );
};

export default BoardAndTrainForm;
