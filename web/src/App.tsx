import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}