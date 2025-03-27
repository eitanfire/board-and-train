import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
// import BoardAndTrainForm from './components/BoardAndTrainForm';
// import AboutUs from "./components/AboutUs";
// import Content from "./components/Content";
import HomePage from "./pages/HomePage";
import '../App.css';

export default function App() {
  return (
      <MantineProvider theme={theme}>
        <HomePage />
        {/* <Content />
        <AboutUs />
        <BoardAndTrainForm /> */}
      </MantineProvider>
  );
}
