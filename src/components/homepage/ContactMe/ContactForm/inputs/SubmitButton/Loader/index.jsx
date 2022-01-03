import React from 'react';
import { LoaderContainer, Dot } from './Loader.styles';

export default function Loader() {
  return (
    <LoaderContainer>
      <Dot animationOrder={0} />
      <Dot animationOrder={1} />
      <Dot animationOrder={2} />
    </LoaderContainer>
  );
}
