import React, { useState } from 'react';
import { Page, Card, DataTable } from '@shopify/polaris';

const MyEditableTable = ({ columns, data, onPriceChange }) => {

  console.log("Data: ", data)
  const dataAsArray = data.map((item) => Object.values(item));

  const rows = dataAsArray.map((item, rowIndex) => ({
    id: rowIndex,
    ...item, // Use the object directly, assuming keys match dataIndex in columns
    cells: columns.map((column, columnIndex) => ({
      content:
        column.dataIndex === 'noOfLabels' ? (
          <input
            value={item.noOfLabels}
            onChange={(value) => onPriceChange(rowIndex, value)}
          />
        ) : (
          item[column.dataIndex]
        ),
    })),
  }));

  return (
    // <Page title="Product Prices">
    //   <Card>
    <DataTable
      columnContentTypes={['text', 'numeric', 'numeric', 'numeric', 'numeric']}
      headings={columns.map((column) => column.title)}
      // rows={[]}
      rows={dataAsArray}
    />
    //   </Card>
    // </Page>
  );
};

export default MyEditableTable;
