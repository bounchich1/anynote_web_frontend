import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Note from "./pages/Note/Note";
import Notes from "./pages/Notes/Notes";
import Register from "./pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/notes",
        element: <Notes />
    },
    {
        path: "/note",
        element: <Note />
    },
])
