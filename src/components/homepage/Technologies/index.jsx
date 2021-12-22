import React, { useRef } from 'react';

import ScrollDownButton from '../../generic/ScrollDownButton';
import { TechnologiesContainer } from './Technologies.styles';

export default function Technologies() {
  const ref = useRef();
  return (
    <TechnologiesContainer id="technologies" ref={ref}>
      test
      <ScrollDownButton sectionRef={ref} />
    </TechnologiesContainer>
  );
}
