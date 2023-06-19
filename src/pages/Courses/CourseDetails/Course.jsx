import { Container, Grid, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseContext } from '../../../context/CourseContext';
import { getAuthToken } from '../../../shared/login';
import CourseContents from './CourseContents';
import EditorComponent from './EditorComponent';
import MenuItems from './MenuItems';

function Course() {
  const token = getAuthToken();
  const navigate = useNavigate();
  const { id } = useParams();
  const { courses } = useContext(CourseContext);
  console.log(id);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
  const course = courses.find((course) => course.id === id);

  return (
    <>
      <Grid container>
        <Grid item sx={{ width: 280 }}>
          <CourseContents openNav onCloseNav={() => {}} />
        </Grid>
        <Grid item flexGrow={1}>
          <Container
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 6,
              p: 2,
            }}
          >
            <Typography
              variant="h1"
              color="initial"
              align="center"
              sx={{
                fontWeight: '700',
                fontSize: '2rem',
                m: 1,
                mx: 2,
              }}
            >
              {course.name}
            </Typography>
            <MenuItems />

            <EditorComponent />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Course;
