import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useActionData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-BJF6I3FU.js";
import {
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

// app/routes/app._index.jsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index.jsx"
  );
  import.meta.hot.lastModified = "1703746153953.438";
}
function Index() {
  var _a;
  _s();
  const nav = useNavigation();
  const actionData = useActionData();
  const submit = useSubmit();
  const isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST";
  const productId = (_a = actionData == null ? void 0 : actionData.product) == null ? void 0 : _a.id.replace("gid://shopify/Product/", "");
  (0, import_react.useEffect)(() => {
    if (productId) {
      shopify.toast.show("Product created");
    }
  }, [productId]);
  const generateProduct = () => submit({}, {
    replace: true,
    method: "POST"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Barcode Generator", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      to: "/app/barcode-generator",
      children: "Generate Barcodes"
    },
    void 0,
    false,
    {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 97,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
}
_s(Index, "DJCLLfqNMkauIsSoxpEWeZL/QGs=", false, function() {
  return [useNavigation, useActionData, useSubmit];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-HFGLZWFD.js.map
