import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../../context/CourseContext';

function CoursesTable({ handleClickOpen, handleDeleteCourse }) {
  const { courses } = useContext(CourseContext);
  const navigate = useNavigate();
  const handleDelete = (event, courseId) => {
    event.stopPropagation(); // Evitar la propagación del evento
    handleDeleteCourse(courseId); // Eliminar el curso
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        maxWidth: '97%',
      }}
    >
      <Table
        aria-label="simple table"
        sx={{
          '& .MuiTableRow-root:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <TableHead>
          <TableRow>
            {/*   <TableCell>ID</TableCell> */}
            <TableCell>Nombre</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': {
                  cursor: 'pointer',
                  backgroundColor: '#f5f5f5',
                  '& .nameText': {
                    color: 'primary.main',
                    fontWeight: '600',
                  },
                },
              }}
            >
              {/* <TableCell>{course.id}</TableCell> */}
              <TableCell className="nameText">{course.name}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell
                sx={{
                  textAlign: 'right',
                }}
              >
                <IconButton aria-label="delete" size="small" onClick={(event) => handleDelete(event, course.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell
              colSpan={3}
              variant="footer"
              onClick={handleClickOpen}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  '& .MuiSvgIcon-root': {
                    color: 'primary.main',
                  },
                  '& .MuiTypography-root': {
                    color: 'primary.main',
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AddIcon sx={{ fontSize: 25, color: 'gray' }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: 'gray',
                    fontWeight: '500',
                    fontSize: '1.1rem',
                  }}
                >
                  Nuevo curso
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CoursesTable;
