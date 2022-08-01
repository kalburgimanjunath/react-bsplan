import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function ExistingAlternatives() {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ ExistingAlternatives: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.ExistingAlternatives) {
            errors.ExistingAlternatives = 'Required';
          }
          {
            errors.ExistingAlternatives = 'Invalid statement';
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
            <Field as="textarea" name="ExistingAlternatives" />
            <ErrorMessage name="ExistingAlternatives" component="div" />
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
      <label>Existing Alternatives</label>
      <DefaultForm />
    </div>
  );
}
