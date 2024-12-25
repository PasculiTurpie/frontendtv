import Admin from "../Admin/Admin";
import DetailsCard from "../DetailsCard/DetailsCard";
import Layout from "../Layout/Layout";
import NotFound from "../NotFound/NotFound";
import SearchChannel from "../SearchChannel/SearchChannel";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Monitoreo from "../Monitoreo/Monitoreo";
import Manager from "../Manager/Manager";
import FetchChannel from "../FetchChannel/FetchChannel";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const loggedin = false;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout loggedin={loggedin} />}>
          <Route index element={<FetchChannel />} />
          <Route path="search/*" element={<SearchChannel />} />
          <Route path="admin" element={<Admin />} />
        <Route
          path="manager"
          element={
            <ProtectedRoute loggedin={loggedin}>
              <Manager />
            </ProtectedRoute>
          }
          />
          <Route path="monitoreo" element={<Monitoreo />} />
          <Route path="details/:id" element={<DetailsCard />} />
          <Route path="channel" element={<FetchChannel />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
