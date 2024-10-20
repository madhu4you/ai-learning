import React from "react";
import { Container } from "@mui/material";
import { Header } from "../components";

export const Layout = () => {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Header />
    </Container>
  );
};
