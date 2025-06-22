import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Group,
  TextInput,
  Select,
  Button,
  Image,
  Grid,
  Badge,
  Box,
  Paper,
  Stack,
  AppShell,
  Loader,
  Modal,
  Textarea,
  ActionIcon,
  Table,
  ScrollArea,
  Pagination,
  Alert,
} from "@mantine/core";

import { DatePickerInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { 
  IconCheck, 
  IconX, 
  IconEye, 
  IconEdit, 
  IconSearch,
  IconRefresh,
  IconDownload,
  IconPhone,
  IconMail,
  IconCalendar,
  IconDog,
  IconUser,
  IconAlertCircle
} from "@tabler/icons-react";
import { supabase, BoardAndTrainApplication } from "../supabase";

interface ExtendedApplication extends BoardAndTrainApplication {
  program_title?: string;
  program_duration?: string;
  program_price?: number;
}

const trainingPrograms = {
  basic: { title: "Basic Obedience", duration: "2 Weeks", price: 1200 },
  advanced: { title: "Advanced Obedience", duration: "3 Weeks", price: 1800 },
  behavioral: { title: "Behavioral Modification", duration: "4 Weeks", price: 2400 },
};

const statusColors = {
  pending: "yellow",
  approved: "green", 
  rejected: "red",
  in_progress: "blue",
  completed: "teal",
};

const AdminDashboard: React.FC = () => {
  const [applications, setApplications] = useState<ExtendedApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<ExtendedApplication | null>(null);
  const [detailModalOpened, { open: openDetailModal, close: closeDetailModal }] = useDisclosure(false);
  const [editModalOpened, { open: openEditModal, close: closeEditModal }] = useDisclosure(false);
  
  // Filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [programFilter, setProgramFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<Date | null>(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Stats
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    in_progress: 0,
    completed: 0,
  });

  // Load applications
  const loadApplications = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('board_and_train_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Enhance with program details
      const enhancedData = data.map(app => ({
        ...app,
        program_title: trainingPrograms[app.program_id as keyof typeof trainingPrograms]?.title || 'Unknown Program',
        program_duration: trainingPrograms[app.program_id as keyof typeof trainingPrograms]?.duration || 'N/A',
        program_price: trainingPrograms[app.program_id as keyof typeof trainingPrograms]?.price || 0,
      }));

      setApplications(enhancedData);
      
      // Calculate stats
      const newStats = {
        total: enhancedData.length,
        pending: enhancedData.filter(app => app.status === 'pending').length,
        approved: enhancedData.filter(app => app.status === 'approved').length,
        rejected: enhancedData.filter(app => app.status === 'rejected').length,
        in_progress: enhancedData.filter(app => app.status === 'in_progress').length,
        completed: enhancedData.filter(app => app.status === 'completed').length,
      };
      setStats(newStats);

    } catch (error) {
      console.error('Error loading applications:', error);
      notifications.show({
        title: "Error",
        message: "Failed to load applications",
        color: "red",
        icon: <IconX size={16} />,
      });
    } finally {
      setLoading(false);
    }
  };

  // Update application status
  const updateApplicationStatus = async (id: string, status: string, notes?: string) => {
    try {
      const updateData: any = { status };
      if (notes) updateData.admin_notes = notes;

      const { error } = await supabase
        .from('board_and_train_applications')
        .update(updateData)
        .eq('id', id);

      if (error) throw error;

      notifications.show({
        title: "Success",
        message: "Application status updated",
        color: "green",
        icon: <IconCheck size={16} />,
      });

      loadApplications();
      closeEditModal();
    } catch (error) {
      console.error('Error updating application:', error);
      notifications.show({
        title: "Error",
        message: "Failed to update application",
        color: "red",
        icon: <IconX size={16} />,
      });
    }
  };

  // Filter applications
  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.owner_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.dog_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    const matchesProgram = programFilter === "all" || app.program_id === programFilter;
    
    const matchesDate = !dateFilter || 
      new Date(app.start_date).toDateString() === dateFilter.toDateString();

    return matchesSearch && matchesStatus && matchesProgram && matchesDate;
  });

  // Paginated applications
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedApplications = filteredApplications.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

  useEffect(() => {
    loadApplications();
  }, []);

  const StatsCard = ({ title, value, color }: { title: string; value: number; color: string }) => (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <div>
          <Text c="dimmed" size="sm" fw={500} tt="uppercase">
            {title}
          </Text>
          <Text fw={700} size="xl">
            {value}
          </Text>
        </div>
        <Badge color={color} variant="light" size="lg">
          {((value / stats.total) * 100 || 0).toFixed(0)}%
        </Badge>
      </Group>
    </Paper>
  );

  const ApplicationRow = ({ app }: { app: ExtendedApplication }) => (
    <Table.Tr key={app.id}>
      <Table.Td>
        <Group gap="sm">
          <div>
            <Text fw={500}>{app.owner_name}</Text>
            <Text size="sm" c="dimmed">{app.email}</Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="sm">
          <IconDog size={16} />
          <div>
            <Text fw={500}>{app.dog_name}</Text>
            <Text size="sm" c="dimmed">{app.breed}</Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{app.program_title}</Text>
        <Text size="xs" c="dimmed">${app.program_price}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{new Date(app.start_date).toLocaleDateString()}</Text>
      </Table.Td>
      <Table.Td>
        <Badge color={statusColors[app.status as keyof typeof statusColors]} variant="light">
          {(app.status ?? '').replace('_', ' ').toUpperCase()}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dimmed">
          {app.created_at ? new Date(app.created_at).toLocaleDateString() : 'N/A'}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon
            variant="light"
            color="blue"
            onClick={() => {
              setSelectedApplication(app);
              openDetailModal();
            }}
          >
            <IconEye size={16} />
          </ActionIcon>
          <ActionIcon
            variant="light"
            color="orange"
            onClick={() => {
              setSelectedApplication(app);
              openEditModal();
            }}
          >
            <IconEdit size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  );

  const DetailModal = () => (
    <Modal
      opened={detailModalOpened}
      onClose={closeDetailModal}
      title="Application Details"
      size="lg"
    >
      {selectedApplication && (
        <Stack gap="md">
          {/* Owner Information */}
          <Paper withBorder p="md">
            <Group mb="sm">
              <IconUser size={20} />
              <Title order={4}>Owner Information</Title>
            </Group>
            <Grid>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Name</Text>
                <Text>{selectedApplication.owner_name}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Email</Text>
                <Group gap="xs">
                  <IconMail size={16} />
                  <Text>{selectedApplication.email}</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Phone</Text>
                <Group gap="xs">
                  <IconPhone size={16} />
                  <Text>{selectedApplication.phone}</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Address</Text>
                <Text>{selectedApplication.address || 'Not provided'}</Text>
              </Grid.Col>
            </Grid>
          </Paper>

          {/* Dog Information */}
          <Paper withBorder p="md">
            <Group mb="sm">
              <IconDog size={20} />
              <Title order={4}>Dog Information</Title>
            </Group>
            <Grid>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Name</Text>
                <Text>{selectedApplication.dog_name}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Breed</Text>
                <Text>{selectedApplication.breed}</Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Text size="sm" fw={500}>Age</Text>
                <Text>{selectedApplication.age} years</Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Text size="sm" fw={500}>Gender</Text>
                <Text>{selectedApplication.gender}</Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Text size="sm" fw={500}>Weight</Text>
                <Text>{selectedApplication.weight} lbs</Text>
              </Grid.Col>
              <Grid.Col span={12}>
                <Text size="sm" fw={500}>Spayed/Neutered</Text>
                <Badge color={selectedApplication.neutered ? "green" : "red"} variant="light">
                  {selectedApplication.neutered ? "Yes" : "No"}
                </Badge>
              </Grid.Col>
            </Grid>
            {selectedApplication.dog_photo_url && (
              <Box mt="md">
                <Text size="sm" fw={500} mb="xs">Photo</Text>
                <Image
                  src={selectedApplication.dog_photo_url}
                  alt={selectedApplication.dog_name}
                  height={200}
                  fit="contain"
                  radius="md"
                />
              </Box>
            )}
          </Paper>

          {/* Program Details */}
          <Paper withBorder p="md">
            <Group mb="sm">
              <IconCalendar size={20} />
              <Title order={4}>Program Details</Title>
            </Group>
            <Grid>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Program</Text>
                <Text>{selectedApplication.program_title}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Duration</Text>
                <Text>{selectedApplication.program_duration}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Start Date</Text>
                <Text>{new Date(selectedApplication.start_date).toLocaleDateString()}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="sm" fw={500}>Price</Text>
                <Text fw={700}>${selectedApplication.program_price}</Text>
              </Grid.Col>
            </Grid>
            
            {selectedApplication.special_requirements && (
              <Box mt="md">
                <Text size="sm" fw={500}>Special Requirements</Text>
                <Text size="sm">{selectedApplication.special_requirements}</Text>
              </Box>
            )}
            
            {selectedApplication.dietary_restrictions && (
              <Box mt="md">
                <Text size="sm" fw={500}>Dietary Restrictions</Text>
                <Text size="sm">{selectedApplication.dietary_restrictions}</Text>
              </Box>
            )}
            
            {selectedApplication.medications && (
              <Box mt="md">
                <Text size="sm" fw={500}>Medications</Text>
                <Text size="sm">{selectedApplication.medications}</Text>
              </Box>
            )}
          </Paper>

          {/* Additional Services */}
          {(selectedApplication.advanced_training_tools || selectedApplication.in_home_follow_up) && (
            <Paper withBorder p="md">
              <Title order={4} mb="sm">Additional Services</Title>
              <Stack gap="xs">
                {selectedApplication.advanced_training_tools && (
                  <Badge color="blue" variant="light">Advanced Training Tools (+$100)</Badge>
                )}
                {selectedApplication.in_home_follow_up && (
                  <Badge color="green" variant="light">In-Home Follow-Up (+$200)</Badge>
                )}
              </Stack>
            </Paper>
          )}

          {/* Status */}
          <Paper withBorder p="md">
            <Group justify="space-between">
              <div>
                <Text size="sm" fw={500}>Current Status</Text>
                <Badge color={statusColors[selectedApplication.status as keyof typeof statusColors]} size="lg">
                  {(selectedApplication.status ?? '').replace('_', ' ').toUpperCase()}
                </Badge>
              </div>
              <div>
                <Text size="sm" fw={500}>Applied On</Text>
                <Text>{selectedApplication.created_at ? new Date(selectedApplication.created_at).toLocaleDateString() : 'N/A'}</Text>
              </div>
            </Group>
          </Paper>
        </Stack>
      )}
    </Modal>
  );

  const EditModal = () => {
    const [newStatus, setNewStatus] = useState(selectedApplication?.status || 'pending');
    const [adminNotes, setAdminNotes] = useState('');

    return (
      <Modal
        opened={editModalOpened}
        onClose={closeEditModal}
        title="Update Application"
        size="md"
      >
        {selectedApplication && (
          <Stack gap="md">
            <Alert icon={<IconAlertCircle size={16} />} title="Application Update">
              Updating status for {selectedApplication.dog_name} ({selectedApplication.owner_name})
            </Alert>

            <Select
              label="Status"
              value={newStatus}
              onChange={(value) => setNewStatus((value as "pending" | "approved" | "rejected" | "in_progress" | "completed") || 'pending')}
              data={[
                { value: 'pending', label: 'Pending Review' },
                { value: 'approved', label: 'Approved' },
                { value: 'rejected', label: 'Rejected' },
                { value: 'in_progress', label: 'In Progress' },
                { value: 'completed', label: 'Completed' },
              ]}
            />

            <Textarea
              label="Admin Notes (Optional)"
              placeholder="Add any notes about this status change..."
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.currentTarget.value)}
              autosize
              minRows={3}
            />

            <Group justify="flex-end">
              <Button variant="light" onClick={closeEditModal}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  if (selectedApplication?.id) {
                    updateApplicationStatus(selectedApplication.id, newStatus, adminNotes);
                  }
                }}
              >
                Update Status
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>
    );
  };

  if (loading) {
    return (
      <Container size="lg" py={40}>
        <Group justify="center">
          <Loader size="lg" />
          <Text>Loading applications...</Text>
        </Group>
      </Container>
    );
  }

  return (
    <AppShell>
      <Container size="xl" py={40}>
        <Group justify="space-between" mb="xl">
          <Title order={1}>Board & Train Admin Dashboard</Title>
          <Group>
            <Button leftSection={<IconRefresh size={16} />} onClick={loadApplications}>
              Refresh
            </Button>
            <Button leftSection={<IconDownload size={16} />} variant="light">
              Export CSV
            </Button>
          </Group>
        </Group>

        {/* Stats Cards */}
        <Grid mb="xl">
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <StatsCard title="Total" value={stats.total} color="blue" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <StatsCard title="Pending" value={stats.pending} color="yellow" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <StatsCard title="Approved" value={stats.approved} color="green" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <StatsCard title="In Progress" value={stats.in_progress} color="blue" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <StatsCard title="Completed" value={stats.completed} color="teal" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <StatsCard title="Rejected" value={stats.rejected} color="red" />
          </Grid.Col>
        </Grid>

        {/* Filters */}
        <Paper withBorder p="md" mb="xl">
          <Grid>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <TextInput
                placeholder="Search by name, dog name, or email..."
                leftSection={<IconSearch size={16} />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 2 }}>
              <Select
                placeholder="All Statuses"
                value={statusFilter}
                onChange={(value) => setStatusFilter(value || 'all')}
                data={[
                  { value: 'all', label: 'All Statuses' },
                  { value: 'pending', label: 'Pending' },
                  { value: 'approved', label: 'Approved' },
                  { value: 'rejected', label: 'Rejected' },
                  { value: 'in_progress', label: 'In Progress' },
                  { value: 'completed', label: 'Completed' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 2 }}>
              <Select
                placeholder="All Programs"
                value={programFilter}
                onChange={(value) => setProgramFilter(value || 'all')}
                data={[
                  { value: 'all', label: 'All Programs' },
                  { value: 'basic', label: 'Basic Obedience' },
                  { value: 'advanced', label: 'Advanced Obedience' },
                  { value: 'behavioral', label: 'Behavioral Modification' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <DatePickerInput
                placeholder="Filter by start date"
                value={dateFilter}
                onChange={setDateFilter}
                clearable
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 2 }}>
              <Button
                variant="light"
                fullWidth
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('all');
                  setProgramFilter('all');
                  setDateFilter(null);
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </Button>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Applications Table */}
        <Paper withBorder>
          <ScrollArea>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Owner</Table.Th>
                  <Table.Th>Dog</Table.Th>
                  <Table.Th>Program</Table.Th>
                  <Table.Th>Start Date</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Applied</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {paginatedApplications.length > 0 ? (
                  paginatedApplications.map(app => (
                    <ApplicationRow key={app.id} app={app} />
                  ))
                ) : (
                  <Table.Tr>
                    <Table.Td colSpan={7}>
                      <Text ta="center" py="xl" c="dimmed">
                        No applications found matching your criteria
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
          </ScrollArea>

          {/* Pagination */}
          {totalPages > 1 && (
            <Group justify="center" p="md">
              <Pagination
                value={currentPage}
                onChange={setCurrentPage}
                total={totalPages}
              />
            </Group>
          )}
        </Paper>

        {/* Modals */}
        <DetailModal />
        <EditModal />
      </Container>
    </AppShell>
  );
};

export default AdminDashboard;
