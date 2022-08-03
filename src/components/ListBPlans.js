import React from 'react';
import { Link } from 'react-router-dom';
export default function ListBPlans({ records }) {
  return (
    <div>
      <h1>My Business Plans</h1>
      <Link to="./addplan">Add New Business Plan</Link>
      <table className="table table-dark">
        <thead className="thead-dark">
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
        </thead>
        <tbody>
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
      </table>
    </div>
  );
}
