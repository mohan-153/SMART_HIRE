(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "db038def21c8c46b54a5e31523e7d4e3133622138c41d5917be97f0fec6e3321") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db038def21c8c46b54a5e31523e7d4e3133622138c41d5917be97f0fec6e3321";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            email: "",
            password: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== form.email || $[4] !== form.password) {
        t2 = ({
            "LoginPage[validate]": ()=>{
                const newErrors = {};
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!form.email) {
                    newErrors.email = "\u26A0 Enter Valid Email";
                } else {
                    if (!emailRegex.test(form.email)) {
                        newErrors.email = "\u26A0 Enter Valid Email";
                    }
                }
                if (!form.password) {
                    newErrors.password = "\u26A0 Enter Password";
                }
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            }
        })["LoginPage[validate]"];
        $[3] = form.email;
        $[4] = form.password;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const validate = t2;
    let t3;
    if ($[6] !== form || $[7] !== router || $[8] !== validate) {
        t3 = ({
            "LoginPage[handleSubmit]": async (e)=>{
                e.preventDefault();
                if (!validate()) {
                    return;
                }
                ;
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/login", form);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(res.data.message);
                    const role = res.data.role;
                    setTimeout({
                        "LoginPage[handleSubmit > setTimeout()]": ()=>{
                            if (role === "candidate") {
                                router.push("/candidate/dashboard");
                            } else {
                                if (role === "recruiter") {
                                    router.push("/recruiter/dashboard");
                                } else {
                                    if (role === "admin") {
                                        router.push("/admin/dashboard");
                                    } else {
                                        router.push("/");
                                    }
                                }
                            }
                        }
                    }["LoginPage[handleSubmit > setTimeout()]"], 1000);
                } catch (t4) {
                    const error = t4;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.response?.data?.message || "Login Failed");
                }
            }
        })["LoginPage[handleSubmit]"];
        $[6] = form;
        $[7] = router;
        $[8] = validate;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const handleSubmit = t3;
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-bold text-center mb-8",
            children: "LOGIN"
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== form) {
        t5 = ({
            "LoginPage[<input>.onChange]": (e_0)=>setForm({
                    ...form,
                    email: e_0.target.value
                })
        })["LoginPage[<input>.onChange]"];
        $[11] = form;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== form.email || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            placeholder: "Email Address",
            className: "w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 outline-none",
            value: form.email,
            onChange: t5
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[13] = form.email;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== errors.email) {
        t7 = errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-400 text-sm mt-1",
            children: errors.email
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 140,
            columnNumber: 26
        }, this);
        $[16] = errors.email;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t6 || $[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    const t9 = showPassword ? "text" : "password";
    let t10;
    if ($[21] !== form) {
        t10 = ({
            "LoginPage[<input>.onChange]": (e_1)=>setForm({
                    ...form,
                    password: e_1.target.value
                })
        })["LoginPage[<input>.onChange]"];
        $[21] = form;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== form.password || $[24] !== t10 || $[25] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t9,
            placeholder: "Password",
            className: "w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 outline-none",
            value: form.password,
            onChange: t10
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[23] = form.password;
        $[24] = t10;
        $[25] = t9;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== showPassword) {
        t12 = ({
            "LoginPage[<button>.onClick]": ()=>setShowPassword(!showPassword)
        })["LoginPage[<button>.onClick]"];
        $[27] = showPassword;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== showPassword) {
        t13 = showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEyeSlash"], {}, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 191,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 191,
            columnNumber: 43
        }, this);
        $[29] = showPassword;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t12 || $[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t12,
            className: "absolute right-4 top-4",
            children: t13
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== errors.password) {
        t15 = errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-400 text-sm mt-1",
            children: errors.password
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 208,
            columnNumber: 30
        }, this);
        $[34] = errors.password;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== t11 || $[37] !== t14 || $[38] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t11,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[36] = t11;
        $[37] = t14;
        $[38] = t15;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== router) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: {
                    "LoginPage[<button>.onClick]": ()=>router.push("/forgot-password")
                }["LoginPage[<button>.onClick]"],
                className: "text-green-400 text-sm hover:text-green-300",
                children: "Forgot Password?"
            }, void 0, false, {
                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
                lineNumber: 226,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[40] = router;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-xl font-semibold",
            children: "Login"
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== router) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-sm",
            children: [
                "Don't have an account?",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    onClick: {
                        "LoginPage[<span>.onClick]": ()=>router.push("/register")
                    }["LoginPage[<span>.onClick]"],
                    className: "text-green-400 cursor-pointer ml-2",
                    children: "Sign Up"
                }, void 0, false, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
                    lineNumber: 243,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[43] = router;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== handleSubmit || $[46] !== t16 || $[47] !== t17 || $[48] !== t19 || $[49] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white flex justify-center items-center px-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md bg-zinc-900 p-8 rounded-3xl shadow-xl",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-5",
                        children: [
                            t8,
                            t16,
                            t17,
                            t18,
                            t19
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
                        lineNumber: 253,
                        columnNumber: 174
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
                lineNumber: 253,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/login/page.jsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[45] = handleSubmit;
        $[46] = t16;
        $[47] = t17;
        $[48] = t19;
        $[49] = t8;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    return t20;
}
_s(LoginPage, "Oj8/xysP8v1wz+5HFJnWzK3ePTE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_smarthire-redesigned_smarthire-redesign_src_app_login_page_jsx_0lsg1g.._.js.map