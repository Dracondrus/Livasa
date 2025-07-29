import * as yup from "yup";
//Sign Up form validation schema
export const signUpSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords do not match"),
    remember: yup.boolean(),
});
//Sign in form validation schema
export const signInSchema = yup.object().shape({
    userNameOrEmail: yup.string().required("Email or Username is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

//Forgot form validation schema
export const forgotSchema = yup.object().shape({
    email: yup.string().required("Email or Username is required")
});


//Blog comment form validation schema
export const blogCommentSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    number: yup.string().required("Phone number is required").matches(/^\d+$/, "Phone number must be numeric"),
    message: yup.string().required("Message is required"),
});

//Contact form validation schema
export const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    number: yup.string().required("Phone number is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
});

//Contact form validation schema
export const contactTwoSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    phone: yup.string().required("Phone number is required"),
    caseDetails: yup.string().required("Message is required"),
  });

//Property Review validation schema
export const propertyReviewSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    number: yup.string().required("Phone number is required").matches(/^\d+$/, "Phone number must be numeric"),
    message: yup.string().required("Message is required"),
});

//leave message validation schema
export const leaveMessageSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup.string().required("Phone number is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    message: yup.string().required("Message is required"),
  });