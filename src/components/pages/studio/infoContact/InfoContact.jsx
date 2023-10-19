import { Box } from "@mui/material";

const InfoContact = () => {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-around",
        fontFamily: "'Libre Baskerville', sans-serif",
      }}
    >
      <Box
        sx={{
          lineHeight: "35px",
          fontSize: { md: "25px", xs: "20px" },
        }}
      >
        <h6
          style={{
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          ADDRESS
        </h6>
        <p>Concepción Arenal 4244, #133</p>
        <p>Barrio Parque Los Andes, </p>
        <p>Buenos Aires, Argentina</p>
      </Box>
      <Box
        sx={{
          fontSize: { md: "25px", xs: "20px" },
          lineHeight: "35px",
        }}
      >
        <h6
          style={{
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          CONTACTO
        </h6>
        <p>+54 9 11 5101 5553</p>
        <p>info@ordonezwenzke.com</p>
        <p>@ordonezwenzke_ow</p>
      </Box>
    </Box>
  );
};

export default InfoContact;
