import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Box, Drawer, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// mock
// hooks
// components
import Scrollbar from '../../../components/scrollbar';
//

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

CourseContents.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function CourseContents({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ mb: 5, mx: 2.5, backgroundColor: 'rgba(0,0,0,0.2)', padding: 2, borderRadius: 2 }}>
        <Typography variant="button">Contenidos del curso</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box component="nav">
      <Drawer
        open={openNav}
        onClose={onCloseNav}
        variant="permanent"
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: { width: NAV_WIDTH, position: 'absolute', top: '62px', height: 'calc(100vh - 62px)' },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
