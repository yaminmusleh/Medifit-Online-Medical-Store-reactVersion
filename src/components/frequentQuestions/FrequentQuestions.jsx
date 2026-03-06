import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import img from "./question-circle.svg";
import img2 from "./medical-plus.svg";
import { Collapse } from "@mui/material";

export default function FrequentQuestions({ MainColor, MainFont }) {
  const [open, setOpen] = useState(null);
  const FAQ = [
    {
      A: "What products do you offer?",
      Q: "We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.",
    },
    {
      A: "How can I place an order?",
      Q: "You can place an order directly through our website by adding the products to your cart and proceeding to checkout. If you need help, our support team is here to assist you.",
    },
    {
      A: "Do you provide home delivery?",
      Q: "Yes, we provide home delivery across West Bank. Orders are usually delivered within 7 days.",
    },
    {
      A: "Can I return or exchange products?",
      Q: "Yes, returns or exchanges are accepted within 3 days, provided the products are unopened and in original condition. Please contact our support team to start the process.",
    },
  ];
  return (
    <Box py={"100px"}>
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
            Frequently Asked Questions
            <Box
              component={"img"}
              src={img}
              align="center"
              sx={{
                width: {
                  xs: "10%",
                  lg: "12%",
                },
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
            display:'flex', 
            flexDirection:'column',
            gap:'25px'
            
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
                  {item.A}
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
                    {item.Q}
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
