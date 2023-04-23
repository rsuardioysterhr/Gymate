import Navbar from "./components/Nav/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <AppRoutes/>
    </AuthContextProvider>
  );
}

export default App;
