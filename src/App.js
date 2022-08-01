import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import {
  ProblemStatement,
  ProposedSolution,
  ExistingAlternatives,
  EarlyAdaptors,
  CostMetrix,
  Revenue,
  TargetSegment,
  UniqueValue,
  WebMatrix,
} from './components/index';
export default function App() {
  const [records, setRecords] = useState();

  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appE590l4XAEEfNUQ/PlanTable?api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((response) => {
        const user = {
          CostMetrix: response.records[0].fields.CostMetrix,
          EarlyAdaptors: response.records[0].fields.EarlyAdaptors,
          ExistingAlternatives: response.records[0].fields.ExistingAlternatives,
          ProblemStatement: response.records[0].fields.ProblemStatement,
          ProposedSolution: response.records[0].fields.ProposedSolution,
          Revenue: response.records[0].fields.Revenue,
          TargetSegment: response.records[0].fields.TargetSegment,
          UniqueValue: response.records[0].fields.UniqueValue,
          WebMatrix: response.records[0].fields.WebMatrix,
        };
        setRecords(user);
        console.log(user);
      });
  }, [records]);

  return (
    <div className="container">
      <div className="main">
        <ol>
          <li>
            {records && records.ProblemStatement ? (
              <ProblemStatement ProblemStatement={records.ProblemStatement} />
            ) : (
              <div>Loading...</div>
            )}
          </li>
          <li>
            {records && records.ProposedSolution ? (
              <ProposedSolution ProposedSolution={records.ProposedSolution} />
            ) : (
              <div>Loading...</div>
            )}
          </li>
          <li>
            <ProposedSolution />
          </li>
          <li>
            <ExistingAlternatives />
          </li>
          <li>
            <UniqueValue />
          </li>
          <li>
            <EarlyAdaptors />
          </li>
          <li>
            <WebMatrix />
          </li>
          <li>
            <TargetSegment />
          </li>
          <li>
            <CostMetrix />
          </li>
          <li>
            <Revenue />
          </li>
        </ol>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
