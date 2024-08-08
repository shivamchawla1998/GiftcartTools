import React, { useRef, useEffect } from 'react';
import BarcodeGenerator from './BarcodeGenerator';
import { BlockStack, Button, InlineStack } from '@shopify/polaris';
import { useReactToPrint } from 'react-to-print';

interface ComponentData {
    itemName: string;
    itemCode: string;
    noOfLabels: number;
    header: string;
    line1: string;
    line2: string;
}

const BarcodePreview: React.FC<{ values: ComponentData[] }> = ({ values }) => {

    return (
        <BlockStack gap="500">
            {/* <div ref={componentRef}> */}
                {/* <InlineStack gap='100'> */}
                {values.map((value, index) => (
                    <div key={index}>
                        {/* {value.itemCode && <BarcodePrintable data={value} labelsPerPage={65} />} */}
                        {value.itemCode && <BarcodeGenerator data={value} />}
                    </div>
                ))}
                {/* </InlineStack> */}
            {/* </div> */}
        </BlockStack>
    );
};

export default BarcodePreview;



// import React, { useRef } from 'react';
// import BarcodeGenerator from './BarcodeGenerator';
// import { BlockStack, Button, InlineStack } from '@shopify/polaris';
// import html2canvas from 'html2canvas';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';

// interface ComponentData {
//     itemName: string;
//     itemCode: string;
//     noOfLabels: number;
//     header: string;
//     line1: string;
//     line2: string;
// }

// const BarcodePreview: React.FC<{ values: ComponentData[] }> = ({ values }) => {

//     const wrapperRef = useRef<HTMLDivElement>(null);

//     const handleGenerate = async (values) => {
//         // console.log(values);
//         const labelsPerPage = 65; // Number of labels per page
//         const totalLabels = values.reduce((acc, value) => acc + (value.itemCode ? (parseInt(value.noOfLabels) || 1) : 0), 0); // Total number of labels with itemCode, considering noOfLabels
//         // console.log(totalLabels)
//         if (totalLabels === 0) {
//             alert("No labels to print.");
//             return;
//         }

//         const totalPages = Math.ceil(totalLabels / labelsPerPage);
//         let totalPendingLabels = totalLabels;
//         const labelsToPrint: ComponentData[] = [];

//         for (let i = 0; i < values.length; i++) {
//             const value = values[i] as ComponentData;
//             // let numLabelsPending = 0;
//             // let numLabels = 0;
//             // let numPageRuns = Math.ceil(value.noOfLabels / labelsPerPage)
//             // totalPendingLabels = totalPendingLabels - labelsPerPage;
//             // if(value.noOfLabels > labelsPerPage) {
//             //     numLabelsPending = value.noOfLabels - labelsPerPage;
//             //     numLabels = labelsPerPage;
//             // } else {
//             //     numLabelsPending = value.noOfLabels;
//             //     numLabels = numLabelsPending;
//             // }

//             for (let j = 0; j < value.noOfLabels; j++) {
//                 // if(labelsToPrint.length == endLabelIndex) {
//                 //     continue;
//                 // }
//                 labelsToPrint.push(value);
//             }

//             // for (let page = 0; page < totalPages; page++) {
//             //     const startLabelIndex = page * labelsPerPage;
//             //     const endLabelIndex = Math.min((page + 1) * labelsPerPage, totalPendingLabels);
//             // console.log(startLabelIndex);

//             // console.log(endLabelIndex);
//         }
//         // console.log(labelsToPrint);

//         const canvas = document.createElement('canvas');
//         canvas.width = 210 * 4;
//         canvas.height = 297 * 4;
//         const context = canvas.getContext('2d');

//         if (!context) {
//             console.error("Failed to get 2D context.");
//             return;
//         }

//         for (let index = 0; index < labelsToPrint.length; index++) {
//             const value = labelsToPrint[index];

//             const x = (index % 13) * (38 * 4) + 20;
//             const y = Math.floor(index / 13) * (21 * 4) + 20;

//             const tempDiv = document.createElement('div');
//             const container = document.createElement('div');
//             createRoot(container).render(<BarcodeGenerator data={value} />);
//             tempDiv.appendChild(container);

//             try {
//                 await new Promise(resolve => setTimeout(resolve, 5000)); // Adjust the delay if needed
//                 const barcodeCanvas = await html2canvas(tempDiv);
//                 console.log('Generated barcodeCanvas:', barcodeCanvas);
//                 context.drawImage(barcodeCanvas, x, y, 38 * 4, 21 * 4);
//             } catch (error) {
//                 console.error('Error generating barcodeCanvas:', error);
//             }
//         }

//         const imgUrl = canvas.toDataURL('image/jpeg', 1.0);
//         const style = `
//             height: 100vh;
//             width: 100vw;
//             position: absolute;
//             left: 0;
//             top: 0;
//         `;
//         const imgTag = `<img style="${style}" src="${imgUrl}" />`;

//         const newWin = window.open('', `PrintMap${5}`, `width=${canvas.width},height=${canvas.height}`);
//         newWin?.document.write(`<body>${imgTag}</body>`);
//         newWin?.document.close();

//         try {
//             await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the delay if needed
//             newWin?.print();
//         } catch (error) {
//             console.error('Error printing:', error);
//         }
//     };

//     return (
//         <BlockStack gap="500">
//             <InlineStack gap='100'>
//                 {values.map((value, index) => (
//                     <div key={index}>
//                         {value.itemCode &&
//                             <div ref={wrapperRef}>
//                                 <BarcodeGenerator data={value} />
//                             </div>
//                         }
//                     </div>
//                 ))}
//             </InlineStack>
//             <Button variant='primary' onClick={() => handleGenerate(values)}>
//                 Generate
//             </Button>
//         </BlockStack>
//     );
// };

// export default BarcodePreview;
