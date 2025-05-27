import {
  Title,
  List,
  Paper,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const PRIMARY_COLOR = "#3B82F6";

const AboutUs: React.FC = () => {
  return (
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
  );
};

export default AboutUs;
