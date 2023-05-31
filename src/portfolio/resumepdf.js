import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../images/Template28.pdf";

const Pdfviewer = () => {
  const [numPage, setNumPage] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPage(numPages);
  };

  return (
    <>
      <Document file={pdf} onLoadSuccess={onLoadSuccess}>
        {numPage &&
          Array.from(Array(numPage).keys()).map((i) => (
            <Page key={i} pageNumber={i + 1} />
          ))}
      </Document>
    </>
  );
};

export default Pdfviewer;
