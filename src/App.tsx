import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import BoardAndTrainForm from './components/BoardAndTrainForm';
import AboutUs from "./components/AboutUs";
import Content from "./components/Content";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Content />
      <AboutUs />
      <BoardAndTrainForm />
    </MantineProvider>
  );
}
