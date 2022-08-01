import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function EarlyAdaptors() {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ EarlyAdaptors: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.EarlyAdaptors) {
            errors.EarlyAdaptors = 'Required';
          }
          {
            errors.EarlyAdaptors = 'Invalid statement';
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
            <Field as="textarea" name="EarlyAdaptors" />
            <ErrorMessage name="EarlyAdaptors" component="div" />
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
      <label>Early Adaptors</label>
      <DefaultForm />
    </div>
  );
}
