import React from 'react';
import Download from '../assets/descargas.png';
import JsPDF from 'jspdf';

function SavePDF(){
    const generatePDF = () => {
        const report = new JsPDF('portrait', 'in', 'a4');

    
        report.html(document.querySelector('#cVDisplayer'), {
            callback: function (doc) {
                doc.save();
            },
            margin: 0,
            width: 8.239,
            windowWidth: 595
            });
      };
    return(
        <div className='buttonDownload'>
            <button onClick={generatePDF}>
                <img src={Download} alt="button to download cv" />
            </button>
        </div>
    )
}

export default SavePDF;