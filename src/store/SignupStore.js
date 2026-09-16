import { create } from "zustand";

export const useSignupStore = create((set) => ({
  // Current screen
  currentStep: 1,

  // Form data
  email: "",
  newsletter: false,
  otp: "",

  username: "",
  name: "",
  age: "",

  pronouns: [],

  referralCode: "",

  // Loading state
  isLoading: false,

  // Error
  error: "",

  // =========================
  // UPDATE FUNCTIONS
  // =========================

  setEmail: (email) =>
    set({
      email,
      error: "",
    }),

  setNewsletter: (newsletter) =>
    set({
      newsletter,
    }),

  setOtp: (otp) =>
    set({
      otp,
      error: "",
    }),

  setUsername: (username) =>
    set({
      username,
      error: "",
    }),

  setName: (name) =>
    set({
      name,
      error: "",
    }),

  setAge: (age) =>
    set({
      age,
      error: "",
    }),

  setPronouns: (pronouns) =>
    set({
      pronouns,
      error: "",
    }),

  setReferralCode: (referralCode) =>
    set({
      referralCode,
      error: "",
    }),

  // =========================
  // STEP
  // =========================

  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
      error: "",
    })),

  previousStep: () =>
    set((state) => ({
      currentStep: Math.max(1, state.currentStep - 1),
      error: "",
    })),

  goToStep: (step) =>
    set({
      currentStep: step,
      error: "",
    }),

  // =========================
  // LOADING
  // =========================

  setLoading: (isLoading) =>
    set({
      isLoading,
    }),

  // =========================
  // ERROR
  // =========================

  setError: (error) =>
    set({
      error,
    }),

  clearError: () =>
    set({
      error: "",
    }),

  // =========================
  // RESET
  // =========================

  resetSignup: () =>
    set({
      currentStep: 1,

      email: "",
      newsletter: false,
      otp: "",

      username: "",
      name: "",
      age: "",

      pronouns: [],

      referralCode: "",

      isLoading: false,
      error: "",
    }),
}));