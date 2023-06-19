import DeleteIcon from '@mui/icons-material/Delete';
import { CardActions, CardHeader, Chip, Grid, IconButton, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CoursesCard({ course, handleDeleteCourse }) {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteCourse(course.id);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Paper
        onClick={() => navigate(`/course/${course.id}`)}
        elevation={8}
        sx={{
          maxWidth: '15rem',
          height: '15rem',
          overflow: 'hidden',
          borderRadius: 2,
          ml: 1,
          mr: 1,
          mb: 2,
          mt: 2,
          '&:hover': {
            boxShadow: 20,
            cursor: 'pointer',
            '& .MuiTypography-root': {
              color: 'primary.main',
            },
          },
        }}
      >
        <CardHeader
          sx={{
            ':hover': {
              cursor: 'pointer',
              color: 'primary.main',
            },
          }}
          title={
            <Typography gutterBottom variant="h6" component="h2" fontWeight="bold" lineHeight="1">
              {course.name}
            </Typography>
          }
          subheader={
            <Typography variant="caption" lineHeight="1." color="#757575" component="p">
              {course.description}
            </Typography>
          }
          action={
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          }
        />
        <CardActions>
          {course.state === 'Sin Empezar' && (
            <Chip
              label={course.state}
              sx={{
                fontWeight: '700',
                fontSize: '0.775rem',
                backgroundColor: '#FF484229',
                color: '#B72136',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
              }}
            />
          )}
          {course.state === 'En Proceso' && (
            <Chip
              label={course.state}
              sx={{
                fontWeight: '700',
                fontSize: '0.775rem',
                backgroundColor: '#ffd70085',
                color: '#998200',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
              }}
            />
          )}

          {course.state === 'Para Revisión' && (
            <Chip
              label={course.state}
              sx={{
                fontWeight: '700',
                fontSize: '0.775rem',
                backgroundColor: '#e71be150',
                color: '#9c0098',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
              }}
            />
          )}

          {course.state === 'Terminado' && (
            <Chip
              label={course.state}
              sx={{
                fontWeight: '700',
                fontSize: '0.775rem',
                backgroundColor: '#54D62C29',
                color: '#229A16',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            />
          )}
        </CardActions>
      </Paper>
    </Grid>
  );
}

export default CoursesCard;
