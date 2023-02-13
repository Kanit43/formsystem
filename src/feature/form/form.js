import React from "react";
import { useParams } from "react-router";
import Form1 from "./form-list/form1";
import Form2 from "./form-list/form2";
import Form3 from "./form-list/form3";
import Form4 from "./form-list/form4";
import Form5 from "./form-list/form5";
import Form6 from "./form-list/form6";
import Form7 from "./form-list/form7";
import Form8 from "./form-list/form8";

const forms = {
  Form1,
  Form2,
  Form3,
  Form4,
  Form5,
  Form6,
  Form7,
  Form8
};

export const FormRoute = () => {
  const { id } = useParams();
  const FormComponent = forms["Form" + id];

  return <FormComponent />;
};
