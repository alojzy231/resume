import React from 'react';

import { DownloadCVButtonContainer, DownloadCVButtonText } from './DownloadCVButton.styles';

export default function DownloadCVButton({ cvLink }) {
  return (
    <DownloadCVButtonContainer href={cvLink}>
      <DownloadCVButtonText>Download CV</DownloadCVButtonText>
    </DownloadCVButtonContainer>
  );
}
