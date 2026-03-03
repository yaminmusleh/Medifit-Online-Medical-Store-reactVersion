import { Box } from "@mui/material";
import company1 from "./assets/Compnay1.svg";
import company2 from "./assets/Compnay logo2.svg";
import company3 from "./assets/company3.svg";
import company4 from "./assets/company4.svg";
import company5 from "./assets/company5.svg";
import company6 from "./assets/company6.svg";

export default function Slider() {
  const gallery = [company1, company2, company3, company4, company5, company6];

  const infiniteGallery = [...gallery, ...gallery];
  // i do duplication here

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py:'33px',
        backgroundColor:"#E2DFCF"
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 12,
          width: "max-content",
          animation: "scroll 27s linear infinite",
          "@keyframes scroll": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
        }}
      >
        {infiniteGallery.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`logo-${index}`}
            sx={{
              height: 50,
              objectFit: "contain",
             
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
