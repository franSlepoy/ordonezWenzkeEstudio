import imagen_studio from "../../../../../public/imagenes/studio/imagen_final.jpg";
import imagenStyles from "./ImgStudio.module.css"
const ImgStudio = () => {
  return (
    <div>
      <img src={imagen_studio} className={imagenStyles.imagenStudio} />
    </div>
  );
};

export default ImgStudio;
