import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import phone from "./imgs/phone.svg";
import user1 from "./imgs/user1.svg";
import user2 from "./imgs/user2.svg";
import user3 from "./imgs/user3.svg";
import user4 from "./imgs/user4.svg";
import user5 from "./imgs/user5.svg";
import { toast } from "react-toastify";

export default function ContactForm({ MainColor, MainFont }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schedule: "",
    message: "",
  });

  const isFormIncomplete = Object.values(formData).some(
    (value) => value.trim() === "",
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];
    storedMessages.push(formData);
    localStorage.setItem("contactMessages", JSON.stringify(storedMessages));
    setFormData({
      name: "",
      email: "",
      phone: "",
      schedule: "",
      message: "",
    });
    toast.success("Form got submitted to our team!");
  };

  return (
    <Box
      sx={{
        py: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "70px",
        flexDirection: "column",
      }}
    >
      <Box
        className="title"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "50px",
            },
            color: MainColor,
            fontFamily: MainFont,
            fontWeight: 600,
          }}
        >
          Contact us{" "}
          <Box
            component={"img"}
            src={phone}
            alt="phone"
            sx={{ width: { xs: 40, md: 70 } }}
          />
        </Typography>
        <Typography
          component={"span"}
          sx={{
            color: "#8F7D6A",
            fontFamily: "sans-serif",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          Have questions or need support? Get in touch with our team – we're
          here to help!
        </Typography>
      </Box>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: "50px" }}
      >
        <Box
          className="upper"
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "418px" } }}>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: { xs: 13, md: 15 },
                color: MainColor,
              }}
            >
              Full name
            </Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                },
              }}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="img" src={user1} sx={{ width: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "418px" } }}>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: { xs: 13, md: 15 },
                color: MainColor,
              }}
            >
              Email address
            </Typography>
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                },
              }}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="img" src={user2} sx={{ width: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box
          className="lower"
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "418px" } }}>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: { xs: 13, md: 15 },
                color: MainColor,
              }}
            >
              Phone number
            </Typography>
            <TextField
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                },
              }}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="img" src={user3} sx={{ width: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "418px" } }}>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: { xs: 13, md: 15 },
                color: MainColor,
              }}
            >
              Schedule to receive call
            </Typography>
            <TextField
              type="date"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                },
              }}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="img" src={user4} sx={{ width: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box className="message">
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: { xs: 13, md: 15 },
              color: MainColor,
            }}
          >
            Message
          </Typography>
          <TextField
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={7}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
                alignItems: "flex-start",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="img" src={user5} sx={{ width: 20 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <Button
            disabled={isFormIncomplete}
            type="submit"
            sx={{
              backgroundColor: MainColor,
              fontFamily: MainFont,
              textTransform: "none",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
