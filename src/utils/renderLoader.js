import React from 'react';
import Loader from 'react-loader';

export function renderLoader(requesting) {
  if (requesting) {
    return <Loader />;
  }
}
