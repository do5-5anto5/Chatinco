"use client";

import { useRouter } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import { AlternateEmail } from "@mui/icons-material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";

/**
 * A top navigation bar component.
 *
 * This component renders a top navigation bar with a phone
 * number, email address, and a login button.
 *
 * The component uses the `useRouter` hook from `next/navigation`
 * to navigate to the login page when the login button is clicked.
 *
 * The component renders an `AppBar` component with a
 * `Toolbar` component inside. The `Toolbar` component is
 * centered and contains the phone number, email address, and
 * login button.
 *
 * The component uses the `sx` prop from `@mui/material` to
 * style the components.
 *
 * The component does not take any props.
 */
/**
 * @returns {JSX.Element} The top navigation bar component.
 */

export default function TopNav() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#ff9a00" }}>
          <Toolbar sx={{ justifyContent: "space-evenly" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton color="inherit">
                <PhoneIcon />
              </IconButton>

              <Typography variant="body1" noWrap color="inherit">
                +123456789
              </Typography>

              <IconButton color="inherit">
                <AlternateEmail />
              </IconButton>

              <Typography variant="body1" noWrap color="inherit">
                test@gmail.com
              </Typography>
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleButtonClick}
                startIcon={<PersonPinIcon />}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
