
import * as Yup from 'yup';
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

  export const LoginSchema = Yup.object({
    emailorphone: Yup.string()
      .matches(mailFormat, "Invalid email address")
      .required("emai is missing !!"),

    password: Yup.string()
      .min(8, "pasaword can be 8 character")
      .max(14, "password can over 14 character")
      .matches(passwordFormat, "password include 1 speacial character number and upper case lowercase ").required("password requred")
  })
