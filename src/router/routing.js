// src/router.js
import { createBrowserRouter } from "react-router-dom";

// Layouts
import SiteLayout from "../layouts/SiteLayout";

// Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import StudentDashbord from "../pages/Student/StudentDashbord";
import AdminDashbord from "../pages/Admin/AdminDashbord";

// Route protection
import PrivateRoute from './PrivateRoute';

// Importing student and admin routes
import studentRoutes from './StudentRoutes';
import adminRoutes from './AdminRoutes';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <SiteLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'login', element: <Login /> },
        ],
    },
    {
        path: '/studentdashbord',
        element: <PrivateRoute element={StudentDashbord} requiredRole="USER" />,
        children: studentRoutes,
    },
    {
        path: '/admindashbord',
        element: <PrivateRoute element={AdminDashbord} requiredRole="ADMIN" />,
        children: adminRoutes,
    },
]);
