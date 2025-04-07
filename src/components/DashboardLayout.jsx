import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PDFViewer } from '@react-pdf/renderer';
// import PdfComponent from './PdfComponent';
import MyDocument from './pdf/pdf';


const DashboardLayout = () => {
  return (
    <div className="container mt-4">
      <div className="row">

        {/* Index Column */}
        <div className="col-md-4">
          <h5>Index</h5>
          <ul className="list-group">
            {[1, 2, 3, 4].map((item) => (
              <li key={item} className="list-group-item">Item #{item}</li>
            ))}
          </ul>
        </div>

        {/* List Column */}
        <div className="col-md-4">
          <h5>Case List</h5>
          <ul className="list-group">
            {['Case A', 'Case B', 'Case C'].map((caseItem, index) => (
              <li key={index} className="list-group-item">{caseItem}</li>
            ))}
          </ul>
        </div>

        {/* PDF Preview Column */}
        <div className="col-md-4">
          <h5>PDF Preview</h5>
          <PDFViewer width="100%" height={300}>
            <MyDocument />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
