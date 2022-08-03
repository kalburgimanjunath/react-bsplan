import React from 'react';
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
} from '../components/index';
export default function AddPlan({ records }) {
  return (
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
          {records && records.ExistingAlternatives ? (
            <ExistingAlternatives
              ExistingAlternatives={records.ExistingAlternatives}
            />
          ) : (
            <div>Loading...</div>
          )}
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
  );
}
