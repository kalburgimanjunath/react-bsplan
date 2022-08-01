import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function TargetSegment() {
  const DefaultForm = () => {
    return (
      <Formik
        initialValues={{ TargetSegment: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.TargetSegment) {
            errors.TargetSegment = 'Required';
          }
          {
            errors.TargetSegment = 'Invalid statement';
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
            <Field as="textarea" name="TargetSegment" />
            <ErrorMessage name="TargetSegment" component="div" />
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
      <label>Target Segments</label>
      <DefaultForm />
    </div>
  );
}
