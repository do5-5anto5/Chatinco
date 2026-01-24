"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  AuthContainer,
  FormSection,
  FormContainer,
  SocialButtonsContainer,
  AuthFooter,
  GoogleButton,
  FacebookButton,
  AppleButton,
} from "./registerStyles";

import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Apple,
  Email,
  Facebook,
  Google,
  Lock,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

/**
 * The RegisterPage component renders a registration form with fields for name, email, password, confirm password, and terms acceptance.
 * The form also includes a submit button that is disabled while the form is being submitted.
 * The component also renders a divider line with the text "OR SIGN UP WITH" and three social media sign up buttons below the form.
 * The component also renders an AuthFooter component with a link to the login page.
 * The component uses the MUI library for its styling and components.
 * The component uses the useRouter hook from next/navigation to navigate to the login page when the login button is clicked.
 * The component uses the useState hook to store the form data, whether the form is being submitted, and any error messages that occur during form submission.
 * The component uses the handleChange function to update the form data when a field is changed.
 * The component uses the handleSubmit function to handle form submission.
 * The component uses the motion library from framer to animate the form and its components.
 */
const RegisterPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "acceptTerms" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    console.log("form data: ", formData);

    if (formData.password !== formData.confirmPassword) {
      setError("Password do not match");

      setIsSubmitting(false);
      return;
    }

    if (!formData.acceptTerms) {
      setError("You must acccept terms and conditions to continue");

      setIsSubmitting(false);
      return;
    }
  };

  return (
    <AuthContainer>
      {/* Form Section */}
      <FormSection>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FormContainer>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Create Account
              </Typography>
            </motion.div>

            <Box mt={4}>
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    margin="normal"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    margin="normal"
                    name="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => {}}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </motion.div>

                {/* Confirm Password Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    margin="normal"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => {}}>
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </motion.div>

                {/* Terms Checkbox */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        name="acceptTerms"
                        color="primary"
                        required
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the{" "}
                        <Link href="/terms" color="primary">
                          Terms and Conditions
                        </Link>
                      </Typography>
                    }
                    sx={{ mt: 1 }}
                  />
                </motion.div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Typography color="error" align="center" mt={2}>
                      {error}
                    </Typography>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    disabled={isSubmitting}
                    sx={{
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      color: "white",
                      backgroundColor: "#ff9a00",
                      "&:hover": {
                        backgroundColor: "#ff9a00",
                      },
                    }}
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                </motion.div>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" color="textSecondary">
                    OR SIGN UP WITH
                  </Typography>
                </Divider>

                <Box display="flex" justifyContent="center" mt={2}>
                  <SocialButtonsContainer>
                    <GoogleButton
                      variant="contained"
                      startIcon={<Google />}
                      fullWidth
                    >
                      Google
                    </GoogleButton>

                    <FacebookButton
                      variant="contained"
                      startIcon={<Facebook />}
                      fullWidth
                    >
                      Facebook
                    </FacebookButton>

                    <AppleButton
                      variant="contained"
                      startIcon={<Apple />}
                      fullWidth
                    >
                      Apple
                    </AppleButton>
                  </SocialButtonsContainer>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <AuthFooter>
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Link href="/login" color="primary">
                      Sign in
                    </Link>
                  </Typography>
                </AuthFooter>
              </motion.div>
            </Box>
          </FormContainer>
        </motion.div>
      </FormSection>
    </AuthContainer>
  );
};

export default RegisterPage;
