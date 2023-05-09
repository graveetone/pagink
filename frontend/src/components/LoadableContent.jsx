import React from 'react';
import Loader from './../components/Loader'
import Popup from './../components/popup/Popup'
import Subloader from './subloader/Subloader';

function LoadableContent({ hook, params, subLoader, children }) {
  const { isLoading, error, data } = hook(params);

  if (isLoading)
    return (
      subLoader ? <Subloader /> : <Loader />
    )

  if (error) {
    return <div className='-mt-5'>
      <Popup errors={[error.message, 'Please, try again later']} />
    </div>
  }

  return children(data);
}

export default LoadableContent;
