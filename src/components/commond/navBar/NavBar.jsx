import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  Hidden,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawe";
import { useState } from "react";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma a español
  const cambiarAEspanol = () => {
    i18n.changeLanguage("es");
  };

  // Función para cambiar el idioma a inglés
  const cambiarAIngles = () => {
    i18n.changeLanguage("en");
  };

  const [open, setOpen] = useState(false);

  const cerrarBar = ()=> {
    return setOpen(false)
  }

  return (
    <>
      <Hidden mdDown>
        <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box /* width={"300px"} */ display={"flex"}>
              <a
                href="#projects"
                style={{
                  fontSize: "16px",
                  color: "#000",
                  underline: "none",
                  textDecoration: "none",
                }}
              >
                {t("tituloNavBarIzquierda")}
              </a>
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

            <Box >
              <img width={"300px"} src="/imagenes/ownegro.png" alt="" />
            </Box>

            <Box /* width={"300px"} */>
              <a
                href="#studio"
                style={{
                  textAlign: "end",
                  fontSize: "16px",
                  color: "#000",
                  underline: "none",
                  textDecoration: "none",
                }}
              >
                {t("tituloNavBarDerecha")}
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden mdDown>
        <AppBar position="fixed" sx={{ width: "100%" }}>
          <Grid
            container
            justifyContent="space-between"
            sx={{ position: "fixed", top: "50%" }}
          >
            <Grid item>
              <Button onClick={cambiarAEspanol} data-i18n="es">
                <Box
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#1d1d1d",
                  }}
                >
                  <Typography>e</Typography>
                  <Typography>s</Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={cambiarAIngles} data-i18n="en">
                <Box
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#1d1d1d",
                  }}
                >
                  <Typography>e</Typography>
                  <Typography>n</Typography>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </Hidden>

      <Hidden mdUp>
        <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box>
              <img width={"50%"} src="/imagenes/ownegro.png" alt="" />
            </Box>
            <Box>
              <Button
                onClick={() => setOpen(true)}
                sx={{
                  color: "#1d1d1d",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <MenuIcon fontSize="large" />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer open={open} anchor="top" onClose={() => setOpen(false)}>
          <NavListDrawer onclose={cerrarBar} />
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
