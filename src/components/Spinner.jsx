import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <CircularProgress />
      <h3
        style={{
          color: "black",
          fontSize: "25px",
          marginTop: "15px",
          letterSpacing: "1px",
        }}
      >
        Loading...
      </h3>
    </Box>
  );
}
