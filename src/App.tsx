// App.tsx
import "../App.css";
import Header from "./components/ShantiHeader";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
