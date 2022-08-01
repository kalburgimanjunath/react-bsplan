import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function WebMatrix() {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ WebMatrix: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.WebMatrix) {
            errors.WebMatrix = 'Required';
          }
          {
            errors.WebMatrix = 'Invalid statement';
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
            <Field as="textarea" name="WebMatrix" />
            <ErrorMessage name="WebMatrix" component="div" />
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
      <label>Web Matrix</label>
      <DefaultForm />
    </div>
  );
}
