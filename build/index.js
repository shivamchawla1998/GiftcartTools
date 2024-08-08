var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_node2 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = require("isbot");

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-07");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var shopify2 = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify2.registerWebhooks({ session });
    }
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var addDocumentResponseHeaders = shopify2.addDocumentResponseHeaders, authenticate = shopify2.authenticate, unauthenticated = shopify2.unauthenticated, login = shopify2.login, registerWebhooks = shopify2.registerWebhooks, sessionStorage = shopify2.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.isbot)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 26,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node2.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.dashboard_28_Nov_23.tsx
var app_dashboard_28_Nov_23_exports = {};
__export(app_dashboard_28_Nov_23_exports, {
  default: () => Dashboard
});
var import_polaris2 = require("@shopify/polaris"), import_react4 = require("react");

// app/components/BarcodeGenerator.jsx
var import_react3 = require("react"), import_jsbarcode = __toESM(require("jsbarcode")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), BarcodeGenerator = ({ data }) => {
  let barcodeRef = (0, import_react3.useRef)(null);
  return (0, import_react3.useEffect)(() => {
    (0, import_jsbarcode.default)(barcodeRef.current, data.itemCode, { format: "CODE128" });
  }, [data]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      style: {
        maxWidth: "fit-content",
        // height: '21mm',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { style: { textAlign: "center", fontSize: "0.6rem", lineHeight: "0.65rem", fontWeight: "bold" }, children: data?.header }, void 0, !1, {
          fileName: "app/components/BarcodeGenerator.jsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "img",
          {
            style: { width: "31mm", maxHeight: "10mm" },
            ref: barcodeRef
          },
          void 0,
          !1,
          {
            fileName: "app/components/BarcodeGenerator.jsx",
            lineNumber: 26,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { style: { textAlign: "center", fontSize: "0.45rem", lineHeight: "0.5rem" }, children: data?.line1 }, void 0, !1, {
          fileName: "app/components/BarcodeGenerator.jsx",
          lineNumber: 30,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { style: { textAlign: "center", fontSize: "0.45rem", lineHeight: "0.5rem" }, children: data?.line2 }, void 0, !1, {
          fileName: "app/components/BarcodeGenerator.jsx",
          lineNumber: 31,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/BarcodeGenerator.jsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}, BarcodeGenerator_default = BarcodeGenerator;

// app/components/MyEditableTable.tsx
var import_polaris = require("@shopify/polaris"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), MyEditableTable = ({ columns, data, onPriceChange }) => {
  console.log("Data: ", data);
  let dataAsArray = data.map((item) => Object.values(item)), rows = dataAsArray.map((item, rowIndex) => ({
    id: rowIndex,
    ...item,
    // Use the object directly, assuming keys match dataIndex in columns
    cells: columns.map((column, columnIndex) => ({
      content: column.dataIndex === "noOfLabels" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "input",
        {
          value: item.noOfLabels,
          onChange: (value) => onPriceChange(rowIndex, value)
        },
        void 0,
        !1,
        {
          fileName: "app/components/MyEditableTable.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      ) : item[column.dataIndex]
    }))
  }));
  return (
    // <Page title="Product Prices">
    //   <Card>
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris.DataTable,
      {
        columnContentTypes: ["text", "numeric", "numeric", "numeric", "numeric"],
        headings: columns.map((column) => column.title),
        rows: dataAsArray
      },
      void 0,
      !1,
      {
        fileName: "app/components/MyEditableTable.tsx",
        lineNumber: 28,
        columnNumber: 5
      },
      this
    )
  );
}, MyEditableTable_default = MyEditableTable;

// app/routes/app.dashboard_28_Nov_23.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), defaultData = [
  {
    itemName: "tanner",
    itemCode: "linsley",
    noOfLabels: 24,
    header: "100",
    line1: "In Relationship",
    line2: "50"
  }
];
function Dashboard(props) {
  let [data, setData] = (0, import_react4.useState)(() => [...defaultData]), handlePriceChange = (rowIndex, newValue) => {
    let updatedData = [...data];
    updatedData[rowIndex].noOfLabels = newValue, setData(updatedData);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ui-title-bar", { title: "Dashboard" }, void 0, !1, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Barcode Generator" }, void 0, !1, {
        fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BarcodeGenerator_default, { value: "123456789" }, void 0, !1, {
        fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MyEditableTable_default, { columns: [
      {
        title: "Item Name",
        dataIndex: "itemName"
      },
      {
        title: "Item Code",
        dataIndex: "itemCode"
      },
      {
        title: "No. Of Labels",
        dataIndex: "noOfLabels",
        render: (value, row, rowIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            type: "text",
            value,
            onChange: (e) => handlePriceChange(rowIndex, e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
            lineNumber: 113,
            columnNumber: 9
          },
          this
        )
      },
      {
        title: "Header",
        dataIndex: "header"
      },
      {
        title: "Line 1",
        dataIndex: "line1"
      },
      {
        title: "Line 2",
        dataIndex: "line2"
      }
    ], data }, void 0, !1, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
    lineNumber: 198,
    columnNumber: 5
  }, this);
}

// app/routes/app.barcode-generator.tsx
var app_barcode_generator_exports = {};
__export(app_barcode_generator_exports, {
  default: () => app_barcode_generator_default
});
var import_react5 = require("react"), import_polaris3 = require("@shopify/polaris");
var import_react_to_print = require("react-to-print"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), BarcodePrintable = ({ data, labelsPerPage, pageRef }) => {
  let { noOfLabels } = data, barcodeWidth = 50, barcodeHeight = 30, pageStyle = {
    width: "210mm",
    // A4 width in mm
    height: "297mm",
    // A4 height in mm
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(13, 1fr)",
    // gap: '4px',
    padding: "50px 20px"
    // pageBreakAfter: 'always', // Ensure each page starts on a new page when printing
  }, calculateLabelsOnPage = (pageIndex) => pageIndex < Math.ceil(noOfLabels / labelsPerPage) - 1 ? labelsPerPage : noOfLabels % labelsPerPage || labelsPerPage;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: pageRef, children: [...Array(Math.ceil(noOfLabels / labelsPerPage))].map((_, pageIndex) => {
    let labelsOnThisPage = calculateLabelsOnPage(pageIndex);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: pageStyle, children: [...Array(labelsOnThisPage)].map((_2, labelIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        style: {
          // padding: '5px 10px',
          maxWidth: `${barcodeWidth}mm`,
          margin: "0.3 .5em",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed #999"
        },
        children: labelIndex < noOfLabels && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BarcodeGenerator_default, { data }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 63,
          columnNumber: 45
        }, this)
      },
      labelIndex,
      !1,
      {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 49,
        columnNumber: 15
      },
      this
    )) }, pageIndex, !1, {
      fileName: "app/routes/app.barcode-generator.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this);
  }) }, void 0, !1, {
    fileName: "app/routes/app.barcode-generator.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}, IndividualComponent = ({ index, onDataChange }) => {
  let [componentData, setComponentData] = (0, import_react5.useState)({
    itemName: "",
    itemCode: "",
    noOfLabels: "",
    header: "",
    line1: "",
    line2: ""
  }), handleInputChange = (key, value) => {
    setComponentData((prevData) => ({
      ...prevData,
      [key]: value
    })), onDataChange(index, {
      ...componentData,
      [key]: value
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.InlineStack, { gap: "500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.TextField,
      {
        label: "Item Name",
        value: componentData.itemName,
        onChange: (value) => handleInputChange("itemName", value),
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 97,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.TextField,
      {
        label: "Item Code",
        value: componentData.itemCode,
        onChange: (value) => handleInputChange("itemCode", value),
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 103,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.TextField,
      {
        label: "No. Of Labels",
        type: "number",
        value: componentData.noOfLabels,
        onChange: (value) => handleInputChange("noOfLabels", value),
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 109,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.TextField,
      {
        label: "Header",
        value: componentData.header,
        onChange: (value) => handleInputChange("header", value),
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 116,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.TextField,
      {
        label: "Line 1",
        value: componentData.line1,
        onChange: (value) => handleInputChange("line1", value),
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 122,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.TextField,
      {
        label: "Line 2",
        value: componentData.line2,
        onChange: (value) => handleInputChange("line2", value),
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 128,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/app.barcode-generator.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}, BarCodeGenerator = () => {
  let pageStyle = {
    width: "210mm",
    // A4 width in mm
    height: "297mm"
    // A4 height in mm
    // pageBreakInside: 'avoid',
    // display: 'flex',
    // flexWrap: 'wrap',
  }, [componentList, setComponentList] = (0, import_react5.useState)([]), [selectedPrinter, setSelectedPrinter] = (0, import_react5.useState)("Regular Printer"), [selectedSize, setSelectedSize] = (0, import_react5.useState)("65 Labels (38 * 21mm)"), [isPrinting, setIsPrinting] = (0, import_react5.useState)(!1), componentRef = (0, import_react5.useRef)(null), pageRef = (0, import_react5.useRef)(null), handlePrint = (0, import_react_to_print.useReactToPrint)({
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
    `
  });
  (0, import_react5.useEffect)(() => {
    componentRef.current;
  }, [componentList]);
  let handlePrinterChange = (0, import_react5.useCallback)(
    (value) => setSelectedPrinter(value),
    []
  ), handleSizeChange = (0, import_react5.useCallback)(
    (value) => setSelectedSize(value),
    []
  ), optionsPrinter = [
    { label: "Regular Printer", value: "Regular Printer" }
  ], optionsSize = [
    { label: "65 Labels (38 * 21mm)", value: "65 Labels (38 * 21mm)" }
  ], addComponent = () => {
    setComponentList((prevList) => [...prevList, {}]);
  }, handleComponentDataChange = (0, import_react5.useCallback)(
    (index, data) => {
      setComponentList(
        (prevList) => prevList.map((item, i) => i === index ? data : item)
      );
    },
    [setComponentList]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ui-title-bar", { title: "Barcode Generator" }, void 0, !1, {
      fileName: "app/routes/app.barcode-generator.tsx",
      lineNumber: 211,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.InlineStack, { gap: "500", align: "end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris3.Select,
          {
            label: "Printer",
            options: optionsPrinter,
            onChange: handlePrinterChange,
            value: selectedPrinter,
            labelInline: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 216,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris3.Select,
          {
            label: "Size",
            labelInline: !0,
            options: optionsSize,
            onChange: handleSizeChange,
            value: selectedSize
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 223,
            columnNumber: 15
          },
          this
        ),
        componentList.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Button, { variant: "tertiary", onClick: addComponent, children: "+ Add More" }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 232,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 231,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Button, { variant: "tertiary", onClick: addComponent, children: "+ Add" }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 237,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 236,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 215,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout.Section, { children: componentList.map((data, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-12", style: { marginTop: "10px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        IndividualComponent,
        {
          index,
          onDataChange: handleComponentDataChange
        },
        index,
        !1,
        {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 249,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 248,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 247,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 245,
        columnNumber: 9
      }, this),
      componentList.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout.Section, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Button, { variant: "primary", onClick: handlePrint, children: "Generate" }, void 0, !1, {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 263,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 262,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.InlineStack, { gap: "100", children: componentList.map((value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: value.itemCode && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BarcodeGenerator_default, { data: value }, void 0, !1, {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 273,
            columnNumber: 42
          }, this) }, index, !1, {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 271,
            columnNumber: 21
          }, this)) }, void 0, !1, {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 269,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.barcode-generator.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: componentRef, children: componentList.map((value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "printable-page", children: value.itemCode && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BarcodePrintable, { data: value, labelsPerPage: 65, pageRef }, index, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 284,
          columnNumber: 42
        }, this) }, index, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 283,
          columnNumber: 21
        }, this)) }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 281,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 280,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.barcode-generator.tsx",
          lineNumber: 279,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.barcode-generator.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.barcode-generator.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.barcode-generator.tsx",
    lineNumber: 210,
    columnNumber: 5
  }, this);
}, app_barcode_generator_default = BarCodeGenerator;

// app/routes/app.dashboard copy.tsx
var app_dashboard_copy_exports = {};
__export(app_dashboard_copy_exports, {
  default: () => Dashboard2
});
var import_polaris4 = require("@shopify/polaris"), import_react6 = require("react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), defaultData2 = [
  {
    itemName: "tanner",
    itemCode: "linsley",
    noOfLabels: 24,
    header: "100",
    line1: "In Relationship",
    line2: "50"
  }
];
function Dashboard2(props) {
  let [data, setData] = (0, import_react6.useState)(() => [...defaultData2]), handlePriceChange = (rowIndex, newValue) => {
    let updatedData = [...data];
    updatedData[rowIndex].noOfLabels = newValue, setData(updatedData);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ui-title-bar", { title: "Dashboard" }, void 0, !1, {
      fileName: "app/routes/app.dashboard copy.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Barcode Generator" }, void 0, !1, {
        fileName: "app/routes/app.dashboard copy.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BarcodeGenerator_default, { value: "123456789" }, void 0, !1, {
        fileName: "app/routes/app.dashboard copy.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.dashboard copy.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MyEditableTable_default, { columns: [
      {
        title: "Item Name",
        dataIndex: "itemName"
      },
      {
        title: "Item Code",
        dataIndex: "itemCode"
      },
      {
        title: "No. Of Labels",
        dataIndex: "noOfLabels",
        render: (value, row, rowIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            value,
            onChange: (e) => handlePriceChange(rowIndex, e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.dashboard copy.tsx",
            lineNumber: 59,
            columnNumber: 9
          },
          this
        )
      },
      {
        title: "Header",
        dataIndex: "header"
      },
      {
        title: "Line 1",
        dataIndex: "line1"
      },
      {
        title: "Line 2",
        dataIndex: "line2"
      }
    ], data, onPriceChange: handlePriceChange }, void 0, !1, {
      fileName: "app/routes/app.dashboard copy.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.dashboard copy.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.dashboard copy.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/app.additional.jsx
var app_additional_exports = {};
__export(app_additional_exports, {
  default: () => AdditionalPage
});
var import_polaris5 = require("@shopify/polaris"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function AdditionalPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris5.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ui-title-bar", { title: "Additional page" }, void 0, !1, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris5.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris5.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris5.Card, {}, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris5.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris5.Card, {}, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/app.portfolio.jsx
var app_portfolio_exports = {};
__export(app_portfolio_exports, {
  default: () => Portfolio
});
var import_polaris6 = require("@shopify/polaris"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Portfolio() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris6.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ui-title-bar", { title: "Portfolio" }, void 0, !1, {
      fileName: "app/routes/app.portfolio.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris6.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris6.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris6.Card, {}, void 0, !1, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris6.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris6.Card, {}, void 0, !1, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.portfolio.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.portfolio.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader
});
var import_react7 = require("react"), import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_polaris7 = require("@shopify/polaris");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader = async ({ request }) => (await authenticate.admin(request), null);
async function action({ request }) {
  let { admin } = await authenticate.admin(request), color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)], responseJson = await (await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }]
        }
      }
    }
  )).json();
  return (0, import_node3.json)({
    product: responseJson.data.productCreate.product
  });
}
function Index() {
  let nav = (0, import_react8.useNavigation)(), actionData = (0, import_react8.useActionData)(), submit = (0, import_react8.useSubmit)(), isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST", productId = actionData?.product?.id.replace(
    "gid://shopify/Product/",
    ""
  );
  (0, import_react7.useEffect)(() => {
    productId && shopify.toast.show("Product created");
  }, [productId]);
  let generateProduct = () => submit({}, { replace: !0, method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris7.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ui-title-bar", { title: "Barcode Generator", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react8.Link,
    {
      to: "/app/barcode-generator",
      children: "Generate Barcodes"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 94,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action2,
  default: () => Auth,
  links: () => links,
  loader: () => loader2
});
var import_react9 = require("react"), import_node4 = require("@remix-run/node"), import_polaris8 = require("@shopify/polaris"), import_react10 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-U2YDFDMP.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }];
async function loader2({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node4.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}
async function action2({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node4.json)({
    errors
  });
}
function Auth() {
  let { polarisTranslations } = (0, import_react10.useLoaderData)(), loaderData = (0, import_react10.useLoaderData)(), actionData = (0, import_react10.useActionData)(), [shop, setShop] = (0, import_react9.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris8.AppProvider, { i18n: polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris8.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris8.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris8.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris8.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 51,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_polaris8.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 54,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris8.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 49,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action3
});
var action3 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(
    request
  );
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }];
async function loader3({ request }) {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node5.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node5.json)({ showForm: Boolean(login) });
}
function App2() {
  let { showForm } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react11.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader4
});
async function loader4({ request }) {
  return await authenticate.admin(request), null;
}

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react13 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }];
async function loader5({ request }) {
  return await authenticate.admin(request), (0, import_node6.json)({ apiKey: process.env.SHOPIFY_API_KEY });
}
function App3() {
  let { apiKey } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ui-nav-menu", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: "/app/barcode-generator", className: "primary", children: "BarCode Generator" }, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react12.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UL2FSJHI.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-BJF6I3FU.js", "/build/_shared/chunk-I4BANYFV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-32MKJWKQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-SFAHKWAS.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-WIVLUGB2.js", imports: ["/build/_shared/chunk-B43JI2TA.js", "/build/_shared/chunk-QDXPZB3I.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-LYJJ6BAO.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-HFGLZWFD.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.additional": { id: "routes/app.additional", parentId: "routes/app", path: "additional", index: void 0, caseSensitive: void 0, module: "/build/routes/app.additional-4YIXVVWR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.barcode-generator": { id: "routes/app.barcode-generator", parentId: "routes/app", path: "barcode-generator", index: void 0, caseSensitive: void 0, module: "/build/routes/app.barcode-generator-ZGRVOBQN.js", imports: ["/build/_shared/chunk-RQKLB3J3.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.dashboard copy": { id: "routes/app.dashboard copy", parentId: "routes/app", path: "dashboard copy", index: void 0, caseSensitive: void 0, module: "/build/routes/app.dashboard copy-2WRIUD3P.js", imports: ["/build/_shared/chunk-YSBSKNTT.js", "/build/_shared/chunk-RQKLB3J3.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.dashboard_28_Nov_23": { id: "routes/app.dashboard_28_Nov_23", parentId: "routes/app", path: "dashboard_28_Nov_23", index: void 0, caseSensitive: void 0, module: "/build/routes/app.dashboard_28_Nov_23-SUF3REP7.js", imports: ["/build/_shared/chunk-YSBSKNTT.js", "/build/_shared/chunk-RQKLB3J3.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.portfolio": { id: "routes/app.portfolio", parentId: "routes/app", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/app.portfolio-GYK7QUFF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-RLTUVC56.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-QDXPZB3I.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-LYJJ6BAO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "e3b32ac3", hmr: { runtime: "/build/_shared/chunk-I4BANYFV.js", timestamp: 1723096763209 }, url: "/build/manifest-E3B32AC3.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1, unstable_lazyRouteDiscovery: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.dashboard_28_Nov_23": {
    id: "routes/app.dashboard_28_Nov_23",
    parentId: "routes/app",
    path: "dashboard_28_Nov_23",
    index: void 0,
    caseSensitive: void 0,
    module: app_dashboard_28_Nov_23_exports
  },
  "routes/app.barcode-generator": {
    id: "routes/app.barcode-generator",
    parentId: "routes/app",
    path: "barcode-generator",
    index: void 0,
    caseSensitive: void 0,
    module: app_barcode_generator_exports
  },
  "routes/app.dashboard copy": {
    id: "routes/app.dashboard copy",
    parentId: "routes/app",
    path: "dashboard copy",
    index: void 0,
    caseSensitive: void 0,
    module: app_dashboard_copy_exports
  },
  "routes/app.additional": {
    id: "routes/app.additional",
    parentId: "routes/app",
    path: "additional",
    index: void 0,
    caseSensitive: void 0,
    module: app_additional_exports
  },
  "routes/app.portfolio": {
    id: "routes/app.portfolio",
    parentId: "routes/app",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: app_portfolio_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
