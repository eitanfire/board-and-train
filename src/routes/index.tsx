import { createFileRoute } from '@tanstack/react-router';
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Link } from '@tanstack/react-router';

function HomePage() {
  return (
    <Container size="md" py={40}>
      <Title order={1} mb="lg">Welcome to Dog Training</Title>
      <Text mb="xl">
        Professional dog training services with board and train programs.
      </Text>
      <Group>
        <Button component={Link} to="/admin">
          Admin Dashboard
        </Button>
      </Group>
    </Container>
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
});
