import { useRoutes } from "react-router-dom";

//Project Imports
import AppRoutes from "./AppRoutes";

export default function ThemeRoutes() {
  return useRoutes([AppRoutes]);
}
