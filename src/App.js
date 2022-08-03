import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPlan from './pages/AddPlan';
export default function App() {
  const [records, setRecords] = useState();
  const empty = {
    CostMetrix: ' ',
    EarlyAdaptors: ' ',
    ExistingAlternatives: ' ',
    ProblemStatement: ' ',
    ProposedSolution: ' ',
    Revenue: ' ',
    TargetSegment: ' ',
    UniqueValue: ' ',
    WebMatrix: ' ',
  };
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
      });
  }, [records]);

  return (
    <div className="container">
      <Routes>
        <Route
          path="./addplan"
          element={<AddPlan records={empty} />}
          exact
        ></Route>
        <Route path="/*" element={<Home records={records} />} exact></Route>
        <Route
          path="/editplan"
          element={<AddPlan records={records} />}
          exact
        ></Route>
      </Routes>
    </div>
  );
}
