import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

export default function ViewPlan({ records }) {
  const componentRef = useRef();
  const onPrint = () => {
    console.log('printing...');
  };
  const styles = {
    borderContainer: {
      border: '1px solid #d6d6d6',
      width: '100%',
      textAlign: 'center',
      padding: 10,
    },
    noborder: {
      border: 0,
    },
    columnhead: {
      color: 'red',
    },
    container: {
      border: '1px solid #d6d6d6',
    },
  };
  return (
    <div>
      {records ? (
        <>
          <h1>View Business Plans: {records.ProblemStatement}</h1>
          <div style={styles.container} ref={componentRef}>
            <div style={{ display: 'flex' }}>
              <div style={styles.borderContainer}>
                <h5 style={styles.columnhead}>ProblemStatement</h5>
                {records.ProblemStatement}
              </div>
              <div style={styles.borderContainer}>
                <div style={styles.borderContainer}>
                  <h5 style={styles.columnhead}>ProposedSolution</h5>
                  {records.ProposedSolution}
                </div>
                <div style={styles.borderContainer}>
                  <h5 style={styles.columnhead}>ExistingAlternatives</h5>
                  {records.ExistingAlternatives}
                </div>
              </div>
              <div style={styles.borderContainer}>
                <h5 style={styles.columnhead}>UniqueValue</h5>
                {records.UniqueValue}
              </div>
              <div style={styles.borderContainer}>
                <div style={styles.borderContainer}>
                  <h5 style={styles.columnhead}>EarlyAdaptors</h5>
                  {records.EarlyAdaptors}
                </div>
                <div style={styles.borderContainer}>
                  <h5 style={styles.columnhead}>WebMatrix</h5>
                  {records.WebMatrix}
                </div>
              </div>
              <div style={styles.borderContainer}>
                <h5 style={styles.columnhead}>TargetSegment</h5>
                {records.TargetSegment}
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={styles.borderContainer}>
                <h5 style={styles.columnhead}>CostMetrix</h5>
                {records.CostMetrix}
              </div>
              <div style={styles.borderContainer}>
                <h5 style={styles.columnhead}>Revenue</h5>
                {records.Revenue}
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/* <table class="table table-dark">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">ProblemStatement</th>
            <th scope="col">ProposedSolution</th>
            <th scope="col">ExistingAlternatives</th>
            <th scope="col">EarlyAdaptors</th>
            <th scope="col">CostMetrix</th>
            <th scope="col">Revenue</th>
            <th scope="col">TargetSegment</th>
            <th scope="col">UniqueValue</th>
            <th scope="col">WebMatrix</th>
            <th scope="col"></th>
          </tr>
        </thead> <tbody>
          {records ? (
            <tr>
              <th scope="row">1</th>
              <td>{records.ProblemStatement}</td>
              <td>{records.ProposedSolution}</td>
              <td>{records.ExistingAlternatives}</td>
              <td>{records.EarlyAdaptors}</td>
              <td>{records.CostMetrix}</td>
              <td>{records.Revenue}</td>
              <td>{records.TargetSegment}</td>
              <td>{records.UniqueValue}</td>
              <td>{records.WebMatrix}</td>
              <td>
                <Link to="./editplan">Edit</Link>
              </td>
              <td>
                <Link to="./viewplan">View</Link>
              </td>
            </tr>
          ) : (
            <div>Loading...</div>
          )}
        </tbody> 
      </table> */}
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
  );
}
