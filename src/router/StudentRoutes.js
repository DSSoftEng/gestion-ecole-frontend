// src/router/StudentRoutes.js
import React from 'react';
import HomeStudent from "../pages/Student/HomeStudent";
import ProfileStudent from "../pages/Student/ProfileStudent";
import Logout from "../pages/Logout/Logout";

const studentRoutes = [
    { path: '', element: <HomeStudent /> },
    { path: 'profilstudent', element: <ProfileStudent/> },
    { path: 'logout', element: <Logout /> },
];

export default studentRoutes;
