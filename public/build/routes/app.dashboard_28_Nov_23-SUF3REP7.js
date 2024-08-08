import {
  MyEditableTable_default
} from "/build/_shared/chunk-YSBSKNTT.js";
import {
  BarcodeGenerator_default
} from "/build/_shared/chunk-RQKLB3J3.js";
import {
  Box,
  Card,
  Page
} from "/build/_shared/chunk-LYJJ6BAO.js";
import {
  createHotContext
} from "/build/_shared/chunk-I4BANYFV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.dashboard_28_Nov_23.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.dashboard_28_Nov_23.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.dashboard_28_Nov_23.tsx"
  );
  import.meta.hot.lastModified = "1703668382985.457";
}
var defaultData = [{
  itemName: "tanner",
  itemCode: "linsley",
  noOfLabels: 24,
  header: "100",
  line1: "In Relationship",
  line2: "50"
}];
function Dashboard(props) {
  _s();
  const [data, setData] = (0, import_react.useState)(() => [...defaultData]);
  const handlePriceChange = (rowIndex, newValue) => {
    const updatedData = [...data];
    updatedData[rowIndex].noOfLabels = newValue;
    setData(updatedData);
  };
  const columns = [{
    title: "Item Name",
    dataIndex: "itemName"
  }, {
    title: "Item Code",
    dataIndex: "itemCode"
  }, {
    title: "No. Of Labels",
    dataIndex: "noOfLabels",
    render: (value, row, rowIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", value, onChange: (e) => handlePriceChange(rowIndex, e.target.value) }, void 0, false, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 106,
      columnNumber: 39
    }, this)
  }, {
    title: "Header",
    dataIndex: "header"
  }, {
    title: "Line 1",
    dataIndex: "line1"
  }, {
    title: "Line 2",
    dataIndex: "line2"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Dashboard" }, void 0, false, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Barcode Generator" }, void 0, false, {
        fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarcodeGenerator_default, { value: "123456789" }, void 0, false, {
        fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyEditableTable_default, { columns, data }, void 0, false, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 196,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
      fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
    lineNumber: 181,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "Juefmdxv02WgwrMtvWf6+szJSrs=");
_c = Dashboard;
function Code({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { as: "span", padding: "025", paddingInlineStart: "1", paddingInlineEnd: "1", background: "bg-subdued", borderWidth: "1", borderColor: "border", borderRadius: "1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children }, void 0, false, {
    fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
    lineNumber: 307,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.dashboard_28_Nov_23.tsx",
    lineNumber: 306,
    columnNumber: 10
  }, this);
}
_c2 = Code;
var _c;
var _c2;
$RefreshReg$(_c, "Dashboard");
$RefreshReg$(_c2, "Code");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/app.dashboard_28_Nov_23-SUF3REP7.js.map
