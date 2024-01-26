import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import MasNuevo from "./pages/LomasNuevo";
import MasVendido from "./pages/MasVendido";
import Cara from "./pages/Cara";
import Labios from "./pages/Labios";
import Ojos from "./pages/Ojos";
import Navbar from "./components/navbar/Navbar";
import Description from "./pages/Description";
import { Footer } from "./components/footer/Footer";
import Carrito from "./pages/Carrito";
import { ProtectedRoute } from "./components/protectedRouter/protectedRouter";
import AddProduct from "./pages/AddProduct";
import { AdminData } from "./pages/AdminData";
import SesionPage from "./pages/SesionPage";
import { useContext } from "react";
import { AuthContext } from "./context/UseAuth";
import GoogleCallbackPage from "./pages/GoogleCallbackPage";

function App() {
  const { authState } = useContext(AuthContext);
  const user = authState.role;

  return (
    <div>
      <Navbar />
      <Routes location={location}>
        <Route path="/bellezaProject/" element={<Inicio />} />
        <Route path="/bellezaProject/masnuevo" element={<MasNuevo />} />
        <Route path="/bellezaProject/masvendido" element={<MasVendido />} />
        <Route path="/bellezaProject/cara" element={<Cara />} />
        <Route path="/bellezaProject/labios" element={<Labios />} />
        <Route path="/bellezaProject/ojos" element={<Ojos />} />
        <Route
          path="/bellezaProject/google-profile"
          element={<GoogleCallbackPage />}
        />
        <Route
          path="/bellezaProject/view/description"
          element={<Description />}
        />
        <Route path="/bellezaProject/view/carrito" element={<Carrito />} />

        <Route
          path="/bellezaProject/login"
          element={
            <ProtectedRoute redirectTo="/bellezaProject/" isAllowed={!user}>
              <SesionPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bellezaProject/AddProducts"
          element={
            <ProtectedRoute
              redirectTo="/bellezaProject/"
              isAllowed={!!user && user.includes("admin")}
            >
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bellezaProject/AdminProducts"
          element={
            <ProtectedRoute redirectTo="/bellezaProject/" isAllowed={user}>
              <AdminData />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
