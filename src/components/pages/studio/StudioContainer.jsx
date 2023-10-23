import { Box } from "@mui/material";
import TextInitial from "./textInitial/TextInitial";
import OW from "./OW/OW";
import ImgStudio from "./imgstudio/ImgStudio";
import InfoContact from "./infoContact/InfoContact";

const StudioContainer = () => {
  return (
    <Box
      width={"93%"}
      m={"auto"}
      sx={{
        borderLeft: { md: "solid black 1.5px", xs: "none" },
        borderRight: { md: "solid black 1.5px", xs: "none" },
        p: { md: 4, xs: 1 },
      }}
    >
      <div>
        <TextInitial />
        <OW />
        <ImgStudio />
        <InfoContact />
      </div>
    </Box>
  );
};

export default StudioContainer;
