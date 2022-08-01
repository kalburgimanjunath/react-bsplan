import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function UniqueValue() {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ UniqueValue: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.UniqueValue) {
            errors.UniqueValue = 'Required';
          }
          {
            errors.UniqueValue = 'Invalid statement';
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
            <Field as="textarea" name="UniqueValue" />
            <ErrorMessage name="UniqueValue" component="div" />
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
      <label>Unique Value Proposition</label>
      <DefaultForm />
    </div>
  );
}
