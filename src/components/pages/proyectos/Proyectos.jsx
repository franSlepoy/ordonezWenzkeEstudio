import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { ProyectosData } from '../../../servidor/ProyectosData'

const Proyectos = () => {
  return (
    <>
    <Box  width={"80%"} m={"auto"} >
    <ImageList variant="classic" cols={3} gap={0}>
  {ProyectosData.map((item) => (
    <ImageListItem key={item.id}>
      <Box sx={{maxWidth:"340px", p:4, borderLeft:"solid black 1px", borderRight:"solid black 1px"}}>
      <img
        width={"100%"}
        srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.imagen}?w=248&fit=crop&auto=format`}
        alt={item.titulo}
        loading="lazy"
      />
      </Box>
    
    </ImageListItem>
  ))}
</ImageList>
    </Box>
    </>
   
  )
}

export default Proyectos
