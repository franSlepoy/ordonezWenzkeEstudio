import { useState } from 'react';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { ProyectosData } from '../../../servidor/ProyectosData';

const Proyectos = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      <Box width={"95%"} m={"auto"} sx={{ borderLeft: "solid #666666 0.1px", borderRight: "solid #666666 0.1px" }}>
        <ImageList variant="classic" cols={3} gap={0}>
          {ProyectosData.map((item) => (
            <ImageListItem key={item.id} onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem(null)}>
              <a href={`/descripcion/${item.id}`} style={{ textDecoration: 'none', position: 'relative' }}>
                <Box
                  sx={{
                    p: 4,
                    borderLeft: "solid #666666 0.1px",
                    borderRight: "solid #666666 0.1px",
                    textAlign: "center",
                    position: 'relative',
                    height:"100%"
                  }}
                >
                  {hoveredItem === item ? (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin:"auto",
                        width: '75%',
                        height:"380px",
                        backgroundColor: '#e2e2c7',
                        transition: 'background-color 0.5s',
                        
                        }}
                    >
                      <Typography sx={{fontFamily:"Work Sans ", textAlign:"center", fontSize:"16px", color:"black"  }} > 
                      {item.titulo}
                      </Typography>
                      
                    </Box>
                  ) : (
                    <img
                      width={"75%"}
                      srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.imagen}?w=248&fit=crop&auto=format`}
                      alt={item.titulo}
                      loading="lazy"
                    />
                  )}
                </Box>
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Proyectos;
