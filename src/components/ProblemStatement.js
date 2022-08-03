import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const postData = async (ProblemStatement) => {
  const base = require('airtable').base('appE590l4XAEEfNUQ');
  var Airtable = require('airtable');
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyeNXyxxuuYJY19w',
  });
  var base = Airtable.base('appE590l4XAEEfNUQ');

  base('PlanTable')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          console.log('Retrieved', record.get('ProblemStatement'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  // let headers = new Headers();
  // headers.append('Authorization', 'Bearer keyeNXyxxuuYJY19w');
  // headers.append('Content-Type', 'application/json');
  // let res = await fetch(
  //   'https://api.airtable.com/v0/appE590l4XAEEfNUQ/PlanTable',
  //   {
  //     method: 'POST',
  //     headers: headers,
  //     body: JSON.stringify({
  //       ProblemStatement: ProblemStatement,
  //     }),
  //   }
  // );
  //   axios
  //     .post(
  //       'https://api.airtable.com/v0/appE590l4XAEEfNUQ/PlanTable',
  //       {
  //         fields: {
  //           ProblemStatement: ProblemStatement,
  //         },
  //       },
  //       { headers: headers }
  //     )
  //     .then((resp) => {
  //       console.log('success!');
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
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
