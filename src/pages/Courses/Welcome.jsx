import ArticleIcon from '@mui/icons-material/Article';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../../context/CourseContext';
import { getAuthToken } from '../../shared/login';
import CoursesList from './CoursesList';
import CoursesTable from './CoursesTable';
import CreateCourseDialog from './CreateCourseDialog';
import EmptyCard from './EmptyCard';

export const Welcome = () => {
  const [coursesLength, setCoursesLength] = useState(0);
  const { courses, deleteCourse } = useContext(CourseContext);
  const [viewCourse, setViewCourse] = useState('card-view');
  const token = getAuthToken();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { createCourse } = useContext(CourseContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (courseData) => {
    createCourse(courseData);
  };
  const handleDeleteCourse = (courseId) => {
    deleteCourse(courseId);
  };
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* <button
            onClick={async () => {
              const response = await api.get("/users");
              console.log(response);
            }}
          >
            Send request with token
          </button> */}
      </Box>

      <Box m={1} mx={2} display="flex" justifyContent="space-between">
        <Typography
          variant="p"
          color="initial"
          sx={{
            fontWeight: '700',
            fontSize: '2rem',
          }}
        >
          📚Cursos B10
        </Typography>

        <ToggleButtonGroup
          size="small"
          label="courses-view"
          value={viewCourse}
          exclusive
          onChange={(event, newViewCourse) => {
            setViewCourse(newViewCourse);
          }}
          fontSize="small"
          aria-label="Platform"
        >
          <ToggleButton value="table-view">
            <TableRowsIcon />
          </ToggleButton>
          <ToggleButton value="card-view">
            <ArticleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          fontWeight: '400',

          mt: 2,
          mb: 2,
          ml: 2,
          mr: 2,
        }}
      >
        {courses.length > 0 ? `Total de cursos: ${courses.length}` : 'No tienes cursos creados'}
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {viewCourse === 'card-view' ? (
          <>
            <CoursesList handleDeleteCourse={handleDeleteCourse} />
            <EmptyCard handleClickOpen={handleClickOpen} />
          </>
        ) : (
          <CoursesTable handleClickOpen={handleClickOpen} handleDeleteCourse={handleDeleteCourse} />
        )}
        <CreateCourseDialog open={open} onClose={handleClose} onSubmit={handleSubmit} />
      </Grid>
    </>
  );
};
