(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@victorlee/bomberman-wasm/bomberman_wasm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@victorlee/bomberman-wasm/bomberman_wasm.js ***!
  \******************************************************************/
/*! exports provided: run, InputType, Direction, __widl_f_begin_path_CanvasRenderingContext2D, __widl_f_fill_CanvasRenderingContext2D, __widl_f_stroke_CanvasRenderingContext2D, __widl_f_set_stroke_style_CanvasRenderingContext2D, __widl_f_set_fill_style_CanvasRenderingContext2D, __widl_f_set_line_width_CanvasRenderingContext2D, __widl_f_arc_CanvasRenderingContext2D, __widl_f_close_path_CanvasRenderingContext2D, __widl_f_line_to_CanvasRenderingContext2D, __widl_f_move_to_CanvasRenderingContext2D, __widl_f_fill_rect_CanvasRenderingContext2D, __wbg_new_3a746f2619705add, __wbg_call_f54d3a6dadb199ca, __wbg_self_ac379e780a0d8b94, __wbg_crypto_1e4302b85d4f64a2, __wbg_getRandomValues_1b4ba144162a5c9e, __wbg_getRandomValues_1ef11e888e5228e9, __wbg_require_6461b1e9a0d7c34a, __wbg_randomFillSync_1b52c8482374c55b, __wbindgen_string_new, __wbindgen_is_undefined, __wbindgen_debug_string, __wbindgen_jsval_eq, __wbindgen_throw, GameEngine, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputType\", function() { return InputType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Direction\", function() { return Direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_begin_path_CanvasRenderingContext2D\", function() { return __widl_f_begin_path_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_fill_CanvasRenderingContext2D\", function() { return __widl_f_fill_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_stroke_CanvasRenderingContext2D\", function() { return __widl_f_stroke_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_stroke_style_CanvasRenderingContext2D\", function() { return __widl_f_set_stroke_style_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_fill_style_CanvasRenderingContext2D\", function() { return __widl_f_set_fill_style_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_line_width_CanvasRenderingContext2D\", function() { return __widl_f_set_line_width_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_arc_CanvasRenderingContext2D\", function() { return __widl_f_arc_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_close_path_CanvasRenderingContext2D\", function() { return __widl_f_close_path_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_line_to_CanvasRenderingContext2D\", function() { return __widl_f_line_to_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_move_to_CanvasRenderingContext2D\", function() { return __widl_f_move_to_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_fill_rect_CanvasRenderingContext2D\", function() { return __widl_f_fill_rect_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_3a746f2619705add\", function() { return __wbg_new_3a746f2619705add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_f54d3a6dadb199ca\", function() { return __wbg_call_f54d3a6dadb199ca; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_ac379e780a0d8b94\", function() { return __wbg_self_ac379e780a0d8b94; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_1e4302b85d4f64a2\", function() { return __wbg_crypto_1e4302b85d4f64a2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_1b4ba144162a5c9e\", function() { return __wbg_getRandomValues_1b4ba144162a5c9e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_1ef11e888e5228e9\", function() { return __wbg_getRandomValues_1ef11e888e5228e9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_6461b1e9a0d7c34a\", function() { return __wbg_require_6461b1e9a0d7c34a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_1b52c8482374c55b\", function() { return __wbg_randomFillSync_1b52c8482374c55b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_jsval_eq\", function() { return __wbindgen_jsval_eq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameEngine\", function() { return GameEngine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bomberman_wasm_bg */ \"./node_modules/@victorlee/bomberman-wasm/bomberman_wasm_bg.wasm\");\n\n\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\n/**\n*/\nconst InputType = Object.freeze({ Left:0,Right:1,Up:2,Down:3,Bomb:4, });\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet stack_pointer = 32;\n\nfunction addBorrowedObject(obj) {\n    if (stack_pointer == 1) throw new Error('out of js stack');\n    heap[--stack_pointer] = obj;\n    return stack_pointer;\n}\n/**\n*/\nconst Direction = Object.freeze({ Up:0,Right:1,Down:2,Left:3, });\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_f_begin_path_CanvasRenderingContext2D(arg0) {\n    getObject(arg0).beginPath();\n}\n\nfunction __widl_f_fill_CanvasRenderingContext2D(arg0) {\n    getObject(arg0).fill();\n}\n\nfunction __widl_f_stroke_CanvasRenderingContext2D(arg0) {\n    getObject(arg0).stroke();\n}\n\nfunction __widl_f_set_stroke_style_CanvasRenderingContext2D(arg0, arg1) {\n    getObject(arg0).strokeStyle = getObject(arg1);\n}\n\nfunction __widl_f_set_fill_style_CanvasRenderingContext2D(arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n}\n\nfunction __widl_f_set_line_width_CanvasRenderingContext2D(arg0, arg1) {\n    getObject(arg0).lineWidth = arg1;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction handleError(exnptr, e) {\n    const view = getUint32Memory();\n    view[exnptr / 4] = 1;\n    view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __widl_f_arc_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, arg4, arg5, exnptr) {\n    try {\n        getObject(arg0).arc(arg1, arg2, arg3, arg4, arg5);\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __widl_f_close_path_CanvasRenderingContext2D(arg0) {\n    getObject(arg0).closePath();\n}\n\nfunction __widl_f_line_to_CanvasRenderingContext2D(arg0, arg1, arg2) {\n    getObject(arg0).lineTo(arg1, arg2);\n}\n\nfunction __widl_f_move_to_CanvasRenderingContext2D(arg0, arg1, arg2) {\n    getObject(arg0).moveTo(arg1, arg2);\n}\n\nfunction __widl_f_fill_rect_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_new_3a746f2619705add(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction __wbg_call_f54d3a6dadb199ca(arg0, arg1) {\n    return addHeapObject(getObject(arg0).call(getObject(arg1)));\n}\n\nfunction __wbg_self_ac379e780a0d8b94(arg0) {\n    return addHeapObject(getObject(arg0).self);\n}\n\nfunction __wbg_crypto_1e4302b85d4f64a2(arg0) {\n    return addHeapObject(getObject(arg0).crypto);\n}\n\nfunction __wbg_getRandomValues_1b4ba144162a5c9e(arg0) {\n    return addHeapObject(getObject(arg0).getRandomValues);\n}\n\nfunction getArrayU8FromWasm(ptr, len) {\n    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction __wbg_getRandomValues_1ef11e888e5228e9(arg0, arg1, arg2) {\n    let varg1 = getArrayU8FromWasm(arg1, arg2);\n    getObject(arg0).getRandomValues(varg1);\n}\n\nfunction __wbg_require_6461b1e9a0d7c34a(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(__webpack_require__(\"./node_modules/@victorlee/bomberman-wasm sync recursive\")(varg0));\n}\n\nfunction __wbg_randomFillSync_1b52c8482374c55b(arg0, arg1, arg2) {\n    let varg1 = getArrayU8FromWasm(arg1, arg2);\n    getObject(arg0).randomFillSync(varg1);\n}\n\nfunction __wbindgen_string_new(p, l) { return addHeapObject(getStringFromWasm(p, l)); }\n\nfunction __wbindgen_is_undefined(i) { return getObject(i) === undefined ? 1 : 0; }\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n\n        let size = arg.length;\n        let ptr = _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            arg = arg.slice(offset);\n            ptr = _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + arg.length * 3);\n            const view = getUint8Memory().subarray(ptr + offset, ptr + size);\n            const ret = cachedTextEncoder.encodeInto(arg, view);\n\n            offset += ret.written;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n\n        let size = arg.length;\n        let ptr = _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            const buf = cachedTextEncoder.encode(arg.slice(offset));\n            ptr = _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + buf.length);\n            getUint8Memory().set(buf, ptr + offset);\n            offset += buf.length;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n}\n\nfunction __wbindgen_debug_string(i, len_ptr) {\n    const debug_str =\n    val => {\n        // primitive types\n        const type = typeof val;\n        if (type == 'number' || type == 'boolean' || val == null) {\n            return  `${val}`;\n        }\n        if (type == 'string') {\n            return `\"${val}\"`;\n        }\n        if (type == 'symbol') {\n            const description = val.description;\n            if (description == null) {\n                return 'Symbol';\n            } else {\n                return `Symbol(${description})`;\n            }\n        }\n        if (type == 'function') {\n            const name = val.name;\n            if (typeof name == 'string' && name.length > 0) {\n                return `Function(${name})`;\n            } else {\n                return 'Function';\n            }\n        }\n        // objects\n        if (Array.isArray(val)) {\n            const length = val.length;\n            let debug = '[';\n            if (length > 0) {\n                debug += debug_str(val[0]);\n            }\n            for(let i = 1; i < length; i++) {\n                debug += ', ' + debug_str(val[i]);\n            }\n            debug += ']';\n            return debug;\n        }\n        // Test for built-in\n        const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n        let className;\n        if (builtInMatches.length > 1) {\n            className = builtInMatches[1];\n        } else {\n            // Failed to match the standard '[object ClassName]'\n            return toString.call(val);\n        }\n        if (className == 'Object') {\n            // we're a user defined class or Object\n            // JSON.stringify avoids problems with cycles, and is generally much\n            // easier than looping through ownProperties of `val`.\n            try {\n                return 'Object(' + JSON.stringify(val) + ')';\n            } catch (_) {\n                return 'Object';\n            }\n        }\n        // errors\n        if (val instanceof Error) {\n        return `${val.name}: ${val.message}\n        ${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n;\nconst toString = Object.prototype.toString;\nconst val = getObject(i);\nconst debug = debug_str(val);\nconst ptr = passStringToWasm(debug);\ngetUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\nreturn ptr;\n}\n\nfunction __wbindgen_jsval_eq(a, b) { return getObject(a) === getObject(b) ? 1 : 0; }\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nfunction freeGameEngine(ptr) {\n\n    _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_gameengine_free\"](ptr);\n}\n/**\n*/\nclass GameEngine {\n\n    static __wrap(ptr) {\n        const obj = Object.create(GameEngine.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeGameEngine(ptr);\n    }\n\n    /**\n    * @returns {GameEngine}\n    */\n    static new() {\n        return GameEngine.__wrap(_bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"gameengine_new\"]());\n    }\n    /**\n    * @returns {number}\n    */\n    tick() {\n        return _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"gameengine_tick\"](this.ptr);\n    }\n    /**\n    * @param {any} ctx\n    * @returns {void}\n    */\n    draw(ctx) {\n        try {\n            return _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"gameengine_draw\"](this.ptr, addBorrowedObject(ctx));\n\n        } finally {\n            heap[stack_pointer++] = undefined;\n\n        }\n\n    }\n    /**\n    * @param {number} player_id\n    * @returns {void}\n    */\n    set_human_player(player_id) {\n        return _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"gameengine_set_human_player\"](this.ptr, player_id);\n    }\n    /**\n    * @param {number} player_id\n    * @param {number} input_type\n    * @param {boolean} on\n    * @returns {void}\n    */\n    send_input(player_id, input_type, on) {\n        return _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"gameengine_send_input\"](this.ptr, player_id, input_type, on);\n    }\n    /**\n    * @returns {void}\n    */\n    reset() {\n        return _bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"gameengine_reset\"](this.ptr);\n    }\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n_bomberman_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n\n//# sourceURL=webpack:///./node_modules/@victorlee/bomberman-wasm/bomberman_wasm.js?");

/***/ }),

/***/ "./node_modules/@victorlee/bomberman-wasm/bomberman_wasm_bg.wasm":
/*!***********************************************************************!*\
  !*** ./node_modules/@victorlee/bomberman-wasm/bomberman_wasm_bg.wasm ***!
  \***********************************************************************/
/*! exports provided: memory, __wbg_gameengine_free, gameengine_new, gameengine_tick, gameengine_draw, gameengine_set_human_player, gameengine_send_input, gameengine_reset, run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./bomberman_wasm */ \"./node_modules/@victorlee/bomberman-wasm/bomberman_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./node_modules/@victorlee/bomberman-wasm/bomberman_wasm_bg.wasm?");

/***/ })

}]);