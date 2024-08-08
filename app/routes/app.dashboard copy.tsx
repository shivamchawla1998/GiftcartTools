import {
  Box,
  Card,
  DataTable,
  Layout,
  Link,
  List,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { useReducer, useState } from "react";
import BarcodeGenerator from "~/components/BarcodeGenerator";
import MyEditableTable from "~/components/MyEditableTable";

type Item = {
  itemName: string
  itemCode: string
  noOfLabels: number
  header: string
  line1: string
  line2: string
}

const defaultData: Item[] = [
  {
    itemName: 'tanner',
    itemCode: 'linsley',
    noOfLabels: 24,
    header: "100",
    line1: 'In Relationship',
    line2: "50",
  }
]

export default function Dashboard(props) {

  const [data, setData] = useState(() => [...defaultData])

  const handlePriceChange = (rowIndex, newValue) => {
    const updatedData = [...data];
    updatedData[rowIndex].noOfLabels = newValue;
    setData(updatedData);
  };

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'itemName',
    },
    {
      title: 'Item Code',
      dataIndex: 'itemCode',
    },
    {
      title: 'No. Of Labels',
      dataIndex: 'noOfLabels',
      render: (value, row, rowIndex) => (
        <input
          type="text"
          value={value}
          onChange={(e) => handlePriceChange(rowIndex, e.target.value)}
        />
      ),
    },
    {
      title: 'Header',
      dataIndex: 'header',
    },
    {
      title: 'Line 1',
      dataIndex: 'line1',
    },
    {
      title: 'Line 2',
      dataIndex: 'line2',
    },
  ];

  return (
    <Page>
      <ui-title-bar title="Dashboard" />
      <div>
        <h1>Barcode Generator</h1>
        <BarcodeGenerator value="123456789" />
      </div>
      <Card>
        <MyEditableTable columns={columns} data={data}  onPriceChange={handlePriceChange}/>
      </Card>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="1"
      paddingInlineEnd="1"
      background="bg-subdued"
      borderWidth="1"
      borderColor="border"
      borderRadius="1"
    >
      <code>{children}</code>
    </Box>
  );
}
