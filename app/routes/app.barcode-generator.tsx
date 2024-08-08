import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Page, Card, Layout, Button, TextField, BlockStack, InlineStack, Select } from '@shopify/polaris';
import BarcodeGenerator from '~/components/BarcodeGenerator';
import BarcodePreview from '~/components/BarCodePreview';
import { useReactToPrint } from 'react-to-print';
interface ComponentData {
  itemName: string;
  itemCode: string;
  noOfLabels: number;
  header: string;
  line1: string;
  line2: string;
}

const BarcodePrintable: React.FC<{
  data: ComponentData;
  labelsPerPage: number;
  pageRef: React.RefObject<HTMLDivElement>;
}> = ({ data, labelsPerPage, pageRef }) => {
  const { noOfLabels } = data;
  const barcodeWidth = 50; // in mm
  const barcodeHeight = 30; // in mm

  const pageStyle: React.CSSProperties = {
    width: '210mm', // A4 width in mm
    height: '297mm', // A4 height in mm
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(13, 1fr)',
    // gap: '4px',
    padding: '50px 20px'
    // pageBreakAfter: 'always', // Ensure each page starts on a new page when printing
  };

  const calculateLabelsOnPage = (pageIndex) => {
    const labelsOnThisPage = pageIndex < Math.ceil(noOfLabels / labelsPerPage) - 1
      ? labelsPerPage
      : noOfLabels % labelsPerPage || labelsPerPage;
    return labelsOnThisPage;
  };

  return (
    <div ref={pageRef}>
      {[...Array(Math.ceil(noOfLabels / labelsPerPage))].map((_, pageIndex) => {
        const labelsOnThisPage = calculateLabelsOnPage(pageIndex);
        return (
          <div key={pageIndex} style={pageStyle}>
            {[...Array(labelsOnThisPage)].map((_, labelIndex) => (
              <div
                key={labelIndex}
                style={{
                  // padding: '5px 10px',
                  maxWidth: `${barcodeWidth}mm`,
                  margin: '0.3 .5em',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px dashed #999',
                }}
              >
                {/* Add your label content here */}
                {labelIndex < noOfLabels && <BarcodeGenerator data={data} />}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const IndividualComponent = ({ index, onDataChange }) => {
  const [componentData, setComponentData] = useState({
    itemName: '',
    itemCode: '',
    noOfLabels: '',
    header: '',
    line1: '',
    line2: '',
  });

  const handleInputChange = (key, value) => {
    setComponentData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    onDataChange(index, {
      ...componentData,
      [key]: value,
    });
  };

  return (
    <InlineStack gap='500'>
      <TextField
        label="Item Name"
        value={componentData.itemName}
        onChange={(value) => handleInputChange('itemName', value)}
        autoComplete="off"
      />
      <TextField
        label="Item Code"
        value={componentData.itemCode}
        onChange={(value) => handleInputChange('itemCode', value)}
        autoComplete="off"
      />
      <TextField
        label="No. Of Labels"
        type="number"
        value={componentData.noOfLabels}
        onChange={(value) => handleInputChange('noOfLabels', value)}
        autoComplete="off"
      />
      <TextField
        label="Header"
        value={componentData.header}
        onChange={(value) => handleInputChange('header', value)}
        autoComplete="off"
      />
      <TextField
        label="Line 1"
        value={componentData.line1}
        onChange={(value) => handleInputChange('line1', value)}
        autoComplete="off"
      />
      <TextField
        label="Line 2"
        value={componentData.line2}
        onChange={(value) => handleInputChange('line2', value)}
        autoComplete="off"
      />
    </InlineStack>
  );
};

const BarCodeGenerator = () => {

  const pageStyle: React.CSSProperties = {
    width: '210mm', // A4 width in mm
    height: '297mm', // A4 height in mm
    // pageBreakInside: 'avoid',
    // display: 'flex',
    // flexWrap: 'wrap',
  };

  const [componentList, setComponentList] = useState<ComponentData[]>([]);
  const [selectedPrinter, setSelectedPrinter] = useState('Regular Printer');
  const [selectedSize, setSelectedSize] = useState('65 Labels (38 * 21mm)');
  const [isPrinting, setIsPrinting] = useState(false);

  const componentRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: 210mm 297mm; /* A4 size */
        margin: 0;
      }
      body {
        size: 210mm 297mm; /* A4 size */
        margin: 0;
      }
    `,
  });

  useEffect(() => {
    if (componentRef.current) {
      // Do something when the component is rendered
    }
  }, [componentList]);

  const handlePrinterChange = useCallback(
    (value: string) => setSelectedPrinter(value),
    [],
  );

  const handleSizeChange = useCallback(
    (value: string) => setSelectedSize(value),
    [],
  );

  const optionsPrinter = [
    { label: 'Regular Printer', value: 'Regular Printer' },
  ];

  const optionsSize = [
    { label: '65 Labels (38 * 21mm)', value: '65 Labels (38 * 21mm)' },
  ];


  const addComponent = () => {
    setComponentList((prevList) => [...prevList, {} as ComponentData]);
  };

  const handleComponentDataChange = useCallback(
    (index: number, data: ComponentData) => {
      setComponentList((prevList) =>
        prevList.map((item, i) => (i === index ? data : item))
      );
    },
    [setComponentList]
  );


  return (
    <Page>
      <ui-title-bar title="Barcode Generator" />
      <Layout>
        <Layout.Section>
          <Card>
            <InlineStack gap='500' align='end'>
              <Select
                label="Printer"
                options={optionsPrinter}
                onChange={handlePrinterChange}
                value={selectedPrinter}
                labelInline={true}
              />
              <Select
                label="Size"
                labelInline={true}
                options={optionsSize}
                onChange={handleSizeChange}
                value={selectedSize}
              />
              {componentList.length > 0 ?
                <>
                  <Button variant="tertiary" onClick={addComponent}>
                    + Add More
                  </Button>
                </> :
                <>
                  <Button variant='tertiary' onClick={addComponent}>
                    + Add
                  </Button>
                </>
              }
            </InlineStack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          {componentList.map((data, index) => (
            <div className='mt-12' style={{ marginTop: '10px' }}>
              <Card>
                <IndividualComponent
                  key={index}
                  index={index}
                  onDataChange={handleComponentDataChange}
                />
              </Card>
            </div>
          ))}

        </Layout.Section>
        {(componentList.length > 0) &&
          <>
            <Layout.Section>
              <Card>
                <Button variant='primary' onClick={handlePrint}>
                  Generate
                </Button>
              </Card>
              <br></br>
              <Card>
                <InlineStack gap='100'>
                  {componentList.map((value, index) => (
                    <div key={index}>
                      {/* {value.itemCode && <BarcodePrintable data={value} labelsPerPage={65} />} */}
                      {value.itemCode && <BarcodeGenerator data={value} />}
                    </div>
                  ))}
                </InlineStack>
              </Card>
            </Layout.Section>
            <div>
              <Layout.Section>
                <div ref={componentRef}>
                  {componentList.map((value, index) => (
                    <div key={index} className="printable-page">
                      {value.itemCode && <BarcodePrintable key={index} data={value} labelsPerPage={65} pageRef={pageRef} />}
                    </div>
                  ))}
                </div>
              </Layout.Section>
            </div>
          </>
        }
      </Layout>
    </Page>
  );
};

export default BarCodeGenerator;
