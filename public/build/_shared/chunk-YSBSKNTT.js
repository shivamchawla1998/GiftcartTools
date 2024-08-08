import {
  DataTable
} from "/build/_shared/chunk-LYJJ6BAO.js";
import {
  createHotContext
} from "/build/_shared/chunk-I4BANYFV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/MyEditableTable.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/MyEditableTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/MyEditableTable.tsx"
  );
  import.meta.hot.lastModified = "1701930264202.035";
}
var MyEditableTable = ({
  columns,
  data,
  onPriceChange
}) => {
  console.log("Data: ", data);
  const dataAsArray = data.map((item) => Object.values(item));
  const rows = dataAsArray.map((item, rowIndex) => ({
    id: rowIndex,
    ...item,
    // Use the object directly, assuming keys match dataIndex in columns
    cells: columns.map((column, columnIndex) => ({
      content: column.dataIndex === "noOfLabels" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: item.noOfLabels, onChange: (value) => onPriceChange(rowIndex, value) }, void 0, false, {
        fileName: "app/components/MyEditableTable.tsx",
        lineNumber: 35,
        columnNumber: 52
      }, this) : item[column.dataIndex]
    }))
  }));
  return (
    // <Page title="Product Prices">
    //   <Card>
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      DataTable,
      {
        columnContentTypes: ["text", "numeric", "numeric", "numeric", "numeric"],
        headings: columns.map((column) => column.title),
        rows: dataAsArray
      },
      void 0,
      false,
      {
        fileName: "app/components/MyEditableTable.tsx",
        lineNumber: 41,
        columnNumber: 5
      },
      this
    )
  );
};
_c = MyEditableTable;
var MyEditableTable_default = MyEditableTable;
var _c;
$RefreshReg$(_c, "MyEditableTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  MyEditableTable_default
};
//# sourceMappingURL=/build/_shared/chunk-YSBSKNTT.js.map
