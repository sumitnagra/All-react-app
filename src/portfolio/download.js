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
  
      <button className="circleItem4" onClick={handleDownload}><i className="fa-solid fa-download" style={{color: "#fffdeb",paddingRight:"5px"}}></i> CV
      </button>

  );
};

export default DownloadButton;
