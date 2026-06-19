(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/context/LoadingProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingProvider",
    ()=>LoadingProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useLoading",
    ()=>useLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// Loading overlay removed — keep context API but do not render global loader
const LoadingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    loading: false,
    setLoading: ()=>{}
});
function LoadingProvider({ children }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingProvider.useEffect": ()=>{
            // turn off the loader after navigation completes (pathname change)
            setLoading(false);
        }
    }["LoadingProvider.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingProvider.useEffect": ()=>{
            // show loader when user clicks an internal link (<a href="/...">)
            const onClick = {
                "LoadingProvider.useEffect.onClick": (e)=>{
                    // only left-click without modifier
                    if (e.defaultPrevented) return;
                    if (e.button !== 0) return;
                    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
                    const anchor = e.target.closest && e.target.closest("a");
                    if (!anchor) return;
                    const href = anchor.getAttribute("href");
                    const target = anchor.getAttribute("target");
                    const download = anchor.getAttribute("download");
                    if (!href) return;
                    if (target === "_blank" || download !== null) return;
                    // treat as internal when href starts with / or same origin
                    try {
                        const url = new URL(href, window.location.href);
                        if (url.origin === window.location.origin) {
                            // schedule asynchronously to avoid React "useInsertionEffect must not schedule updates" errors
                            if (typeof requestAnimationFrame === "function") {
                                requestAnimationFrame({
                                    "LoadingProvider.useEffect.onClick": ()=>setLoading(true)
                                }["LoadingProvider.useEffect.onClick"]);
                            } else {
                                setTimeout({
                                    "LoadingProvider.useEffect.onClick": ()=>setLoading(true)
                                }["LoadingProvider.useEffect.onClick"], 0);
                            }
                        }
                    } catch (err) {
                    // if invalid URL, ignore
                    }
                }
            }["LoadingProvider.useEffect.onClick"];
            document.addEventListener("click", onClick);
            return ({
                "LoadingProvider.useEffect": ()=>document.removeEventListener("click", onClick)
            })["LoadingProvider.useEffect"];
        }
    }["LoadingProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingProvider.useEffect": ()=>{
            // intercept history API so programmatic navigations also show loader
            const origPush = window.history.pushState;
            const origReplace = window.history.replaceState;
            function trySetLoading(args) {
                try {
                    const url_0 = args[2];
                    if (!url_0) return;
                    const parsed = new URL(url_0, window.location.href);
                    if (parsed.origin === window.location.origin) {
                        if (typeof requestAnimationFrame === "function") {
                            requestAnimationFrame({
                                "LoadingProvider.useEffect.trySetLoading": ()=>setLoading(true)
                            }["LoadingProvider.useEffect.trySetLoading"]);
                        } else {
                            setTimeout({
                                "LoadingProvider.useEffect.trySetLoading": ()=>setLoading(true)
                            }["LoadingProvider.useEffect.trySetLoading"], 0);
                        }
                    }
                } catch (e_0) {
                // ignore
                }
            }
            window.history.pushState = ({
                "LoadingProvider.useEffect": function(...args_0) {
                    trySetLoading(args_0);
                    return origPush.apply(this, args_0);
                }
            })["LoadingProvider.useEffect"];
            window.history.replaceState = ({
                "LoadingProvider.useEffect": function(...args_1) {
                    trySetLoading(args_1);
                    return origReplace.apply(this, args_1);
                }
            })["LoadingProvider.useEffect"];
            return ({
                "LoadingProvider.useEffect": ()=>{
                    window.history.pushState = origPush;
                    window.history.replaceState = origReplace;
                }
            })["LoadingProvider.useEffect"];
        }
    }["LoadingProvider.useEffect"], []);
    // reference-counted loading helpers so pages can signal readiness
    const loadingCountRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const startLoading = ()=>{
        loadingCountRef.current += 1;
        if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(()=>setLoading(true));
        } else {
            setTimeout(()=>setLoading(true), 0);
        }
    };
    const finishLoading = ()=>{
        loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
        if (loadingCountRef.current === 0) {
            // hide after navigation or immediately
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingContext.Provider, {
        value: {
            loading,
            setLoading,
            startLoading,
            finishLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/context/LoadingProvider.jsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
_s(LoadingProvider, "wXtoSK5p8zpd3IfI0G7aOp862yI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LoadingProvider;
function useLoading() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "bc0eb81e8b73c966bce70b81d5a5f73b144d1a6b144397641c8d5be2281dbcdc") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc0eb81e8b73c966bce70b81d5a5f73b144d1a6b144397641c8d5be2281dbcdc";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LoadingContext);
}
_s1(useLoading, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const __TURBOPACK__default__export__ = LoadingContext;
var _c;
__turbopack_context__.k.register(_c, "LoadingProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/components/ContentLoader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContentLoader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "ccfd0ee0b33c1f9887f2eb1d5641aac371b0c479bbf182c7bc791c22e117cb0d") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ccfd0ee0b33c1f9887f2eb1d5641aac371b0c479bbf182c7bc791c22e117cb0d";
    }
    const { children } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ContentLoader[useEffect()]": ()=>{
                setLoaded(false);
                const el = containerRef.current;
                if (!el) {
                    return;
                }
                let remaining = 0;
                const listeners = new Set();
                const checkImages = {
                    "ContentLoader[useEffect() > checkImages]": ()=>{
                        const imgs = Array.from(el.querySelectorAll("img"));
                        remaining = 0;
                        imgs.forEach({
                            "ContentLoader[useEffect() > checkImages > imgs.forEach()]": (img)=>{
                                if (img.complete && img.naturalWidth !== 0) {
                                    return;
                                }
                                remaining = remaining + 1;
                                remaining;
                                if (!listeners.has(img)) {
                                    const onLoad = {
                                        "ContentLoader[useEffect() > checkImages > imgs.forEach() > onLoad]": ()=>{
                                            remaining = Math.max(0, remaining - 1);
                                            listeners.delete(img);
                                            img.removeEventListener("load", onLoad);
                                            img.removeEventListener("error", onLoad);
                                        }
                                    }["ContentLoader[useEffect() > checkImages > imgs.forEach() > onLoad]"];
                                    img.addEventListener("load", onLoad);
                                    img.addEventListener("error", onLoad);
                                    listeners.add(img);
                                }
                            }
                        }["ContentLoader[useEffect() > checkImages > imgs.forEach()]"]);
                        return remaining;
                    }
                }["ContentLoader[useEffect() > checkImages]"];
                let idleTimer = null;
                let maxTimer = null;
                const tryFinish = {
                    "ContentLoader[useEffect() > tryFinish]": ()=>{
                        if (remaining === 0) {
                            clearTimeout(idleTimer);
                            clearTimeout(maxTimer);
                            setLoaded(true);
                        }
                    }
                }["ContentLoader[useEffect() > tryFinish]"];
                const scheduleIdle = {
                    "ContentLoader[useEffect() > scheduleIdle]": ()=>{
                        if (idleTimer) {
                            clearTimeout(idleTimer);
                        }
                        idleTimer = setTimeout({
                            "ContentLoader[useEffect() > scheduleIdle > setTimeout()]": ()=>{
                                checkImages();
                                tryFinish();
                            }
                        }["ContentLoader[useEffect() > scheduleIdle > setTimeout()]"], 250);
                    }
                }["ContentLoader[useEffect() > scheduleIdle]"];
                checkImages();
                scheduleIdle();
                const mo = new MutationObserver(()=>{
                    checkImages();
                    scheduleIdle();
                });
                mo.observe(el, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                maxTimer = setTimeout({
                    "ContentLoader[useEffect() > setTimeout()]": ()=>{
                        clearTimeout(idleTimer);
                        setLoaded(true);
                    }
                }["ContentLoader[useEffect() > setTimeout()]"], 8000);
                return ()=>{
                    if (idleTimer) {
                        clearTimeout(idleTimer);
                    }
                    if (maxTimer) {
                        clearTimeout(maxTimer);
                    }
                    mo.disconnect();
                    listeners.forEach(_ContentLoaderUseEffectAnonymousListenersForEach);
                };
            }
        })["ContentLoader[useEffect()]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== pathname) {
        t2 = [
            pathname
        ];
        $[2] = pathname;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== loaded) {
        t3 = !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-9999 flex items-center justify-center bg-white/90",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 h-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/components/ContentLoader.jsx",
                    lineNumber: 128,
                    columnNumber: 140
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/components/ContentLoader.jsx",
                lineNumber: 128,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/components/ContentLoader.jsx",
            lineNumber: 128,
            columnNumber: 21
        }, this);
        $[4] = loaded;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = loaded ? "visible" : "hidden";
    let t5;
    if ($[6] !== t4) {
        t5 = {
            visibility: t4
        };
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== children || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            children: children
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/components/ContentLoader.jsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t3 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "relative",
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/components/ContentLoader.jsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_s(ContentLoader, "lXQ46C2mWWyhYvLqNhx2uR6Jhhc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ContentLoader;
function _ContentLoaderUseEffectAnonymousListenersForEach(img_0) {
    ;
    try {
        img_0.removeEventListener("load", _ContentLoaderUseEffectAnonymousListenersForEachImg_0RemoveEventListener);
        img_0.removeEventListener("error", _ContentLoaderUseEffectAnonymousListenersForEachImg_0RemoveEventListener2);
    } catch (t0) {
        const e = t0;
    }
}
function _ContentLoaderUseEffectAnonymousListenersForEachImg_0RemoveEventListener2() {}
function _ContentLoaderUseEffectAnonymousListenersForEachImg_0RemoveEventListener() {}
var _c;
__turbopack_context__.k.register(_c, "ContentLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_smarthire-redesigned_smarthire-redesign_src_0inweew._.js.map