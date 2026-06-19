(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function RegisterPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(121);
    if ($[0] !== "52c6aea4b7423dd6cb886b437d3db316831635987a0830618e916e5bd9639df4") {
        for(let $i = 0; $i < 121; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52c6aea4b7423dd6cb886b437d3db316831635987a0830618e916e5bd9639df4";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("candidate");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobile: "",
            designation: "",
            companyName: "",
            companyWebsite: "",
            companyLocation: "",
            companyDescription: "",
            sector: ""
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
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "RegisterPage[handleRoleChange]": (newRole)=>{
                setRole(newRole);
                setErrors({});
            }
        })["RegisterPage[handleRoleChange]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleRoleChange = t2;
    let t3;
    if ($[4] !== form.companyDescription || $[5] !== form.companyLocation || $[6] !== form.companyName || $[7] !== form.companyWebsite || $[8] !== form.confirmPassword || $[9] !== form.designation || $[10] !== form.email || $[11] !== form.firstName || $[12] !== form.lastName || $[13] !== form.mobile || $[14] !== form.password || $[15] !== form.sector || $[16] !== role) {
        t3 = ({
            "RegisterPage[validate]": ()=>{
                const newErrors = {};
                if (!form.firstName.trim()) {
                    newErrors.firstName = "\u26A0 Enter First Name";
                }
                if (!form.lastName.trim()) {
                    newErrors.lastName = "\u26A0 Enter Last Name";
                }
                if (!form.email.trim()) {
                    newErrors.email = "\u26A0 Enter Valid Email";
                } else {
                    if (!/\S+@\S+\.\S+/.test(form.email)) {
                        newErrors.email = "\u26A0 Invalid Email Format";
                    }
                }
                if (!form.password) {
                    newErrors.password = "\u26A0 Enter Password";
                } else {
                    if (form.password.length < 8) {
                        newErrors.password = "\u26A0 Password must be at least 8 characters";
                    }
                }
                if (!form.confirmPassword) {
                    newErrors.confirmPassword = "\u26A0 Confirm your password";
                } else {
                    if (form.password !== form.confirmPassword) {
                        newErrors.confirmPassword = "\u26A0 Passwords do not match";
                    }
                }
                if (role === "recruiter") {
                    if (!form.mobile.trim()) {
                        newErrors.mobile = "\u26A0 Enter Mobile Number";
                    } else {
                        if (!/^\d{10}$/.test(form.mobile.replace(/[-+ ]/g, ""))) {
                            newErrors.mobile = "\u26A0 Enter a valid phone number";
                        }
                    }
                    if (!form.designation.trim()) {
                        newErrors.designation = "\u26A0 Enter Designation";
                    }
                    if (!form.companyName.trim()) {
                        newErrors.companyName = "\u26A0 Enter Company Name";
                    }
                    if (!form.companyWebsite.trim()) {
                        newErrors.companyWebsite = "\u26A0 Enter Company Website";
                    } else {
                        if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(form.companyWebsite)) {
                            newErrors.companyWebsite = "\u26A0 Enter a valid URL";
                        }
                    }
                    if (!form.companyLocation.trim()) {
                        newErrors.companyLocation = "\u26A0 Enter Company Location";
                    }
                    if (!form.companyDescription.trim()) {
                        newErrors.companyDescription = "\u26A0 Enter Company Description";
                    }
                    if (!form.sector.trim()) {
                        newErrors.sector = "\u26A0 Enter Industry Sector";
                    }
                }
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            }
        })["RegisterPage[validate]"];
        $[4] = form.companyDescription;
        $[5] = form.companyLocation;
        $[6] = form.companyName;
        $[7] = form.companyWebsite;
        $[8] = form.confirmPassword;
        $[9] = form.designation;
        $[10] = form.email;
        $[11] = form.firstName;
        $[12] = form.lastName;
        $[13] = form.mobile;
        $[14] = form.password;
        $[15] = form.sector;
        $[16] = role;
        $[17] = t3;
    } else {
        t3 = $[17];
    }
    const validate = t3;
    let t4;
    if ($[18] !== form || $[19] !== role || $[20] !== router || $[21] !== validate) {
        t4 = ({
            "RegisterPage[handleSubmit]": async (e)=>{
                e.preventDefault();
                if (!validate()) {
                    return;
                }
                ;
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/register", {
                        ...form,
                        role
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(res.data.message);
                    router.push("/login");
                } catch (t5) {
                    const error = t5;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.response?.data?.message || "Registration Failed");
                }
            }
        })["RegisterPage[handleSubmit]"];
        $[18] = form;
        $[19] = role;
        $[20] = router;
        $[21] = validate;
        $[22] = t4;
    } else {
        t4 = $[22];
    }
    const handleSubmit = t4;
    const inp = _RegisterPageInp;
    let t5;
    if ($[23] !== errors || $[24] !== form) {
        t5 = ({
            "RegisterPage[field]": (key, placeholder, t6, t7)=>{
                const type = t6 === undefined ? "text" : t6;
                const extraStyle = t7 === undefined ? {} : t7;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: type,
                            placeholder: placeholder,
                            style: inp(extraStyle),
                            onChange: {
                                "RegisterPage[field > <input>.onChange]": (e_0)=>setForm({
                                        ...form,
                                        [key]: e_0.target.value
                                    })
                            }["RegisterPage[field > <input>.onChange]"],
                            onFocus: _RegisterPageFieldInputOnFocus,
                            onBlur: {
                                "RegisterPage[field > <input>.onBlur]": (e_2)=>e_2.target.style.borderColor = errors[key] ? "#f87171" : "rgba(255,255,255,0.1)"
                            }["RegisterPage[field > <input>.onBlur]"]
                        }, void 0, false, {
                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, this),
                        errors[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#f87171",
                                fontSize: "12px",
                                marginTop: "4px"
                            },
                            children: errors[key]
                        }, void 0, false, {
                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                            lineNumber: 194,
                            columnNumber: 72
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                    lineNumber: 187,
                    columnNumber: 16
                }, this);
            }
        })["RegisterPage[field]"];
        $[23] = errors;
        $[24] = form;
        $[25] = t5;
    } else {
        t5 = $[25];
    }
    const field = t5;
    let t6;
    let t7;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            minHeight: "100vh",
            background: "var(--primary-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            position: "relative",
            overflow: "hidden"
        };
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "400px",
                height: "400px",
                background: "var(--accent)",
                borderRadius: "50%",
                opacity: 0.05,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 221,
            columnNumber: 10
        }, this);
        $[26] = t6;
        $[27] = t7;
    } else {
        t6 = $[26];
        t7 = $[27];
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t8;
    let t9;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            width: "100%",
            maxWidth: "700px"
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                marginBottom: "32px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "var(--accent)",
                            borderRadius: "12px",
                            width: "44px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            size: 22,
                            color: "var(--primary-dark)"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                            lineNumber: 264,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                        lineNumber: 256,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 800,
                            fontSize: "26px",
                            color: "white"
                        },
                        children: "SmartHire"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                        lineNumber: 264,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                lineNumber: 252,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 249,
            columnNumber: 10
        }, this);
        t10 = {
            background: "rgba(255,255,255,0.04)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "40px",
            backdropFilter: "blur(20px)"
        };
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: {
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "28px",
                color: "white",
                textAlign: "center",
                marginBottom: "6px"
            },
            children: "Create Account"
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "#6b9e7e",
                textAlign: "center",
                marginBottom: "28px",
                fontSize: "14px"
            },
            children: "Join thousands of professionals on SmartHire"
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        t13 = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginBottom: "28px",
            background: "rgba(255,255,255,0.05)",
            padding: "6px",
            borderRadius: "14px"
        };
        $[28] = t10;
        $[29] = t11;
        $[30] = t12;
        $[31] = t13;
        $[32] = t8;
        $[33] = t9;
    } else {
        t10 = $[28];
        t11 = $[29];
        t12 = $[30];
        t13 = $[31];
        t8 = $[32];
        t9 = $[33];
    }
    let t14;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = [
            "candidate",
            "Candidate",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                size: 16
            }, "u", false, {
                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                lineNumber: 316,
                columnNumber: 38
            }, this)
        ];
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = [
            t14,
            [
                "recruiter",
                "Recruiter",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    size: 16
                }, "b", false, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                    lineNumber: 323,
                    columnNumber: 44
                }, this)
            ]
        ];
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== role) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t13,
            children: t15.map({
                "RegisterPage[(anonymous)()]": (t17)=>{
                    const [r, label, icon] = t17;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "RegisterPage[(anonymous)() > <button>.onClick]": ()=>handleRoleChange(r)
                        }["RegisterPage[(anonymous)() > <button>.onClick]"],
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            padding: "11px",
                            borderRadius: "10px",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 700,
                            fontSize: "14px",
                            transition: "all 0.2s",
                            background: role === r ? "var(--accent)" : "transparent",
                            color: role === r ? "var(--primary-dark)" : "#6b9e7e"
                        },
                        children: [
                            icon,
                            " ",
                            label
                        ]
                    }, r, true, {
                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                        lineNumber: 333,
                        columnNumber: 18
                    }, this);
                }
            }["RegisterPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[36] = role;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    let t18;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            display: "flex",
            flexDirection: "column",
            gap: "14px"
        };
        t18 = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px"
        };
        $[38] = t17;
        $[39] = t18;
    } else {
        t17 = $[38];
        t18 = $[39];
    }
    let t19;
    if ($[40] !== field) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t18,
            children: [
                field("firstName", "First Name"),
                field("lastName", "Last Name")
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[40] = field;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    const t20 = role === "candidate" ? "Email Address" : "Official Work Email";
    let t21;
    if ($[42] !== field || $[43] !== t20) {
        t21 = field("email", t20, "email");
        $[42] = field;
        $[43] = t20;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== errors.companyDescription || $[46] !== field || $[47] !== form || $[48] !== role) {
        t22 = role === "recruiter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                field("mobile", "Mobile Number"),
                field("designation", "Designation"),
                field("companyName", "Company Name"),
                field("companyWebsite", "Company Website (e.g. example.com)"),
                field("companyLocation", "Company Location"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "Company Description",
                            style: {
                                ...inp(),
                                resize: "vertical",
                                minHeight: "80px"
                            },
                            onChange: {
                                "RegisterPage[<textarea>.onChange]": (e_3)=>setForm({
                                        ...form,
                                        companyDescription: e_3.target.value
                                    })
                            }["RegisterPage[<textarea>.onChange]"],
                            onFocus: _RegisterPageTextareaOnFocus,
                            onBlur: {
                                "RegisterPage[<textarea>.onBlur]": (e_5)=>e_5.target.style.borderColor = errors.companyDescription ? "#f87171" : "rgba(255,255,255,0.1)"
                            }["RegisterPage[<textarea>.onBlur]"]
                        }, void 0, false, {
                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                            lineNumber: 397,
                            columnNumber: 260
                        }, this),
                        errors.companyDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#f87171",
                                fontSize: "12px",
                                marginTop: "4px"
                            },
                            children: errors.companyDescription
                        }, void 0, false, {
                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                            lineNumber: 408,
                            columnNumber: 79
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                    lineNumber: 397,
                    columnNumber: 255
                }, this),
                field("sector", "Industry Sector")
            ]
        }, void 0, true);
        $[45] = errors.companyDescription;
        $[46] = field;
        $[47] = form;
        $[48] = role;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            position: "relative"
        };
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    const t24 = showPassword ? "text" : "password";
    let t25;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = {
            ...inp(),
            paddingRight: "48px"
        };
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== form) {
        t26 = ({
            "RegisterPage[<input>.onChange]": (e_6)=>setForm({
                    ...form,
                    password: e_6.target.value
                })
        })["RegisterPage[<input>.onChange]"];
        $[52] = form;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== errors.password) {
        t27 = ({
            "RegisterPage[<input>.onBlur]": (e_8)=>e_8.target.style.borderColor = errors.password ? "#f87171" : "rgba(255,255,255,0.1)"
        })["RegisterPage[<input>.onBlur]"];
        $[54] = errors.password;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t24 || $[57] !== t26 || $[58] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t24,
            placeholder: "Password",
            style: t25,
            onChange: t26,
            onFocus: _RegisterPageInputOnFocus,
            onBlur: t27
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[56] = t24;
        $[57] = t26;
        $[58] = t27;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== showPassword) {
        t29 = ({
            "RegisterPage[<button>.onClick]": ()=>setShowPassword(!showPassword)
        })["RegisterPage[<button>.onClick]"];
        $[60] = showPassword;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#6b9e7e",
            cursor: "pointer",
            display: "flex"
        };
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== showPassword) {
        t31 = showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEyeSlash"], {}, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 503,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 503,
            columnNumber: 43
        }, this);
        $[63] = showPassword;
        $[64] = t31;
    } else {
        t31 = $[64];
    }
    let t32;
    if ($[65] !== t29 || $[66] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t29,
            style: t30,
            children: t31
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[65] = t29;
        $[66] = t31;
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    if ($[68] !== t28 || $[69] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t23,
            children: [
                t28,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[68] = t28;
        $[69] = t32;
        $[70] = t33;
    } else {
        t33 = $[70];
    }
    let t34;
    if ($[71] !== errors.password) {
        t34 = errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "#f87171",
                fontSize: "12px",
                marginTop: "4px"
            },
            children: errors.password
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 529,
            columnNumber: 30
        }, this);
        $[71] = errors.password;
        $[72] = t34;
    } else {
        t34 = $[72];
    }
    let t35;
    if ($[73] !== t33 || $[74] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[73] = t33;
        $[74] = t34;
        $[75] = t35;
    } else {
        t35 = $[75];
    }
    let t36;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = {
            position: "relative"
        };
        $[76] = t36;
    } else {
        t36 = $[76];
    }
    const t37 = showConfirm ? "text" : "password";
    let t38;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            ...inp(),
            paddingRight: "48px"
        };
        $[77] = t38;
    } else {
        t38 = $[77];
    }
    let t39;
    if ($[78] !== form) {
        t39 = ({
            "RegisterPage[<input>.onChange]": (e_9)=>setForm({
                    ...form,
                    confirmPassword: e_9.target.value
                })
        })["RegisterPage[<input>.onChange]"];
        $[78] = form;
        $[79] = t39;
    } else {
        t39 = $[79];
    }
    let t40;
    if ($[80] !== errors.confirmPassword) {
        t40 = ({
            "RegisterPage[<input>.onBlur]": (e_11)=>e_11.target.style.borderColor = errors.confirmPassword ? "#f87171" : "rgba(255,255,255,0.1)"
        })["RegisterPage[<input>.onBlur]"];
        $[80] = errors.confirmPassword;
        $[81] = t40;
    } else {
        t40 = $[81];
    }
    let t41;
    if ($[82] !== t37 || $[83] !== t39 || $[84] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t37,
            placeholder: "Confirm Password",
            style: t38,
            onChange: t39,
            onFocus: _RegisterPageInputOnFocus2,
            onBlur: t40
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 593,
            columnNumber: 11
        }, this);
        $[82] = t37;
        $[83] = t39;
        $[84] = t40;
        $[85] = t41;
    } else {
        t41 = $[85];
    }
    let t42;
    if ($[86] !== showConfirm) {
        t42 = ({
            "RegisterPage[<button>.onClick]": ()=>setShowConfirm(!showConfirm)
        })["RegisterPage[<button>.onClick]"];
        $[86] = showConfirm;
        $[87] = t42;
    } else {
        t42 = $[87];
    }
    let t43;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#6b9e7e",
            cursor: "pointer",
            display: "flex"
        };
        $[88] = t43;
    } else {
        t43 = $[88];
    }
    let t44;
    if ($[89] !== showConfirm) {
        t44 = showConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEyeSlash"], {}, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 630,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 630,
            columnNumber: 42
        }, this);
        $[89] = showConfirm;
        $[90] = t44;
    } else {
        t44 = $[90];
    }
    let t45;
    if ($[91] !== t42 || $[92] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t42,
            style: t43,
            children: t44
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[91] = t42;
        $[92] = t44;
        $[93] = t45;
    } else {
        t45 = $[93];
    }
    let t46;
    if ($[94] !== t41 || $[95] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t36,
            children: [
                t41,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 647,
            columnNumber: 11
        }, this);
        $[94] = t41;
        $[95] = t45;
        $[96] = t46;
    } else {
        t46 = $[96];
    }
    let t47;
    if ($[97] !== errors.confirmPassword) {
        t47 = errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "#f87171",
                fontSize: "12px",
                marginTop: "4px"
            },
            children: errors.confirmPassword
        }, void 0, false, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 656,
            columnNumber: 37
        }, this);
        $[97] = errors.confirmPassword;
        $[98] = t47;
    } else {
        t47 = $[98];
    }
    let t48;
    if ($[99] !== t46 || $[100] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 668,
            columnNumber: 11
        }, this);
        $[99] = t46;
        $[100] = t47;
        $[101] = t48;
    } else {
        t48 = $[101];
    }
    let t49;
    if ($[102] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = {
            width: "100%",
            justifyContent: "center",
            padding: "14px",
            fontSize: "15px",
            marginTop: "8px"
        };
        $[102] = t49;
    } else {
        t49 = $[102];
    }
    let t50;
    let t51;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn-accent",
            style: t49,
            children: [
                "Create Account ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                    lineNumber: 691,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        t51 = {
            textAlign: "center",
            color: "#6b9e7e",
            fontSize: "14px"
        };
        $[103] = t50;
        $[104] = t51;
    } else {
        t50 = $[103];
        t51 = $[104];
    }
    let t52;
    if ($[105] !== router) {
        t52 = ({
            "RegisterPage[<span>.onClick]": ()=>router.push("/login")
        })["RegisterPage[<span>.onClick]"];
        $[105] = router;
        $[106] = t52;
    } else {
        t52 = $[106];
    }
    let t53;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = {
            color: "var(--accent)",
            cursor: "pointer",
            fontWeight: 600
        };
        $[107] = t53;
    } else {
        t53 = $[107];
    }
    let t54;
    if ($[108] !== t52) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t51,
            children: [
                "Already have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    onClick: t52,
                    style: t53,
                    children: "Log In"
                }, void 0, false, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                    lineNumber: 726,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 726,
            columnNumber: 11
        }, this);
        $[108] = t52;
        $[109] = t54;
    } else {
        t54 = $[109];
    }
    let t55;
    if ($[110] !== handleSubmit || $[111] !== t19 || $[112] !== t21 || $[113] !== t22 || $[114] !== t35 || $[115] !== t48 || $[116] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            style: t17,
            children: [
                t19,
                t21,
                t22,
                t35,
                t48,
                t50,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 734,
            columnNumber: 11
        }, this);
        $[110] = handleSubmit;
        $[111] = t19;
        $[112] = t21;
        $[113] = t22;
        $[114] = t35;
        $[115] = t48;
        $[116] = t54;
        $[117] = t55;
    } else {
        t55 = $[117];
    }
    let t56;
    if ($[118] !== t16 || $[119] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t6,
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-fade-up",
                    style: t8,
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: t10,
                            children: [
                                t11,
                                t12,
                                t16,
                                t55
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                            lineNumber: 748,
                            columnNumber: 79
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
                    lineNumber: 748,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/register/page.jsx",
            lineNumber: 748,
            columnNumber: 11
        }, this);
        $[118] = t16;
        $[119] = t55;
        $[120] = t56;
    } else {
        t56 = $[120];
    }
    return t56;
}
_s(RegisterPage, "g2/sU15kBkDlfR8ErNtkmPjojWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RegisterPage;
function _RegisterPageInputOnFocus2(e_10) {
    return e_10.target.style.borderColor = "var(--accent)";
}
function _RegisterPageInputOnFocus(e_7) {
    return e_7.target.style.borderColor = "var(--accent)";
}
function _RegisterPageTextareaOnFocus(e_4) {
    return e_4.target.style.borderColor = "var(--accent)";
}
function _RegisterPageFieldInputOnFocus(e_1) {
    return e_1.target.style.borderColor = "var(--accent)";
}
function _RegisterPageInp(t0) {
    const extra = t0 === undefined ? {} : t0;
    return {
        width: "100%",
        padding: "12px 16px",
        borderRadius: "12px",
        border: "1.5px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.06)",
        color: "white",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "14px",
        outline: "none",
        ...extra
    };
}
var _c;
__turbopack_context__.k.register(_c, "RegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=0ipn_smarthire-redesigned_smarthire-redesign_src_app_register_page_jsx_1070j~x._.js.map