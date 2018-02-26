import React, {Component} from 'react';
import { Document, Page, setOptions } from 'react-pdf';
import { Button } from 'semantic-ui-react'
import './PDFViewer.css';



setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
});


class PDFVIEWER extends Component {
        state = {
       numPages: null,
       pageNumber: 1,

      }

      onMouseEnter = number => {

      }

      onDocumentLoad = ({ numPages }) =>  this.setState({ numPages });
      render() {
          const { pageNumber, numPages,file } = this.state;
        return (
            <div className="PDFVIEWER">
            <Document
                file={this.props.file}
                onLoadSuccess={this.onDocumentLoad}
              >
              {
               Array.from(
                 new Array(numPages),
                 (el, index) => (
                   <Page
                     key={`page_${index + 1}`}
                     pageNumber={index + 1}
                     onMouseEnter={() => this.onMouseEnter(index)}
                   />
                 ),
               )
             }
              </Document>
            </div>
        );
    }
}

export default PDFVIEWER
