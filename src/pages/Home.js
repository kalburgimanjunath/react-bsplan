import React, { memo, lazy } from 'react';
import { ListBPlans } from '../components/index';
import AddPlan from './AddPlan';

function Home({ records }) {
  return (
    <div>
      <ListBPlans records={records} />
      {/* <AddPlan records={records} /> */}
    </div>
  );
}
export default memo(Home);
