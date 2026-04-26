import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center" // Centers items horizontally
    justifyContent="center" // Centers items vertically
    className="bodyPart-card"
    sx={{
      background:
        bodyPart === item
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(10px)",
      borderBottomLeftRadius: "20px",
      width: "270px",
      height: "282px",
      cursor: "pointer",
      gap: "40px", // Proper gap between icon and text
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderTop:
        bodyPart === item
          ? "4px solid #FF2625"
          : "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: bodyPart === item ? "0 0 20px rgba(255, 38, 37, 0.4)" : "none",
      transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
        borderTop: "4px solid #00D2FF",
        boxShadow: "0 0 25px rgba(0, 210, 255, 0.3)",
        transform: "translateY(-10px)",
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img
      src={Icon}
      alt="dumbbell"
      style={{
        width: "60px", // Made icon larger
        height: "60px",
        filter:
          bodyPart === item
            ? "invert(1) drop-shadow(0 0 8px #FF2625)"
            : "invert(1) opacity(0.5)",
        transition: "0.3s",
      }}
    />

    <Typography
      /* Big and Bold Typography Fix */
      fontSize="28px"
      fontWeight="800" // Extra Bold
      fontFamily="Josefin Sans"
      color="#fff"
      textTransform="capitalize"
      sx={{
        letterSpacing: "2px",
        textShadow:
          bodyPart === item ? "0 0 15px rgba(255, 38, 37, 0.8)" : "none",
        opacity: bodyPart === item ? 1 : 0.7,
        textAlign: "center",
      }}
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
