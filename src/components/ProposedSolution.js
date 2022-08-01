import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function ProposedSolution({ ProposedSolution }) {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ ProposedSolution: ProposedSolution }}
        validate={(values) => {
          const errors = {};
          if (!values.ProposedSolution) {
            errors.ProposedSolution = 'Required';
          }
          {
            errors.ProposedSolution = 'Invalid statement';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values, handleChange, errors, handleBlur }) => (
          <Form>
            <Field
              as="textarea"
              name="ProposedSolution"
              value={values.ProposedSolution}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="ProposedSolution" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    );
  };
  return (
    <div>
      <label>Proposed Solution</label>
      <DefaultForm />
    </div>
  );
}
