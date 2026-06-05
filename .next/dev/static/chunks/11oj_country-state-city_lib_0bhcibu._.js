(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/country-state-city/lib/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare,
    "convertArrayToObject",
    ()=>convertArrayToObject,
    "defaultKeyToCompare",
    ()=>defaultKeyToCompare,
    "findEntryByCode",
    ()=>findEntryByCode,
    "findStateByCodeAndCountryCode",
    ()=>findStateByCodeAndCountryCode
]);
const findEntryByCode = (source, code)=>{
    if (code && source != null) {
        const codex = source.findIndex((c)=>{
            return c.isoCode === code;
        });
        return codex !== -1 ? source[codex] : undefined;
    }
    return undefined;
};
const findStateByCodeAndCountryCode = (source, code, countryCode)=>{
    if (code && countryCode && source != null) {
        const codex = source.findIndex((c)=>{
            return c.isoCode === code && c.countryCode === countryCode;
        });
        return codex !== -1 ? source[codex] : undefined;
    }
    return undefined;
};
function defaultKeyToCompare(entity) {
    return entity.name;
}
const compare = (a, b, // eslint-disable-next-line no-unused-vars
keyToCompare = defaultKeyToCompare)=>{
    if (keyToCompare(a) < keyToCompare(b)) return -1;
    if (keyToCompare(a) > keyToCompare(b)) return 1;
    return 0;
};
const convertArrayToObject = (keys, arr)=>{
    const result = arr.map((subArr)=>{
        return Object.fromEntries(keys.map((key, index)=>[
                key,
                subArr[index]
            ]));
    });
    return result;
};
}),
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/country-state-city/lib/city.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$assets$2f$city$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/country-state-city/lib/assets/city.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/country-state-city/lib/utils/index.js [app-client] (ecmascript)");
;
;
const KEYS = [
    "name",
    "countryCode",
    "stateCode",
    "latitude",
    "longitude"
];
let convertedCityList = [];
// Get a list of all cities.
function getAllCities(keys = KEYS) {
    if (convertedCityList.length) {
        return convertedCityList;
    }
    const cityJSON = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$assets$2f$city$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    convertedCityList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertArrayToObject"])(keys !== null && keys !== void 0 ? keys : KEYS, cityJSON);
    return convertedCityList;
}
// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode, stateCode) {
    if (!stateCode) return [];
    if (!countryCode) return [];
    const cityList = getAllCities();
    const cities = cityList.filter((value)=>{
        return value.countryCode === countryCode && value.stateCode === stateCode;
    });
    return cities.sort(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compare"]);
}
// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode) {
    if (!countryCode) return [];
    const cityList = getAllCities();
    const cities = cityList.filter((value)=>{
        return value.countryCode === countryCode;
    });
    return cities.sort(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compare"]);
}
function sortByStateAndName(cities) {
    return cities.sort((a, b)=>{
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compare"])(a, b, (entity)=>{
            return `${entity.countryCode}-${entity.stateCode}`;
        });
        if (result !== 0) return result;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compare"])(a, b);
    });
}
const __TURBOPACK__default__export__ = {
    getAllCities,
    getCitiesOfState,
    getCitiesOfCountry,
    sortByStateAndName
};
}),
"[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/country-state-city/lib/city.js [app-client] (ecmascript) <export default as City>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "City",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$city$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$smarthire$2d$redesigned$2f$smarthire$2d$redesign$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$city$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/smarthire-redesigned/smarthire-redesign/node_modules/country-state-city/lib/city.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=11oj_country-state-city_lib_0bhcibu._.js.map