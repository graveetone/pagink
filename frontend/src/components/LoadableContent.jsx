import React from 'react';
import Loader from './../components/Loader'
import Popup from './../components/popup/Popup'

function LoadableContent({ hook, params, children }) {
  const { isLoading, error, data } = hook(params);

  if (isLoading)
    return <Loader />

  if (error) {
    return <div className='-mt-5'>
      <Popup errors={[error.message, 'Please, try again later']} />
    </div>
  }

  return children(data);
}

export default LoadableContent;
