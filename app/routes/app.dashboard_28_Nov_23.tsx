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
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
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

// const columnHelper = createColumnHelper<Item>()

// const columns = [
//   columnHelper.accessor('itemName', {
//     cell: info => info.getValue(),
//     header: () => <span>Item Name</span>,
//     // footer: info => info.column.id,
//   }),
//   columnHelper.accessor(row => row.itemCode, {
//     id: 'itemCode',
//     cell: info => <i>{info.getValue()}</i>,
//     header: () => <span>Item Code</span>,
//     // footer: info => info.column.id,
//   }),
//   columnHelper.accessor('noOfLabels', {
//     header: () => <span>No. of Labels</span>,
//     cell: info => info.renderValue(),
//     // footer: info => info.column.id,
//   }),
//   columnHelper.accessor('header', {
//     header: () => <span>Header</span>,
//     // footer: info => info.column.id,
//   }),
//   columnHelper.accessor('line1', {
//     header: () => <span>Line 1</span>,
//     // footer: info => info.column.id,
//   }),
//   columnHelper.accessor('line2', {
//     header: () => <span>Line 2</span>,
//     // footer: info => info.column.id,
//   }),
// ]

export default function Dashboard(props) {

  const [data, setData] = useState(() => [...defaultData])
  // const rerender = useReducer(() => ({}), {})[1]

  // const table = useReactTable({
  //   data,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // })

  // const rows = [
  //   ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
  //   ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
  //   ['Navy Merino Wool Blazer', '$445.00', 124518, 32, '$14,240.00'],
  //   // Add more rows as needed
  // ];

  // const [data, setData] = useState([
  //   { id: 1, product: 'Emerald Silk Gown', price: '$875.00' },
  //   { id: 2, product: 'Mauve Cashmere Scarf', price: '$230.00' },
  //   // Add more data rows as needed
  // ]);

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

  // const columnHelper = createColumnHelper<Person>()

  // Make some columns!
  // const defaultColumns = [
  //   // Display Column
  //   columnHelper.display({
  //     id: 'actions',
  //     cell: props => <RowActions row={props.row} />,
  //   }),
  //   // Grouping Column
  //   columnHelper.group({
  //     header: 'Name',
  //     footer: props => props.column.id,
  //     columns: [
  //       // Accessor Column
  //       columnHelper.accessor('firstName', {
  //         cell: info => info.getValue(),
  //         footer: props => props.column.id,
  //       }),
  //       // Accessor Column
  //       columnHelper.accessor(row => row.lastName, {
  //         id: 'lastName',
  //         cell: info => info.getValue(),
  //         header: () => <span>Last Name</span>,
  //         footer: props => props.column.id,
  //       }),
  //     ],
  //   }),
  //   // Grouping Column
  //   columnHelper.group({
  //     header: 'Info',
  //     footer: props => props.column.id,
  //     columns: [
  //       // Accessor Column
  //       columnHelper.accessor('age', {
  //         header: () => 'Age',
  //         footer: props => props.column.id,
  //       }),
  //       // Grouping Column
  //       columnHelper.group({
  //         header: 'More Info',
  //         columns: [
  //           // Accessor Column
  //           columnHelper.accessor('visits', {
  //             header: () => <span>Visits</span>,
  //             footer: props => props.column.id,
  //           }),
  //           // Accessor Column
  //           columnHelper.accessor('status', {
  //             header: 'Status',
  //             footer: props => props.column.id,
  //           }),
  //           // Accessor Column
  //           columnHelper.accessor('progress', {
  //             header: 'Profile Progress',
  //             footer: props => props.column.id,
  //           }),
  //         ],
  //       }),
  //     ],
  //   }),
  // ]

  return (
    <Page>
      <ui-title-bar title="Dashboard" />
      <div>
        <h1>Barcode Generator</h1>
        <BarcodeGenerator value="123456789" />
      </div>

      {/* <Card>
        <DataTable
          columnContentTypes={['text', 'numeric', 'numeric', 'numeric', 'numeric']}
          headings={columns1.map((column) => column.title)}
          rows={rows}
        />
      </Card> */}
      <Card>
        <MyEditableTable columns={columns} data={data} />
      </Card>
      <div>

        {/* <div className="p-2">
          <table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="h-4" />
          <button onClick={() => rerender()} className="border p-2">
            Rerender
          </button>
        </div> */}

      </div>
      {/* <Layout>
        <Layout.Section>
          <Card>
            <VerticalStack gap="3">
              <Text as="p" variant="bodyMd">
                The app template comes with an additional page which
                demonstrates how to create multiple pages within app navigation
                using{" "}
                <Link
                  url="https://shopify.dev/docs/apps/tools/app-bridge"
                  target="_blank"
                >
                  App Bridge
                </Link>
                .
              </Text>
              <Text as="p" variant="bodyMd">
                To create your own page and have it show up in the app
                navigation, add a page inside <Code>app/routes</Code>, and a
                link to it in the <Code>&lt;ui-nav-menu&gt;</Code> component
                found in <Code>app/routes/app.jsx</Code>.
              </Text>
            </VerticalStack>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card>
            <VerticalStack gap="2">
              <Text as="h2" variant="headingMd">
                Resources
              </Text>
              <List spacing="extraTight">
                <List.Item>
                  <Link
                    url="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                    target="_blank"
                  >
                    App nav best practices
                  </Link>
                </List.Item>
              </List>
            </VerticalStack>
          </Card>
        </Layout.Section>
      </Layout> */}

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
