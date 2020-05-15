import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrapComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrapComponent {...otherProps} />;
  };
};

export default WithSpinner;
