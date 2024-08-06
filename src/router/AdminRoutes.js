// src/router/AdminRoutes.js
import React from 'react';
import HomeAdmin from "../pages/Admin/HomeAdmin";
import ShowStudents from "../pages/Admin/StudentRelated/ShowStudents";
import AddStudent  from "../pages/Admin/StudentRelated/AddStudent";
import UpdateStudent  from "../pages/Admin/StudentRelated/UpdateStudent";
import ShowTeacher from "../pages/Admin/TeacherReated/ShowTeacher";
import Logout from "../pages/Logout/Logout";
import ShowNotice from '../pages/Admin/noticeRelated/ShowNotice';
import AddTeacher from '../pages/Admin/TeacherReated/AddTeacher';
import UpdateTeacher from '../pages/Admin/TeacherReated/UpdateTeacher';
import AddNotice from '../pages/Admin/noticeRelated/AddNotice';
import UpdateNotice from '../pages/Admin/noticeRelated/UpdateNotice';
import ProfileAdmin from '../pages/Admin/ProfileAdmin/ProfileAdmin'

const adminRoutes = [
    { path: '', element: <HomeAdmin /> },
    { path: 'profiladmin', element:<ProfileAdmin/> },
    { path: 'showstudent', element: <ShowStudents /> },
    { path: 'ajouter-etudiant', element: <AddStudent/> },
    { path: 'modifier-etudiant/:id', element: <UpdateStudent/> },
    { path: 'showteacher', element: <ShowTeacher /> },
    { path: 'ajouter-professeur', element: <AddTeacher/> },
    {path: 'modifier-professeur/:id', element: <UpdateTeacher/>},
    {path: 'ajouter-annonce', element: <AddNotice/>},
    {path: 'modifier-annonce/:id', element: <UpdateNotice/>},
    { path: 'shownotice', element: <ShowNotice /> },
    { path: 'logout', element: <Logout /> },
];


export default adminRoutes;
