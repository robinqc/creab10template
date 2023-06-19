import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import Course from './pages/Courses/CourseDetails/Course';
import { Welcome } from './pages/Courses/Welcome';
import LoginPage from './pages/LoginPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'dashboard', element: <Welcome /> },
        { path: 'course/:id', element: <Course /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
  ]);

  return routes;
}
