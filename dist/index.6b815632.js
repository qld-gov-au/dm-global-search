// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lSgxL":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0cf78e626b815632";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kuM8f":[function(require,module,exports) {
var _filterModule = require("./modules/FilterModule");
var _searchModule = require("./modules/SearchModule");
class initApp {
    static init() {
        const filterComponent = new (0, _filterModule.FilterModule)();
        const searchResults = new (0, _searchModule.SearchModule)();
    }
}
// initalize on history changes only
window.onpopstate = function(event) {
    initApp.init();
};
// initalize on page reload
initApp.init();

},{"./modules/FilterModule":"4WZu2","./modules/SearchModule":"bNK2o"}],"4WZu2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilterModule", ()=>FilterModule);
var _litHtml = require("lit-html");
var _filterResults = require("../template/filter-results");
var _urlParameter = require("../utils/urlParameter");
class FilterModule {
    constructor(){
        this.urlParameter = (0, _urlParameter.urlParameterMap)();
        this.setSessionStorage();
    /* Removed Filtered search */ // this.filterResultsTemplate()
    }
    /**
     * setSessionStorage function set profile, scope and label from the URL parameters
     * @return {undefined}
     * */ setSessionStorage() {
        const profile = this.urlParameter.profile;
        const scope = this.urlParameter.scope;
        const label = this.urlParameter.label;
        if (profile && (profile !== "qld" || scope)) {
            sessionStorage.setItem("fcProfile", profile);
            sessionStorage.setItem("fcScope", scope);
        }
        label && sessionStorage.setItem("fcLabel", label);
    }
    /**
     * filterResultsTemplate display a template to filter search results
     * @return {undefined}
     * */ filterResultsTemplate() {
        const profile = this.urlParameter.profile;
        if (this.urlParameter.filter || profile && profile !== "qld" || this.urlParameter.scope) (0, _litHtml.render)((0, _filterResults.filterResultsTemplate)(), document.getElementById("qg-filter-by-results"));
    }
}

},{"lit-html":"1cmQt","../template/filter-results":"9ipxa","../utils/urlParameter":"izCDr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>L);
parcelHelpers.export(exports, "html", ()=>y);
parcelHelpers.export(exports, "noChange", ()=>x);
parcelHelpers.export(exports, "nothing", ()=>b);
parcelHelpers.export(exports, "render", ()=>Z);
parcelHelpers.export(exports, "svg", ()=>w);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = `lit$${(Math.random() + "").slice(9)}$`, n = "?" + o, l = `<${n}>`, h = document, r = (t = "")=>h.createComment(t), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, c = (t)=>u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), y = g(1), w = g(2), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = new WeakMap, A = h.createTreeWalker(h, 129, null, !1), E = (t, i)=>{
    const s = t.length - 1, n = [];
    let h, r = 2 === i ? "<svg>" : "", d = v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let e, u, c = -1, g = 0;
        for(; g < s.length && (d.lastIndex = g, u = d.exec(s), null !== u);)g = d.lastIndex, d === v ? "!--" === u[1] ? d = a : void 0 !== u[1] ? d = f : void 0 !== u[2] ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = _) : void 0 !== u[3] && (d = _) : d === _ ? ">" === u[0] ? (d = null != h ? h : v, c = -1) : void 0 === u[1] ? c = -2 : (c = d.lastIndex - u[2].length, e = u[1], d = void 0 === u[3] ? _ : '"' === u[3] ? p : m) : d === p || d === m ? d = _ : d === a || d === f ? d = v : (d = _, h = void 0);
        const y = d === _ && t[i + 1].startsWith("/>") ? " " : "";
        r += d === v ? s + l : c >= 0 ? (n.push(e), s.slice(0, c) + "$lit$" + s.slice(c) + o + y) : s + o + (-2 === c ? (n.push(void 0), i) : y);
    }
    const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== e ? e.createHTML(u) : u,
        n
    ];
};
class C {
    constructor({ strings: t , _$litType$: i  }, e){
        let l;
        this.parts = [];
        let h = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = E(t, i);
        if (this.el = C.createElement(v, e), A.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (l = A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t = [];
                    for (const i of l.getAttributeNames())if (i.endsWith("$lit$") || i.startsWith(o)) {
                        const s = a[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = l.getAttribute(s.toLowerCase() + "$lit$").split(o), i = /([.?@])?(.*)/.exec(s);
                            c.push({
                                type: 1,
                                index: h,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? M : "?" === i[1] ? k : "@" === i[1] ? H : S
                            });
                        } else c.push({
                            type: 6,
                            index: h
                        });
                    }
                    for (const i of t)l.removeAttribute(i);
                }
                if ($.test(l.tagName)) {
                    const t = l.textContent.split(o), i = t.length - 1;
                    if (i > 0) {
                        l.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)l.append(t[s], r()), A.nextNode(), c.push({
                            type: 2,
                            index: ++h
                        });
                        l.append(t[i], r());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === n) c.push({
                    type: 2,
                    index: h
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = l.data.indexOf(o, t + 1));)c.push({
                        type: 7,
                        index: h
                    }), t += o.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = h.createElement("template");
        return s.innerHTML = t, s;
    }
}
function P(t, i, s = t, e) {
    var o, n, l, h;
    if (i === x) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = P(t, r._$AS(t, i.values), r, e)), i;
}
class V {
    constructor(t, i){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : h).importNode(s, !0);
        A.currentNode = o;
        let n = A.nextNode(), l = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i;
                2 === d.type ? i = new N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new I(n, this, t)), this.u.push(i), d = e[++r];
            }
            l !== (null == d ? void 0 : d.index) && (n = A.nextNode(), l++);
        }
        return o;
    }
    p(t) {
        let i = 0;
        for (const s of this.u)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = P(this, t, i), d(t) ? t === b || null == t || "" === t ? (this._$AH !== b && this._$AR(), this._$AH = b) : t !== this._$AH && t !== x && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : c(t) ? this.k(t) : this.g(t);
    }
    O(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== b && d(this._$AH) ? this._$AA.nextSibling.data = t : this.T(h.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = C.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);
        else {
            const t = new V(o, this), i = t.v(this.options);
            t.p(s), this.T(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = T.get(t.strings);
        return void 0 === i && T.set(t.strings, i = new C(t)), i;
    }
    k(t) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new N(this.O(r()), this.O(r()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = b;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = P(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = P(this, e[s + l], i, l), h === x && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === b ? t = b : t !== b && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === b ? void 0 : t;
    }
}
const R = s ? s.emptyScript : "";
class k extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
}
class H extends S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : b) === x) return;
        const e = this._$AH, o = t === b && e !== b || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== b && (e === b || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        P(this, t);
    }
}
const L = {
    P: "$lit$",
    A: o,
    M: n,
    C: 1,
    L: E,
    R: V,
    D: c,
    V: P,
    I: N,
    H: S,
    N: k,
    U: H,
    B: M,
    F: I
}, z = i.litHtmlPolyfillSupport;
null == z || z(C, N), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.6.1");
const Z = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new N(i.insertBefore(r(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9ipxa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterResultsTemplate", ()=>filterResultsTemplate);
var _litHtml = require("lit-html");
var _main = require("./main");
var _urlParameter = require("../utils/urlParameter");
var _fetchData = require("../utils/fetchData");
function filterResultsTemplate() {
    let label = "";
    const currUrlParameterMap = (0, _urlParameter.urlParameterMap)();
    const labelFromSession = sessionStorage.getItem("fcLabel");
    const profileFromSession = sessionStorage.getItem("fcProfile");
    const scopeFromSession = sessionStorage.getItem("fcScope");
    const capitalizeFirstLetter = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
    // apply filter button click
    const applyFilter = (e)=>{
        e.preventDefault();
        const params = new URLSearchParams(location.search);
        const selectedRadioBtn = document.querySelector('input[name="filterBy"]:checked');
        params.set("scope", selectedRadioBtn?.getAttribute("data-scope") || "");
        params.set("profile", selectedRadioBtn?.getAttribute("data-profile") || "");
        params.set("page", "1");
        params.set("start_rank", "1");
        history.pushState({}, "", `?${params.toString()}`);
        (0, _fetchData.fetchData)(params.toString()).then((data)=>{
            (0, _litHtml.render)((0, _main.mainTemplate)(data?.response, currUrlParameterMap), document.getElementById("qg-search-results__container"));
        });
    };
    // on radio button change for filtering
    const onFilterChange = (e)=>{
        const selectedVal = e.target.value;
        switch(selectedVal){
            case "qld":
            case "custom":
                sessionStorage.setItem("rcSelectedRadiobutton", selectedVal);
                break;
        }
    };
    // building label value
    if (labelFromSession) label = capitalizeFirstLetter(labelFromSession);
    else if (scopeFromSession) // @ts-ignore
    label = (0, _litHtml.html)`Results from <strong>${scopeFromSession}</strong>`;
    else if (profileFromSession) label = capitalizeFirstLetter(profileFromSession);
    // loading of the component
    window.addEventListener("load", (event)=>{
        const filterButton = document.querySelector(".qg-btn__filter");
        filterButton?.addEventListener("click", (e)=>{});
        filterButton?.dispatchEvent(new Event("click"));
    });
    return (0, _litHtml.html)`<div class="qg-filter-by-results">
              <p class="qg-filter-by-results__title">Filter results by</p>
              <form class="form qg-forms-v2 qg-filter-by-results__form">
              <ol class="questions pt-2">
                <li>
                  <fieldset>
                    <legend>
                      <span class="label">Content type</span>
                    </legend>
                    <ol class="choices qg-forms-v2__radio">
                      <li>
                        <input checked name="filterBy" id="customOption" type="radio" value="custom"
                               data-scope="${scopeFromSession}" 
                               data-profile="${profileFromSession}"
                               data-label="${labelFromSession}" @click="${onFilterChange}" />
                        <label for="customOption">${label}</label>
                      </li>
                      <li>
                        <input name="filterBy" id="qld" type="radio" value="qld" data-profile='qld' data-scope='' @click="${onFilterChange}" ?checked=${sessionStorage.getItem("rcSelectedRadiobutton") === "qld"}/>
                        <label for="qld">all Queensland Government</label>
                      </li>
                    </ol>
                  </fieldset>
                </li>
              </ol>
            </form>
            <button type="button" class="qg-btn qg-btn__filter btn-primary mb-2" @click="${applyFilter}">Apply filters</button>
           </div>`;
}

},{"lit-html":"1cmQt","./main":"iQB7D","../utils/urlParameter":"izCDr","../utils/fetchData":"gxG5R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQB7D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainTemplate", ()=>mainTemplate);
var _litHtml = require("lit-html");
var _featuredResults = require("./featured-results");
var _pagination = require("./pagination");
var _searchResults = require("./search-results");
function mainTemplate(response, paramMap) {
    const { resultPacket , curator  } = response;
    const { exhibits  } = curator;
    return (0, _litHtml.html)`
        ${exhibits.length > 0 ? (0, _featuredResults.featuredResultsTemplate)(exhibits) : ""}
        ${(0, _searchResults.searchResultsTemplate)(resultPacket)}
        ${(0, _pagination.paginationTemplate)(response, paramMap)}
    `;
}

},{"lit-html":"1cmQt","./featured-results":"dMNvy","./pagination":"eGlhV","./search-results":"9HBzr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMNvy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "featuredResultsTemplate", ()=>featuredResultsTemplate);
var _litHtml = require("lit-html");
function featuredResultsTemplate(exhibits) {
    return (0, _litHtml.html)`<h2 class="search-results-summary">Featured results</h2>
    ${exhibits.map((item, index)=>{
        return (0, _litHtml.html)`
                    <article class="qg-card qg-card__light-theme qg-card__clickable">
                        <div class="content">
                            <div class="details">
                                <h2 class="qg-card__title">
                                    <a href="https://find.search.qld.gov.au${item.linkUrl}" class="stretched-link">${item.titleHtml}</a>
                                </h2>
                                <div class="qg-search-results__results-list">
                                    <p class="description">${item.descriptionHtml}</p>
                                    <p class="qg-search-results__url">${item.displayUrl}</p>
                                </div>
                            </div>
                        </div>
                    </article>`;
    })}
  `;
}

},{"lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGlhV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paginationTemplate", ()=>paginationTemplate);
var _litHtml = require("lit-html");
var _main = require("./main");
var _urlParameter = require("../utils/urlParameter");
var _fetchData = require("../utils/fetchData");
function paginationTemplate(response, paramMap) {
    let timer;
    const { resultPacket  } = response;
    const { totalMatching  } = resultPacket.resultsSummary;
    const paginationOnPage = 10;
    const currUrlParameterMap = (0, _urlParameter.urlParameterMap)();
    const numberOfPages = Math.ceil(totalMatching / paginationOnPage);
    const startRankVal = Math.floor(parseInt(String(currUrlParameterMap.startRank / 10)) / 10);
    const buildHref = `?query=${currUrlParameterMap.query}&num_ranks=${currUrlParameterMap.numRanks || paginationOnPage}&tiers=10&collection=${currUrlParameterMap.collection}&profile=${currUrlParameterMap.profile}&second_profile=&scope=${currUrlParameterMap.scope}&label=`;
    // determine pagination start value
    const paginationStartValue = function() {
        return startRankVal * 10 + 1;
    };
    // determine pagination end value
    const paginationEndValue = function() {
        const rankVal = startRankVal * 10 + 10;
        if (numberOfPages > rankVal) return rankVal;
        else return Math.ceil(numberOfPages);
    };
    const onPageClick = (e)=>{
        e.preventDefault();
        clearTimeout(timer);
        document.querySelector(".qg-site-search__component")?.scrollIntoView({
            behavior: "smooth"
        });
        if (e.target?.href) timer = setTimeout(()=>{
            history.pushState({}, "", e.target.href);
            (0, _fetchData.fetchData)(e.target?.href?.split("?")[1]).then((data)=>{
                (0, _litHtml.render)((0, _main.mainTemplate)(data?.response, currUrlParameterMap), document.getElementById("qg-search-results__container"));
            });
        });
    };
    function range(start, end) {
        return Array(end - start + 1).fill(start).map((_, idx)=>start + idx);
    }
    if (numberOfPages > 1) return (0, _litHtml.html)`
  <div class="pagination-container">
        <ul class="pagination">
            <li class="page-item">
                ${currUrlParameterMap.startRank > 1 ? (0, _litHtml.html)`<a class="page-link"  @click="${onPageClick}" href="${buildHref}&page=${currUrlParameterMap.activePage - 1}&start_rank=${currUrlParameterMap.startRank - 10}"><span aria-hidden="true">«</span> Previous</a>` : ""}
            </li>
            ${range(paginationStartValue(), paginationEndValue()).map((i)=>{
        const addParam = buildHref + `&page=${i}&start_rank=${(currUrlParameterMap.numRanks || paginationOnPage) * (i - 1) + 1}`;
        const determineActivePage = currUrlParameterMap.activePage === i ? "active" : "";
        return (0, _litHtml.html)`<li class="page-item ${determineActivePage}"><a class="page-link" @click="${onPageClick}"  href=${addParam}>${i}</a></li>`;
    })}
            <li class="page-item">
                ${numberOfPages > currUrlParameterMap.activePage ? (0, _litHtml.html)`<a class="page-link" @click="${onPageClick}" href="${buildHref}&page=${currUrlParameterMap.activePage + 1}&start_rank=${currUrlParameterMap.startRank + 10}">Next<span aria-hidden="true">&nbsp;»</span></a>` : ""}
            </li>
            
        </ul>
    </div>
  `;
}

},{"lit-html":"1cmQt","./main":"iQB7D","../utils/urlParameter":"izCDr","../utils/fetchData":"gxG5R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izCDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlParameterMap", ()=>urlParameterMap);
const urlParameterMap = ()=>{
    const url = new URL(window.location.href);
    const urlParams = new URLSearchParams(url.search);
    const rSpe = (str)=>{
        return str?.replace(/[\\#+()$~%*?<>{}]/g, "");
    };
    return {
        query: rSpe((urlParams.get("query") || "").replace(/\%2F/g, "/")),
        profile: rSpe(urlParams.get("profile")) || "",
        label: rSpe(urlParams.get("label")) || "",
        filter: rSpe(urlParams.get("filter")) || "",
        numRanks: parseInt(urlParams.get("num_ranks")) || 0,
        startRank: parseInt(urlParams.get("start_rank")) || 1,
        collection: rSpe(urlParams.get("collection")) || "",
        //scope: rSpe(urlParams.get('scope')) || '',
        scope: "disaster.qld.gov.au",
        activePage: parseInt(urlParams.get("page")) || 1
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxG5R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchData", ()=>fetchData);
var _constants = require("./constants");
const fetchData = async (url)=>{
    const response = await fetch(`${(0, _constants.API_URL) + "?" + url}`);
    return await response.json();
};

},{"./constants":"fIuAL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fIuAL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
const API_URL = "https://find.search.qld.gov.au/s/search.json";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9HBzr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchResultsTemplate", ()=>searchResultsTemplate);
var _litHtml = require("lit-html");
var _formatContent = require("../utils/formatContent");
function searchResultsTemplate(resultPacket) {
    const { currStart , currEnd , totalMatching  } = resultPacket?.resultsSummary;
    const searchTerm = resultPacket?.query;
    const customizeTitle = (title)=>title.replace("| Queensland Government", "");
    return (0, _litHtml.html)`<div id="qg-search-results">
        <h2 class="qg-search-results__summary">Search results for '${searchTerm}'</h2>
        <span class="qg-search-results__results-count">Showing results ${currStart} - ${currEnd} of <span class="qg-search-results__results-total">${(0, _formatContent.formatNumber)(totalMatching)}</span></span>
        <ul class="qg-search-results__results-list">
            ${resultPacket.results.map((result)=>(0, _litHtml.html)`
                <li class="qg-search-results__results-list-item">
                    <h3>
                        <a href="https://find.search.qld.gov.au${result.clickTrackingUrl}">${customizeTitle(result.title)}</a>
                    </h3>
                    <ul class="qg-search-results__results-list">
                        <li class="description"> ${result.metaData.C}</li>
                        <li class="meta">
                            <span class="qg-search-results__url">${result.indexUrl}</span>
                            ${result.fileSize ? (0, _litHtml.html)`<span>&nbsp;-&nbsp;${(0, _formatContent.formatSize)(result.fileSize)}</span>` : ""}
                            ${result.date ? (0, _litHtml.html)`<span>&nbsp;-&nbsp;${(0, _formatContent.formatDate)(result.date)}</span>` : ""}
                        </li>
                    </ul>
                </li>`)}
        </ul>
    </div>
  `;
}

},{"lit-html":"1cmQt","../utils/formatContent":"jIPzA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIPzA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatNumber", ()=>formatNumber);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "formatSize", ()=>formatSize);
const formatNumber = (num)=>{
    const parts = num.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
};
const formatDate = (timestamp)=>{
    const dateObj = new Date(timestamp);
    const month = dateObj.toLocaleString("en-AU", {
        month: "long"
    });
    const year = dateObj.getFullYear();
    const date = dateObj.getDate();
    return date + " " + month + " " + year;
};
const formatSize = (num)=>{
    return Math.floor(num / 1024) + "k";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNK2o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchModule", ()=>SearchModule);
var _litHtml = require("lit-html");
var _main = require("../template/main");
var _relatedSearch = require("../template/related-search");
var _urlParameter = require("../utils/urlParameter");
var _constants = require("../utils/constants");
var _noResults = require("../template/no-results");
var _searchForm = require("../template/search-form");
class SearchModule {
    constructor(){
        this.urlParameter = (0, _urlParameter.urlParameterMap)();
        this.spinnerEl = document.querySelector(".qg-search-results__spinner");
        this.siteInput = document.querySelector(".qg-site-search__component .qg-search-site__input");
        // render search form
        this.renderSearchForm();
        // check if query porameter is set to start fetch process
        const queryParam = this.urlParameter.query;
        if (queryParam) {
            this.processData();
            if (this.siteInput) this.siteInput.value = queryParam;
        }
    }
    /**
     * fetchData function fetch the results from the funnelback API and show the loading spinner
     * @return {undefined}
     * */ async fetchData() {
        this.spinnerEl?.removeAttribute("hidden");
        const response = await fetch(`${(0, _constants.API_URL)}?query=${this.urlParameter.query}&num_ranks=${this.urlParameter.numRanks}&tiers=off&collection=${this.urlParameter.collection}&profile=${this.urlParameter.profile}&scope=${this.urlParameter.scope}&start_rank=${this.urlParameter.startRank}`);
        return await response.json();
    }
    renderSearchForm() {
        (0, _litHtml.render)((0, _searchForm.searchForm)(), document.getElementById("qg-search-form"));
    }
    /**
     * processData function process the results fetched and render templates
     * @return {undefined}
     * */ processData() {
        this.fetchData().then((data)=>{
            const { contextualNavigation , results  } = data?.response?.resultPacket;
            if (results.length > 0) {
                this.spinnerEl?.setAttribute("hidden", "");
                (0, _litHtml.render)((0, _main.mainTemplate)(data?.response, this.urlParameter), document.getElementById("qg-search-results__container"));
                if (contextualNavigation) (0, _litHtml.render)((0, _relatedSearch.relatedResultsTemplate)(contextualNavigation), document.getElementById("related-search__tags"));
            } else {
                document.querySelector(".qg-search-results__spinner").remove();
                (0, _litHtml.render)((0, _noResults.noResultsTemplate)("No results found"), document.getElementById("qg-search-results__container"));
            }
        });
    }
}

},{"lit-html":"1cmQt","../template/main":"iQB7D","../template/related-search":"aIc2v","../utils/urlParameter":"izCDr","../utils/constants":"fIuAL","../template/no-results":"5ne87","../template/search-form":"2BdSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIc2v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "relatedResultsTemplate", ()=>relatedResultsTemplate);
var _litHtml = require("lit-html");
var _urlParameter = require("../utils/urlParameter");
var _fetchData = require("../utils/fetchData");
var _main = require("./main");
var _noResults = require("./no-results");
function relatedResultsTemplate(contextualNavigation) {
    const onRelatedSearchClick = (e)=>{
        e.preventDefault();
        const clickedHref = e.target.href;
        const clickedVal = e.target.textContent;
        const currUrlParameterMap = (0, _urlParameter.urlParameterMap)();
        document.querySelector(".qg-site-search__component .qg-search-site__input").value = clickedVal;
        // push in the history stack
        history.pushState({}, "", `${clickedHref}`);
        // fetch the results
        (0, _fetchData.fetchData)(clickedHref).then((data)=>{
            const { contextualNavigation , results  } = data?.response?.resultPacket;
            if (results?.length) {
                (0, _litHtml.render)((0, _main.mainTemplate)(data?.response, currUrlParameterMap), document.getElementById("qg-search-results__container"));
                (0, _litHtml.render)(relatedResultsTemplate(contextualNavigation), document.getElementById("related-search__tags"));
            } else {
                (0, _litHtml.render)((0, _noResults.noResultsTemplate)("No results found"), document.getElementById("qg-search-results__container"));
                (0, _litHtml.render)("", document.getElementById("related-search__tags"));
            }
        });
    };
    if (contextualNavigation) {
        const { categories  } = contextualNavigation;
        if (categories[0]?.name === "topic") return (0, _litHtml.html)` <p class="related-search__title">Related search</p>
        <section class="related-search__tags test">
            ${categories[0]?.clusters.map((item)=>(0, _litHtml.html)`<a @click="${(e)=>onRelatedSearchClick(e)}" href="${item.href}&start_rank=1" class="qg-btn btn-outline-dark m-1">${item.query}</a>`)}
        </section>`;
    }
}

},{"lit-html":"1cmQt","../utils/urlParameter":"izCDr","../utils/fetchData":"gxG5R","./main":"iQB7D","./no-results":"5ne87","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ne87":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noResultsTemplate", ()=>noResultsTemplate);
var _litHtml = require("lit-html");
function noResultsTemplate(message) {
    return (0, _litHtml.html)`
        <div class="alert alert-warning" role="alert">
            <h2><i class="fa fa-exclamation-triangle"></i>${message}</h2>
        </div>`;
}

},{"lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BdSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchForm", ()=>searchForm);
var _litHtml = require("lit-html");
var _fetchData = require("../utils/fetchData");
var _main = require("./main");
var _urlParameter = require("../utils/urlParameter");
var _relatedSearch = require("./related-search");
var _noResults = require("./no-results");
function searchForm() {
    const currUrlParameterMap = (0, _urlParameter.urlParameterMap)();
    const onSubmit = (e)=>{
        e.preventDefault();
        const inputValue = document.querySelector(".qg-site-search__component .qg-search-site__input").value;
        if (inputValue) {
            const params = new URLSearchParams(location.search);
            const currUrlParameterMap = (0, _urlParameter.urlParameterMap)();
            // set params
            //params.set('scope', currUrlParameterMap.scope)
            params.set("scope", "disaster.qld.gov.au");
            params.set("profile", currUrlParameterMap.profile);
            params.set("page", "1");
            params.set("start_rank", "1");
            params.set("num_ranks", "10");
            params.set("tiers", "off");
            params.set("collection", "qld-gov");
            // push history stack and fetch data
            setTimeout(function() {
                const currInputValue = document.querySelector(".qg-site-search__component .qg-search-site__input").value;
                params.set("query", currInputValue);
                history.pushState({}, "", `?${params.toString()}`);
                (0, _fetchData.fetchData)(params.toString()).then((data)=>{
                    const { contextualNavigation , results  } = data?.response?.resultPacket;
                    if (results?.length) {
                        (0, _litHtml.render)((0, _main.mainTemplate)(data?.response, currUrlParameterMap), document.getElementById("qg-search-results__container"));
                        (0, _litHtml.render)((0, _relatedSearch.relatedResultsTemplate)(contextualNavigation), document.getElementById("related-search__tags"));
                    } else {
                        (0, _litHtml.render)((0, _noResults.noResultsTemplate)("No results found"), document.getElementById("qg-search-results__container"));
                        (0, _litHtml.render)("", document.getElementById("related-search__tags"));
                    }
                });
            });
        } else {
            (0, _litHtml.render)("", document.getElementById("qg-search-results__container"));
            (0, _litHtml.render)("", document.getElementById("related-search__tags"));
        }
    };
    const suggestionVisibility = (value)=>{
        const suggestionEl = document.querySelector(".qg-site-search__component .qg-search-concierge-help");
        if (suggestionEl != null) suggestionEl.hidden = value;
    };
    const onInputClick = (e)=>{
        if (e.type === "keydown") {
            if (e.key === "Enter") suggestionVisibility(true);
            else suggestionVisibility(false);
        }
    };
    return (0, _litHtml.html)`
        <form action="#" role="search" class="qg-site-search__form qg-site-search__component qg-search-form qg-site-search__multiple-forms" data-suggestions="https://find.search.qld.gov.au/s/suggest.json?collection=qld-gov&fmt=json%2B%2B&alpha=0.5&profile=qld&scope=disaster.qld.gov.au" data-results-url="https://find.search.qld.gov.au/s/search.json?collection=qld-gov&profile=qld&scope=disaster.qld.gov.au&smeta_sfinder_sand=yes">
                    <div class="input-group">
                        <label for="qg-search-query-sm" class="qg-visually-hidden">Search Queensland Government</label>
                        <input type="text" name="query" id="qg-search-query-sm"  class="form-control qg-search-site__input" autocomplete="off" placeholder="Search website" tabindex="0" aria-required="true" aria-expanded="false" value="${currUrlParameterMap.query}" @keydown="${onInputClick}" @click="${onInputClick}"/>
                        <svg class="qg-search__icon d-none d-md-block d-lg-block" width="512px" height="512px" viewBox="0 0 512 512">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(67.298684, 71.201316)">
                                    <path d="M108.7791,227.405285 L11.3079182,324.876467 C5.45005384,330.734332 5.45005384,340.231806 11.3079182,346.089671 L27.4103294,362.192082 C33.2681938,368.049946 42.7656685,368.049946 48.6235328,362.192082 L146.094715,264.7209 C151.952579,258.863035 151.952579,249.365561 146.094715,243.507696 L129.992304,227.405285 C124.134439,221.547421 114.636965,221.547421 108.7791,227.405285 Z"></path>
                                    <path d="M221.701316,0.798683501 C305.096314,0.798683501 372.701316,68.6275439 372.701316,152.298684 C372.701316,235.969823 305.096314,303.798684 221.701316,303.798684 C138.306319,303.798684 70.7013165,235.969823 70.7013165,152.298684 C70.7013165,68.6275439 138.306319,0.798683501 221.701316,0.798683501 Z M221.310125,54.0389936 C167.081772,54.0389936 123.121006,98.2066236 123.121006,152.690156 C123.121006,207.173689 167.081772,251.341319 221.310125,251.341319 C275.538478,251.341319 319.499244,207.173689 319.499244,152.690156 C319.499244,98.2066236 275.538478,54.0389936 221.310125,54.0389936 Z" fill-rule="nonzero" transform="translate(221.701316, 152.298684) scale(-1, 1) translate(-221.701316, -152.298684) "></path>
                                </g>
                            </g>
                        </svg>
                        <button class="qg-search-close-concierge hide" type="button" aria-label="Close Search Concierge">
                            <svg width="512px" height="512px" viewBox="0 0 512 512">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect transform="translate(256.500000, 256.000000) scale(1, -1) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>
                                    <rect transform="translate(256.500000, 256.000000) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>
                                </g>
                            </svg>
                        </button>
                        <button type="submit" id="qg-site-search__submit" @click="${onSubmit}" class="asif btn btn-global-primary" title="Search site" data-analytics-link-group="qg-search-page-submit">
                            <span class="d-none d-md-block d-lg-block">Search</span>
                            <i class="fa fa-search fa-rotate-90 d-md-none d-lg-none"></i>
                        </button>
                        <!-- <div class="qg-search-concierge qg-search-concierge-initial">
                            <div class="qg-search-concierge-group helper">
                                <div class="qg-search-concierge-content">
                                    <h4>Popular services</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/renewregistration/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew vehicle or boat rego</a></li>
                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/checkmydemeritpoints/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Check my licence demerit points</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport/licensing/driver-licensing/renew-replace/renew/online" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew my driving licence</a></li>
                                        <li class="list-group-item"><a href="https://www.change-of-address.services.qld.gov.au/" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Change my address</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="qg-search-concierge-group helper">
                                <div class="qg-search-concierge-content">
                                    <h4>Browse by category</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport" tabindex="-1">Transport and motoring</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/jobs" tabindex="-1">Employment and jobs</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/education" tabindex="-1">Education and training</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/about" tabindex="-1">Queensland and its government</a></li>
                                    </ul>
                                    <a href="https://www.qld.gov.au/queenslanders" tabindex="-1" class="all" data-analytics-link-group="qg-global-search-category">Browse all categories</a>
                                </div>
                            </div> 
                        </div>
                        -->

                        <div class="qg-search-concierge qg-search-concierge-help">
                            <div class="qg-search-concierge-group suggestions" @click="${onSubmit}"></div>
                            <div class="qg-search-concierge-group highlight"></div>
                            <div class="qg-search-concierge-group helper"></div>
                        </div>
                    </div>
                    <!--parameters to display results on search page-->
                </form>
        <p class="mt-3">Enter your query in the box above to search.</p>`;
}

},{"lit-html":"1cmQt","../utils/fetchData":"gxG5R","./main":"iQB7D","../utils/urlParameter":"izCDr","./related-search":"aIc2v","./no-results":"5ne87","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lSgxL","kuM8f"], "kuM8f", "parcelRequire32a6")

//# sourceMappingURL=index.6b815632.js.map
