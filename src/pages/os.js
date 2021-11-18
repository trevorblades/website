import Desktop from '../components/Desktop';
import React from 'react';
import {Helmet} from 'react-helmet';

export default function OperatingSystem() {
  return (
    <>
      <Helmet title="TrevOS" />
      <Desktop />
    </>
  );
}
