import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import BoardAndTrainForm from './components/BoardAndTrainForm';

export default function App() {
  return <MantineProvider 
  theme={theme}><BoardAndTrainForm /></MantineProvider>;
}
