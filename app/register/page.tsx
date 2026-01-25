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
 * RegisterPage component.
 * This component renders a register page with a form to input name, email, password, confirm password, and accept terms.
 * It also renders a submit button to submit the form.
 * If the form is invalid, it displays an error message.
 * If the form is submitting, it displays a loading message.
 * If the form is submitted successfully, it navigates to the home page.
 * The component also renders a section for social media login buttons (Google, Facebook, Apple).
 * It also renders a footer with a link to the login page.
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
      setError("Senhas não conferem");

      setIsSubmitting(false);
      return;
    }

    if (!formData.acceptTerms) {
      setError("Você precisa aceitar os termos e condições para continuar");

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
                    label="Nome Completo"
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
                    label="Email"
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
                    label="Senha"
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
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
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
                    label="Confirmar Senha"
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
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
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
                      <Box>
                        <Checkbox
                          checked={formData.acceptTerms}
                          onChange={handleChange}
                          name="acceptTerms"
                          required
                        />
                      </Box>
                    }
                    label={
                      <Typography variant="body2" color="textSecondary">
                        Eu aceito os{" "}
                        <b>
                          <Link href="/terms">
                            Termos e Condições
                          </Link>
                        </b>
                      </Typography>
                    }
                    sx={{
                      mt: 1,
                    }}
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
                    {isSubmitting ? "Criando Conta..." : "Criar Conta"}
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
                    ou continuar com
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
                  <Typography variant="body2" color="textSecondary">
                    Já tem uma conta?{" "}
                    <Link href="/login" color="primary">
                      Entrar
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
