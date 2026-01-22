"use client";

import { Add } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import Link from "next/link";

/**
 * A navigation bar component.
 *
 * This component renders a navigation bar with links to
 * the home, blog, about, contact, and package pages.
 *
 * The component also renders a button to create a new
 * announcement.
 *
 * The component uses the `@mui/material` library to
 * style the components.
 *
 * The component does not take any props.
 */
const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref>
              <Button sx={{ color: "black" }}>Anúncios</Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref>
              <Button sx={{ color: "black" }}>Home</Button>
            </Link>
            <Link href="/blog" passHref>
              <Button sx={{ color: "black" }}>Blog</Button>
            </Link>
            <Link href="/about" passHref>
              <Button sx={{ color: "black" }}>Sobre</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button sx={{ color: "black" }}>Contato</Button>
            </Link>
            <Link href="/package" passHref>
              <Button sx={{ color: "black" }}>Preços</Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref>
              <Button
                variant="outlined"
                startIcon={<Add />}
                sx={{ color: "white", backgroundColor: "#ff9a00", mr: 2 }}
              >
                Anúncio
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
