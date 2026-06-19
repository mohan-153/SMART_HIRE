module.exports = [
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminJobsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AdminJobsPage() {
    const [jobs, setJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchJobs();
    }, []);
    const fetchJobs = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/api/admin/jobs");
            setJobs(res.data.jobs || []);
        } catch (error) {
            console.log(error);
        }
    };
    const filtered = jobs.filter((job)=>job.jobTitle?.toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-8",
                children: "Manage Jobs"
            }, void 0, false, {
                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-3xl shadow p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search Job...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        className: "border p-3 rounded-xl w-full mb-6"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left p-4",
                                                children: "Job"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left p-4",
                                                children: "Company"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                lineNumber: 77,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left p-4",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                lineNumber: 81,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left p-4",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                lineNumber: 85,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: filtered.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: job.jobTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: job.companyName
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full ${job.status === "published" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                                                        children: job.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>router.push(`/admin/jobs/${job._id}`),
                                                            className: "bg-blue-500 text-white px-4 py-2 rounded-xl",
                                                            children: "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                            lineNumber: 132,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: async ()=>{
                                                                await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/api/admin/jobs/${job._id}`);
                                                                fetchJobs();
                                                            },
                                                            className: "bg-yellow-500 text-white px-4 py-2 rounded-xl",
                                                            children: job.status === "published" ? "Close" : "Publish"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                            lineNumber: 143,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: async ()=>{
                                                                await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/api/admin/jobs/${job._id}`);
                                                                fetchJobs();
                                                            },
                                                            className: "bg-red-500 text-white px-4 py-2 rounded-xl",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                            lineNumber: 159,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, job._id, true, {
                                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                            lineNumber: 97,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/smarthire-redesigned/smarthire-redesign/src/app/admin/jobs/page.jsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=0ipn_smarthire-redesigned_smarthire-redesign_src_app_admin_jobs_page_jsx_0ncq9cs._.js.map