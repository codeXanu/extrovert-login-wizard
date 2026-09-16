export function validateEmail(email) {
  if (!email.trim()) {
    return "Please enter your email.";
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  return "";
}


export function validateOtp(otp) {
  if (!otp.trim()) {
    return "Please enter the OTP.";
  }

  if (!/^\d{6}$/.test(otp)) {
    return "OTP must contain 6 digits.";
  }

  return "";
}


export function validateUsername(username) {
  const value = username.trim();

  if (!value) {
    return "Please enter a username.";
  }

  if (value.length < 3) {
    return "Username must be at least 3 characters.";
  }

  if (value.length > 30) {
    return "Username cannot exceed 30 characters.";
  }

  if (!/^[a-zA-Z0-9_.]+$/.test(value)) {
    return "Username can only contain letters, numbers, _ and .";
  }

  return "";
}


export function validateName(name) {
  const value = name.trim();

  if (!value) {
    return "Please enter your name.";
  }

  if (value.length > 50) {
    return "Name cannot exceed 50 characters.";
  }

  return "";
}


export function validateAge(age) {
  if (!age.trim()) {
    return "Please enter your age.";
  }

  if (!/^\d+$/.test(age)) {
    return "Age must contain numbers only.";
  }

  const numericAge = Number(age);

  if (numericAge < 18) {
    return "You must be at least 18 years old.";
  }

  if (numericAge > 100) {
    return "Please enter a valid age.";
  }

  return "";
}


export function validatePronouns(pronouns) {
  if (!pronouns || pronouns.length === 0) {
    return "Please select at least one pronoun.";
  }

  if (pronouns.length > 3) {
    return "You can select up to 3 pronouns.";
  }

  return "";
}