import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer(),
  psw: yup.string().min(6).max(10).required(),
  confirmPsw: yup.string().oneOf([yup.ref("psw")]),
});

export default schema;
