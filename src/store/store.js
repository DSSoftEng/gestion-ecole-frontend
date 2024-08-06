import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './features/students/StudentSlice'
import FilliereReducer from './features/filliere/FilliereSlice'
import teacherReducer from './features/teachers/TeacherSlice'
import noticeReducer from './features/annonces/AnnonceSlice'
import userReducer from './features/user/UserSlice'
import adminReducer from'./features/adminDG/adminDGSlice'
const store = configureStore({
    reducer: {
        students: studentReducer ,
        fillieres: FilliereReducer,
        teachers: teacherReducer,
        notices: noticeReducer,
        user:userReducer,
        admin:adminReducer
    }
});

export default store;
