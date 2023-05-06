import React from 'react'

import { useStatisticsQuery } from './../../api/queries/statistics';
import LoadableContent from '../../components/LoadableContent';
import Statistics from './components/Statistics'

function MainLogoutPage() {
  return <LoadableContent hook={useStatisticsQuery}>
    {Statistics}
  </LoadableContent>
}

export default MainLogoutPage;
