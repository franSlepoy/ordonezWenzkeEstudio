import { useState } from 'react';
import { Box, Hidden, ImageList, ImageListItem, Typography } from '@mui/material';
import { ProyectosData } from '../../../servidor/ProyectosData';

const Proyectos = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
     <Hidden mdDown>
     <Box width={"93%"} m={"auto"} sx={{ borderLeft: "solid #666666 0.1px", borderRight: "solid #666666 0.1px" }}>
        <ImageList variant="classic" cols={3} gap={0}>
          {ProyectosData.map((item) => (
            <ImageListItem key={item.id} onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem(null)}>
              <a href={"/description"} style={{ textDecoration: 'none', position: 'relative' }}>
                <Box
                  sx={{
                    p: 4,
                    borderLeft: "solid #666666 0.1px",
                    borderRight: "solid #666666 0.1px",
                    textAlign: "center",
                    position: 'relative',
                    height:"100%",
                    
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
                      <Typography sx={{fontFamily:"Pragmatica", textAlign:"center", fontSize:"16px", color:"black", p:10  }} > 
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
     </Hidden>
        
     <Hidden mdUp>
     <Box width={"98%"} m={"auto"} >
        <ImageList variant="classic" cols={1} gap={0}>
          {ProyectosData.map((item) => (
            <ImageListItem key={item.id} onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem(null)}>
              <a href={"/description"} style={{ textDecoration: 'none', position: 'relative' }}>
                <Box
                  sx={{
                  
                    p: 4,
                    width:"100%",
                    textAlign: "center",
                    position: 'relative',
                    height:"440px",
                  }}
                >
                  {hoveredItem === item ? (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin:"auto",
                        width: '100%',
                        height:"440px",
                        backgroundColor: '#e2e2c7',
                        transition: 'background-color 0.5s',
                        
                        }}
                    >
                      <Typography sx={{fontFamily:"Pragmatica", textAlign:"center", fontSize:"16px", color:"black", p:10  }} > 
                      {item.titulo}
                      </Typography>
                      
                    </Box>
                  ) : (
                   
                    <img
                    
                      width={"100%"}
                      height={"440px"}
                      srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.imagen}?w=248&fit=crop&auto=format`}
                      alt={item.titulo}
                      loading="lazy"
                    />
                    
                  )}
                    
                </Box>
              </a>
              <Typography sx={{fontFamily:"Pragmatica", textAlign:"center", fontSize:"16px", color:"black", mt:5 }} > 
              {item.titulo}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
     </Hidden>
     
    </>
  );
};

export default Proyectos;
