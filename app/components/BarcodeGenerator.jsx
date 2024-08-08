import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = ({ data }) => {
  const barcodeRef = useRef(null);
  // console.log(data);

  useEffect(() => {
    // Generate barcode when the component mounts
    JsBarcode(barcodeRef.current, data.itemCode, { format: 'CODE128' });
  }, [data]);

  return (
    <div
      style={{
        maxWidth: 'fit-content',
        // height: '21mm',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff'
      }}>
      {/* Container to display the barcode */}
      <span style={{ textAlign: 'center', fontSize: '0.6rem', lineHeight: '0.65rem', fontWeight: 'bold' }}>{data?.header}</span>
      <img
        style={{ width: '31mm', maxHeight: '10mm' }}
        ref={barcodeRef}
      ></img>
      <span style={{ textAlign: 'center', fontSize: '0.45rem', lineHeight: '0.5rem' }}>{data?.line1}</span>
      <span style={{ textAlign: 'center', fontSize: '0.45rem', lineHeight: '0.5rem' }}>{data?.line2}</span>
    </div>
  );
};

export default BarcodeGenerator;
