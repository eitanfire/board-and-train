import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import BoardAndTrainForm from './components/BoardAndTrainForm';
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AboutUs />
      <BoardAndTrainForm />
    </MantineProvider>
  );
}
