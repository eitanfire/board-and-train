import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
// import BoardAndTrainForm from './components/BoardAndTrainForm';
// import AboutUs from "./components/AboutUs";
// import Content from "./components/Content";
import WelcomePage from "./pages/WelcomePage";
import Header from './components/Header';
import '../App.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <WelcomePage />
      {/* <Content />
        <AboutUs />
        <BoardAndTrainForm /> */}
    </MantineProvider>
  );
}
