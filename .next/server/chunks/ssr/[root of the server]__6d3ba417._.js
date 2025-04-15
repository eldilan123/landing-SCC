module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/public/Logo.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Logo.a1aa2a2c.png");}}),
"[project]/public/Logo.png.mjs { IMAGE => \"[project]/public/Logo.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/components/header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Logo.png.mjs { IMAGE => "[project]/public/Logo.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHomeSectionPassed, setIsHomeSectionPassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
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
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "screen-top",
        className: `
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${isHomeSectionPassed ? 'bg-gradient-to-r from-[#EB3751] to-[#F0813C] shadow-md' : isScrolled ? 'bg-gradient-to-r from-[#EB3751] to-[#F0813C] bg-opacity-90' : 'bg-transparent'}
        text-white
        px-8 py-4
        flex items-center
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer",
                    onClick: ()=>scrollToSection("home"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:hidden block cursor-pointer",
                    onClick: toggleMenu,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTimes"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBars"],
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `
            sm:flex
            space-x-0 sm:space-x-6
            sm:flex-row flex-col
            items-center
            ${isMenuOpen ? "flex fixed top-[72px] left-0 w-full bg-gradient-to-r from-[#EB3751] to-[#F0813C] py-4 shadow-lg" : "hidden sm:flex"}
            transition-all duration-300 ease-in-out
          `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("about"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "¿Quiénes somos?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("services"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "Servicios"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("mission"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "Misión y Visión"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>scrollToSection("features"),
                            className: "cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center",
                            children: "Valores Destacados"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/src/components/sectionAbout.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

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
"[project]/public/quienes-somos-ssc.png.mjs { IMAGE => \"[project]/public/quienes-somos-ssc.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/components/sectionAbout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/sectionAbout.module.scss.module.css [app-ssr] (css module)");
// Import your laptop image
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/quienes-somos-ssc.png.mjs { IMAGE => "[project]/public/quienes-somos-ssc.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftRedShape,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "280",
                        height: "498",
                        viewBox: "0 0 280 498",
                        fill: "none",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].laptopImageWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].laptopImageSvg,
                                width: "453",
                                height: "486",
                                viewBox: "0 0 453 486",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0 143.326C0 64.4033 63.9795 0.423828 142.902 0.423828H453V342.675C453 421.597 389.021 485.577 310.098 485.577H0V143.326Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sectionAbout.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                                        x: "0",
                                        y: "0",
                                        width: "453",
                                        height: "486",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].laptopImageContainer,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quienes$2d$somos$2d$ssc$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].yellowBorderSvg,
                                width: "453",
                                height: "486",
                                viewBox: "0 0 453 486",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                            children: "¿Quiénes somos?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionAbout.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Secure Core Consulting"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionAbout.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                " ofrece soluciones de seguridad y control de acceso de vanguardia para empresas modernas. Nuestro producto estrella,",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: scrollToServices,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                            "aria-label": "Saber más sobre Secure Core Consulting y sus servicios",
                            children: [
                                "Saber más",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionAbout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrowIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const __TURBOPACK__default__export__ = SectionAboutUs;
}}),
"[next]/internal/font/google/space_grotesk_e7a23fb3.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "space_grotesk_e7a23fb3-module__8cd-PG__className",
  "variable": "space_grotesk_e7a23fb3-module__8cd-PG__variable",
});
}}),
"[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontWeight: 700,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/funnel_sans_f1f8df23.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "funnel_sans_f1f8df23-module__hoSRNa__className",
  "variable": "funnel_sans_f1f8df23-module__hoSRNa__variable",
});
}}),
"[next]/internal/font/google/funnel_sans_f1f8df23.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Funnel Sans', 'Funnel Sans Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/inter_c9dc8c28.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "inter_c9dc8c28-module__rylw1G__className",
  "variable": "inter_c9dc8c28-module__rylw1G__variable",
});
}}),
"[next]/internal/font/google/inter_c9dc8c28.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_c9dc8c28.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontWeight: 700,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/libs/fonts/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
}}),
"[project]/src/libs/fonts/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_c9dc8c28$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_c9dc8c28.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$fonts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/libs/fonts/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-ssr] (ecmascript) <export default as space_grotesk>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "space_grotesk": (()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-ssr] (ecmascript)");
}}),
"[next]/internal/font/google/funnel_sans_f1f8df23.js [app-ssr] (ecmascript) <export default as funnel_sans>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "funnel_sans": (()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-ssr] (ecmascript)");
}}),
"[project]/src/components/carousel/carousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$fonts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/libs/fonts/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e7a23fb3.js [app-ssr] (ecmascript) <export default as space_grotesk>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__ = __turbopack_context__.i("[next]/internal/font/google/funnel_sans_f1f8df23.js [app-ssr] (ecmascript) <export default as funnel_sans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const EmblaCarousel = (props)=>{
    const { slides } = props;
    // const [emblaRef, emblaApi] = useEmblaCarousel(options);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "embla",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "embla__viewport",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "embla__container flex flex-nowrap",
                children: slides.map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `embla__slide w-[21vw] max-md:w-[40vw] max-sm:w-[80vw] h-[52vh] p-[22px] rounded-[20px] mr-[2vw]`,
                        style: {
                            border: `2px solid ${index.bgColor}`,
                            color: "rgba(69, 26, 26, 1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "embla__slide__number",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container relative text-start flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "container mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[50px] w-[106px] h-[106px] relative p-[18px]",
                                            style: {
                                                background: `${index.bgColor}`,
                                                border: "6px solid rgba(255, 255, 255, 1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: index.icon,
                                                className: "absolute w-[4vw] top-[3vh] left-[1.5vw]",
                                                alt: index.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                                lineNumber: 48,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carousel/carousel.tsx",
                                            lineNumber: 41,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/carousel/carousel.tsx",
                                        lineNumber: 40,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "container relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e7a23fb3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__space_grotesk$3e$__["space_grotesk"]} text-[22px] font-[700] leading-[24px] align-middle mb-4`,
                                                children: index.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                                lineNumber: 56,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$funnel_sans_f1f8df23$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__funnel_sans$3e$__["funnel_sans"]} text-[14px] font-[300] leading-[22px] align-middle `,
                                                children: index.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/carousel/carousel.tsx",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/carousel/carousel.tsx",
                                lineNumber: 39,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/carousel/carousel.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    }, index.id, false, {
                        fileName: "[project]/src/components/carousel/carousel.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/carousel/carousel.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/carousel/carousel.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/carousel/carousel.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = EmblaCarousel;
}}),
"[project]/public/vercel.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/vercel.41e0fd2d.svg");}}),
"[project]/public/vercel.svg.mjs { IMAGE => \"[project]/public/vercel.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/components/scrollToUp/btn-scroll-to-up.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$vercel$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$vercel$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/vercel.svg.mjs { IMAGE => "[project]/public/vercel.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "z-50 fixed bottom-[0%] right-[0%] w-[3%] max-sm:hidden",
        style: {
            left: "calc(100% - 5%)",
            top: "calc(100% - 10%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            onClick: ()=>scrollToSection("screen-top"),
            className: "cursor-pointer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$vercel$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$vercel$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
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
const __TURBOPACK__default__export__ = ScrollToUp;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__6d3ba417._.js.map