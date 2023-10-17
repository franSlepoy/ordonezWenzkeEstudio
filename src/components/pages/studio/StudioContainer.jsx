import { Box } from "@mui/material";
import TextInitial from "./textInitial/TextInitial";
import OW from "./OW/OW";
import ImgStudio from "./imgstudio/ImgStudio";
import InfoContact from "./infoContact/InfoContact";

const StudioContainer = () => {
  return (
    <Box
      width={"90%"}
      m={"auto"}
      sx={{
        borderLeft: "solid black 1px",
        borderRight: "solid black 1px",
        p: 4,
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
