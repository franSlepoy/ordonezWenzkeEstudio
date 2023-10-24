import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';


export default function NavListDrawer() {
    const { t, i18n } = useTranslation();
     // Función para cambiar el idioma a español
  const cambiarAEspanol = () => {
    i18n.changeLanguage('es');
  };

  // Función para cambiar el idioma a inglés
  const cambiarAIngles = () => {
    i18n.changeLanguage('en');
  };
  

  return (
    <Box>
      <nav aria-label="main mailbox folders">
      
        <List>
          <ListItem disablePadding>
            <ListItemButton>
            <Typography sx={{ fontSize: "16px", color: "#000" }}>
                {t("tituloNavBarIzquierda")}
              </Typography>
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
            <Typography sx={{ fontSize: "16px", color: "#000" }}>
                {t("tituloNavBarDerecha")}
              </Typography>
            </ListItemButton>
          </ListItem>
          
          <Divider />

          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Button onClick={cambiarAEspanol} data-i18n="es">
                <Typography sx={{ fontSize: "16px", color: "#000" }}>ES</Typography>
              </Button>
            </Box>
            
            <Box>
            <Button  onClick={cambiarAIngles} data-i18n="en">
                <Typography sx={{ fontSize: "16px", color: "#000" }}>EN</Typography>
              </Button>
            </Box>

          </Box>

        </List>
      </nav>
    
     
      
    </Box>
  );
}