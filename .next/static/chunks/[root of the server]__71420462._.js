(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__71420462._.js", {

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
  "blobWrapper": "sectionAbout-module-scss-module__f0epJG__blobWrapper",
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
(()=>{
    const e = new Error("Cannot find module '../../public/glow-blob.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
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
                            lineNumber: 31,
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
                                        lineNumber: 50,
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
                                                    objectFit: "cover"
                                                },
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sectionAbout.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionAbout.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionAbout.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sectionAbout.tsx",
                                lineNumber: 42,
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
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionAbout.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blobWrapper,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: glowBlob,
                        alt: "",
                        fill: true,
                        className: "select-none pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionAbout.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionAbout.tsx",
                    lineNumber: 85,
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
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Secure Core Consulting"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                " ofrece soluciones de seguridad y control de acceso de vanguardia para empresas modernas. Nuestro producto estrella, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "NexusCore Controller"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 99,
                                    columnNumber: 32
                                }, this),
                                ", garantiza una gestión de seguridad fluida en toda su organización."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionAbout.tsx",
                            lineNumber: 96,
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
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionAbout.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionAbout.tsx",
                    lineNumber: 94,
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
            "NexusCore Academico",
            "Control de Acceso",
            "Integración de Seguridad"
        ]
    },
    {
        id: 3,
        title: "Contacto",
        items: [
            "info.securecore@securecoreconsulting.com",
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
"[project]/src/components/carousel/EmblaCarousel.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "EmblaCarousel-module__ywxa1a__container",
  "description": "EmblaCarousel-module__ywxa1a__description",
  "embla": "EmblaCarousel-module__ywxa1a__embla",
  "iconContainer": "EmblaCarousel-module__ywxa1a__iconContainer",
  "slide": "EmblaCarousel-module__ywxa1a__slide",
  "slideContent": "EmblaCarousel-module__ywxa1a__slideContent",
  "viewport": "EmblaCarousel-module__ywxa1a__viewport",
});
}}),
"[project]/src/components/carousel/carousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript) <export default as funnel_sans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/carousel/EmblaCarousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const EmblaCarousel = (props)=>{
    _s();
    const { slides } = props;
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
        loop: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmblaCarousel.useEffect": ()=>{
            if (emblaApi) {
                emblaApi.reInit();
            }
        }
    }["EmblaCarousel.useEffect"], [
        emblaApi
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].embla} w-full`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewport} embla__viewport`,
            ref: emblaRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} embla__container flex flex-nowrap`,
                children: slides.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide} embla__slide w-[21vw] max-md:w-[40vw] max-sm:w-[80vw] p-[22px] rounded-[20px] mr-[2vw] flex flex-col`,
                        style: {
                            border: `2px solid ${slide.bgColor}`,
                            color: "rgba(69, 26, 26, 1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideContent} embla__slide__content flex flex-col h-full`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconContainer} rounded-full aspect-square w-[80px] md:w-[90px] lg:w-[106px] flex items-center justify-center`,
                                            style: {
                                                background: `${slide.bgColor}`,
                                                border: "6px solid rgba(255, 255, 255, 1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-3/5 h-3/5 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: slide.icon,
                                                    alt: `${slide.title} icon`,
                                                    fill: true,
                                                    className: "object-contain p-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/carousel/carousel.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                                lineNumber: 62,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carousel/carousel.tsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/carousel/carousel.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col flex-grow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} text-[22px] font-[700] leading-[24px] mb-4`,
                                                children: slide.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$EmblaCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[14px] font-[300] leading-[22px] flex-grow`,
                                                children: slide.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/carousel/carousel.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/carousel/carousel.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this)
                    }, slide.id, false, {
                        fileName: "[project]/src/components/carousel/carousel.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/carousel/carousel.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/carousel/carousel.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/carousel.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_s(EmblaCarousel, "iEOhEYXOe+NO/lSPD421b+vbvvE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = EmblaCarousel;
const __TURBOPACK__default__export__ = EmblaCarousel;
var _c;
__turbopack_context__.k.register(_c, "EmblaCarousel");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$fonts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/fonts/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-client] (ecmascript) <export default as space_grotesk>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript) <export default as funnel_sans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Capa_1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Capa_1$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Capa_1.svg.mjs { IMAGE => "[project]/public/Capa_1.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)"); // Import mockValues only once
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carousel/carousel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SectionValues = ()=>{
    _s();
    // Make sure we're not accidentally duplicating the data
    const carouselData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "SectionValues.useMemo[carouselData]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockValues"]
    }["SectionValues.useMemo[carouselData]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "bg-cover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-start mb-[3rem] mt-[2rem] relative flex pl-[6vw] pr-[6vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[22%] max-md:pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Capa_1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Capa_1$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "Secure Core logo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionValues.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionValues.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[100%]",
                        style: {
                            color: "rgba(69, 26, 26, 1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} font-[700] text-[50px] leading-[61px] mb-8 max-md:ml-4`,
                                style: {
                                    background: "linear-gradient(89.23deg, #F3BC2B 26.26%, #EB3751 68.68%)",
                                    color: "transparent",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text"
                                },
                                children: "Valores destacados"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionValues.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} font-[500] text-[16px] align-middle leading-[27px] mb-12`,
                                children: [
                                    "En ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "font-[700]",
                                        children: "Secure Core Consulting,"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionValues.tsx",
                                        lineNumber: 35,
                                        columnNumber: 16
                                    }, this),
                                    " estamos a la vanguardia de la protección digital. Ofrecemos soluciones innovadoras y personalizadas para garantizar la seguridad de tus datos y sistemas, enfrentando los desafíos tecnológicos del presente y futuro. Protege lo más valioso: tu información, tu negocio, tu tranquilidad."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sectionValues.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sectionValues.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sectionValues.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full pl-[5vw] pr-[5vw] mb-[7rem]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carousel$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    slides: carouselData
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionValues.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sectionValues.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sectionValues.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(SectionValues, "a30tMlJbJq4IDbVAhvz6TN1eSMw=");
_c = SectionValues;
const __TURBOPACK__default__export__ = SectionValues;
var _c;
__turbopack_context__.k.register(_c, "SectionValues");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/vectores/vectorLeft.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const VectorLeft = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            width: "50%",
            height: "46%",
            top: "15%",
            left: "-5%",
            background: "rgba(255, 212, 100, 0.2)",
            borderRadius: "206% 43% 271% 101%",
            rotate: "28.88deg",
            filter: "blur(160px)",
            zIndex: "1"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/vectores/vectorLeft.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = VectorLeft;
const __TURBOPACK__default__export__ = VectorLeft;
var _c;
__turbopack_context__.k.register(_c, "VectorLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/vectores/vectorRight.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const VectorRight = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            width: "55%",
            height: "45%",
            top: "24%",
            left: "59%",
            background: "rgba(252, 69, 84, 0.3)",
            borderRadius: "167% 99% 266% 175%",
            rotate: "28.88deg",
            filter: "blur(130px)"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/vectores/vectorRight.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = VectorRight;
const __TURBOPACK__default__export__ = VectorRight;
var _c;
__turbopack_context__.k.register(_c, "VectorRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PrivacyModal.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actionButton": "PrivacyModal-module__8vxVza__actionButton",
  "closeButton": "PrivacyModal-module__8vxVza__closeButton",
  "fadeIn": "PrivacyModal-module__8vxVza__fadeIn",
  "list": "PrivacyModal-module__8vxVza__list",
  "listItem": "PrivacyModal-module__8vxVza__listItem",
  "modal": "PrivacyModal-module__8vxVza__modal",
  "modalBody": "PrivacyModal-module__8vxVza__modalBody",
  "modalContent": "PrivacyModal-module__8vxVza__modalContent",
  "modalFooter": "PrivacyModal-module__8vxVza__modalFooter",
  "modalHeader": "PrivacyModal-module__8vxVza__modalHeader",
  "sectionContent": "PrivacyModal-module__8vxVza__sectionContent",
  "sectionTitle": "PrivacyModal-module__8vxVza__sectionTitle",
  "slideIn": "PrivacyModal-module__8vxVza__slideIn",
});
}}),
"[project]/src/components/sectionContact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-client] (ecmascript) <export default as funnel_sans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Logo.png.mjs { IMAGE => "[project]/public/Logo.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vectores$2f$vectorLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/vectores/vectorLeft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vectores$2f$vectorRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/vectores/vectorRight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PrivacyModal.module.css [app-client] (css module)");
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
;
;
;
const SectionContact = ()=>{
    _s();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Replace "Carreras" with "Políticas de privacidad" in the first section (Empresa)
    const updatedContact = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContact"].map((item)=>{
        if (item.id === 1) {
            return {
                ...item,
                items: item.items.map((subItem)=>subItem === "Carreras" ? "Políticas de privacidad" : subItem)
            };
        }
        return item;
    });
    const handlePolicyClick = (e)=>{
        if (e.currentTarget.textContent === "Políticas de privacidad") {
            e.preventDefault();
            setShowModal(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "overflow-x-hidden relative",
        style: {
            background: "rgba(22, 20, 12, 1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vectores$2f$vectorLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/sectionContact.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white",
                style: {
                    padding: "9vh 7vw"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} font-[700] text-[40px] leading-[61px] align-middle text-3xl mb-4`,
                        children: "¿Listo para transformar su seguridad?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionContact.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} font-[700] text-[16px] leading-[25px] align-middle mb-6`,
                        children: "Contáctenos hoy saber cómo podemos ayudar a proteger su organización."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionContact.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col max-md:flex-row max-sm:flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "Ingrese su email corporativo",
                                className: "p-3 rounded-[20px] bg-white w-[40vw] max-md:w-[60vw] max-sm:w-[80vw]",
                                style: {
                                    color: "rgba(182, 175, 198, 1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionContact.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white px-4 py-3 rounded-[20px] w-[15vw] max-md:w-[20vw] max-sm:w-[80vw] ml-8 max-md:ml-4 max-sm:ml-0 mt-4 max-sm:mt-2 cursor-pointer",
                                style: {
                                    background: "rgba(235, 55, 81, 1)",
                                    boxShadow: "0px 4px 15px 0px rgba(235, 55, 81, 0.3)",
                                    marginLeft: 0
                                },
                                children: "¡Comenzar!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionContact.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sectionContact.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-start mt-[5rem] relative flex flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[22%] max-md:w-[100%] max-md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "Logo Secure Core",
                                        className: "w-[15vw] max-md:w-[30vw] max-sm:w-[50vw]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionContact.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4",
                                        children: "Síguenos en"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionContact.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: "w-[1.4vw] max-md:w-[3vw] max-sm:w-[5vw] mt-2",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faLink"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionContact.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sectionContact.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            updatedContact.map((section)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[25%] max-md:w-[50%] max-sm:w-[100%] max-sm:mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} font-[700] text-[16px] align-middle leading-[25px]`,
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sectionContact.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                        className: "w-[3vw] mb-[2rem]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sectionContact.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, `section-${section.id}`, true, {
                                                fileName: "[project]/src/components/sectionContact.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            section.items.map((item)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-[1rem]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        onClick: handlePolicyClick,
                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} font-[700] text-[16px] align-middle leading-[25px] ${item === "Políticas de privacidad" ? "cursor-pointer hover:underline" : ""}`,
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sectionContact.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 25
                                                    }, this)
                                                }, item, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sectionContact.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, section.id, false, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sectionContact.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sectionContact.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vectores$2f$vectorRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/sectionContact.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} font-[700] text-[24px]`,
                                    children: "POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                    "aria-label": "Cerrar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faTimes"],
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionContact.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionContact.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBody,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "1. Introducción"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6]`,
                                            children: [
                                                "En ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Secure Core Consulting S.A.S."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 22
                                                }, this),
                                                ", nos comprometemos a proteger la privacidad y seguridad de los datos personales de nuestros usuarios, clientes y visitantes. Esta ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Política de Privacidad"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 199
                                                }, this),
                                                " describe cómo recopilamos, utilizamos y protegemos su información, cumpliendo con la ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ley 1581 de 2012 de Colombia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 324
                                                }, this),
                                                ", el ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Decreto 1377 de 2013"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 374
                                                }, this),
                                                " y normativas internacionales como el ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Reglamento General de Protección de Datos (GDPR) de la Unión Europea"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 449
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "2. Datos Recopilados"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] mb-2`,
                                            children: "Recopilamos y procesamos los siguientes tipos de información:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Datos personales"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sectionContact.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 103
                                                        }, this),
                                                        ": Nombre, correo electrónico, teléfono, dirección, identificación."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Datos de acceso y uso"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sectionContact.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 103
                                                        }, this),
                                                        ": Direcciones IP, tipo de dispositivo, sistema operativo, tiempo de acceso y actividades en nuestra plataforma ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "NexusCore Académico"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sectionContact.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 252
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Datos financieros"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sectionContact.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 103
                                                        }, this),
                                                        ": Solo cuando sea necesario para la facturación de servicios."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "3. Finalidad del Tratamiento de Datos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] mb-2`,
                                            children: "Los datos recopilados serán utilizados para:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: [
                                                        "Gestionar el acceso y uso de ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "NexusCore Académico"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sectionContact.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 132
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: "Brindar soporte técnico y asistencia a los usuarios."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: "Administrar certificaciones y actas de grado de acuerdo con normativas estatales."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: "Cumplir con requerimientos legales y normativos."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: "Mejorar nuestros servicios y experiencia de usuario."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "4. Almacenamiento y Seguridad de los Datos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6]`,
                                            children: "Los datos personales se almacenan en servidores seguros con medidas de protección contra accesos no autorizados, pérdida o alteración. Utilizamos cifrado, firewalls y accesos restringidos para garantizar la seguridad de su información."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "5. Derechos de los Titulares de Datos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] mb-2`,
                                            children: [
                                                "De acuerdo con la ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ley 1581 de 2012"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 37
                                                }, this),
                                                ", usted tiene derecho a:"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: "Acceder, actualizar y rectificar sus datos personales."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: "Solicitar la eliminación de sus datos cuando ya no sean necesarios."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: "Revocar su consentimiento para el tratamiento de datos."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem}`,
                                                    children: [
                                                        "Presentar quejas ante la ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Superintendencia de Industria y Comercio (SIC)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sectionContact.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 128
                                                        }, this),
                                                        " en caso de incumplimiento."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "6. Uso de Cookies"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6]`,
                                            children: "Utilizamos cookies para mejorar la experiencia de usuario y analizar el uso de nuestra plataforma. Puede configurar su navegador para rechazar o eliminar cookies, pero esto podría afectar algunas funcionalidades."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "7. Transferencia Internacional de Datos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6]`,
                                            children: [
                                                "En caso de transferencias internacionales de datos, garantizamos el cumplimiento de normativas aplicables, incluyendo medidas de protección adecuadas según el ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "GDPR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 178
                                                }, this),
                                                " y regulaciones colombianas."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "8. Modificaciones a la Política de Privacidad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6]`,
                                            children: "Podemos actualizar esta política en cualquier momento. Notificaremos cambios importantes a través de nuestra página web o por correo electrónico."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle}`,
                                            children: "9. Contacto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[16px] leading-[1.6]`,
                                            children: [
                                                "Si tiene dudas o inquietudes sobre esta política, puede escribirnos a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "info.securecore@securecoreconsulting.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sectionContact.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 89
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sectionContact.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionContact.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionContact.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalFooter,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowModal(false),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                children: "Cerrar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sectionContact.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionContact.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionContact.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sectionContact.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sectionContact.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_s(SectionContact, "uVlnG5KLfXemZk5i5Fl+Cg356FU=");
_c = SectionContact;
const __TURBOPACK__default__export__ = SectionContact;
var _c;
__turbopack_context__.k.register(_c, "SectionContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__71420462._.js.map