import { Routes, Route } from "react-router-dom";
import ViewRecipe from "./pages/ViewRecipe";
import AddRecipe from "./pages/AddRecipe";
import HomeLaout from "./Layouts/HomeLaout";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLaout />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recipe/:id" element={<ViewRecipe />} />
      <Route path="/add" element={<AddRecipe />} />
    </Routes>
  );
}
