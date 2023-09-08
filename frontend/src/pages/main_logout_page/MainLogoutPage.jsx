import React from 'react'

import { useStatisticsQuery } from './../../api/queries/statistics';
import LoadableContent from '../../components/LoadableContent';
import Statistics from './components/Statistics'

function MainLogoutPage() {
  const backendDownMessage = "Sorry, server is unavailable due to the lack of free Heroku plan. Contact @graveetone in telegram if you have any questions"
  return <LoadableContent hook={useStatisticsQuery} errorMesssage={backendDownMessage}>
    {Statistics}
  </LoadableContent>
}

export default MainLogoutPage;
