import * as Yup from "yup";
import "yup-phone-lite";

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

const validationSchema = {
  username: Yup.string()
    .min(2, "Username must be at least ${min} characters")
    .max(16, "Username must be at most ${max} characters!")
    .required("Username cannot be blank"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Email cannot be blank"),
  password: Yup.string()
    // .min(8, ({ min }) => `Password must be at least ${min} characters`)
    // .max(64, ({ max }) => `Password must be at most ${max} characters`)
    .required("Password cannot be blank"),
  // .matches(
  //   passwordRegex,
  //   "Must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  // )
  phone: Yup.string()
    .phone("CA", "Phone number is not valid")
    .required("Phone number cannot be blank"),
  pin: Yup.string()
    .matches(/^[0-9]{4}$/, "PIN must be 4 digits")
    .required("PIN is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .min(0.01, "Amount cannot be zero")
    .max(1000, "Amount must not exceed $1000")
    .required("Amount cannot be blank"),
  question: Yup.string().required("Question cannot be blank"),
  answer: Yup.string().required("Answer cannot be blank"),
  firstName: Yup.string().required("First Name cannot be blank"),
  lastName: Yup.string().required("Last Name cannot be blank"),
  dob: Yup.date()
    .required("Date of Birth is required")
    .min(new Date("1900-01-01"), "Date of Birth must be later than 1900-01-01")
    .max(new Date(), "Date of Birth cannot be in the future"),
  address: Yup.string().required("Address is required"),
  city: Yup.string()
    .required("City is required")
    .min(2, "City name must be at least 2 characters"),
  province: Yup.string()
    .required("Province is required")
    .min(2, "Province name must be at least 2 characters"),
  postalCode: Yup.string()
    .required("Postal code is required")
    .matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, "Invalid postal code"),
};

export default validationSchema;
