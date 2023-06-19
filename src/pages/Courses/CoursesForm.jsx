import { Box, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { CourseContext } from '../../context/CourseContext';

function CoursesForm() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const { createCourse } = useContext(CourseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({ courseName, description });
    setCourseName('');
    setDescription('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <div>
          <TextField
            variant="outlined"
            id="nombre"
            label="Nombre del curso"
            onChange={(e) => setCourseName(e.target.value)}
            value={courseName}
          />
        </div>
        <div>
          <TextField
            id="descripcion"
            label="Ingresa la descripcion"
            multiline
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Crear curso
        </Button>
      </Box>
    </form>
  );
}

export default CoursesForm;
