import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function CostMetrix() {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ CostMetrix: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.CostMetrix) {
            errors.CostMetrix = 'Required';
          }
          {
            errors.email = 'Invalid statement';
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
        {({ isSubmitting }) => (
          <Form>
            <Field as="textarea" name="CostMetrix" />
            <ErrorMessage name="CostMetrix" component="div" />
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
      <label>Cost Matrix</label>
      <DefaultForm />
    </div>
  );
}
