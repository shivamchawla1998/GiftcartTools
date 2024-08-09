import {
  Box,
  Card,
  Layout,
  Page
} from "/build/_shared/chunk-TOMET6M3.js";
import {
  createHotContext
} from "/build/_shared/chunk-NVX2BOVR.js";
import "/build/_shared/chunk-4YFA6LUY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ZRTADKRG.js";
import "/build/_shared/chunk-YMXJAOCI.js";
import "/build/_shared/chunk-HJYB4WCS.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.portfolio.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.portfolio.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.portfolio.jsx"
  );
  import.meta.hot.lastModified = "1723103542119.4897";
}
function Portfolio() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Portfolio" }, void 0, false, {
      fileName: "app/routes/app.portfolio.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {}, void 0, false, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {}, void 0, false, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.portfolio.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.portfolio.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Portfolio;
function Code({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Box,
    {
      as: "span",
      padding: "025",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children }, void 0, false, {
        fileName: "app/routes/app.portfolio.jsx",
        lineNumber: 86,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/app.portfolio.jsx",
      lineNumber: 78,
      columnNumber: 10
    },
    this
  );
}
_c2 = Code;
var _c;
var _c2;
$RefreshReg$(_c, "Portfolio");
$RefreshReg$(_c2, "Code");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Portfolio as default
};
//# sourceMappingURL=/build/routes/app.portfolio-GHBLA3GF.js.map
