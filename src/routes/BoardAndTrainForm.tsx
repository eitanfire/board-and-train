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
  AppShell,
  Loader,
} from "@mantine/core";

import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { supabase, BoardAndTrainApplication } from "../supabase";

const PRIMARY_COLOR = "#3B82F6";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dogPhoto, setDogPhoto] = useState<File | null>(null);

  const form = useForm({
    initialValues: {
      ownerName: "",
      email: "",
      phone: "",
      address: "",

      dogName: "",
      breed: "",
      age: null as number | null,
      gender: "" as "Male" | "Female" | "",
      weight: null as number | null,
      neutered: false,

      programId: "",
      startDate: null as Date | null,
      specialRequirements: "",
      dietaryRestrictions: "",
      medications: "",

      extraGrooming: false,
      advancedTrainingTools: false,
      inHomeFollowUp: false,

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

  // Upload dog photo to Supabase Storage
  const uploadDogPhoto = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `dog-photos/${fileName}`;

      const { data, error } = await supabase.storage
        .from('dog-photos') // Make sure this bucket exists in your Supabase storage
        .upload(filePath, file);

      if (error) {
        console.error('Error uploading photo:', error);
        return null;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('dog-photos')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading photo:', error);
      return null;
    }
  };

  const validateFields = () => {
  const values = form.values;
  const errors: any = {};

  if (active === 0) {
    // Step 1: Owner Information validation
    if (!values.ownerName || values.ownerName.trim().length < 2) {
      errors.ownerName = "Name must have at least 2 letters";
    }
    if (!values.email || !/^\S+@\S+$/.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.phone || !/^\d{10}$/.test(values.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
  } else if (active === 1) {
    // Step 2: Dog Information validation
    if (!values.dogName || values.dogName.trim().length < 1) {
      errors.dogName = "Dog name is required";
    }
    if (!values.breed || values.breed.trim().length < 2) {
      errors.breed = "Breed is required";
    }
    if (values.age === null || values.age === undefined) {
      errors.age = "Age is required";
    }
    if (!values.gender) {
      errors.gender = "Please select gender";
    }
    if (values.weight === null || values.weight === undefined) {
      errors.weight = "Weight is required";
    }
  } else if (active === 2) {
    // Step 3: Program Selection validation
    if (!values.programId) {
      errors.programId = "Please select a training program";
    }
    if (!values.startDate) {
      errors.startDate = "Please select a start date";
    }
  } else if (active === 3) {
    // Step 4: Review & Agree validation
    if (!values.agreeToPolicies) {
      errors.agreeToPolicies = "You must agree to our policies";
    }
    if (!values.agreeToPayment) {
      errors.agreeToPayment = "You must agree to the payment terms";
    }
  }

  // Set errors and return validation result
  form.setErrors(errors);
  return { hasErrors: Object.keys(errors).length > 0 };
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

  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true);
    
    try {
      // Upload dog photo if provided
      let dogPhotoUrl: string | null = null;
      if (dogPhoto) {
        dogPhotoUrl = await uploadDogPhoto(dogPhoto);
      }

      // Prepare data for database
      const applicationData: Omit<BoardAndTrainApplication, 'id' | 'created_at'> = {
        owner_name: values.ownerName,
        email: values.email,
        phone: values.phone,
        address: values.address,
        dog_name: values.dogName,
        breed: values.breed,
        age: values.age!,
        gender: values.gender as 'Male' | 'Female',
        weight: values.weight!,
        neutered: values.neutered,
        dog_photo_url: dogPhotoUrl ?? undefined,
        program_id: values.programId,
        start_date: values.startDate!.toISOString().split('T')[0], // Convert to YYYY-MM-DD
        special_requirements: values.specialRequirements,
        dietary_restrictions: values.dietaryRestrictions,
        medications: values.medications,
        extra_grooming: values.extraGrooming,
        advanced_training_tools: values.advancedTrainingTools,
        in_home_follow_up: values.inHomeFollowUp,
        status: 'pending'
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('board_and_train_applications')
        .insert([applicationData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Success notification
      notifications.show({
        title: "Application Submitted Successfully!",
        message: `We've received your application for ${values.dogName}. Application ID: ${data.id}`,
        color: "green",
        icon: <IconCheck size={16} />,
        autoClose: 10000,
      });

      // Reset form and go to completion step
      form.reset();
      setDogPhoto(null);
      setSelectedProgram(null);
      setActive(4);

    } catch (error) {
      console.error('Error submitting application:', error);
      
      notifications.show({
        title: "Submission Failed",
        message: "There was an error submitting your application. Please try again.",
        color: "red",
        icon: <IconX size={16} />,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <Text fw={500} size="lg">
                  {program.title}
                </Text>
                <Text c={PRIMARY_COLOR} fw={700}>
                  ${program.price}
                </Text>
              </Group>

              <Text size="sm" c="dimmed">
                {program.description}
              </Text>

              <Text mt="sm" size="sm">
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
    <AppShell c="customColor.6">
      <Container size="lg" py={40}>
        <Title order={1} ta="center" mb={50} c="customColor.5">
          Dog Board & Train Application
        </Title>

        <Paper withBorder shadow="md" p={30} radius="md" mb={40}>
          <Stepper active={active} onStepClick={setActive} c="customColor.5">
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
                        label="Dog's Age (years)"
                        placeholder="Age"
                        min={0.1}
                        max={20}
                        required
                        {...form.getInputProps("age")}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                      <Select
                        label="Dog's Gender"
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
                        label="Dog's Weight (lbs)"
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
                        {...form.getInputProps("neutered", {
                          type: "checkbox",
                        })}
                      />
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <FileInput
                        label="Upload a photo of your dog (optional)"
                        placeholder="Choose file"
                        accept="image/*"
                        value={dogPhoto}
                        onChange={setDogPhoto}
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

                <Stack gap="md">
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
                          <strong>Medications:</strong>{" "}
                          {form.values.medications}
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
                          <List.Item>
                            In-Home Follow-Up Session (+$200)
                          </List.Item>
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
                  Thank you for your interest in our Board & Train program.
                  We'll review your application and contact you soon to discuss
                  next steps and schedule an evaluation.
                </Text>
                <Button onClick={() => setActive(0)} color="blue">
                  Submit Another Application
                </Button>
              </Box>
            </Stepper.Completed>
          </Stepper>

          <Group justify="space-between" mt="xl">
            {active > 0 && active < 4 && (
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
            )}
            {active === 4 ? (
              <Button onClick={() => setActive(0)} color="blue">
                Start Over
              </Button>
            ) : active < 4 ? (
              active === 3 ? (
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Button 
                    type="submit" 
                    color="blue" 
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size="sm" mr="xs" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                </form>
              ) : (
                <Button onClick={nextStep} color="blue">
                  Next Step
                </Button>
              )
            ) : null}
          </Group>
        </Paper>
      </Container>
    </AppShell>
  );
};

export default BoardAndTrainForm;