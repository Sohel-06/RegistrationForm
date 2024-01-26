import * as yup from "yup";
import { aadharRegex, panRegex, phoneRegex } from "./constants";

interface SchemaValidation {
  name: string;
  age: number;
  sex: string;
  mobileNumber: string;
  govtIssuedIdType: string;
  govtIssuedId: string;
}

interface AddressSchemaValidation {
  addressline1?: string | undefined;
  addressline2?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  pincode?: string | undefined;
  country?: string | undefined;
}
export const schemaValidation: yup.Schema<SchemaValidation> = yup.object().shape({
    name: yup.string().required("required").min(3),
    age: yup
      .number()
      .transform((value) =>
        isNaN(value) || value === null || value === undefined ? 0 : value
      )
      .required()
      .positive()
      .integer(),
    sex: yup.string().required("required"),
    mobileNumber: yup
      .string()
      .required("required")
      .matches(phoneRegex, "Invalid Mobile Number"),
    govtIssuedIdType: yup.string().required("required"),
    govtIssuedId: yup
      .string()
      .required("required")
      .when("govtIssuedIdType", (govtIssuedIdType: string[], schema) => {
        if (govtIssuedIdType[0] === "Aadhar") {
          return schema.matches(aadharRegex, "Invalid Aadhar Number");
        } else {
          return schema.matches(panRegex, "Invalid Pan Number");
        }
      }),
  });

export const addressSchemaValidation: yup.Schema<AddressSchemaValidation> = yup.object().shape({
    addressline1: yup.string(),
    addressline2: yup.string(),
    city: yup.string(),
    state: yup.string(),
    pincode: yup.string(),
    country: yup.string(),
  });