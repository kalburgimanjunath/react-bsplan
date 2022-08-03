import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from 'axios';

const postData = async (ProblemStatement) => {
  let headers = new Headers();
  headers.append('Authorization', 'Bearer keyeNXyxxuuYJY19w');
  headers.append('Content-Type', 'application/json');
  let res = await fetch(
    'https://api.airtable.com/v0/appE590l4XAEEfNUQ/PlanTable',
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        records: {
          fields: {
            ProblemStatement: ProblemStatement,
          },
        },
      }),
    }
  );
  // axios
  //   .post(
  //     'https://api.airtable.com/v0/appE590l4XAEEfNUQ/PlanTable',
  //     {
  //       fields: {
  //         ProblemStatement: ProblemStatement,
  //       },
  //     },
  //     { headers: headers }
  //   )
  //   .then((resp) => {
  //     console.log('success!');
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};
export default function ProblemStatement({ ProblemStatement }) {
  return (
    <div>
      <label>Problem Statement</label>
      <Formik
        initialValues={{ problemStatement: ProblemStatement }}
        validate={(values) => {
          const errors = {};
          if (!values.problemStatement) {
            errors.problemStatement = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            postData(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, isSubmitting, handleChange, handleBlur }) => (
          <Form>
            <Field
              as="textarea"
              name="problemStatement"
              value={values.problemStatement}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="problemStatement" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
