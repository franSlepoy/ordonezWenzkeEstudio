import { Box } from "@mui/material";
import owstyles from "./OW.module.css";

const OW = () => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Work Sans', sans-serif",
          borderRight: "solid .2px",
          padding: "0 30px 30px 0",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "100px", fontWeight: 100 }}>
          O
        </h2>
        <p className={owstyles.parrafos}>
          Florencia Ordoñez graduated in architecture from the Faculty of
          Architecture, Design and Urbanism of the University of Buenos Aires
          (FADU, UBA) where she specialized in furniture design under the
          direction of professor Ricardo Blanco. .
        </p>
        <p className={owstyles.parrafos}>
          In 2007 she founded estudio Nidolab together with Sol García del Río
          and Lucía Villarreal. For 10 years they designed and built renowned
          works in the field of retail, gastronomy and interior design,
          generating an award-winning portfolio and international publications
          (Wallpaper, Plot, SUMMA, BARZÓN, etc.). Outstanding works to be named
          are Alicia Restaurant, Mecha Restaurant, Félix Paseo Alcorta,
          Monochrome Bike Shop, Animal Music Production Company and spaces
          designed for Casa FOA design fare.
        </p>

        <p className={owstyles.parrafos}>
          In 2017 she founded Florencia Ordoñez Estudio looking for different
          ways to approach her projects, synthesizing influences from the field
          of fashion, art and new technologies.
        </p>
        <p className={owstyles.parrafos}>
          “Despite its uniqueness, I feel as if each work I worked on was part
          of a single ongoing project, where the different processes are linked
          and related to each other in terms of their idea, materials or
          aesthetics, beyond the course of time and the function.”
        </p>
        <p className={owstyles.parrafos}>
          As a continuation of this line of thought, she founded OrdoñezWenzke
          in 2018 together with Nik Wenzke.
        </p>
        <p className={owstyles.parrafos}>
          Florencia has worked with clients and professionals, including MMCV,
          CONSULTATIO, Remolino, Küche, Ximena Saenz, Pesqueira and Poster Café
          (London) among others. Working extensively on projects in the world of
          design both locally and abroad, she brings an aesthetic expertise to
          the studio that satisfies the most demanding creative standards
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Work Sans', sans-serif",
          pl: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "100px", fontWeight: 100 }}>
          W
        </h2>
        <p className={owstyles.parrafos}>
          Nik Wenzke graduated in architecture from the Technical University of
          Darmstadt, Germany in 2007 and completed complementary studies at the
          Higher Technical School of Architecture of Madrid.
        </p>
        <p className={owstyles.parrafos}>
          Between 2004 and 2016 he gained experience at Nieto Sobejano
          Arquitectos in Madrid and Berlin, at Jasper Architects in Buenos Aires
          and at BKK Architects in Melbourne. During this period he worked on
          internationally competitive projects, including the Contemporary
          Creation Center of Andalusia in Córdoba, Spain, Nestlé’s New
          Headquarter in San Francisco de Quito, Ecuador, the Joanneumsviertel
          in Graz, Austria, as well as UP! Umbau Kaufhof am Ostbahnhof in
          Berlin, Germany
        </p>
        <p className={owstyles.parrafos}>
          He became project leader and studio manager at Jasper Architects
          Buenos Aires, where he coordinated projects on a scale up to 50,000
          m².
        </p>
        <p className={owstyles.parrafos}>
          Nik is qualified as a consultant from the German Sustainable Building
          Council, the DGNB.
        </p>
        <p className={owstyles.parrafos}>
          In 2018, he founded OrdoñezWenzke together with Florencia Ordoñez
        </p>
        <p className={owstyles.parrafos}>
          Nik is experienced in coordinating intercontinental teams. His
          portfolio combines vanguard with expertise, large-scale construction
          with commitment to detail, and sustainability with design excellence.
          With an interdisciplinary profile and his vast experience in
          administration, alongside strong leadership and international
          communication skills, his work is defined by a solid quality that has
          evolved into his signature style.
        </p>
      </Box>
    </Box>
  );
};

export default OW;
