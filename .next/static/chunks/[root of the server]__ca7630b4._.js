(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__ca7630b4._.js", {

"[project]/public/Logo.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Logo.a1aa2a2c.png");}}),
"[project]/public/Logo.png.mjs { IMAGE => \"[project]/public/Logo.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/Logo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 189,
    height: 45,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AKSkpIV2dnZfQkJCMllZWT5OTk42Pz8/LVNTUztfX19DAHh4eGBXV1dHNDQ0IltbWzhQUFAyVVVVNU9PTy9aWlo45EkU5YhOvkgAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Logo.png.mjs { IMAGE => "[project]/public/Logo.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHomeSectionPassed, setIsHomeSectionPassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    // Check if scrolled a bit (for smaller screens)
                    if (window.scrollY > 10) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                    // Check if we've scrolled past the home section
                    const homeSection = document.getElementById("home");
                    if (homeSection) {
                        const homeSectionHeight = homeSection.offsetHeight;
                        setIsHomeSectionPassed(window.scrollY > homeSectionHeight - 100);
                    }
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const scrollToSection = (id)=>{
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
            setIsMenuOpen(false); // Cerrar menú al hacer click en enlace
        }
    };
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "screen-top",
        className: `
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${isHomeSectionPassed ? 'bg-gradient-to-r from-[#EB3751] to-[#F0813C] shadow-md' : isScrolled ? 'bg-gradient-to-r from-[#EB3751] to-[#F0813C] bg-opacity-90' : 'bg-transparent'}
        text-white
        px-8 py-4
        flex items-center
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer",
                    onClick: ()=>scrollToSection("home"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: "Logo Secure Core Consulting",
                        className: "w-28 md:w-auto h-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:hidden block cursor-pointer",
                    onClick: toggleMenu,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faTimes"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faBars"],
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `
            sm:flex
            space-x-0 sm:space-x-6
            sm:flex-row flex-col
            items-center
            ${isMenuOpen ? "flex fixed top-[72px] left-0 w-full bg-gradient-to-r from-[#EB3751] to-[#F0813C] py-4 shadow-lg" : "hidden sm:flex"}
            transition-all duration-300 ease-in-out
          `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("about"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "¿Quiénes somos?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("services"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "Servicios"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("mission"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "Misión y Visión"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("features"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "Valores Destacados"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("contact"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "Contacto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(Header, "foPBinf3YrvvKKoerRj7wAh+XNU=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sectionAbout.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "aboutContainer": "sectionAbout-module-scss-module__f0epJG__aboutContainer",
  "aboutSection": "sectionAbout-module-scss-module__f0epJG__aboutSection",
  "arrowIcon": "sectionAbout-module-scss-module__f0epJG__arrowIcon",
  "button": "sectionAbout-module-scss-module__f0epJG__button",
  "contentContainer": "sectionAbout-module-scss-module__f0epJG__contentContainer",
  "description": "sectionAbout-module-scss-module__f0epJG__description",
  "heading": "sectionAbout-module-scss-module__f0epJG__heading",
  "imageContainer": "sectionAbout-module-scss-module__f0epJG__imageContainer",
  "laptopImageContainer": "sectionAbout-module-scss-module__f0epJG__laptopImageContainer",
  "laptopImageSvg": "sectionAbout-module-scss-module__f0epJG__laptopImageSvg",
  "laptopImageWrapper": "sectionAbout-module-scss-module__f0epJG__laptopImageWrapper",
  "leftRedShape": "sectionAbout-module-scss-module__f0epJG__leftRedShape",
  "yellowBorderSvg": "sectionAbout-module-scss-module__f0epJG__yellowBorderSvg",
});
}}),
"[project]/public/quienes-somos-ssc.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/quienes-somos-ssc.4347b308.png");}}),
"[project]/public/quienes-somos-ssc.png.mjs { IMAGE => \"[project]/public/quienes-somos-ssc.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/quienes-somos-ssc.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 453,
    height: 486,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/ADImHlWKblvclZaS/YiSlP6GkJL+hI2Q/nB4fP4AbVVE2XdUQP+ij3//naCd/5aenv+Vnp//gImM/wByXE3+TTEj/4BcSP+/qZz/t66o/5CPi/95fXz/AHZZR/9HMij/Sysf/7COg/+0k4f/kYaA/2lvcf8AYEEw/zMlH/86MS3/dGBa/2xlZP9yen//ZnF3/wBIPTf/W1xb/15kZ/9MUFL/Oj9D/0RNUv9XXGH+ADAdE/8vJSH/Li0t/ygrLv8vNDj/QkhM/0FAQdkAQSEQ/kAoGv4yJBv+Jx8a/jQ0NP1UVljcIB0cVYD4crNyyejcAAAAAElFTkSuQmCC",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sectionAbout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/sectionAbout.module.scss.module.css [app-client] (css module)");
// Import your laptop image
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/quienes-somos-ssc.png.mjs { IMAGE => "[project]/public/quienes-somos-ssc.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
'use client';
;
;
;
;
const SectionAboutUs = ()=>{
    const scrollToServices = ()=>{
        const target = document.getElementById("services");
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftRedShape,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "280",
                        height: "498",
                        viewBox: "0 0 280 498",
                        fill: "none",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M280 146.892C280 66.0418 214.467 0.5 133.628 0.5H-184V351.108C-184 431.958 -118.467 497.5 -37.6277 497.5H280V146.892Z",
                            fill: "#FC4554"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionAbout.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionAbout.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionAbout.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].laptopImageWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].laptopImageSvg,
                                width: "453",
                                height: "486",
                                viewBox: "0 0 453 486",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0 143.326C0 64.4033 63.9795 0.423828 142.902 0.423828H453V342.675C453 421.597 389.021 485.577 310.098 485.577H0V143.326Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionAbout.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                                        x: "0",
                                        y: "0",
                                        width: "453",
                                        height: "486",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].laptopImageContainer,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "Secure Core Consulting - Security Solutions",
                                                fill: true,
                                                style: {
                                                    objectFit: 'cover'
                                                },
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sectionAbout.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionAbout.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionAbout.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sectionAbout.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].yellowBorderSvg,
                                width: "453",
                                height: "486",
                                viewBox: "0 0 453 486",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 143.75C2 65.9317 65.0841 2.84766 142.902 2.84766H451V343.098C451 420.917 387.916 484.001 310.098 484.001H2V143.75Z",
                                    stroke: "#FFD464",
                                    "stroke-width": "4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionAbout.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sectionAbout.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionAbout.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                            children: "¿Quiénes somos?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionAbout.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Secure Core Consulting"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                " ofrece soluciones de seguridad y control de acceso de vanguardia para empresas modernas. Nuestro producto estrella,",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "NexusCore Controller"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                ", garantiza una gestión de seguridad fluida en toda su organización."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionAbout.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: scrollToServices,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                            "aria-label": "Saber más sobre Secure Core Consulting y sus servicios",
                            children: [
                                "Saber más",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionAbout.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionAbout.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionAbout.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sectionAbout.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sectionAbout.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_c = SectionAboutUs;
const __TURBOPACK__default__export__ = SectionAboutUs;
var _c;
__turbopack_context__.k.register(_c, "SectionAboutUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/internal/font/google/space_grotesk_e7a23fb3.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "space_grotesk_e7a23fb3-module__8cd-PG__className",
  "variable": "space_grotesk_e7a23fb3-module__8cd-PG__variable",
});
}}),
"[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontWeight: 700,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/funnel_sans_f1f8df23.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "funnel_sans_f1f8df23-module__hoSRNa__className",
  "variable": "funnel_sans_f1f8df23-module__hoSRNa__variable",
});
}}),
"[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Funnel Sans', 'Funnel Sans Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/inter_c9dc8c28.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "inter_c9dc8c28-module__rylw1G__className",
  "variable": "inter_c9dc8c28-module__rylw1G__variable",
});
}}),
"[next]/internal/font/google/inter_c9dc8c28.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_c9dc8c28.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontWeight: 700,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/libs/fonts/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
;
;
;
}}),
"[project]/src/libs/fonts/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_c9dc8c28.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/libs/fonts/index.ts [app-client] (ecmascript) <locals>");
}}),
"[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-client] (ecmascript) <export default as space_grotesk>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "space_grotesk": (()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-client] (ecmascript)");
}}),
"[next]/internal/font/google/inter_c9dc8c28.js [app-client] (ecmascript) <export default as inter>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "inter": (()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_c9dc8c28.js [app-client] (ecmascript)");
}}),
"[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript) <export default as funnel_sans>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "funnel_sans": (()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript)");
}}),
"[project]/src/components/cards-component.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// CardComponent.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/fonts/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-client] (ecmascript) <export default as space_grotesk>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript) <export default as funnel_sans>");
;
;
;
;
const CardComponent = ({ title, description, icon, path = "#", onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative text-center rounded-[20px] flex flex-col justify-between pt-[40px] w-[26vw] max-md:w-[40vw] max-sm:w-[80vw] h-[502px] mb-8",
        style: {
            color: "rgba(69, 26, 26, 1)",
            boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-[4vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full w-[106px] h-[106px] flex items-center justify-center bg-[#FC4554]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: icon,
                                className: "text-white text-4xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cards-component.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards-component.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards-component.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} text-[22px] font-[700] leading-[24px]`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards-component.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cards-component.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-[2vw]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[14px] font-[300] leading-[22px]`,
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/cards-component.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cards-component.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            onClick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center p-[30px] relative border-t border-[#FC4554]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClick,
                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] font-[600] leading-[100%]`,
                        children: "Ver más"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards-component.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        className: "w-[1.4vw] absolute left-[65%] top-[37%]",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowRight"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards-component.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cards-component.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center p-[30px] relative border-t border-[#FC4554]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: path,
                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] font-[600] leading-[100%]`,
                        children: "Saber más"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards-component.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        className: "w-[1.4vw] absolute left-[65%] top-[37%]",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowRight"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards-component.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cards-component.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cards-component.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = CardComponent;
const __TURBOPACK__default__export__ = CardComponent;
var _c;
__turbopack_context__.k.register(_c, "CardComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/values-icons/rocket.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/rocket.e2d865ae.png");}}),
"[project]/public/values-icons/rocket.png.mjs { IMAGE => \"[project]/public/values-icons/rocket.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/values-icons/rocket.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAw0lEQVR42l1PyQ5BQRCc5c0b86YNQcS+xXbgAzhyIyGxhThwcXfiE/y2agkHfeuq6qpqIf4mVipXTKXmtSTZ90J4/AglpaUo6oLYNrw/pY3pVZJkLSIpfcHaaZvo1iS6MNEiukJ0rkIs8tZOBiE8GTRKZaQQmozpw2nHjgKAAtDBxSFSihBlSs4t2JU5YbUulp1bQrDH1Qa2G5S7o2z+U47JTByP2ZLz+2iOciuO+ghG2eyr7v0xGDPEKvHizGld/X73BtXfE6PDakxyAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/values-icons/hand1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/hand1.452f55eb.png");}}),
"[project]/public/values-icons/hand1.png.mjs { IMAGE => \"[project]/public/values-icons/hand1.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/values-icons/hand1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 104,
    height: 116,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA0ElEQVR42j2OPQuCUBSGby6hEOTg2hDZEHpJISF1CEQDMy5haEgOGmKogxBOujgI4iD+5K5QHjjLec77AcBvaJpepGnqdF2XhWF4pShq/mdAVdV9VVWvOI4RfkhEUdxOUJZlvmmaBKvvZVmGEEJ2gjzPb/q+/7Rtmw3DULAsuwIEQcxIkpzrun6o6/qtaZrkuq7Bcdwa5Hn+CILAUhQFRlF0833/Ytv2qSiK5wgdfERjBs6Fnued8RqSJO2AIAjb0Q4hdLIsSzVN88gwzHLs8QWGvDk1eerbQAAAAABJRU5ErkJggg==",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/values-icons/shield.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/shield.1905aae9.png");}}),
"[project]/public/values-icons/shield.png.mjs { IMAGE => \"[project]/public/values-icons/shield.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$shield$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/values-icons/shield.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$shield$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 91,
    height: 106,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA7ElEQVR42hWOzUqEUACFr6NgKIW5UCFqIYmLbFNcA4dEUxIXzixKRq0U8mcheosWLVy5EBXfwLedO2d3OHC+D7Ase6Zp2m2e53uE0EdVVSGEUOM47hyM49gsy/Lj+75OUdRGEIRL27Zh0zRfYF3Xf1weaZqmSJLcGIbxEATBi2maT6Asy3dd1+89z9u6rmv0fY+iKPIcx9mCtm0/T8M0TX/DMPwmSeJjDzrLsj0Iw9DFAneWZUF89yxJEh/H8Wtd1wfA8/xFmqY7RVGuGYahi6LYzfOMZFm+AqeIoshj9hs2PHRd962q6g1BEOAIPTg60WcV9qgAAAAASUVORK5CYII=",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/values-icons/hand2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/hand2.8dcbe7aa.png");}}),
"[project]/public/values-icons/hand2.png.mjs { IMAGE => \"[project]/public/values-icons/hand2.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/values-icons/hand2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 112,
    height: 70,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AJOTk3d8fHxpampqVWdnZ1ZiYmJTVFRURmlpaVh6enpvAGNjY0xSUlJEd3d3YnZ2dmRSUlJEUlJSRFdXV0lMTExHAH19fWJycnJgLS0tJTs7OzJUVFRCaWlpVHBwcF1VVVVOAEtLSzpVVVVFU1NTRDw8PC95eXlhnZ2dgY+Pj3pwcHBnAAAAAAACAgIBMzMzKZqamn+wsLCWenp6ZhkZGRMDAwMCKj433zo4xiQAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/mockData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockContact": (()=>mockContact),
    "mockMission": (()=>mockMission),
    "mockValues": (()=>mockValues),
    "servicesData": (()=>servicesData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/values-icons/rocket.png.mjs { IMAGE => "[project]/public/values-icons/rocket.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/values-icons/hand1.png.mjs { IMAGE => "[project]/public/values-icons/hand1.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$shield$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$shield$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/values-icons/shield.png.mjs { IMAGE => "[project]/public/values-icons/shield.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/values-icons/hand2.png.mjs { IMAGE => "[project]/public/values-icons/hand2.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const servicesData = [
    {
        id: 1,
        title: "Fábrica de Software",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCogs"],
        description: "Implementamos un proceso integral de desarrollo de software utilizando metodologías ágiles para entregar soluciones robustas y seguras.",
        longDescription: "Nuestro servicio abarca desde la ideación y análisis hasta el diseño, desarrollo, pruebas y despliegue, asegurando estándares de calidad y comunicación fluida con el cliente."
    },
    {
        id: 2,
        title: "Desarrollo de software a la medida",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faLaptopCode"],
        description: "Creamos soluciones adaptadas a procesos y objetivos específicos, garantizando escalabilidad y fácil integración.",
        longDescription: "Definimos y desarrollamos software hecho a la medida, permitiendo la personalización completa e integración con otras plataformas, asegurando que la solución evolucione junto a tu negocio."
    },
    {
        id: 3,
        title: "Soporte en infraestructura tecnológica",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faServer"],
        description: "Mantenemos el óptimo funcionamiento y seguridad de los componentes tecnológicos de tu empresa.",
        longDescription: "Ofrecemos soporte para servidores, redes, hardware y bases de datos, incluyendo monitorización, respaldo, actualización de parches y asistencia técnica en sitio o de forma remota."
    },
    {
        id: 4,
        title: "Proveedor de servicios profesionales",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faHandshake"],
        description: "Brindamos servicios especializados en desarrollo, implementación en la nube, administración de bases de datos, entre otros.",
        longDescription: "Nuestros expertos cubren diversas áreas de TI, apoyándote en el desarrollo, soporte, implementación y diseño de experiencias digitales de alta calidad."
    },
    {
        id: 5,
        title: "Soporte y mantenimiento de software",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faWrench"],
        description: "Aseguramos la estabilidad y evolución de tus aplicaciones a través de soporte técnico y mantenimiento continuo.",
        longDescription: "Incluimos mantenimiento correctivo, adaptativo, evolutivo y preventivo para que tus sistemas se mantengan actualizados y seguros conforme crecen las necesidades de tu empresa."
    },
    {
        id: 6,
        title: "Consultoría",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faLightbulb"],
        description: "Analizamos y diseñamos estrategias tecnológicas, impulsando la innovación y optimización de tus procesos.",
        longDescription: "Ofrecemos servicios de consultoría para definir procesos, automatizar pruebas, implementar pipelines CI/CD, optimizar la calidad de código y reforzar la seguridad de tus sistemas."
    }
];
const mockMission = [
    {
        auxId: "mi",
        title: "Misión",
        bgColor: "rgba(255, 246, 224, 1)",
        description: "En Secure Core Consulting nuestra misión es proporcionar soluciones tecnológicas innovadoras y de alta calidad que impulsen la transformación digital de nuestros clientes. Nos comprometemos a ofrecer servicios personalizados, que optimicen procesos, potencien la seguridad y garanticen la continuidad operativa en un entorno empresarial dinámico."
    },
    {
        auxId: "vi",
        title: "Visión",
        bgColor: "rgba(255, 227, 230, 1)",
        description: "Para 2027, aspiramos a ser líderes reconocidos en el mercado local y del exterior, con nuestras soluciones innovadoras acompañando los mercados del sector educativo, seguridad y control logístico. Pretendemos transformar y mejorar la eficiencia, flexibilidad, seguridad y gobierno dentro de sus operaciones tecnológicas."
    }
];
const mockValues = [
    {
        id: 1,
        title: "Innovación:",
        bgColor: "rgba(254, 199, 98, 1)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: "Fomentamos la creatividad y la búsqueda constante de soluciones tecnológicas avanzadas."
    },
    {
        id: 2,
        title: "Calidad:",
        bgColor: "rgba(252, 125, 86, 1)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: "Nos comprometemos a ofrecer productos y servicios de la más alta calidad."
    },
    {
        id: 3,
        title: "Seguridad:",
        bgColor: "rgba(252, 141, 107, 1)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$shield$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$shield$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: "Priorizar la protección de los datos y activos de nuestros clientes."
    },
    {
        id: 4,
        title: "Cliente:",
        bgColor: "rgba(232, 77, 103, 1)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: "Poner las necesidades y satisfacción del cliente como nuestra máxima prioridad."
    },
    {
        id: 5,
        title: "Sinergia:",
        bgColor: "rgba(229, 51, 81, 1)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$rocket$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: "Trabajar en equipo y fomentar alianzas estratégicas para alcanzar objetivos comunes."
    },
    {
        id: 6,
        title: "Responsabilidad:",
        bgColor: "rgba(241, 47, 183, 1)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$hand1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: "Asumir la responsabilidad de nuestras acciones y sus impactos."
    },
    {
        id: 7,
        title: "Sostenibilidad:",
        bgColor: "rgba(128, 47, 241, 1)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$values$2d$icons$2f$hand2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: "Promover prácticas empresariales sostenibles que beneficien a la sociedad y al medio ambiente."
    }
];
const mockContact = [
    {
        id: 1,
        title: "Empresa",
        items: [
            "Sobre Nosotros",
            "Carreras",
            "Contactos"
        ]
    },
    {
        id: 2,
        title: "Soluciones",
        items: [
            "Control de Acceso",
            "Gestión de Activos",
            "Integración de Seguridad"
        ]
    },
    {
        id: 3,
        title: "Contacto",
        items: [
            "info@securecoreconsulting.com",
            "+57 301 291 6999",
            "Bogotá D.C."
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sectionServices.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/fonts/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-client] (ecmascript) <export default as space_grotesk>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__inter$3e$__ = __turbopack_context__.i("[next]/internal/font/google/inter_c9dc8c28.js [app-client] (ecmascript) <export default as inter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards-component.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const SectionServices = ()=>{
    _s();
    // Estado para el modal
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedService, setSelectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOpenModal = (service)=>{
        setSelectedService(service);
        setOpenModal(true);
    };
    const handleCloseModal = ()=>{
        setSelectedService(null);
        setOpenModal(false);
    };
    // Variantes para la animación de las tarjetas
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };
    // Variantes para la animación del modal
    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "bg-cover py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-[6rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} font-[700] text-[50px] leading-[61px] mb-10`,
                        style: {
                            background: "linear-gradient(89.23deg, #F3BC2B 26.26%, #EB3751 68.68%)",
                            color: "transparent",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text"
                        },
                        children: "Nuestros servicios"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionServices.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-[7vw]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__inter$3e$__["inter"]} font-[500] text-[24px] align-middle leading-[45px] mb-12 block`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "font-[900]",
                                    children: "Secure Core Consulting S.A.S."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionServices.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                " tiene como objeto principal el desarrollo de actividades relacionadas con la tecnología de la información y los servicios asociados, incluyendo, pero no limitándose a:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionServices.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionServices.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sectionServices.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-evenly px-[3vw] mb-[4rem]",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesData"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: cardVariants,
                        initial: "hidden",
                        animate: "visible",
                        whileHover: "hover",
                        className: "m-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: service.title,
                            description: service.description,
                            icon: service.icon,
                            // onClick se usará tanto en el botón como en la flecha dentro del CardComponent
                            onClick: ()=>handleOpenModal(service)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionServices.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, service.id, false, {
                        fileName: "[project]/src/components/sectionServices.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sectionServices.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: openModal && selectedService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    variants: modalVariants,
                    className: "fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white max-w-lg w-full p-6 rounded-lg relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCloseModal,
                                className: "absolute top-4 right-4 text-gray-500 hover:text-gray-800",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionServices.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: selectedService.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionServices.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: selectedService.longDescription
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionServices.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: handleCloseModal,
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    className: "px-4 py-2 rounded bg-[#EB3751] text-white font-semibold hover:bg-[#ff5d74] transition-colors",
                                    children: "Cerrar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionServices.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionServices.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sectionServices.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionServices.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sectionServices.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sectionServices.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
_s(SectionServices, "8AVmiQwE4swAzocHmQAScqiV0oY=");
_c = SectionServices;
const __TURBOPACK__default__export__ = SectionServices;
var _c;
__turbopack_context__.k.register(_c, "SectionServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SectionMissionVision.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "SectionMissionVision-module-scss-module__9pCN8a__card",
  "carousel-container": "SectionMissionVision-module-scss-module__9pCN8a__carousel-container",
  "icon-container": "SectionMissionVision-module-scss-module__9pCN8a__icon-container",
  "intro-container": "SectionMissionVision-module-scss-module__9pCN8a__intro-container",
  "intro-text": "SectionMissionVision-module-scss-module__9pCN8a__intro-text",
  "logo": "SectionMissionVision-module-scss-module__9pCN8a__logo",
  "section-mission-vision": "SectionMissionVision-module-scss-module__9pCN8a__section-mission-vision",
  "value-description": "SectionMissionVision-module-scss-module__9pCN8a__value-description",
  "value-title": "SectionMissionVision-module-scss-module__9pCN8a__value-title",
});
}}),
"[project]/public/Capa_1.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Capa_1.58155906.svg");}}),
"[project]/public/Capa_1.svg.mjs { IMAGE => \"[project]/public/Capa_1.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Capa_1$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/Capa_1.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Capa_1$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 185,
    height: 186,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sectionValues.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
// Keen Slider
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/keen-slider/react.js [app-client] (ecmascript)");
// Import our SCSS module
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SectionMissionVision.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Capa_1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Capa_1$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Capa_1.svg.mjs { IMAGE => "[project]/public/Capa_1.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SectionMissionVision = ()=>{
    _s();
    // Configure Keen Slider
    const [sliderRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"])({
        loop: true,
        slides: {
            spacing: 15,
            perView: 1
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: {
                    perView: 2
                }
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 3
                }
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["section-mission-vision"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["intro-container"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Capa_1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Capa_1$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "Secure Core Logo",
                            className: "max-w-full h-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionValues.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionValues.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Valores destacados"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionValues.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "En ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Secure Core Consulting,"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionValues.tsx",
                                        lineNumber: 56,
                                        columnNumber: 16
                                    }, this),
                                    " estamos a la vanguardia de la protección digital. Ofrecemos soluciones innovadoras y personalizadas para garantizar la seguridad de tus datos y sistemas, enfrentando los desafíos tecnológicos del presente y futuro. Protege lo más valioso: tu información, tu negocio, tu tranquilidad."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sectionValues.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sectionValues.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sectionValues.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sliderRef,
                className: `keen-slider ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["carousel-container"]}`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockValues"].map((value)=>// Each slide
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `keen-slider__slide ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["icon-container"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: value.icon,
                                        alt: value.title,
                                        fill: true,
                                        style: {
                                            objectFit: "contain"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionValues.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionValues.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["value-title"],
                                    children: value.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionValues.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionMissionVision$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["value-description"],
                                    children: value.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionValues.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionValues.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, value.id, false, {
                        fileName: "[project]/src/components/sectionValues.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sectionValues.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sectionValues.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
_s(SectionMissionVision, "czjHPJ+WAOa0SN9idoqsoyyfytY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"]
    ];
});
_c = SectionMissionVision;
const __TURBOPACK__default__export__ = SectionMissionVision;
var _c;
__turbopack_context__.k.register(_c, "SectionMissionVision");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/vercel.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/vercel.41e0fd2d.svg");}}),
"[project]/public/vercel.svg.mjs { IMAGE => \"[project]/public/vercel.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$vercel$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/vercel.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$vercel$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 1155,
    height: 1000,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/scrollToUp/btn-scroll-to-up.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$vercel$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$vercel$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/vercel.svg.mjs { IMAGE => "[project]/public/vercel.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
"use client";
;
;
;
const ScrollToUp = ()=>{
    const scrollToSection = (id)=>{
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "z-50 fixed bottom-[0%] right-[0%] w-[3%] max-sm:hidden",
        style: {
            left: "calc(100% - 5%)",
            top: "calc(100% - 10%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            onClick: ()=>scrollToSection("screen-top"),
            className: "cursor-pointer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$vercel$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$vercel$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "vercel.svg"
            }, void 0, false, {
                fileName: "[project]/src/components/scrollToUp/btn-scroll-to-up.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/scrollToUp/btn-scroll-to-up.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/scrollToUp/btn-scroll-to-up.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_c = ScrollToUp;
const __TURBOPACK__default__export__ = ScrollToUp;
var _c;
__turbopack_context__.k.register(_c, "ScrollToUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__ca7630b4._.js.map