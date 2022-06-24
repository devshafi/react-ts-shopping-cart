import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Navigate to="/store" replace={true} />} />
            <Route path="/store" element={<Store />} />
            <Route
              path="/about"
              element={<Navigate to="/store" replace={true} />}
            />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
