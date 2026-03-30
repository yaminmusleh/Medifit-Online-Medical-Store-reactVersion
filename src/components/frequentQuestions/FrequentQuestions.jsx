import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import img from "./question-circle.svg";
import img2 from "./medical-plus.svg";
import { Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FrequentQuestions({ MainColor, MainFont }) {
  const [open, setOpen] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const FAQ = t("faq.items", { returnObjects: true });

  return (
    <Box dir={isRTL ? "rtl" : "ltr"} py={"100px"}>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "space-between", alignItems: "start" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            width: {
              xs: "100%",
              md: "40%",
            },
          }}
        >
          <Typography
            align="left"
            sx={{
              fontSize: {
                xs: "30px",
                md: "48px",
              },
              color: MainColor,
              fontFamily: MainFont,
            }}
          >
            {t("faq.title")}
            <Box
              component={"img"}
              src={img}
              align="center"
              sx={{
                width: {
                  xs: 30,
                  md: 40,
                  lg: 50,
                },
                marginInlineStart: "10px",
              }}
            />
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          onClick={(e) => {
            const index = e.target.closest(".left_side")?.dataset.index;
            if (index !== undefined)
              setOpen(open === Number(index) ? null : Number(index));
          }}
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          {FAQ.map((item, i) => (
            <Box
              key={i}
              data-index={i}
              className="left_side"
              sx={{
                border: `1px solid ${MainColor}`,
                borderRadius: "7px",
                color: MainColor,
                p: "25px",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              <Box
                className="Question"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Box
                  component={"img"}
                  src={img2}
                  sx={{
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.4s ease",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "24px",
                    },
                    fontFamily: MainFont,
                    color: MainColor,
                  }}
                >
                  {item.q}
                </Typography>
              </Box>

              <Collapse in={open === i} timeout={400}>
                <Box className="Answer">
                  <Typography
                    sx={{
                      color: "#8F7D6A",
                      fontFamily: "sans-serif",
                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },
                    }}
                  >
                    {item.a}
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
