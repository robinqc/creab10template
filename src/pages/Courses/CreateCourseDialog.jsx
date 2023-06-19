import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    Box,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    DialogActions,
    Button,
  } from "@mui/material";
  import { useState } from "react";
  
  export default function CreateCourseDialog({ open, onClose, onSubmit }) {
    const [courseName, setCourseName] = useState("");
    const [description, setDescription] = useState("");
    const [stateCourse, setStateCourse] = useState("En Proceso");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ courseName, description, stateCourse });
      setCourseName("");
      setDescription("");
      setStateCourse("En Proceso");
      onClose();
    };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ fontWeight: "bold" }}>
          Crea tu nuevo curso para Bloque 10
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontStyle: "italic",
            }}
          >
            Ingresa la información del curso que deseas crear. <br />
            Puedes utilizar emojis o emoticones para que sea más divertido 😎
          </DialogContentText>
  
          <TextField
            margin="dense"
            autoFocus
            id="course-name"
            label="Titulo del curso"
            type="text"
            placeholder="Ingresa aquí el nombre del curso"
            fullWidth
            variant="standard"
            onChange={(e) => setCourseName(e.target.value)}
            value={courseName}
          />
          <TextField
            margin="dense"
            id="course-description"
            label="Descripción del curso"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            helperText="Maximo 80 caracteres"
            inputProps={{
              maxLength: 80,
            }}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
  
          <Box my={1}>
            <Typography variant="standard" color="gray">
              Estado del curso:
            </Typography>
          </Box>
          <br />
          <ToggleButtonGroup
            size="small"
            label="Estado del curso"
            fontSize="small"
            value={stateCourse}
            exclusive
            onChange={(e) => setStateCourse(e.target.value)}
            aria-label="Platform"
          >
            <ToggleButton
              value="Sin Empezar"
              sx={{
                ":hover": {
                  backgroundColor: "#FF484229",
                  color: "#B72136",
                },
                "&.Mui-selected, &.Mui-selected:hover": {
                  fontWeight: "700",
                  backgroundColor: "#FF484229",
                  color: "#B72136",
                },
              }}
            >
              Sin Empezar
            </ToggleButton>
            <ToggleButton
              value="En Proceso"
              sx={{
                ":hover": {
                  backgroundColor: "#ffd70085",
                  color: "#998200",
                },
                "&.Mui-selected, &.Mui-selected:hover": {
                  fontWeight: "700",
                  backgroundColor: "#ffd70085",
                  color: "#998200",
                },
              }}
            >
              En Proceso
            </ToggleButton>
            <ToggleButton
              value="Para Revisión"
              sx={{
                ":hover": {
                  backgroundColor: "#e71be150",
                  color: "#9c0098",
                },
                "&.Mui-selected, &.Mui-selected:hover": {
                  fontWeight: "700",
                  backgroundColor: "#e71be150",
                  color: "#9c0098",
                },
              }}
            >
              Para Revisión
            </ToggleButton>
            <ToggleButton
              value="Terminado"
              sx={{
                ":hover": {
                  fontWeight: "700",
                  backgroundColor: "#54D62C29",
                  color: "#229A16",
                },
                "&.Mui-selected, &.Mui-selected:hover": {
                  fontWeight: "700",
                  backgroundColor: "#54D62C29",
                  color: "#229A16",
                },
              }}
            >
              Terminado
            </ToggleButton>
          </ToggleButtonGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  