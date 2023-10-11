import { AppBar, Box, Button, Hidden, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
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
    <>
      <Hidden smDown>
        <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box width={"300px"} display={"flex"}>
              <Typography sx={{ fontSize: "16px", color: "#000" }}>
                {t("tituloNavBarIzquierda")}
              </Typography>
              <Box
                sx={{
                  ml: 2,
                  width: "20px",
                  height: "20px",
                  borderRadius: "100%",
                  bgcolor: "#e2e2c7",
                }}
              ></Box>
            </Box>

            <Box>
              <img width={"300px"} src="/imagenes/ownegro.png" alt="" />
            </Box>

            <Box width={"300px"}>
              <Typography sx={{ textAlign: "end", fontSize: "16px", color: "#000" }}>
                {t("tituloNavBarDerecha")}
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
          height: "100vh",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          fontSize: "12px",
          lineHeight: "12px",
          color: "#1d1d1d",
        }}
      >
        <Button onClick={cambiarAEspanol} data-i18n="es">
          <Box>
            <Typography>
              e
            </Typography>
            <Typography>
              s
            </Typography>
          </Box>
        </Button>

        <Button onClick={cambiarAIngles} data-i18n="en">
          <Box>
            <Typography>
              e
            </Typography>
            <Typography>
              n
            </Typography>
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default NavBar;
