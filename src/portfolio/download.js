import React from 'react';

const DownloadButton = () => {
  
  const handleDownload = () => {
    // Create a URL for the PDF file
    const pdfUrl = 'https://sumitportfolio-u9sd.onrender.com/pdf';

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.target = '_blank';
    anchor.download = 'sumitcv.pdf';

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
  
      <button class="animate downloadbtn" onClick={handleDownload}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Download CV</span>
      </button>

  );
};

export default DownloadButton;
