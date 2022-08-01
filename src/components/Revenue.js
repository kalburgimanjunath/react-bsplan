import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function Revenue() {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ Revenue: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.Revenue) {
            errors.Revenue = 'Required';
          }
          {
            errors.Revenue = 'Invalid statement';
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
            <Field as="textarea" name="Revenue" />
            <ErrorMessage name="Revenue" component="div" />
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
      <label>Revenue Matrix</label>
      <DefaultForm />
    </div>
  );
}
