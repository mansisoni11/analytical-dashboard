
import React from 'react';

const EmbeddedChart = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        title="Google Sheet Chart"
        width="100%"
        height="100%"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzBUYaorpI9Dv-q3JiSfV-pDL7Ax_NvETPvWmA6S3BvF73Cyg11UVm6LOnQmErDexGQ19cokeLtm2a/pubchart?oid=1710829077&format=interactive"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};
