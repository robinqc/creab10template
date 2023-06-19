import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';

function EmptyCard({ handleClickOpen }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card
        onClick={handleClickOpen}
        elevation={8}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '15rem',
          height: '15rem',
          overflow: 'hidden',
          borderRadius: 2,
          ml: 1,
          mr: 1,
          mb: 2,
          mt: 2,
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
        <CardContent>
          <Typography
            variant="body1"
            color="gray"
            fontWeight="bold"
            onClick={handleClickOpen}
            sx={{
              ':hover': {
                color: 'primary.main',
                cursor: 'pointer',
              },
            }}
          >
            Nuevo curso
          </Typography>
          <IconButton aria-label="add" onClick={handleClickOpen}>
            <AddCircleIcon
              sx={{
                fontSize: 80,
                ':hover': {
                  color: 'primary.main',
                },
              }}
            />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default EmptyCard;
