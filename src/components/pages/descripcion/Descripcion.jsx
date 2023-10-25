import React from "react";
import Carousel from "react-material-ui-carousel";
import { ProyectosData } from "../../../servidor/ProyectosData";
import { Box } from "@mui/material";
import ImgCard from "../../commond/imgCard/ImgCard";
import TextoTituloCard from "../../commond/textoTituloCard/TextoTituloCard";
import NavBar from "../../commond/navBar/NavBar";

const Descripcion = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{

          width: "95%",
          m: "auto",
          mb: 3,
          mt:12,
        }}
      >
        <Carousel  sx={{ width: "95%", m: "auto" }}>
          {ProyectosData.map((proyecto) => (
            <Box key={proyecto.id}>
              <ImgCard imagen={proyecto.imagen} />
              <TextoTituloCard titulo={proyecto.titulo} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Descripcion;
