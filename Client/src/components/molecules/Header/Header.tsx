import { ReactComponent as AXAlogo } from '../../../assets/Img/AXA Health.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    // Sticky app bar with no shadow and white background
    <AppBar 
      position='sticky' 
      sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none' }}
      data-testid='Header'
    >
      {/* Logo container with padding */}
      <Box 
        sx={{ padding: '8px', paddingLeft: '90px' }} 
        data-testid='Box-LogoContainer'
      >
        {/* Render AXA logo */}
        <AXAlogo data-testid='AXAlogo' />
      </Box>
    </AppBar>
  );
};

export default Header;
