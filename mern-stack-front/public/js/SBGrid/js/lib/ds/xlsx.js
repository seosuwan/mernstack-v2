/**
 * Copyright %%build:year%% Tim Down.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
var bUse = true;
if(navigator.appName == 'Microsoft Internet Explorer'){
	var nIE_ver = -1;
	var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	if(re.exec(navigator.userAgent) != null){nIE_ver = /*parseFloat*/parseInt(RegExp.$1);}
	if(nIE_ver > -1 && nIE_ver <9){
		bUse = false;
	}
}
(function(e) {
	if(!bUse){
		return;
	}
	if ("object" == typeof exports && "undefined" != typeof module && "undefined" == typeof DO_NOT_EXPORT_JSZIP) module.exports = e();
	else if ("function" == typeof define && define.amd && "undefined" == typeof DO_NOT_EXPORT_JSZIP) {
		JSZipSync = e();
		define([], e);
		} else {
			var r;
			"undefined" != typeof window ? r = window : "undefined" != typeof global ? r = global : "undefined" != typeof $ && $.global ? r = $.global : "undefined" != typeof self && (r = self), r.JSZipSync = e();
			}
})(function() {
    var e, r, t;
    return function a(e, r, t) {
        function n(s, f) {
            if (!r[s]) {
                if (!e[s]) {
                    var l = typeof require == "function" && require;
                    if (!f && l) return l(s, !0);
                    if (i) return i(s, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                var o = r[s] = {
                    exports: {}
                };
                e[s][0].call(o.exports, function(r) {
                    var t = e[s][1][r];
                    return n(t ? t : r)
                }, o, o.exports, a, e, r, t)
            }
            return r[s].exports
        }
        var i = typeof require == "function" && require;
        for (var s = 0; s < t.length; s++) n(t[s]);
        return n
    }({
        1: [function(e, r, t) {
            "use strict";
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            t.encode = function(e, r) {
                var t = "";
                var n, i, s, f, l, o, c;
                var u = 0;
                while (u < e.length) {
                    n = e.charCodeAt(u++);
                    i = e.charCodeAt(u++);
                    s = e.charCodeAt(u++);
                    f = n >> 2;
                    l = (n & 3) << 4 | i >> 4;
                    o = (i & 15) << 2 | s >> 6;
                    c = s & 63;
                    if (isNaN(i)) {
                        o = c = 64
                    } else if (isNaN(s)) {
                        c = 64
                    }
                    t = t + a.charAt(f) + a.charAt(l) + a.charAt(o) + a.charAt(c)
                }
                return t
            };
            t.decode = function(e, r) {
                var t = "";
                var n, i, s;
                var f, l, o, c;
                var u = 0;
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (u < e.length) {
                    f = a.indexOf(e.charAt(u++));
                    l = a.indexOf(e.charAt(u++));
                    o = a.indexOf(e.charAt(u++));
                    c = a.indexOf(e.charAt(u++));
                    n = f << 2 | l >> 4;
                    i = (l & 15) << 4 | o >> 2;
                    s = (o & 3) << 6 | c;
                    t = t + String.fromCharCode(n);
                    if (o != 64) {
                        t = t + String.fromCharCode(i)
                    }
                    if (c != 64) {
                        t = t + String.fromCharCode(s)
                    }
                }
                return t
            }
        }, {}],
        2: [function(e, r, t) {
            "use strict";
            function a() {
                this.compressedSize = 0;
                this.uncompressedSize = 0;
                this.crc32 = 0;
                this.compressionMethod = null;
                this.compressedContent = null
            }
            a.prototype = {
                getContent: function() {
                    return null
                },
                getCompressedContent: function() {
                    return null
                }
            };
            r.exports = a;
        }, {}],
        3: [function(e, r, t) {
            "use strict";
            t.STORE = {
                magic: "\0\0",
                compress: function(e) {
                    return e
                },
                uncompress: function(e) {
                    return e;
                },
                compressInputType: null,
                uncompressInputType: null
            };
            t.DEFLATE = e("./flate");
        }, {
            "./flate": 8
        }],
        4: [function(e, r, t) {
            "use strict";
            var a = e("./utils");
            var n = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            r.exports = function i(e, r) {
                if (typeof e === "undefined" || !e.length) {
                    return 0
                }
                var t = a.getTypeOf(e) !== "string";
                if (typeof r == "undefined") {
                    r = 0
                }
                var i = 0;
                var s = 0;
                var f = 0;
                r = r ^ -1;
                for (var l = 0, o = e.length; l < o; l++) {
                    f = t ? e[l] : e.charCodeAt(l);
                    s = (r ^ f) & 255;
                    i = n[s];
                    r = r >>> 8 ^ i
                }
                return r ^ -1
            }
        }, {
            "./utils": 21
        }],
        5: [function(e, r, t) {
            "use strict";
            var a = e("./utils");

            function n(e) {
                this.data = null;
                this.length = 0;
                this.index = 0
            }
            n.prototype = {
                checkOffset: function(e) {
                    this.checkIndex(this.index + e)
                },
                checkIndex: function(e) {
                    if (this.length < e || e < 0) {
                        throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?")
                    }
                },
                setIndex: function(e) {
                    this.checkIndex(e);
                    this.index = e
                },
                skip: function(e) {
                    this.setIndex(this.index + e)
                },
                byteAt: function(e) {},
                readInt: function(e) {
                    var r = 0,
                        t;
                    this.checkOffset(e);
                    for (t = this.index + e - 1; t >= this.index; t--) {
                        r = (r << 8) + this.byteAt(t)
                    }
                    this.index += e;
                    return r
                },
                readString: function(e) {
                    return a.transformTo("string", this.readData(e))
                },
                readData: function(e) {},
                lastIndexOfSignature: function(e) {},
                readDate: function() {
                    var e = this.readInt(4);
                    return new Date((e >> 25 & 127) + 1980, (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (e & 31) << 1)
                }
            };
            r.exports = n;
        }, {
            "./utils": 21
        }],
        6: [function(e, r, t) {
            "use strict";
            t.base64 = false;
            t.binary = false;
            t.dir = false;
            t.createFolders = false;
            t.date = null;
            t.compression = null;
            t.comment = null
        }, {}],
        7: [function(e, r, t) {
            "use strict";
            var a = e("./utils");
            t.string2binary = function(e) {
                return a.string2binary(e)
            };
            t.string2Uint8Array = function(e) {
                return a.transformTo("uint8array", e)
            };
            t.uint8Array2String = function(e) {
                return a.transformTo("string", e)
            };
            t.string2Blob = function(e) {
                var r = a.transformTo("arraybuffer", e);
                return a.arrayBuffer2Blob(r)
            };
            t.arrayBuffer2Blob = function(e) {
                return a.arrayBuffer2Blob(e)
            };
            t.transformTo = function(e, r) {
                return a.transformTo(e, r)
            };
            t.getTypeOf = function(e) {
                return a.getTypeOf(e)
            };
            t.checkSupport = function(e) {
                return a.checkSupport(e)
            };
            t.MAX_VALUE_16BITS = a.MAX_VALUE_16BITS;
            t.MAX_VALUE_32BITS = a.MAX_VALUE_32BITS;
            t.pretty = function(e) {
                return a.pretty(e)
            };
            t.findCompression = function(e) {
                return a.findCompression(e)
            };
            t.isRegExp = function(e) {
                return a.isRegExp(e)
            }
        }, {
            "./utils": 21
        }],
        8: [function(e, r, t) {
            "use strict";
            var a = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
            var n = e("pako");
            t.uncompressInputType = a ? "uint8array" : "array";
            t.compressInputType = a ? "uint8array" : "array";
            t.magic = "\b\0";
            t.compress = function(e) {
                return n.deflateRaw(e)
            };
            t.uncompress = function(e) {
                return n.inflateRaw(e)
            }
        }, {
            pako: 24
        }],
        9: [function(e, r, t) {
            "use strict";
            var a = e("./base64");
            function n(e, r) {
                if (!(this instanceof n)) return new n(e, r);
                this.files = {};
                this.comment = null;
                this.root = "";
                if (e) {
                    this.load(e, r)
                }
                this.clone = function() {
                    var e = new n;
                    for (var r in this) {
                        if (typeof this[r] !== "function") {
                            e[r] = this[r]
                        }
                    }
                    return e
                }
            }
            n.prototype = e("./object");
            n.prototype.load = e("./load");
            n.support = e("./support");
            n.defaults = e("./defaults");
            n.utils = e("./deprecatedPublicUtils");
            n.base64 = {
                encode: function(e) {
                    return a.encode(e);
                },
                decode: function(e) {
                    return a.decode(e);
                }
            };
            n.compressions = e("./compressions");
            r.exports = n
        }, {
            "./base64": 1,
            "./compressions": 3,
            "./defaults": 6,
            "./deprecatedPublicUtils": 7,
            "./load": 10,
            "./object": 13,
            "./support": 17
        }],
        10: [function(e, r, t) {
            "use strict";
            var a = e("./base64");
            var n = e("./zipEntries");
            r.exports = function(e, r) {
                var t, i, s, f;
                r = r || {};
                if (r.base64) {
                    e = a.decode(e)
                }
                i = new n(e, r);
                t = i.files;
                for (s = 0; s < t.length; s++) {
                    f = t[s];
                    this.file(f.fileName, f.decompressed, {
                        binary: true,
                        optimizedBinaryString: true,
                        date: f.date,
                        dir: f.dir,
                        comment: f.fileComment.length ? f.fileComment : null,
                        createFolders: r.createFolders
                    })
                }
                if (i.zipComment.length) {
                    this.comment = i.zipComment
                }
                return this
            }
        }, {
            "./base64": 1,
            "./zipEntries": 22
        }],
        11: [function(e, r, t) {
            (function(e) {
                "use strict";
                var t = function() {};
                if (typeof e !== "undefined") {
                    var a = !e.from;
                    if (!a) try {
                        e.from("foo", "utf8")
                    } catch (n) {
                        a = true
                    }
                    t = a ? function(r, t) {
                        return t ? new e(r, t) : new e(r)
                    } : e.from.bind(e);
                    if (!e.alloc) e.alloc = function(r) {
                        return new e(r)
                    }
                }
                r.exports = function(r, a) {
                    return typeof r == "number" ? e.alloc(r) : t(r, a)
                };
                r.exports.test = function(r) {
                    return e.isBuffer(r)
                }
            }).call(this, typeof Buffer !== "undefined" ? Buffer : undefined)
        }, {}],
        12: [function(e, r, t) {
            "use strict";
            var a = e("./uint8ArrayReader");

            function n(e) {
                this.data = e;
                this.length = this.data.length;
                this.index = 0
            }
            n.prototype = new a;
            n.prototype.readData = function(e) {
                this.checkOffset(e);
                var r = this.data.slice(this.index, this.index + e);
                this.index += e;
                return r
            };
            r.exports = n
        }, {
            "./uint8ArrayReader": 18
        }],
        13: [function(e, r, t) {
            "use strict";
            var a = e("./support");
            var n = e("./utils");	//21
            var i = e("./crc32");	//4
            var s = e("./signature");
            var f = e("./defaults");
            var l = e("./base64");
            var o = e("./compressions");
            var c = e("./compressedObject");
            var u = e("./nodeBuffer");
            var h = e("./utf8");
            var d = e("./stringWriter");
            var v = e("./uint8ArrayWriter");
            var p = function(e) {
                if (e._data instanceof c) {
                    e._data = e._data.getContent();
                    e.options.binary = true;
                    e.options.base64 = false;
                    if (n.getTypeOf(e._data) === "uint8array") {
                        var r = e._data;
                        e._data = new Uint8Array(r.length);
                        if (r.length !== 0) {
                            e._data.set(r, 0)
                        }
                    }
                }
                return e._data
            };
            var m = function(e) {
                var r = p(e),
                    t = n.getTypeOf(r);
                if (t === "string") {
                    if (!e.options.binary) {
                        if (a.nodebuffer) {
                            return u(r, "utf-8")
                        }
                    }
                    return e.asBinary();
                }
                return r
            };
            var b = function(e) {
                var r = p(this);
                if (r === null || typeof r === "undefined") {
                    return ""
                }
                if (this.options.base64) {
                    r = l.decode(r)
                }
                if (e && this.options.binary) {
                    r = y.utf8decode(r)
                } else {
                    r = n.transformTo("string", r)
                }
                if (!e && !this.options.binary) {
                    r = n.transformTo("string", y.utf8encode(r))
                }
                return r
            };
            var g = function(e, r, t) {
                this.name = e;
                this.dir = t.dir;
                this.date = t.date;
                this.comment = t.comment;
                this._data = r;
                this.options = t;
                this._initialMetadata = {
                    dir: t.dir,
                    date: t.date
                }
            };
            g.prototype = {
                asText: function() {
                    return b.call(this, true)
                },
                asBinary: function() {
                    return b.call(this, false)
                },
                asNodeBuffer: function() {
                    var e = m(this);
                    return n.transformTo("nodebuffer", e)
                },
                asUint8Array: function() {
                    var e = m(this);
                    return n.transformTo("uint8array", e)
                },
                asArrayBuffer: function() {
                    return this.asUint8Array().buffer
                }
            };
            var w = function(e, r) {
                var t = "",
                    a;
                for (a = 0; a < r; a++) {
                    t += String.fromCharCode(e & 255);
                    e = e >>> 8
                }
                return t
            };
            var E = function() {
                var e = {};
                for (var r = 0; r < arguments.length; r++) {
                    for (var t in arguments[r]) {
                        if (arguments[r].hasOwnProperty(t) && typeof e[t] === "undefined") {
                            e[t] = arguments[r][t];
                        }
                    }
                }
                return e;
            };
            var k = function(e) {
                e = e || {};
                if (e.base64 === true && (e.binary === null || e.binary === undefined)) {
                    e.binary = true
                }
                e = E(e, f);
                e.date = e.date || new Date;
                if (e.compression !== null) e.compression = e.compression.toUpperCase();
                return e;
            };
            var S = function(e, r, t) {
                var a = n.getTypeOf(r),
                    i;
                t = k(t);
                if (t.createFolders && (i = _(e))) {
                    C.call(this, i, true)
                }
                if (t.dir || r === null || typeof r === "undefined") {
                    t.base64 = false;
                    t.binary = false;
                    r = null
                } else if (a === "string") {
                    if (t.binary && !t.base64) {
                        if (t.optimizedBinaryString !== true) {
                            r = n.string2binary(r)
                        }
                    }
                } else {
                    t.base64 = false;
                    t.binary = true;
                    if (!a && !(r instanceof c)) {
                        throw new Error("The data of '" + e + "' is in an unsupported format !")
                    }
                    if (a === "arraybuffer") {
                        r = n.transformTo("uint8array", r)
                    }
                }
                var s = new g(e, r, t);
                this.files[e] = s;
                return s;
            };
            var _ = function(e) {
                if (e.slice(-1) == "/") {
                    e = e.substring(0, e.length - 1)
                }
                var r = e.lastIndexOf("/");
                return r > 0 ? e.substring(0, r) : ""
            };
            var C = function(e, r) {
                if (e.slice(-1) != "/") {
                    e += "/"
                }
                r = typeof r !== "undefined" ? r : false;
                if (!this.files[e]) {
                    S.call(this, e, null, {
                        dir: true,
                        createFolders: r
                    })
                }
                return this.files[e]
            };
            var B = function(e, r) {
                var t = new c;
                if (e._data instanceof c) {
                    t.uncompressedSize = e._data.uncompressedSize;
                    t.crc32 = e._data.crc32;
                    if (t.uncompressedSize === 0 || e.dir) {
                        r = o["STORE"];
                        t.compressedContent = "";
                        t.crc32 = 0
                    } else if (e._data.compressionMethod === r.magic) {
                        t.compressedContent = e._data.getCompressedContent()
                    } else {
                        a = e._data.getContent();
                        t.compressedContent = r.compress(n.transformTo(r.compressInputType, a))
                    }
                } else {
                    var a = m(e);
                    if (!a || a.length === 0 || e.dir) {
                        r = o["STORE"];
                        a = ""
                    }
                    t.uncompressedSize = a.length;
                    t.crc32 = i(a);
                    t.compressedContent = r.compress(n.transformTo(r.compressInputType, a))
                }
                t.compressedSize = t.compressedContent.length;
                t.compressionMethod = r.magic;
                return t;
            };
            var T = function(e, r, t, a) {
                var f = t.compressedContent,
                    l = n.transformTo("string", h.utf8encode(r.name)),
                    o = r.comment || "",
                    c = n.transformTo("string", h.utf8encode(o)),
                    u = l.length !== r.name.length,
                    d = c.length !== o.length,
                    v = r.options,
                    p, m, b = "",
                    g = "",
                    E = "",
                    k, S;
                if (r._initialMetadata.dir !== r.dir) {
                    k = r.dir
                } else {
                    k = v.dir
                }
                if (r._initialMetadata.date !== r.date) {
                    S = r.date
                } else {
                    S = v.date
                }
                p = S.getHours();
                p = p << 6;
                p = p | S.getMinutes();
                p = p << 5;
                p = p | S.getSeconds() / 2;
                m = S.getFullYear() - 1980;
                m = m << 4;
                m = m | S.getMonth() + 1;
                m = m << 5;
                m = m | S.getDate();
                if (u) {
                    g = w(1, 1) + w(i(l), 4) + l;
                    b += "up" + w(g.length, 2) + g
                }
                if (d) {
                    E = w(1, 1) + w(this.crc32(c), 4) + c;
                    b += "uc" + w(E.length, 2) + E
                }
                var _ = "";
                _ += "\n\0";
                _ += u || d ? "\0\b" : "\0\0";
                _ += t.compressionMethod;
                _ += w(p, 2);
                _ += w(m, 2);
                _ += w(t.crc32, 4);
                _ += w(t.compressedSize, 4);
                _ += w(t.uncompressedSize, 4);
                _ += w(l.length, 2);
                _ += w(b.length, 2);
                var C = s.LOCAL_FILE_HEADER + _ + l + b;
                var B = s.CENTRAL_FILE_HEADER + "\0" + _ + w(c.length, 2) + "\0\0" + "\0\0" + (k === true ? "\0\0\0" : "\0\0\0\0") + w(a, 4) + l + b + c;
                return {
                    fileRecord: C,
                    dirRecord: B,
                    compressedObject: t
                }
            };
            var y = {
                load: function(e, r) {
                    throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
                },
                filter: function(e) {
                    var r = [],
                        t, a, n, i;
                    for (t in this.files) {
                        if (!this.files.hasOwnProperty(t)) {
                            continue
                        }
                        n = this.files[t];
                        i = new g(n.name, n._data, E(n.options));
                        a = t.slice(this.root.length, t.length);
                        if (t.slice(0, this.root.length) === this.root && e(a, i)) {
                            r.push(i)
                        }
                    }
                    return r
                },
                file: function(e, r, t) {
                    if (arguments.length === 1) {
                        if (n.isRegExp(e)) {
                            var a = e;
                            return this.filter(function(e, r) {
                                return !r.dir && a.test(e)
                            })
                        } else {
                            return this.filter(function(r, t) {
                                return !t.dir && r === e
                            })[0] || null
                        }
                    } else {
                        e = this.root + e;
                        S.call(this, e, r, t)
                    }
                    return this
                },
                folder: function(e) {
                    if (!e) {
                        return this
                    }
                    if (n.isRegExp(e)) {
                        return this.filter(function(r, t) {
                            return t.dir && e.test(r)
                        })
                    }
                    var r = this.root + e;
                    var t = C.call(this, r);
                    var a = this.clone();
                    a.root = t.name;
                    return a
                },
                remove: function(e) {
                    e = this.root + e;
                    var r = this.files[e];
                    if (!r) {
                        if (e.slice(-1) != "/") {
                            e += "/"
                        }
                        r = this.files[e]
                    }
                    if (r && !r.dir) {
                        delete this.files[e]
                    } else {
                        var t = this.filter(function(r, t) {
                            return t.name.slice(0, e.length) === e
                        });
                        for (var a = 0; a < t.length; a++) {
                            delete this.files[t[a].name]
                        }
                    }
                    return this
                },
                generate: function(e) {
                    e = E(e || {}, {
                        base64: true,
                        compression: "STORE",
                        type: "base64",
                        comment: null
                    });
                    n.checkSupport(e.type);
                    var r = [],
                        t = 0,
                        a = 0,
                        i, f, c = n.transformTo("string", this.utf8encode(e.comment || this.comment || ""));

                    for (var u in this.files) {
                        if (!this.files.hasOwnProperty(u)) {
                            continue;
                        }
                        var h = this.files[u];
                        var p = h.options.compression || e.compression.toUpperCase();
                        var m = o[p];
                        if (!m) {
                            throw new Error(p + " is not a valid compression method !")
                        }
                        var b = B.call(this, h, m);
                        var g = T.call(this, u, h, b, t);
                        t += g.fileRecord.length + b.compressedSize;
                        a += g.dirRecord.length;
                        r.push(g)
                    }
                    var k = s.CENTRAL_DIRECTORY_END + "\0\0" + "\0\0" + w(r.length, 2) + w(r.length, 2) + w(a, 4) + w(t, 4) + w(c.length, 2) + c;
                    var S = e.type.toLowerCase();
                    if (S === "uint8array" || S === "arraybuffer" || S === "blob" || S === "nodebuffer") {
                        i = new v(t + a + k.length)
                    } else {
                        i = new d(t + a + k.length)
                    }
                    for (f = 0; f < r.length; f++) {
                        i.append(r[f].fileRecord);
                        i.append(r[f].compressedObject.compressedContent)
                    }
                    for (f = 0; f < r.length; f++) {
                        i.append(r[f].dirRecord)
                    }
                    i.append(k);
                    var _ = i.finalize();
                    switch (e.type.toLowerCase()) {
                        case "uint8array":
                            ;
                        case "arraybuffer":
                            ;
                        case "nodebuffer":
                           ;
                        case "blob":
                            ;
                        case "base64":
                            return e.base64 ? l.encode(_) : _;
                        default:
                            return _;
                    }
                },
                crc32: function(e, r) {
                    return i(e, r)
                },
                utf8encode: function(e) {
                    return n.transformTo("string", h.utf8encode(e))
                },
                utf8decode: function(e) {
                    return h.utf8decode(e)
                }
            };
            r.exports = y;
        }, {
            "./base64": 1,
            "./compressedObject": 2,
            "./compressions": 3,
            "./crc32": 4,
            "./defaults": 6,
            "./nodeBuffer": 11,
            "./signature": 14,
            "./stringWriter": 16,
            "./support": 17,
            "./uint8ArrayWriter": 19,
            "./utf8": 20,
            "./utils": 21
        }],
        14: [function(e, r, t) {
            "use strict";
            t.LOCAL_FILE_HEADER = "PK";
            t.CENTRAL_FILE_HEADER = "PK";
            t.CENTRAL_DIRECTORY_END = "PK";
            t.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
            t.ZIP64_CENTRAL_DIRECTORY_END = "PK";
            t.DATA_DESCRIPTOR = "PK\b"
        }, {}],
        15: [function(e, r, t) {
            "use strict";
            var a = e("./dataReader");
            var n = e("./utils");

            function i(e, r) {
                this.data = e;
                if (!r) {
                    this.data = n.string2binary(this.data)
                }
                this.length = this.data.length;
                this.index = 0
            }
            i.prototype = new a;
            i.prototype.byteAt = function(e) {
                return this.data.charCodeAt(e)
            };
            i.prototype.lastIndexOfSignature = function(e) {
                return this.data.lastIndexOf(e)
            };
            i.prototype.readData = function(e) {
                this.checkOffset(e);
                var r = this.data.slice(this.index, this.index + e);
                this.index += e;
                return r
            };
            r.exports = i
        }, {
            "./dataReader": 5,
            "./utils": 21
        }],
        16: [function(e, r, t) {
            "use strict";
            var a = e("./utils");
            var n = function() {
                this.data = []
            };
            n.prototype = {
                append: function(e) {
                    e = a.transformTo("string", e);
                    this.data.push(e)
                },
                finalize: function() {
                    return this.data.join("")
                }
            };
            r.exports = n
        }, {
            "./utils": 21
        }],
        17: [function(e, r, t) {
            (function(e) {
                "use strict";
                t.base64 = true;
                t.array = true;
                t.string = true;
                t.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
                t.nodebuffer = typeof e !== "undefined";
                t.uint8array = typeof Uint8Array !== "undefined";
                if (typeof ArrayBuffer === "undefined") {
                    t.blob = false
                } else {
                    var r = new ArrayBuffer(0);
                    try {
                        t.blob = new Blob([r], {
                            type: "application/zip"
                        }).size === 0
                    } catch (a) {
                        try {
                            var n = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                            var i = new n;
                            i.append(r);
                            t.blob = i.getBlob("application/zip").size === 0
                        } catch (a) {
                            t.blob = false
                        }
                    }
                }
            }).call(this, typeof Buffer !== "undefined" ? Buffer : undefined)
        }, {}],
        18: [function(e, r, t) {
            "use strict";
            var a = e("./dataReader");

            function n(e) {
                if (e) {
                    this.data = e;
                    this.length = this.data.length;
                    this.index = 0
                }
            }
            n.prototype = new a;
            n.prototype.byteAt = function(e) {
                return this.data[e]
            };
            n.prototype.lastIndexOfSignature = function(e) {
                var r = e.charCodeAt(0),
                    t = e.charCodeAt(1),
                    a = e.charCodeAt(2),
                    n = e.charCodeAt(3);
                for (var i = this.length - 4; i >= 0; --i) {
                    if (this.data[i] === r && this.data[i + 1] === t && this.data[i + 2] === a && this.data[i + 3] === n) {
                        return i
                    }
                }
                return -1
            };
            n.prototype.readData = function(e) {
                this.checkOffset(e);
                if (e === 0) {
                    return new Uint8Array(0)
                }
                var r = this.data.subarray(this.index, this.index + e);
                this.index += e;
                return r
            };
            r.exports = n
        }, {
            "./dataReader": 5
        }],
        19: [function(e, r, t) {
            "use strict";
            var a = e("./utils");
            var n = function(e) {
                this.data = new Uint8Array(e);
                this.index = 0
            };
            n.prototype = {
                append: function(e) {
                    if (e.length !== 0) {
                        e = a.transformTo("uint8array", e);
                        this.data.set(e, this.index);
                        this.index += e.length;
                    }
                },
                finalize: function() {
                    return this.data;
                }
            };
            r.exports = n;
        }, {
            "./utils": 21
        }],
        20: [function(e, r, t) {
            "use strict";
            var a = e("./utils");
            var n = e("./support");
            var i = e("./nodeBuffer");
            var s = new Array(256);
            for (var f = 0; f < 256; f++) {
                s[f] = f >= 252 ? 6 : f >= 248 ? 5 : f >= 240 ? 4 : f >= 224 ? 3 : f >= 192 ? 2 : 1
            }
            s[254] = s[254] = 1;
            var l = function(e) {
                var r, t, a, i, s, f = e.length,
                    l = 0;
                for (i = 0; i < f; i++) {
                    t = e.charCodeAt(i);
                    if ((t & 64512) === 55296 && i + 1 < f) {
                        a = e.charCodeAt(i + 1);
                        if ((a & 64512) === 56320) {
                            t = 65536 + (t - 55296 << 10) + (a - 56320);
                            i++
                        }
                    }
                    l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                }
                if (n.uint8array) {
                    r = new Uint8Array(l)
                } else {
                    r = new Array(l)
                }
                for (s = 0, i = 0; s < l; i++) {
                    t = e.charCodeAt(i);
                    if ((t & 64512) === 55296 && i + 1 < f) {
                        a = e.charCodeAt(i + 1);
                        if ((a & 64512) === 56320) {
                            t = 65536 + (t - 55296 << 10) + (a - 56320);
                            i++
                        }
                    }
                    if (t < 128) {
                        r[s++] = t
                    } else if (t < 2048) {
                        r[s++] = 192 | t >>> 6;
                        r[s++] = 128 | t & 63
                    } else if (t < 65536) {
                        r[s++] = 224 | t >>> 12;
                        r[s++] = 128 | t >>> 6 & 63;
                        r[s++] = 128 | t & 63
                    } else {
                        r[s++] = 240 | t >>> 18;
                        r[s++] = 128 | t >>> 12 & 63;
                        r[s++] = 128 | t >>> 6 & 63;
                        r[s++] = 128 | t & 63
                    }
                }
                return r
            };
            var o = function(e, r) {
                var t;
                r = r || e.length;
                if (r > e.length) {
                    r = e.length
                }
                t = r - 1;
                while (t >= 0 && (e[t] & 192) === 128) {
                    t--
                }
                if (t < 0) {
                    return r
                }
                if (t === 0) {
                    return r
                }
                return t + s[e[t]] > r ? t : r
            };
            var c = function(e) {
                var r, t, n, i, f;
                var l = e.length;
                var o = new Array(l * 2);
                for (n = 0, t = 0; t < l;) {
                    i = e[t++];
                    if (i < 128) {
                        o[n++] = i;
                        continue
                    }
                    f = s[i];
                    if (f > 4) {
                        o[n++] = 65533;
                        t += f - 1;
                        continue
                    }
                    i &= f === 2 ? 31 : f === 3 ? 15 : 7;
                    while (f > 1 && t < l) {
                        i = i << 6 | e[t++] & 63;
                        f--
                    }
                    if (f > 1) {
                        o[n++] = 65533;
                        continue
                    }
                    if (i < 65536) {
                        o[n++] = i
                    } else {
                        i -= 65536;
                        o[n++] = 55296 | i >> 10 & 1023;
                        o[n++] = 56320 | i & 1023
                    }
                }
                if (o.length !== n) {
                    if (o.subarray) {
                        o = o.subarray(0, n)
                    } else {
                        o.length = n
                    }
                }
                return a.applyFromCharCode(o)
            };
            t.utf8encode = function u(e) {
                if (n.nodebuffer) {
                    return i(e, "utf-8")
                }
                return l(e)
            };
            t.utf8decode = function h(e) {
                if (n.nodebuffer) {
                    return a.transformTo("nodebuffer", e).toString("utf-8")
                }
                e = a.transformTo(n.uint8array ? "uint8array" : "array", e);
                var r = [],
                    t = 0,
                    i = e.length,
                    s = 65536;
                while (t < i) {
                    var f = o(e, Math.min(t + s, i));
                    if (n.uint8array) {
                        r.push(c(e.subarray(t, f)))
                    } else {
                        r.push(c(e.slice(t, f)))
                    }
                    t = f
                }
                return r.join("")
            }
        }, {
            "./nodeBuffer": 11,
            "./support": 17,
            "./utils": 21
        }],
        21: [function(e, r, t) {
            "use strict";
            var a = e("./support");
            var n = e("./compressions");
            var i = e("./nodeBuffer");
            t.string2binary = function(e) {
                var r = "";
                for (var t = 0; t < e.length; t++) {
                    r += String.fromCharCode(e.charCodeAt(t) & 255)
                }
                return r
            };
            t.arrayBuffer2Blob = function(e) {
                t.checkSupport("blob");
                try {
                    return new Blob([e], {
                        type: "application/zip"
                    })
                } catch (r) {
                    try {
                        var a = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                        var n = new a;
                        n.append(e);
                        return n.getBlob("application/zip")
                    } catch (r) {
                        throw new Error("Bug : can't construct the Blob.")
                    }
                }
            };

            function s(e) {
                return e
            }

            function f(e, r) {
                for (var t = 0; t < e.length; ++t) {
                    r[t] = e.charCodeAt(t) & 255
                }
                return r
            }

            function l(e) {
                var r = 65536;
                var a = [],
                    n = e.length,
                    s = t.getTypeOf(e),
                    f = 0,
                    l = true;
                try {
                    switch (s) {
                        case "uint8array":
                            String.fromCharCode.apply(null, new Uint8Array(0));
                            break;
                        case "nodebuffer":
                            String.fromCharCode.apply(null, i(0));
                            break;
                    }
                } catch (o) {
                    l = false
                }
                if (!l) {
                    var c = "";
                    for (var u = 0; u < e.length; u++) {
                        c += String.fromCharCode(e[u])
                    }
                    return c
                }
                while (f < n && r > 1) {
                    try {
                        if (s === "array" || s === "nodebuffer") {
                            a.push(String.fromCharCode.apply(null, e.slice(f, Math.min(f + r, n))))
                        } else {
                            a.push(String.fromCharCode.apply(null, e.subarray(f, Math.min(f + r, n))))
                        }
                        f += r
                    } catch (o) {
                        r = Math.floor(r / 2)
                    }
                }
                return a.join("")
            }
            t.applyFromCharCode = l;

            function o(e, r) {
                for (var t = 0; t < e.length; t++) {
                    r[t] = e[t]
                }
                return r
            }
            var c = {};
            c["string"] = {
                string: s,
                array: function(e) {
                    return f(e, new Array(e.length))
                },
                arraybuffer: function(e) {
                    return c["string"]["uint8array"](e).buffer
                },
                uint8array: function(e) {
                    return f(e, new Uint8Array(e.length))
                },
                nodebuffer: function(e) {
                    return f(e, i(e.length))
                }
            };
            c["array"] = {
                string: l,
                array: s,
                arraybuffer: function(e) {
                    return new Uint8Array(e).buffer
                },
                uint8array: function(e) {
                    return new Uint8Array(e)
                },
                nodebuffer: function(e) {
                    return i(e)
                }
            };
            c["arraybuffer"] = {
                string: function(e) {
                    return l(new Uint8Array(e))
                },
                array: function(e) {
                    return o(new Uint8Array(e), new Array(e.byteLength))
                },
                arraybuffer: s,
                uint8array: function(e) {
                    return new Uint8Array(e)
                },
                nodebuffer: function(e) {
                    return i(new Uint8Array(e))
                }
            };
            c["uint8array"] = {
                string: l,
                array: function(e) {
                    return o(e, new Array(e.length))
                },
                arraybuffer: function(e) {
                    return e.buffer
                },
                uint8array: s,
                nodebuffer: function(e) {
                    return i(e)
                }
            };
            c["nodebuffer"] = {
                string: l,
                array: function(e) {
                    return o(e, new Array(e.length))
                },
                arraybuffer: function(e) {
                    return c["nodebuffer"]["uint8array"](e).buffer
                },
                uint8array: function(e) {
                    return o(e, new Uint8Array(e.length))
                },
                nodebuffer: s
            };
            t.transformTo = function(e, r) {
                if (!r) {
                    r = ""
                }
                if (!e) {
                    return r
                }
                t.checkSupport(e);
                var a = t.getTypeOf(r);
                var n = c[a][e](r);
                return n;
            };
            t.getTypeOf = function(e) {
                if (typeof e === "string") {
                    return "string"
                }
                if (Object.prototype.toString.call(e) === "[object Array]") {
                    return "array"
                }
                if (a.nodebuffer && i.test(e)) {
                    return "nodebuffer"
                }
                if (a.uint8array && e instanceof Uint8Array) {
                    return "uint8array"
                }
                if (a.arraybuffer && e instanceof ArrayBuffer) {
                    return "arraybuffer"
                }
            };
            t.checkSupport = function(e) {
                var r = a[e.toLowerCase()];
                if (!r) {
                    throw new Error(e + " is not supported by this browser")
                }
            };
            t.MAX_VALUE_16BITS = 65535;
            t.MAX_VALUE_32BITS = -1;
            t.pretty = function(e) {
                var r = "",
                    t, a;
                for (a = 0; a < (e || "").length; a++) {
                    t = e.charCodeAt(a);
                    r += "\\x" + (t < 16 ? "0" : "") + t.toString(16).toUpperCase()
                }
                return r
            };
            t.findCompression = function(e) {
                for (var r in n) {
                    if (!n.hasOwnProperty(r)) {
                        continue
                    }
                    if (n[r].magic === e) {
                        return n[r]
                    }
                }
                return null
            };
            t.isRegExp = function(e) {
                return Object.prototype.toString.call(e) === "[object RegExp]"
            }
        }, {
            "./compressions": 3,
            "./nodeBuffer": 11,
            "./support": 17
        }],
        22: [function(e, r, t) {
            "use strict";
            var a = e("./stringReader");
            var n = e("./nodeBufferReader");
            var i = e("./uint8ArrayReader");
            var s = e("./utils");
            var f = e("./signature");
            var l = e("./zipEntry");
            var o = e("./support");
            var c = e("./object");

            function u(e, r) {
                this.files = [];
                this.loadOptions = r;
                if (e) {
                    this.load(e)
                }
            }
            u.prototype = {
                checkSignature: function(e) {
                    var r = this.reader.readString(4);
                    if (r !== e) {
                        throw new Error("Corrupted zip or bug : unexpected signature " + "(" + s.pretty(r) + ", expected " + s.pretty(e) + ")")
                    }
                },
                readBlockEndOfCentral: function() {
                    this.diskNumber = this.reader.readInt(2);
                    this.diskWithCentralDirStart = this.reader.readInt(2);
                    this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
                    this.centralDirRecords = this.reader.readInt(2);
                    this.centralDirSize = this.reader.readInt(4);
                    this.centralDirOffset = this.reader.readInt(4);
                    this.zipCommentLength = this.reader.readInt(2);
                    this.zipComment = this.reader.readString(this.zipCommentLength);
                    this.zipComment = c.utf8decode(this.zipComment)
                },
                readBlockZip64EndOfCentral: function() {
                    this.zip64EndOfCentralSize = this.reader.readInt(8);
                    this.versionMadeBy = this.reader.readString(2);
                    this.versionNeeded = this.reader.readInt(2);
                    this.diskNumber = this.reader.readInt(4);
                    this.diskWithCentralDirStart = this.reader.readInt(4);
                    this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
                    this.centralDirRecords = this.reader.readInt(8);
                    this.centralDirSize = this.reader.readInt(8);
                    this.centralDirOffset = this.reader.readInt(8);
                    this.zip64ExtensibleData = {};
                    var e = this.zip64EndOfCentralSize - 44,
                        r = 0,
                        t, a, n;
                    while (r < e) {
                        t = this.reader.readInt(2);
                        a = this.reader.readInt(4);
                        n = this.reader.readString(a);
                        this.zip64ExtensibleData[t] = {
                            id: t,
                            length: a,
                            value: n
                        }
                    }
                },
                readBlockZip64EndOfCentralLocator: function() {
                    this.diskWithZip64CentralDirStart = this.reader.readInt(4);
                    this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
                    this.disksCount = this.reader.readInt(4);
                    if (this.disksCount > 1) {
                        throw new Error("Multi-volumes zip are not supported")
                    }
                },
                readLocalFiles: function() {
                    var e, r;
                    for (e = 0; e < this.files.length; e++) {
                        r = this.files[e];
                        this.reader.setIndex(r.localHeaderOffset);
                        this.checkSignature(f.LOCAL_FILE_HEADER);
                        r.readLocalPart(this.reader);
                        r.handleUTF8()
                    }
                },
                readCentralDir: function() {
                    var e;
                    this.reader.setIndex(this.centralDirOffset);
                    while (this.reader.readString(4) === f.CENTRAL_FILE_HEADER) {
                        e = new l({
                            zip64: this.zip64
                        }, this.loadOptions);
                        e.readCentralPart(this.reader);
                        this.files.push(e)
                    }
                },
                readEndOfCentral: function() {
                    var e = this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);
                    if (e === -1) {
                        throw new Error("Corrupted zip : can't find end of central directory")
                    }
                    this.reader.setIndex(e);
                    this.checkSignature(f.CENTRAL_DIRECTORY_END);
                    this.readBlockEndOfCentral();
                    if (this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
                        this.zip64 = true;
                        e = this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                        if (e === -1) {
                            throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator")
                        }
                        this.reader.setIndex(e);
                        this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                        this.readBlockZip64EndOfCentralLocator();
                        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
                        this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END);
                        this.readBlockZip64EndOfCentral()
                    }
                },
                prepareReader: function(e) {
                    var r = s.getTypeOf(e);
                    if (r === "string" && !o.uint8array) {
                        this.reader = new a(e, this.loadOptions.optimizedBinaryString)
                    } else if (r === "nodebuffer") {
                        this.reader = new n(e)
                    } else {
                        this.reader = new i(s.transformTo("uint8array", e))
                    }
                },
                load: function(e) {
                    this.prepareReader(e);
                    this.readEndOfCentral();
                    this.readCentralDir();
                    this.readLocalFiles()
                }
            };
            r.exports = u
        }, {
            "./nodeBufferReader": 12,
            "./object": 13,
            "./signature": 14,
            "./stringReader": 15,
            "./support": 17,
            "./uint8ArrayReader": 18,
            "./utils": 21,
            "./zipEntry": 23
        }],
        23: [function(e, r, t) {
            "use strict";
            var a = e("./stringReader");
            var n = e("./utils");
            var i = e("./compressedObject");
            var s = e("./object");

            function f(e, r) {
                this.options = e;
                this.loadOptions = r
            }
            f.prototype = {
                isEncrypted: function() {
                    return (this.bitFlag & 1) === 1
                },
                useUTF8: function() {
                    return (this.bitFlag & 2048) === 2048
                },
                prepareCompressedContent: function(e, r, t) {
                    return function() {
                        var a = e.index;
                        e.setIndex(r);
                        var n = e.readData(t);
                        e.setIndex(a);
                        return n
                    }
                },
                prepareContent: function(e, r, t, a, i) {
                    return function() {
                    	//this = 2, a = 3
                        var e = n.transformTo(a.uncompressInputType, this.getCompressedContent());
                        var r = a.uncompress(e);
                        if (r.length !== i) {
                            throw new Error("Bug : uncompressed data size mismatch")
                        }
                        return r
                    }
                },
                readLocalPart: function(e) {
                    var r, t;
                    e.skip(22);
                    this.fileNameLength = e.readInt(2);
                    t = e.readInt(2);
                    this.fileName = e.readString(this.fileNameLength);
                    e.skip(t);
                    if (this.compressedSize == -1 || this.uncompressedSize == -1) {
                        throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)")
                    }
                    r = n.findCompression(this.compressionMethod);
                    if (r === null) {
                        throw new Error("Corrupted zip : compression " + n.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")")
                    }
                    this.decompressed = new i;
                    this.decompressed.compressedSize = this.compressedSize;
                    this.decompressed.uncompressedSize = this.uncompressedSize;
                    this.decompressed.crc32 = this.crc32;
                    this.decompressed.compressionMethod = this.compressionMethod;
                    this.decompressed.getCompressedContent = this.prepareCompressedContent(e, e.index, this.compressedSize, r);
                    this.decompressed.getContent = this.prepareContent(e, e.index, this.compressedSize, r, this.uncompressedSize);
                    if (this.loadOptions.checkCRC32) {
                        this.decompressed = n.transformTo("string", this.decompressed.getContent());
                        if (s.crc32(this.decompressed) !== this.crc32) {
                            throw new Error("Corrupted zip : CRC32 mismatch")
                        }
                    }
                },
                readCentralPart: function(e) {
                    this.versionMadeBy = e.readString(2);
                    this.versionNeeded = e.readInt(2);
                    this.bitFlag = e.readInt(2);
                    this.compressionMethod = e.readString(2);
                    this.date = e.readDate();
                    this.crc32 = e.readInt(4);
                    this.compressedSize = e.readInt(4);
                    this.uncompressedSize = e.readInt(4);
                    this.fileNameLength = e.readInt(2);
                    this.extraFieldsLength = e.readInt(2);
                    this.fileCommentLength = e.readInt(2);
                    this.diskNumberStart = e.readInt(2);
                    this.internalFileAttributes = e.readInt(2);
                    this.externalFileAttributes = e.readInt(4);
                    this.localHeaderOffset = e.readInt(4);
                    if (this.isEncrypted()) {
                        throw new Error("Encrypted zip are not supported")
                    }
                    this.fileName = e.readString(this.fileNameLength);
                    this.readExtraFields(e);
                    this.parseZIP64ExtraField(e);
                    this.fileComment = e.readString(this.fileCommentLength);
                    this.dir = this.externalFileAttributes & 16 ? true : false
                },
                parseZIP64ExtraField: function(e) {
                    if (!this.extraFields[1]) {
                        return
                    }
                    var r = new a(this.extraFields[1].value);
                    if (this.uncompressedSize === n.MAX_VALUE_32BITS) {
                        this.uncompressedSize = r.readInt(8)
                    }
                    if (this.compressedSize === n.MAX_VALUE_32BITS) {
                        this.compressedSize = r.readInt(8)
                    }
                    if (this.localHeaderOffset === n.MAX_VALUE_32BITS) {
                        this.localHeaderOffset = r.readInt(8)
                    }
                    if (this.diskNumberStart === n.MAX_VALUE_32BITS) {
                        this.diskNumberStart = r.readInt(4)
                    }
                },
                readExtraFields: function(e) {
                    var r = e.index,
                        t, a, n;
                    this.extraFields = this.extraFields || {};
                    while (e.index < r + this.extraFieldsLength) {
                        t = e.readInt(2);
                        a = e.readInt(2);
                        n = e.readString(a);
                        this.extraFields[t] = {
                            id: t,
                            length: a,
                            value: n
                        }
                    }
                },
                handleUTF8: function() {
                    if (this.useUTF8()) {
                        this.fileName = s.utf8decode(this.fileName);
                        this.fileComment = s.utf8decode(this.fileComment)
                    } else {
                        var e = this.findExtraFieldUnicodePath();
                        if (e !== null) {
                            this.fileName = e
                        }
                        var r = this.findExtraFieldUnicodeComment();
                        if (r !== null) {
                            this.fileComment = r
                        }
                    }
                },
                findExtraFieldUnicodePath: function() {
                    var e = this.extraFields[28789];
                    if (e) {
                        var r = new a(e.value);
                        if (r.readInt(1) !== 1) {
                            return null
                        }
                        if (s.crc32(this.fileName) !== r.readInt(4)) {
                            return null
                        }
                        return s.utf8decode(r.readString(e.length - 5))
                    }
                    return null
                },
                findExtraFieldUnicodeComment: function() {
                    var e = this.extraFields[25461];
                    if (e) {
                        var r = new a(e.value);
                        if (r.readInt(1) !== 1) {
                            return null
                        }
                        if (s.crc32(this.fileComment) !== r.readInt(4)) {
                            return null
                        }
                        return s.utf8decode(r.readString(e.length - 5))
                    }
                    return null
                }
            };
            r.exports = f
        }, {
            "./compressedObject": 2,
            "./object": 13,
            "./stringReader": 15,
            "./utils": 21
        }],
        24: [function(e, r, t) {
            "use strict";
            var a = e("./lib/utils/common").assign;
            var n = e("./lib/deflate");
            var i = e("./lib/inflate");
            var s = e("./lib/zlib/constants");
            var f = {};
            a(f, n, i, s);
            r.exports = f
        }, {
            "./lib/deflate": 25,
            "./lib/inflate": 26,
            "./lib/utils/common": 27,
            "./lib/zlib/constants": 30
        }],
        25: [function(e, r, t) {
            "use strict";
            var a = e("./zlib/deflate.js");
            var n = e("./utils/common");
            var i = e("./utils/strings");
            var s = e("./zlib/messages");
            var f = e("./zlib/zstream");
            var l = 0;
            var o = 4;
            var c = 0;
            var u = 1;
            var h = -1;
            var d = 0;
            var v = 8;
            var p = function(e) {
                this.options = n.assign({
                    level: h,
                    method: v,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: d,
                    to: ""
                }, e || {});
                var r = this.options;
                if (r.raw && r.windowBits > 0) {
                    r.windowBits = -r.windowBits
                } else if (r.gzip && r.windowBits > 0 && r.windowBits < 16) {
                    r.windowBits += 16
                }
                this.err = 0;
                this.msg = "";
                this.ended = false;
                this.chunks = [];
                this.strm = new f;
                this.strm.avail_out = 0;
                var t = a.deflateInit2(this.strm, r.level, r.method, r.windowBits, r.memLevel, r.strategy);
                if (t !== c) {
                    throw new Error(s[t])
                }
                if (r.header) {
                    a.deflateSetHeader(this.strm, r.header)
                }
            };
            p.prototype.push = function(e, r) {
                var t = this.strm;
                var s = this.options.chunkSize;
                var f, h;
                if (this.ended) {
                    return false
                }
                h = r === ~~r ? r : r === true ? o : l;
                if (typeof e === "string") {
                    t.input = i.string2buf(e)
                } else {
                    t.input = e
                }
                t.next_in = 0;
                t.avail_in = t.input.length;
                do {
                    if (t.avail_out === 0) {
                        t.output = new n.Buf8(s);
                        t.next_out = 0;
                        t.avail_out = s
                    }
                    f = a.deflate(t, h);
                    if (f !== u && f !== c) {
                        this.onEnd(f);
                        this.ended = true;
                        return false
                    }
                    if (t.avail_out === 0 || t.avail_in === 0 && h === o) {
                        if (this.options.to === "string") {
                            this.onData(i.buf2binstring(n.shrinkBuf(t.output, t.next_out)))
                        } else {
                            this.onData(n.shrinkBuf(t.output, t.next_out))
                        }
                    }
                } while ((t.avail_in > 0 || t.avail_out === 0) && f !== u);
                if (h === o) {
                    f = a.deflateEnd(this.strm);
                    this.onEnd(f);
                    this.ended = true;
                    return f === c
                }
                return true
            };
            p.prototype.onData = function(e) {
                this.chunks.push(e)
            };
            p.prototype.onEnd = function(e) {
                if (e === c) {
                    if (this.options.to === "string") {
                        this.result = this.chunks.join("")
                    } else {
                        this.result = n.flattenChunks(this.chunks)
                    }
                }
                this.chunks = [];
                this.err = e;
                this.msg = this.strm.msg
            };

            function m(e, r) {
                var t = new p(r);
                t.push(e, true);
                if (t.err) {
                    throw t.msg
                }
                return t.result
            }

            function b(e, r) {
                r = r || {};
                r.raw = true;
                return m(e, r)
            }

            function g(e, r) {
                r = r || {};
                r.gzip = true;
                return m(e, r)
            }
            t.Deflate = p;
            t.deflate = m;
            t.deflateRaw = b;
            t.gzip = g
        }, {
            "./utils/common": 27,
            "./utils/strings": 28,
            "./zlib/deflate.js": 32,
            "./zlib/messages": 37,
            "./zlib/zstream": 39
        }],
        26: [function(e, r, t) {
            "use strict";
            var a = e("./zlib/inflate.js");
            var n = e("./utils/common");
            var i = e("./utils/strings");
            var s = e("./zlib/constants");
            var f = e("./zlib/messages");
            var l = e("./zlib/zstream");
            var o = e("./zlib/gzheader");
            var c = function(e) {
                this.options = n.assign({
                    chunkSize: 16384,
                    windowBits: 0,
                    to: ""
                }, e || {});
                var r = this.options;
                if (r.raw && r.windowBits >= 0 && r.windowBits < 16) {
                    r.windowBits = -r.windowBits;
                    if (r.windowBits === 0) {
                        r.windowBits = -15
                    }
                }
                if (r.windowBits >= 0 && r.windowBits < 16 && !(e && e.windowBits)) {
                    r.windowBits += 32
                }
                if (r.windowBits > 15 && r.windowBits < 48) {
                    if ((r.windowBits & 15) === 0) {
                        r.windowBits |= 15
                    }
                }
                this.err = 0;
                this.msg = "";
                this.ended = false;
                this.chunks = [];
                this.strm = new l;
                this.strm.avail_out = 0;
                var t = a.inflateInit2(this.strm, r.windowBits);
                if (t !== s.Z_OK) {
                    throw new Error(f[t])
                }
                this.header = new o;
                a.inflateGetHeader(this.strm, this.header)
            };
            c.prototype.push = function(e, r) {
                var t = this.strm;
                var f = this.options.chunkSize;
                var l, o;
                var c, u, h;
                if (this.ended) {
                    return false
                }
                o = r === ~~r ? r : r === true ? s.Z_FINISH : s.Z_NO_FLUSH;
                if (typeof e === "string") {
                    t.input = i.binstring2buf(e)
                } else {
                    t.input = e
                }
                t.next_in = 0;
                t.avail_in = t.input.length;
                do {
                    if (t.avail_out === 0) {
                        t.output = new n.Buf8(f);
                        t.next_out = 0;
                        t.avail_out = f
                    }
                    l = a.inflate(t, s.Z_NO_FLUSH);
                    if (l !== s.Z_STREAM_END && l !== s.Z_OK) {
                        this.onEnd(l);
                        this.ended = true;
                        return false
                    }
                    if (t.next_out) {
                        if (t.avail_out === 0 || l === s.Z_STREAM_END || t.avail_in === 0 && o === s.Z_FINISH) {
                            if (this.options.to === "string") {
                                c = i.utf8border(t.output, t.next_out);
                                u = t.next_out - c;
                                h = i.buf2string(t.output, c);
                                t.next_out = u;
                                t.avail_out = f - u;
                                if (u) {
                                    n.arraySet(t.output, t.output, c, u, 0)
                                }
                                this.onData(h)
                            } else {
                                this.onData(n.shrinkBuf(t.output, t.next_out))
                            }
                        }
                    }
                } while (t.avail_in > 0 && l !== s.Z_STREAM_END);
                if (l === s.Z_STREAM_END) {
                    o = s.Z_FINISH
                }
                if (o === s.Z_FINISH) {
                    l = a.inflateEnd(this.strm);
                    this.onEnd(l);
                    this.ended = true;
                    return l === s.Z_OK
                }
                return true
            };
            c.prototype.onData = function(e) {
                this.chunks.push(e)
            };
            c.prototype.onEnd = function(e) {
                if (e === s.Z_OK) {
                    if (this.options.to === "string") {
                        this.result = this.chunks.join("")
                    } else {
                        this.result = n.flattenChunks(this.chunks)
                    }
                }
                this.chunks = [];
                this.err = e;
                this.msg = this.strm.msg
            };

            function u(e, r) {
                var t = new c(r);
                t.push(e, true);
                if (t.err) {
                    throw t.msg
                }
                return t.result
            }

            function h(e, r) {
                r = r || {};
                r.raw = true;
                return u(e, r)
            }
            t.Inflate = c;
            t.inflate = u;
            t.inflateRaw = h;
            t.ungzip = u
        }, {
            "./utils/common": 27,
            "./utils/strings": 28,
            "./zlib/constants": 30,
            "./zlib/gzheader": 33,
            "./zlib/inflate.js": 35,
            "./zlib/messages": 37,
            "./zlib/zstream": 39
        }],
        27: [function(e, r, t) {
            "use strict";
            var a = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
            t.assign = function(e) {
                var r = Array.prototype.slice.call(arguments, 1);
                while (r.length) {
                    var t = r.shift();
                    if (!t) {
                        continue
                    }
                    if (typeof t !== "object") {
                        throw new TypeError(t + "must be non-object")
                    }
                    for (var a in t) {
                        if (t.hasOwnProperty(a)) {
                            e[a] = t[a]
                        }
                    }
                }
                return e
            };
            t.shrinkBuf = function(e, r) {
                if (e.length === r) {
                    return e
                }
                if (e.subarray) {
                    return e.subarray(0, r)
                }
                e.length = r;
                return e
            };
            var n = {
                arraySet: function(e, r, t, a, n) {
                    if (r.subarray && e.subarray) {
                        e.set(r.subarray(t, t + a), n);
                        return
                    }
                    for (var i = 0; i < a; i++) {
                        e[n + i] = r[t + i]
                    }
                },
                flattenChunks: function(e) {
                    var r, t, a, n, i, s;
                    a = 0;
                    for (r = 0, t = e.length; r < t; r++) {
                        a += e[r].length
                    }
                    s = new Uint8Array(a);
                    n = 0;
                    for (r = 0, t = e.length; r < t; r++) {
                        i = e[r];
                        s.set(i, n);
                        n += i.length
                    }
                    return s
                }
            };
            var i = {
                arraySet: function(e, r, t, a, n) {
                    for (var i = 0; i < a; i++) {
                        e[n + i] = r[t + i]
                    }
                },
                flattenChunks: function(e) {
                    return [].concat.apply([], e)
                }
            };
            t.setTyped = function(e) {
                if (e) {
                    t.Buf8 = Uint8Array;
                    t.Buf16 = Uint16Array;
                    t.Buf32 = Int32Array;
                    t.assign(t, n)
                } else {
                    t.Buf8 = Array;
                    t.Buf16 = Array;
                    t.Buf32 = Array;
                    t.assign(t, i)
                }
            };
            t.setTyped(a)
        }, {}],
        28: [function(e, r, t) {
            "use strict";
            var a = e("./common");
            var n = true;
            var i = true;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (s) {
                n = false
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (s) {
                i = false
            }
            var f = new a.Buf8(256);
            for (var l = 0; l < 256; l++) {
                f[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1
            }
            f[254] = f[254] = 1;
            t.string2buf = function(e) {
                var r, t, n, i, s, f = e.length,
                    l = 0;
                for (i = 0; i < f; i++) {
                    t = e.charCodeAt(i);
                    if ((t & 64512) === 55296 && i + 1 < f) {
                        n = e.charCodeAt(i + 1);
                        if ((n & 64512) === 56320) {
                            t = 65536 + (t - 55296 << 10) + (n - 56320);
                            i++
                        }
                    }
                    l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                }
                r = new a.Buf8(l);
                for (s = 0, i = 0; s < l; i++) {
                    t = e.charCodeAt(i);
                    if ((t & 64512) === 55296 && i + 1 < f) {
                        n = e.charCodeAt(i + 1);
                        if ((n & 64512) === 56320) {
                            t = 65536 + (t - 55296 << 10) + (n - 56320);
                            i++
                        }
                    }
                    if (t < 128) {
                        r[s++] = t
                    } else if (t < 2048) {
                        r[s++] = 192 | t >>> 6;
                        r[s++] = 128 | t & 63
                    } else if (t < 65536) {
                        r[s++] = 224 | t >>> 12;
                        r[s++] = 128 | t >>> 6 & 63;
                        r[s++] = 128 | t & 63
                    } else {
                        r[s++] = 240 | t >>> 18;
                        r[s++] = 128 | t >>> 12 & 63;
                        r[s++] = 128 | t >>> 6 & 63;
                        r[s++] = 128 | t & 63
                    }
                }
                return r
            };

            function o(e, r) {
                if (r < 65537) {
                    if (e.subarray && i || !e.subarray && n) {
                        return String.fromCharCode.apply(null, a.shrinkBuf(e, r))
                    }
                }
                var t = "";
                for (var s = 0; s < r; s++) {
                    t += String.fromCharCode(e[s])
                }
                return t
            }
            t.buf2binstring = function(e) {
                return o(e, e.length)
            };
            t.binstring2buf = function(e) {
                var r = new a.Buf8(e.length);
                for (var t = 0, n = r.length; t < n; t++) {
                    r[t] = e.charCodeAt(t)
                }
                return r
            };
            t.buf2string = function(e, r) {
                var t, a, n, i;
                var s = r || e.length;
                var l = new Array(s * 2);
                for (a = 0, t = 0; t < s;) {
                    n = e[t++];
                    if (n < 128) {
                        l[a++] = n;
                        continue
                    }
                    i = f[n];
                    if (i > 4) {
                        l[a++] = 65533;
                        t += i - 1;
                        continue
                    }
                    n &= i === 2 ? 31 : i === 3 ? 15 : 7;
                    while (i > 1 && t < s) {
                        n = n << 6 | e[t++] & 63;
                        i--
                    }
                    if (i > 1) {
                        l[a++] = 65533;
                        continue
                    }
                    if (n < 65536) {
                        l[a++] = n
                    } else {
                        n -= 65536;
                        l[a++] = 55296 | n >> 10 & 1023;
                        l[a++] = 56320 | n & 1023
                    }
                }
                return o(l, a)
            };
            t.utf8border = function(e, r) {
                var t;
                r = r || e.length;
                if (r > e.length) {
                    r = e.length
                }
                t = r - 1;
                while (t >= 0 && (e[t] & 192) === 128) {
                    t--
                }
                if (t < 0) {
                    return r
                }
                if (t === 0) {
                    return r
                }
                return t + f[e[t]] > r ? t : r
            }
        }, {
            "./common": 27
        }],
        29: [function(e, r, t) {
            "use strict";

            function a(e, r, t, a) {
                var n = e & 65535 | 0,
                    i = e >>> 16 & 65535 | 0,
                    s = 0;
                while (t !== 0) {
                    s = t > 2e3 ? 2e3 : t;
                    t -= s;
                    do {
                        n = n + r[a++] | 0;
                        i = i + n | 0
                    } while (--s);
                    n %= 65521;
                    i %= 65521
                }
                return n | i << 16 | 0
            }
            r.exports = a
        }, {}],
        30: [function(e, r, t) {
            r.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        }, {}],
        31: [function(e, r, t) {
            "use strict";

            function a() {
                var e, r = [];
                for (var t = 0; t < 256; t++) {
                    e = t;
                    for (var a = 0; a < 8; a++) {
                        e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1
                    }
                    r[t] = e
                }
                return r
            }
            var n = a();

            function i(e, r, t, a) {
                var i = n,
                    s = a + t;
                e = e ^ -1;
                for (var f = a; f < s; f++) {
                    e = e >>> 8 ^ i[(e ^ r[f]) & 255]
                }
                return e ^ -1
            }
            r.exports = i
        }, {}],
        32: [function(e, r, t) {
            "use strict";
            var a = e("../utils/common");
            var n = e("./trees");
            var i = e("./adler32");
            var s = e("./crc32");
            var f = e("./messages");
            var l = 0;
            var o = 1;
            var c = 3;
            var u = 4;
            var h = 5;
            var d = 0;
            var v = 1;
            var p = -2;
            var m = -3;
            var b = -5;
            var g = -1;
            var w = 1;
            var E = 2;
            var k = 3;
            var S = 4;
            var _ = 0;
            var C = 2;
            var B = 8;
            var T = 9;
            var y = 15;
            var x = 8;
            var A = 29;
            var I = 256;
            var R = I + 1 + A;
            var D = 30;
            var F = 19;
            var O = 2 * R + 1;
            var P = 15;
            var N = 3;
            var L = 258;
            var M = L + N + 1;
            var U = 32;
            var H = 42;
            var CFB = 69;
            var V = 73;
            var z = 91;
            var X = 103;
            var G = 113;
            var j = 666;
            var K = 1;
            var Y = 2;
            var $ = 3;
            var Z = 4;
            var Q = 3;

            function J(e, r) {
                e.msg = f[r];
                return r
            }

            function q(e) {
                return (e << 1) - (e > 4 ? 9 : 0)
            }

            function ee(e) {
                var r = e.length;
                while (--r >= 0) {
                    e[r] = 0
                }
            }

            function re(e) {
                var r = e.state;
                var t = r.pending;
                if (t > e.avail_out) {
                    t = e.avail_out
                }
                if (t === 0) {
                    return
                }
                a.arraySet(e.output, r.pending_buf, r.pending_out, t, e.next_out);
                e.next_out += t;
                r.pending_out += t;
                e.total_out += t;
                e.avail_out -= t;
                r.pending -= t;
                if (r.pending === 0) {
                    r.pending_out = 0
                }
            }

            function te(e, r) {
                n._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, r);
                e.block_start = e.strstart;
                re(e.strm)
            }

            function ae(e, r) {
                e.pending_buf[e.pending++] = r
            }

            function ne(e, r) {
                e.pending_buf[e.pending++] = r >>> 8 & 255;
                e.pending_buf[e.pending++] = r & 255
            }

            function ie(e, r, t, n) {
                var f = e.avail_in;
                if (f > n) {
                    f = n
                }
                if (f === 0) {
                    return 0
                }
                e.avail_in -= f;
                a.arraySet(r, e.input, e.next_in, f, t);
                if (e.state.wrap === 1) {
                    e.adler = i(e.adler, r, f, t)
                } else if (e.state.wrap === 2) {
                    e.adler = s(e.adler, r, f, t)
                }
                e.next_in += f;
                e.total_in += f;
                return f
            }

            function se(e, r) {
                var t = e.max_chain_length;
                var a = e.strstart;
                var n;
                var i;
                var s = e.prev_length;
                var f = e.nice_match;
                var l = e.strstart > e.w_size - M ? e.strstart - (e.w_size - M) : 0;
                var o = e.window;
                var c = e.w_mask;
                var u = e.prev;
                var h = e.strstart + L;
                var d = o[a + s - 1];
                var v = o[a + s];
                if (e.prev_length >= e.good_match) {
                    t >>= 2
                }
                if (f > e.lookahead) {
                    f = e.lookahead
                }
                do {
                    n = r;
                    if (o[n + s] !== v || o[n + s - 1] !== d || o[n] !== o[a] || o[++n] !== o[a + 1]) {
                        continue
                    }
                    a += 2;
                    n++;
                    do {} while (o[++a] === o[++n] && o[++a] === o[++n] && o[++a] === o[++n] && o[++a] === o[++n] && o[++a] === o[++n] && o[++a] === o[++n] && o[++a] === o[++n] && o[++a] === o[++n] && a < h);
                    i = L - (h - a);
                    a = h - L;
                    if (i > s) {
                        e.match_start = r;
                        s = i;
                        if (i >= f) {
                            break
                        }
                        d = o[a + s - 1];
                        v = o[a + s]
                    }
                } while ((r = u[r & c]) > l && --t !== 0);
                if (s <= e.lookahead) {
                    return s
                }
                return e.lookahead
            }

            function fe(e) {
                var r = e.w_size;
                var t, n, i, s, f;
                do {
                    s = e.window_size - e.lookahead - e.strstart;
                    if (e.strstart >= r + (r - M)) {
                        a.arraySet(e.window, e.window, r, r, 0);
                        e.match_start -= r;
                        e.strstart -= r;
                        e.block_start -= r;
                        n = e.hash_size;
                        t = n;
                        do {
                            i = e.head[--t];
                            e.head[t] = i >= r ? i - r : 0
                        } while (--n);
                        n = r;
                        t = n;
                        do {
                            i = e.prev[--t];
                            e.prev[t] = i >= r ? i - r : 0
                        } while (--n);
                        s += r
                    }
                    if (e.strm.avail_in === 0) {
                        break
                    }
                    n = ie(e.strm, e.window, e.strstart + e.lookahead, s);
                    e.lookahead += n;
                    if (e.lookahead + e.insert >= N) {
                        f = e.strstart - e.insert;
                        e.ins_h = e.window[f];
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[f + 1]) & e.hash_mask;
                        while (e.insert) {
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[f + N - 1]) & e.hash_mask;
                            e.prev[f & e.w_mask] = e.head[e.ins_h];
                            e.head[e.ins_h] = f;
                            f++;
                            e.insert--;
                            if (e.lookahead + e.insert < N) {
                                break
                            }
                        }
                    }
                } while (e.lookahead < M && e.strm.avail_in !== 0)
            }

            function le(e, r) {
                var t = 65535;
                if (t > e.pending_buf_size - 5) {
                    t = e.pending_buf_size - 5
                }
                for (;;) {
                    if (e.lookahead <= 1) {
                        fe(e);
                        if (e.lookahead === 0 && r === l) {
                            return K
                        }
                        if (e.lookahead === 0) {
                            break
                        }
                    }
                    e.strstart += e.lookahead;
                    e.lookahead = 0;
                    var a = e.block_start + t;
                    if (e.strstart === 0 || e.strstart >= a) {
                        e.lookahead = e.strstart - a;
                        e.strstart = a;
                        te(e, false);
                        if (e.strm.avail_out === 0) {
                            return K
                        }
                    }
                    if (e.strstart - e.block_start >= e.w_size - M) {
                        te(e, false);
                        if (e.strm.avail_out === 0) {
                            return K
                        }
                    }
                }
                e.insert = 0;
                if (r === u) {
                    te(e, true);
                    if (e.strm.avail_out === 0) {
                        return $
                    }
                    return Z
                }
                if (e.strstart > e.block_start) {
                    te(e, false);
                    if (e.strm.avail_out === 0) {
                        return K
                    }
                }
                return K
            }

            function oe(e, r) {
                var t;
                var a;
                for (;;) {
                    if (e.lookahead < M) {
                        fe(e);
                        if (e.lookahead < M && r === l) {
                            return K
                        }
                        if (e.lookahead === 0) {
                            break
                        }
                    }
                    t = 0;
                    if (e.lookahead >= N) {
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask;
                        t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                        e.head[e.ins_h] = e.strstart
                    }
                    if (t !== 0 && e.strstart - t <= e.w_size - M) {
                        e.match_length = se(e, t)
                    }
                    if (e.match_length >= N) {
                        a = n._tr_tally(e, e.strstart - e.match_start, e.match_length - N);
                        e.lookahead -= e.match_length;
                        if (e.match_length <= e.max_lazy_match && e.lookahead >= N) {
                            e.match_length--;
                            do {
                                e.strstart++;
                                e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask;
                                t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                                e.head[e.ins_h] = e.strstart
                            } while (--e.match_length !== 0);
                            e.strstart++
                        } else {
                            e.strstart += e.match_length;
                            e.match_length = 0;
                            e.ins_h = e.window[e.strstart];
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask
                        }
                    } else {
                        a = n._tr_tally(e, 0, e.window[e.strstart]);
                        e.lookahead--;
                        e.strstart++
                    }
                    if (a) {
                        te(e, false);
                        if (e.strm.avail_out === 0) {
                            return K
                        }
                    }
                }
                e.insert = e.strstart < N - 1 ? e.strstart : N - 1;
                if (r === u) {
                    te(e, true);
                    if (e.strm.avail_out === 0) {
                        return $
                    }
                    return Z
                }
                if (e.last_lit) {
                    te(e, false);
                    if (e.strm.avail_out === 0) {
                        return K
                    }
                }
                return Y
            }

            function ce(e, r) {
                var t;
                var a;
                var i;
                for (;;) {
                    if (e.lookahead < M) {
                        fe(e);
                        if (e.lookahead < M && r === l) {
                            return K
                        }
                        if (e.lookahead === 0) {
                            break
                        }
                    }
                    t = 0;
                    if (e.lookahead >= N) {
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask;
                        t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                        e.head[e.ins_h] = e.strstart
                    }
                    e.prev_length = e.match_length;
                    e.prev_match = e.match_start;
                    e.match_length = N - 1;
                    if (t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - M) {
                        e.match_length = se(e, t);
                        if (e.match_length <= 5 && (e.strategy === w || e.match_length === N && e.strstart - e.match_start > 4096)) {
                            e.match_length = N - 1
                        }
                    }
                    if (e.prev_length >= N && e.match_length <= e.prev_length) {
                        i = e.strstart + e.lookahead - N;
                        a = n._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - N);
                        e.lookahead -= e.prev_length - 1;
                        e.prev_length -= 2;
                        do {
                            if (++e.strstart <= i) {
                                e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + N - 1]) & e.hash_mask;
                                t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                                e.head[e.ins_h] = e.strstart
                            }
                        } while (--e.prev_length !== 0);
                        e.match_available = 0;
                        e.match_length = N - 1;
                        e.strstart++;
                        if (a) {
                            te(e, false);
                            if (e.strm.avail_out === 0) {
                                return K
                            }
                        }
                    } else if (e.match_available) {
                        a = n._tr_tally(e, 0, e.window[e.strstart - 1]);
                        if (a) {
                            te(e, false)
                        }
                        e.strstart++;
                        e.lookahead--;
                        if (e.strm.avail_out === 0) {
                            return K
                        }
                    } else {
                        e.match_available = 1;
                        e.strstart++;
                        e.lookahead--
                    }
                }
                if (e.match_available) {
                    a = n._tr_tally(e, 0, e.window[e.strstart - 1]);
                    e.match_available = 0
                }
                e.insert = e.strstart < N - 1 ? e.strstart : N - 1;
                if (r === u) {
                    te(e, true);
                    if (e.strm.avail_out === 0) {
                        return $
                    }
                    return Z
                }
                if (e.last_lit) {
                    te(e, false);
                    if (e.strm.avail_out === 0) {
                        return K
                    }
                }
                return Y
            }

            function ue(e, r) {
                var t;
                var a;
                var i, s;
                var f = e.window;
                for (;;) {
                    if (e.lookahead <= L) {
                        fe(e);
                        if (e.lookahead <= L && r === l) {
                            return K
                        }
                        if (e.lookahead === 0) {
                            break
                        }
                    }
                    e.match_length = 0;
                    if (e.lookahead >= N && e.strstart > 0) {
                        i = e.strstart - 1;
                        a = f[i];
                        if (a === f[++i] && a === f[++i] && a === f[++i]) {
                            s = e.strstart + L;
                            do {} while (a === f[++i] && a === f[++i] && a === f[++i] && a === f[++i] && a === f[++i] && a === f[++i] && a === f[++i] && a === f[++i] && i < s);
                            e.match_length = L - (s - i);
                            if (e.match_length > e.lookahead) {
                                e.match_length = e.lookahead
                            }
                        }
                    }
                    if (e.match_length >= N) {
                        t = n._tr_tally(e, 1, e.match_length - N);
                        e.lookahead -= e.match_length;
                        e.strstart += e.match_length;
                        e.match_length = 0
                    } else {
                        t = n._tr_tally(e, 0, e.window[e.strstart]);
                        e.lookahead--;
                        e.strstart++
                    }
                    if (t) {
                        te(e, false);
                        if (e.strm.avail_out === 0) {
                            return K
                        }
                    }
                }
                e.insert = 0;
                if (r === u) {
                    te(e, true);
                    if (e.strm.avail_out === 0) {
                        return $
                    }
                    return Z
                }
                if (e.last_lit) {
                    te(e, false);
                    if (e.strm.avail_out === 0) {
                        return K
                    }
                }
                return Y
            }

            function he(e, r) {
                var t;
                for (;;) {
                    if (e.lookahead === 0) {
                        fe(e);
                        if (e.lookahead === 0) {
                            if (r === l) {
                                return K
                            }
                            break
                        }
                    }
                    e.match_length = 0;
                    t = n._tr_tally(e, 0, e.window[e.strstart]);
                    e.lookahead--;
                    e.strstart++;
                    if (t) {
                        te(e, false);
                        if (e.strm.avail_out === 0) {
                            return K
                        }
                    }
                }
                e.insert = 0;
                if (r === u) {
                    te(e, true);
                    if (e.strm.avail_out === 0) {
                        return $
                    }
                    return Z
                }
                if (e.last_lit) {
                    te(e, false);
                    if (e.strm.avail_out === 0) {
                        return K
                    }
                }
                return Y
            }
            var de = function(e, r, t, a, n) {
                this.good_length = e;
                this.max_lazy = r;
                this.nice_length = t;
                this.max_chain = a;
                this.func = n
            };
            var ve;
            ve = [new de(0, 0, 0, 0, le), new de(4, 4, 8, 4, oe), new de(4, 5, 16, 8, oe), new de(4, 6, 32, 32, oe), new de(4, 4, 16, 16, ce), new de(8, 16, 32, 32, ce), new de(8, 16, 128, 128, ce), new de(8, 32, 128, 256, ce), new de(32, 128, 258, 1024, ce), new de(32, 258, 258, 4096, ce)];

            function pe(e) {
                e.window_size = 2 * e.w_size;
                ee(e.head);
                e.max_lazy_match = ve[e.level].max_lazy;
                e.good_match = ve[e.level].good_length;
                e.nice_match = ve[e.level].nice_length;
                e.max_chain_length = ve[e.level].max_chain;
                e.strstart = 0;
                e.block_start = 0;
                e.lookahead = 0;
                e.insert = 0;
                e.match_length = e.prev_length = N - 1;
                e.match_available = 0;
                e.ins_h = 0
            }

            function me() {
                this.strm = null;
                this.status = 0;
                this.pending_buf = null;
                this.pending_buf_size = 0;
                this.pending_out = 0;
                this.pending = 0;
                this.wrap = 0;
                this.gzhead = null;
                this.gzindex = 0;
                this.method = B;
                this.last_flush = -1;
                this.w_size = 0;
                this.w_bits = 0;
                this.w_mask = 0;
                this.window = null;
                this.window_size = 0;
                this.prev = null;
                this.head = null;
                this.ins_h = 0;
                this.hash_size = 0;
                this.hash_bits = 0;
                this.hash_mask = 0;
                this.hash_shift = 0;
                this.block_start = 0;
                this.match_length = 0;
                this.prev_match = 0;
                this.match_available = 0;
                this.strstart = 0;
                this.match_start = 0;
                this.lookahead = 0;
                this.prev_length = 0;
                this.max_chain_length = 0;
                this.max_lazy_match = 0;
                this.level = 0;
                this.strategy = 0;
                this.good_match = 0;
                this.nice_match = 0;
                this.dyn_ltree = new a.Buf16(O * 2);
                this.dyn_dtree = new a.Buf16((2 * D + 1) * 2);
                this.bl_tree = new a.Buf16((2 * F + 1) * 2);
                ee(this.dyn_ltree);
                ee(this.dyn_dtree);
                ee(this.bl_tree);
                this.l_desc = null;
                this.d_desc = null;
                this.bl_desc = null;
                this.bl_count = new a.Buf16(P + 1);
                this.heap = new a.Buf16(2 * R + 1);
                ee(this.heap);
                this.heap_len = 0;
                this.heap_max = 0;
                this.depth = new a.Buf16(2 * R + 1);
                ee(this.depth);
                this.l_buf = 0;
                this.lit_bufsize = 0;
                this.last_lit = 0;
                this.d_buf = 0;
                this.opt_len = 0;
                this.static_len = 0;
                this.matches = 0;
                this.insert = 0;
                this.bi_buf = 0;
                this.bi_valid = 0
            }

            function be(e) {
                var r;
                if (!e || !e.state) {
                    return J(e, p)
                }
                e.total_in = e.total_out = 0;
                e.data_type = C;
                r = e.state;
                r.pending = 0;
                r.pending_out = 0;
                if (r.wrap < 0) {
                    r.wrap = -r.wrap
                }
                r.status = r.wrap ? H : G;
                e.adler = r.wrap === 2 ? 0 : 1;
                r.last_flush = l;
                n._tr_init(r);
                return d
            }

            function ge(e) {
                var r = be(e);
                if (r === d) {
                    pe(e.state)
                }
                return r
            }

            function we(e, r) {
                if (!e || !e.state) {
                    return p
                }
                if (e.state.wrap !== 2) {
                    return p
                }
                e.state.gzhead = r;
                return d
            }

            function Ee(e, r, t, n, i, s) {
                if (!e) {
                    return p
                }
                var f = 1;
                if (r === g) {
                    r = 6
                }
                if (n < 0) {
                    f = 0;
                    n = -n
                } else if (n > 15) {
                    f = 2;
                    n -= 16
                }
                if (i < 1 || i > T || t !== B || n < 8 || n > 15 || r < 0 || r > 9 || s < 0 || s > S) {
                    return J(e, p)
                }
                if (n === 8) {
                    n = 9
                }
                var l = new me;
                e.state = l;
                l.strm = e;
                l.wrap = f;
                l.gzhead = null;
                l.w_bits = n;
                l.w_size = 1 << l.w_bits;
                l.w_mask = l.w_size - 1;
                l.hash_bits = i + 7;
                l.hash_size = 1 << l.hash_bits;
                l.hash_mask = l.hash_size - 1;
                l.hash_shift = ~~((l.hash_bits + N - 1) / N);
                l.window = new a.Buf8(l.w_size * 2);
                l.head = new a.Buf16(l.hash_size);
                l.prev = new a.Buf16(l.w_size);
                l.lit_bufsize = 1 << i + 6;
                l.pending_buf_size = l.lit_bufsize * 4;
                l.pending_buf = new a.Buf8(l.pending_buf_size);
                l.d_buf = l.lit_bufsize >> 1;
                l.l_buf = (1 + 2) * l.lit_bufsize;
                l.level = r;
                l.strategy = s;
                l.method = t;
                return ge(e)
            }

            function jszip(e, r) {
                return Ee(e, r, B, y, x, _)
            }

            function Se(e, r) {
                var t, a;
                var i, f;
                if (!e || !e.state || r > h || r < 0) {
                    return e ? J(e, p) : p
                }
                a = e.state;
                if (!e.output || !e.input && e.avail_in !== 0 || a.status === j && r !== u) {
                    return J(e, e.avail_out === 0 ? b : p)
                }
                a.strm = e;
                t = a.last_flush;
                a.last_flush = r;
                if (a.status === H) {
                    if (a.wrap === 2) {
                        e.adler = 0;
                        ae(a, 31);
                        ae(a, 139);
                        ae(a, 8);
                        if (!a.gzhead) {
                            ae(a, 0);
                            ae(a, 0);
                            ae(a, 0);
                            ae(a, 0);
                            ae(a, 0);
                            ae(a, a.level === 9 ? 2 : a.strategy >= E || a.level < 2 ? 4 : 0);
                            ae(a, Q);
                            a.status = G
                        } else {
                            ae(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (!a.gzhead.extra ? 0 : 4) + (!a.gzhead.name ? 0 : 8) + (!a.gzhead.comment ? 0 : 16));
                            ae(a, a.gzhead.time & 255);
                            ae(a, a.gzhead.time >> 8 & 255);
                            ae(a, a.gzhead.time >> 16 & 255);
                            ae(a, a.gzhead.time >> 24 & 255);
                            ae(a, a.level === 9 ? 2 : a.strategy >= E || a.level < 2 ? 4 : 0);
                            ae(a, a.gzhead.os & 255);
                            if (a.gzhead.extra && a.gzhead.extra.length) {
                                ae(a, a.gzhead.extra.length & 255);
                                ae(a, a.gzhead.extra.length >> 8 & 255)
                            }
                            if (a.gzhead.hcrc) {
                                e.adler = s(e.adler, a.pending_buf, a.pending, 0)
                            }
                            a.gzindex = 0;
                            a.status = CFB
                        }
                    } else {
                        var m = B + (a.w_bits - 8 << 4) << 8;
                        var g = -1;
                        if (a.strategy >= E || a.level < 2) {
                            g = 0
                        } else if (a.level < 6) {
                            g = 1
                        } else if (a.level === 6) {
                            g = 2
                        } else {
                            g = 3
                        }
                        m |= g << 6;
                        if (a.strstart !== 0) {
                            m |= U
                        }
                        m += 31 - m % 31;
                        a.status = G;
                        ne(a, m);
                        if (a.strstart !== 0) {
                            ne(a, e.adler >>> 16);
                            ne(a, e.adler & 65535)
                        }
                        e.adler = 1
                    }
                }
                if (a.status === CFB) {
                    if (a.gzhead.extra) {
                        i = a.pending;
                        while (a.gzindex < (a.gzhead.extra.length & 65535)) {
                            if (a.pending === a.pending_buf_size) {
                                if (a.gzhead.hcrc && a.pending > i) {
                                    e.adler = s(e.adler, a.pending_buf, a.pending - i, i)
                                }
                                re(e);
                                i = a.pending;
                                if (a.pending === a.pending_buf_size) {
                                    break
                                }
                            }
                            ae(a, a.gzhead.extra[a.gzindex] & 255);
                            a.gzindex++
                        }
                        if (a.gzhead.hcrc && a.pending > i) {
                            e.adler = s(e.adler, a.pending_buf, a.pending - i, i)
                        }
                        if (a.gzindex === a.gzhead.extra.length) {
                            a.gzindex = 0;
                            a.status = V
                        }
                    } else {
                        a.status = V
                    }
                }
                if (a.status === V) {
                    if (a.gzhead.name) {
                        i = a.pending;
                        do {
                            if (a.pending === a.pending_buf_size) {
                                if (a.gzhead.hcrc && a.pending > i) {
                                    e.adler = s(e.adler, a.pending_buf, a.pending - i, i)
                                }
                                re(e);
                                i = a.pending;
                                if (a.pending === a.pending_buf_size) {
                                    f = 1;
                                    break
                                }
                            }
                            if (a.gzindex < a.gzhead.name.length) {
                                f = a.gzhead.name.charCodeAt(a.gzindex++) & 255
                            } else {
                                f = 0
                            }
                            ae(a, f)
                        } while (f !== 0);
                        if (a.gzhead.hcrc && a.pending > i) {
                            e.adler = s(e.adler, a.pending_buf, a.pending - i, i)
                        }
                        if (f === 0) {
                            a.gzindex = 0;
                            a.status = z
                        }
                    } else {
                        a.status = z
                    }
                }
                if (a.status === z) {
                    if (a.gzhead.comment) {
                        i = a.pending;
                        do {
                            if (a.pending === a.pending_buf_size) {
                                if (a.gzhead.hcrc && a.pending > i) {
                                    e.adler = s(e.adler, a.pending_buf, a.pending - i, i)
                                }
                                re(e);
                                i = a.pending;
                                if (a.pending === a.pending_buf_size) {
                                    f = 1;
                                    break
                                }
                            }
                            if (a.gzindex < a.gzhead.comment.length) {
                                f = a.gzhead.comment.charCodeAt(a.gzindex++) & 255
                            } else {
                                f = 0
                            }
                            ae(a, f)
                        } while (f !== 0);
                        if (a.gzhead.hcrc && a.pending > i) {
                            e.adler = s(e.adler, a.pending_buf, a.pending - i, i)
                        }
                        if (f === 0) {
                            a.status = X
                        }
                    } else {
                        a.status = X
                    }
                }
                if (a.status === X) {
                    if (a.gzhead.hcrc) {
                        if (a.pending + 2 > a.pending_buf_size) {
                            re(e)
                        }
                        if (a.pending + 2 <= a.pending_buf_size) {
                            ae(a, e.adler & 255);
                            ae(a, e.adler >> 8 & 255);
                            e.adler = 0;
                            a.status = G
                        }
                    } else {
                        a.status = G
                    }
                }
                if (a.pending !== 0) {
                    re(e);
                    if (e.avail_out === 0) {
                        a.last_flush = -1;
                        return d
                    }
                } else if (e.avail_in === 0 && q(r) <= q(t) && r !== u) {
                    return J(e, b)
                }
                if (a.status === j && e.avail_in !== 0) {
                    return J(e, b)
                }
                if (e.avail_in !== 0 || a.lookahead !== 0 || r !== l && a.status !== j) {
                    var w = a.strategy === E ? he(a, r) : a.strategy === k ? ue(a, r) : ve[a.level].func(a, r);
                    if (w === $ || w === Z) {
                        a.status = j
                    }
                    if (w === K || w === $) {
                        if (e.avail_out === 0) {
                            a.last_flush = -1
                        }
                        return d
                    }
                    if (w === Y) {
                        if (r === o) {
                            n._tr_align(a)
                        } else if (r !== h) {
                            n._tr_stored_block(a, 0, 0, false);
                            if (r === c) {
                                ee(a.head);
                                if (a.lookahead === 0) {
                                    a.strstart = 0;
                                    a.block_start = 0;
                                    a.insert = 0
                                }
                            }
                        }
                        re(e);
                        if (e.avail_out === 0) {
                            a.last_flush = -1;
                            return d
                        }
                    }
                }
                if (r !== u) {
                    return d
                }
                if (a.wrap <= 0) {
                    return v
                }
                if (a.wrap === 2) {
                    ae(a, e.adler & 255);
                    ae(a, e.adler >> 8 & 255);
                    ae(a, e.adler >> 16 & 255);
                    ae(a, e.adler >> 24 & 255);
                    ae(a, e.total_in & 255);
                    ae(a, e.total_in >> 8 & 255);
                    ae(a, e.total_in >> 16 & 255);
                    ae(a, e.total_in >> 24 & 255)
                } else {
                    ne(a, e.adler >>> 16);
                    ne(a, e.adler & 65535)
                }
                re(e);
                if (a.wrap > 0) {
                    a.wrap = -a.wrap
                }
                return a.pending !== 0 ? d : v
            }

            function _e(e) {
                var r;
                if (!e || !e.state) {
                    return p
                }
                r = e.state.status;
                if (r !== H && r !== CFB && r !== V && r !== z && r !== X && r !== G && r !== j) {
                    return J(e, p)
                }
                e.state = null;
                return r === G ? J(e, m) : d
            }
            t.deflateInit = jszip;
            t.deflateInit2 = Ee;
            t.deflateReset = ge;
            t.deflateResetKeep = be;
            t.deflateSetHeader = we;
            t.deflate = Se;
            t.deflateEnd = _e;
            t.deflateInfo = "pako deflate (from Nodeca project)"
        }, {
            "../utils/common": 27,
            "./adler32": 29,
            "./crc32": 31,
            "./messages": 37,
            "./trees": 38
        }],
        33: [function(e, r, t) {
            "use strict";

            function a() {
                this.text = 0;
                this.time = 0;
                this.xflags = 0;
                this.os = 0;
                this.extra = null;
                this.extra_len = 0;
                this.name = "";
                this.comment = "";
                this.hcrc = 0;
                this.done = false
            }
            r.exports = a
        }, {}],
        34: [function(e, r, t) {
            "use strict";
            var a = 30;
            var n = 12;
            r.exports = function i(e, r) {
                var t;
                var i;
                var s;
                var f;
                var l;
                var o;
                var c;
                var u;
                var h;
                var d;
                var v;
                var p;
                var m;
                var b;
                var g;
                var w;
                var E;
                var k;
                var S;
                var _;
                var C;
                var B;
                var T;
                var y, x;
                t = e.state;
                i = e.next_in;
                y = e.input;
                s = i + (e.avail_in - 5);
                f = e.next_out;
                x = e.output;
                l = f - (r - e.avail_out);
                o = f + (e.avail_out - 257);
                c = t.dmax;
                u = t.wsize;
                h = t.whave;
                d = t.wnext;
                v = t.window;
                p = t.hold;
                m = t.bits;
                b = t.lencode;
                g = t.distcode;
                w = (1 << t.lenbits) - 1;
                E = (1 << t.distbits) - 1;
                e: do {
                    if (m < 15) {
                        p += y[i++] << m;
                        m += 8;
                        p += y[i++] << m;
                        m += 8
                    }
                    k = b[p & w];
                    r: for (;;) {
                        S = k >>> 24;
                        p >>>= S;
                        m -= S;
                        S = k >>> 16 & 255;
                        if (S === 0) {
                            x[f++] = k & 65535
                        } else if (S & 16) {
                            _ = k & 65535;
                            S &= 15;
                            if (S) {
                                if (m < S) {
                                    p += y[i++] << m;
                                    m += 8
                                }
                                _ += p & (1 << S) - 1;
                                p >>>= S;
                                m -= S
                            }
                            if (m < 15) {
                                p += y[i++] << m;
                                m += 8;
                                p += y[i++] << m;
                                m += 8
                            }
                            k = g[p & E];
                            t: for (;;) {
                                S = k >>> 24;
                                p >>>= S;
                                m -= S;
                                S = k >>> 16 & 255;
                                if (S & 16) {
                                    C = k & 65535;
                                    S &= 15;
                                    if (m < S) {
                                        p += y[i++] << m;
                                        m += 8;
                                        if (m < S) {
                                            p += y[i++] << m;
                                            m += 8
                                        }
                                    }
                                    C += p & (1 << S) - 1;
                                    if (C > c) {
                                        e.msg = "invalid distance too far back";
                                        t.mode = a;
                                        break e
                                    }
                                    p >>>= S;
                                    m -= S;
                                    S = f - l;
                                    if (C > S) {
                                        S = C - S;
                                        if (S > h) {
                                            if (t.sane) {
                                                e.msg = "invalid distance too far back";
                                                t.mode = a;
                                                break e
                                            }
                                        }
                                        B = 0;
                                        T = v;
                                        if (d === 0) {
                                            B += u - S;
                                            if (S < _) {
                                                _ -= S;
                                                do {
                                                    x[f++] = v[B++]
                                                } while (--S);
                                                B = f - C;
                                                T = x
                                            }
                                        } else if (d < S) {
                                            B += u + d - S;
                                            S -= d;
                                            if (S < _) {
                                                _ -= S;
                                                do {
                                                    x[f++] = v[B++]
                                                } while (--S);
                                                B = 0;
                                                if (d < _) {
                                                    S = d;
                                                    _ -= S;
                                                    do {
                                                        x[f++] = v[B++]
                                                    } while (--S);
                                                    B = f - C;
                                                    T = x
                                                }
                                            }
                                        } else {
                                            B += d - S;
                                            if (S < _) {
                                                _ -= S;
                                                do {
                                                    x[f++] = v[B++]
                                                } while (--S);
                                                B = f - C;
                                                T = x
                                            }
                                        }
                                        while (_ > 2) {
                                            x[f++] = T[B++];
                                            x[f++] = T[B++];
                                            x[f++] = T[B++];
                                            _ -= 3
                                        }
                                        if (_) {
                                            x[f++] = T[B++];
                                            if (_ > 1) {
                                                x[f++] = T[B++]
                                            }
                                        }
                                    } else {
                                        B = f - C;
                                        do {
                                            x[f++] = x[B++];
                                            x[f++] = x[B++];
                                            x[f++] = x[B++];
                                            _ -= 3
                                        } while (_ > 2);
                                        if (_) {
                                            x[f++] = x[B++];
                                            if (_ > 1) {
                                                x[f++] = x[B++]
                                            }
                                        }
                                    }
                                } else if ((S & 64) === 0) {
                                    k = g[(k & 65535) + (p & (1 << S) - 1)];
                                    continue t
                                } else {
                                    e.msg = "invalid distance code";
                                    t.mode = a;
                                    break e
                                }
                                break
                            }
                        } else if ((S & 64) === 0) {
                            k = b[(k & 65535) + (p & (1 << S) - 1)];
                            continue r
                        } else if (S & 32) {
                            t.mode = n;
                            break e
                        } else {
                            e.msg = "invalid literal/length code";
                            t.mode = a;
                            break e
                        }
                        break
                    }
                } while (i < s && f < o);
                _ = m >> 3;
                i -= _;
                m -= _ << 3;
                p &= (1 << m) - 1;
                e.next_in = i;
                e.next_out = f;
                e.avail_in = i < s ? 5 + (s - i) : 5 - (i - s);
                e.avail_out = f < o ? 257 + (o - f) : 257 - (f - o);
                t.hold = p;
                t.bits = m;
                return
            }
        }, {}],
        35: [function(e, r, t) {
            "use strict";
            var a = e("../utils/common");
            var n = e("./adler32");
            var i = e("./crc32");
            var s = e("./inffast");
            var f = e("./inftrees");
            var l = 0;
            var o = 1;
            var c = 2;
            var u = 4;
            var h = 5;
            var d = 6;
            var v = 0;
            var p = 1;
            var m = 2;
            var b = -2;
            var g = -3;
            var w = -4;
            var E = -5;
            var k = 8;
            var S = 1;
            var _ = 2;
            var C = 3;
            var B = 4;
            var T = 5;
            var y = 6;
            var x = 7;
            var A = 8;
            var I = 9;
            var R = 10;
            var D = 11;
            var F = 12;
            var O = 13;
            var P = 14;
            var N = 15;
            var L = 16;
            var M = 17;
            var U = 18;
            var H = 19;
            var CFB = 20;
            var V = 21;
            var z = 22;
            var X = 23;
            var G = 24;
            var j = 25;
            var K = 26;
            var Y = 27;
            var $ = 28;
            var Z = 29;
            var Q = 30;
            var J = 31;
            var q = 32;
            var ee = 852;
            var re = 592;
            var te = 15;
            var ae = te;

            function ne(e) {
                return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24)
            }

            function ie() {
                this.mode = 0;
                this.last = false;
                this.wrap = 0;
                this.havedict = false;
                this.flags = 0;
                this.dmax = 0;
                this.check = 0;
                this.total = 0;
                this.head = null;
                this.wbits = 0;
                this.wsize = 0;
                this.whave = 0;
                this.wnext = 0;
                this.window = null;
                this.hold = 0;
                this.bits = 0;
                this.length = 0;
                this.offset = 0;
                this.extra = 0;
                this.lencode = null;
                this.distcode = null;
                this.lenbits = 0;
                this.distbits = 0;
                this.ncode = 0;
                this.nlen = 0;
                this.ndist = 0;
                this.have = 0;
                this.next = null;
                this.lens = new a.Buf16(320);
                this.work = new a.Buf16(288);
                this.lendyn = null;
                this.distdyn = null;
                this.sane = 0;
                this.back = 0;
                this.was = 0
            }

            function se(e) {
                var r;
                if (!e || !e.state) {
                    return b
                }
                r = e.state;
                e.total_in = e.total_out = r.total = 0;
                e.msg = "";
                if (r.wrap) {
                    e.adler = r.wrap & 1
                }
                r.mode = S;
                r.last = 0;
                r.havedict = 0;
                r.dmax = 32768;
                r.head = null;
                r.hold = 0;
                r.bits = 0;
                r.lencode = r.lendyn = new a.Buf32(ee);
                r.distcode = r.distdyn = new a.Buf32(re);
                r.sane = 1;
                r.back = -1;
                return v
            }

            function fe(e) {
                var r;
                if (!e || !e.state) {
                    return b
                }
                r = e.state;
                r.wsize = 0;
                r.whave = 0;
                r.wnext = 0;
                return se(e)
            }

            function le(e, r) {
                var t;
                var a;
                if (!e || !e.state) {
                    return b
                }
                a = e.state;
                if (r < 0) {
                    t = 0;
                    r = -r
                } else {
                    t = (r >> 4) + 1;
                    if (r < 48) {
                        r &= 15
                    }
                }
                if (r && (r < 8 || r > 15)) {
                    return b
                }
                if (a.window !== null && a.wbits !== r) {
                    a.window = null
                }
                a.wrap = t;
                a.wbits = r;
                return fe(e)
            }

            function oe(e, r) {
                var t;
                var a;
                if (!e) {
                    return b
                }
                a = new ie;
                e.state = a;
                a.window = null;
                t = le(e, r);
                if (t !== v) {
                    e.state = null
                }
                return t
            }

            function ce(e) {
                return oe(e, ae)
            }
            var ue = true;
            var he, de;

            function ve(e) {
                if (ue) {
                    var r;
                    he = new a.Buf32(512);
                    de = new a.Buf32(32);
                    r = 0;
                    while (r < 144) {
                        e.lens[r++] = 8
                    }
                    while (r < 256) {
                        e.lens[r++] = 9
                    }
                    while (r < 280) {
                        e.lens[r++] = 7
                    }
                    while (r < 288) {
                        e.lens[r++] = 8
                    }
                    f(o, e.lens, 0, 288, he, 0, e.work, {
                        bits: 9
                    });
                    r = 0;
                    while (r < 32) {
                        e.lens[r++] = 5
                    }
                    f(c, e.lens, 0, 32, de, 0, e.work, {
                        bits: 5
                    });
                    ue = false
                }
                e.lencode = he;
                e.lenbits = 9;
                e.distcode = de;
                e.distbits = 5
            }

            function pe(e, r, t, n) {
                var i;
                var s = e.state;
                if (s.window === null) {
                    s.wsize = 1 << s.wbits;
                    s.wnext = 0;
                    s.whave = 0;
                    s.window = new a.Buf8(s.wsize)
                }
                if (n >= s.wsize) {
                    a.arraySet(s.window, r, t - s.wsize, s.wsize, 0);
                    s.wnext = 0;
                    s.whave = s.wsize
                } else {
                    i = s.wsize - s.wnext;
                    if (i > n) {
                        i = n
                    }
                    a.arraySet(s.window, r, t - n, i, s.wnext);
                    n -= i;
                    if (n) {
                        a.arraySet(s.window, r, t - n, n, 0);
                        s.wnext = n;
                        s.whave = s.wsize
                    } else {
                        s.wnext += i;
                        if (s.wnext === s.wsize) {
                            s.wnext = 0
                        }
                        if (s.whave < s.wsize) {
                            s.whave += i
                        }
                    }
                }
                return 0
            }

            function me(e, r) {
                var t;
                var ee, re;
                var te;
                var ae;
                var ie, se;
                var fe;
                var le;
                var oe, ce;
                var ue;
                var he;
                var de;
                var me = 0;
                var be, ge, we;
                var Ee, jszip, Se;
                var _e;
                var Ce;
                var Be = new a.Buf8(4);
                var Te;
                var ye;
                var xe = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) {
                    return b
                }
                t = e.state;
                if (t.mode === F) {
                    t.mode = O
                }
                ae = e.next_out;
                re = e.output;
                se = e.avail_out;
                te = e.next_in;
                ee = e.input;
                ie = e.avail_in;
                fe = t.hold;
                le = t.bits;
                oe = ie;
                ce = se;
                Ce = v;
                e: for (;;) {
                    switch (t.mode) {
                        case S:
                            if (t.wrap === 0) {
                                t.mode = O;
                                break
                            }
                            while (le < 16) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            if (t.wrap & 2 && fe === 35615) {
                                t.check = 0;
                                Be[0] = fe & 255;
                                Be[1] = fe >>> 8 & 255;
                                t.check = i(t.check, Be, 2, 0);
                                fe = 0;
                                le = 0;
                                t.mode = _;
                                break
                            }
                            t.flags = 0;
                            if (t.head) {
                                t.head.done = false
                            }
                            if (!(t.wrap & 1) || (((fe & 255) << 8) + (fe >> 8)) % 31) {
                                e.msg = "incorrect header check";
                                t.mode = Q;
                                break
                            }
                            if ((fe & 15) !== k) {
                                e.msg = "unknown compression method";
                                t.mode = Q;
                                break
                            }
                            fe >>>= 4;
                            le -= 4;
                            _e = (fe & 15) + 8;
                            if (t.wbits === 0) {
                                t.wbits = _e
                            } else if (_e > t.wbits) {
                                e.msg = "invalid window size";
                                t.mode = Q;
                                break
                            }
                            t.dmax = 1 << _e;
                            e.adler = t.check = 1;
                            t.mode = fe & 512 ? R : F;
                            fe = 0;
                            le = 0;
                            break;
                        case _:
                            while (le < 16) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            t.flags = fe;
                            if ((t.flags & 255) !== k) {
                                e.msg = "unknown compression method";
                                t.mode = Q;
                                break
                            }
                            if (t.flags & 57344) {
                                e.msg = "unknown header flags set";
                                t.mode = Q;
                                break
                            }
                            if (t.head) {
                                t.head.text = fe >> 8 & 1
                            }
                            if (t.flags & 512) {
                                Be[0] = fe & 255;
                                Be[1] = fe >>> 8 & 255;
                                t.check = i(t.check, Be, 2, 0)
                            }
                            fe = 0;
                            le = 0;
                            t.mode = C;
                        case C:
                            while (le < 32) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            if (t.head) {
                                t.head.time = fe
                            }
                            if (t.flags & 512) {
                                Be[0] = fe & 255;
                                Be[1] = fe >>> 8 & 255;
                                Be[2] = fe >>> 16 & 255;
                                Be[3] = fe >>> 24 & 255;
                                t.check = i(t.check, Be, 4, 0)
                            }
                            fe = 0;
                            le = 0;
                            t.mode = B;
                        case B:
                            while (le < 16) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            if (t.head) {
                                t.head.xflags = fe & 255;
                                t.head.os = fe >> 8
                            }
                            if (t.flags & 512) {
                                Be[0] = fe & 255;
                                Be[1] = fe >>> 8 & 255;
                                t.check = i(t.check, Be, 2, 0)
                            }
                            fe = 0;
                            le = 0;
                            t.mode = T;
                        case T:
                            if (t.flags & 1024) {
                                while (le < 16) {
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                t.length = fe;
                                if (t.head) {
                                    t.head.extra_len = fe
                                }
                                if (t.flags & 512) {
                                    Be[0] = fe & 255;
                                    Be[1] = fe >>> 8 & 255;
                                    t.check = i(t.check, Be, 2, 0)
                                }
                                fe = 0;
                                le = 0
                            } else if (t.head) {
                                t.head.extra = null
                            }
                            t.mode = y;
                        case y:
                            if (t.flags & 1024) {
                                ue = t.length;
                                if (ue > ie) {
                                    ue = ie
                                }
                                if (ue) {
                                    if (t.head) {
                                        _e = t.head.extra_len - t.length;
                                        if (!t.head.extra) {
                                            t.head.extra = new Array(t.head.extra_len)
                                        }
                                        a.arraySet(t.head.extra, ee, te, ue, _e)
                                    }
                                    if (t.flags & 512) {
                                        t.check = i(t.check, ee, ue, te)
                                    }
                                    ie -= ue;
                                    te += ue;
                                    t.length -= ue
                                }
                                if (t.length) {
                                    break e
                                }
                            }
                            t.length = 0;
                            t.mode = x;
                        case x:
                            if (t.flags & 2048) {
                                if (ie === 0) {
                                    break e
                                }
                                ue = 0;
                                do {
                                    _e = ee[te + ue++];
                                    if (t.head && _e && t.length < 65536) {
                                        t.head.name += String.fromCharCode(_e)
                                    }
                                } while (_e && ue < ie);
                                if (t.flags & 512) {
                                    t.check = i(t.check, ee, ue, te)
                                }
                                ie -= ue;
                                te += ue;
                                if (_e) {
                                    break e
                                }
                            } else if (t.head) {
                                t.head.name = null
                            }
                            t.length = 0;
                            t.mode = A;
                        case A:
                            if (t.flags & 4096) {
                                if (ie === 0) {
                                    break e
                                }
                                ue = 0;
                                do {
                                    _e = ee[te + ue++];
                                    if (t.head && _e && t.length < 65536) {
                                        t.head.comment += String.fromCharCode(_e)
                                    }
                                } while (_e && ue < ie);
                                if (t.flags & 512) {
                                    t.check = i(t.check, ee, ue, te)
                                }
                                ie -= ue;
                                te += ue;
                                if (_e) {
                                    break e
                                }
                            } else if (t.head) {
                                t.head.comment = null
                            }
                            t.mode = I;
                        case I:
                            if (t.flags & 512) {
                                while (le < 16) {
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                if (fe !== (t.check & 65535)) {
                                    e.msg = "header crc mismatch";
                                    t.mode = Q;
                                    break
                                }
                                fe = 0;
                                le = 0
                            }
                            if (t.head) {
                                t.head.hcrc = t.flags >> 9 & 1;
                                t.head.done = true
                            }
                            e.adler = t.check = 0;
                            t.mode = F;
                            break;
                        case R:
                            while (le < 32) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            e.adler = t.check = ne(fe);
                            fe = 0;
                            le = 0;
                            t.mode = D;
                        case D:
                            if (t.havedict === 0) {
                                e.next_out = ae;
                                e.avail_out = se;
                                e.next_in = te;
                                e.avail_in = ie;
                                t.hold = fe;
                                t.bits = le;
                                return m
                            }
                            e.adler = t.check = 1;
                            t.mode = F;
                        case F:
                            if (r === h || r === d) {
                                break e
                            };
                        case O:
                            if (t.last) {
                                fe >>>= le & 7;
                                le -= le & 7;
                                t.mode = Y;
                                break
                            }
                            while (le < 3) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            t.last = fe & 1;
                            fe >>>= 1;
                            le -= 1;
                            switch (fe & 3) {
                                case 0:
                                    t.mode = P;
                                    break;
                                case 1:
                                    ve(t);
                                    t.mode = CFB;
                                    if (r === d) {
                                        fe >>>= 2;
                                        le -= 2;
                                        break e
                                    }
                                    break;
                                case 2:
                                    t.mode = M;
                                    break;
                                case 3:
                                    e.msg = "invalid block type";
                                    t.mode = Q;
                            }
                            fe >>>= 2;
                            le -= 2;
                            break;
                        case P:
                            fe >>>= le & 7;
                            le -= le & 7;
                            while (le < 32) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            if ((fe & 65535) !== (fe >>> 16 ^ 65535)) {
                                e.msg = "invalid stored block lengths";
                                t.mode = Q;
                                break
                            }
                            t.length = fe & 65535;
                            fe = 0;
                            le = 0;
                            t.mode = N;
                            if (r === d) {
                                break e
                            };
                        case N:
                            t.mode = L;
                        case L:
                            ue = t.length;
                            if (ue) {
                                if (ue > ie) {
                                    ue = ie
                                }
                                if (ue > se) {
                                    ue = se
                                }
                                if (ue === 0) {
                                    break e
                                }
                                a.arraySet(re, ee, te, ue, ae);
                                ie -= ue;
                                te += ue;
                                se -= ue;
                                ae += ue;
                                t.length -= ue;
                                break
                            }
                            t.mode = F;
                            break;
                        case M:
                            while (le < 14) {
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            t.nlen = (fe & 31) + 257;
                            fe >>>= 5;
                            le -= 5;
                            t.ndist = (fe & 31) + 1;
                            fe >>>= 5;
                            le -= 5;
                            t.ncode = (fe & 15) + 4;
                            fe >>>= 4;
                            le -= 4;
                            if (t.nlen > 286 || t.ndist > 30) {
                                e.msg = "too many length or distance symbols";
                                t.mode = Q;
                                break
                            }
                            t.have = 0;
                            t.mode = U;
                        case U:
                            while (t.have < t.ncode) {
                                while (le < 3) {
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                t.lens[xe[t.have++]] = fe & 7;
                                fe >>>= 3;
                                le -= 3
                            }
                            while (t.have < 19) {
                                t.lens[xe[t.have++]] = 0
                            }
                            t.lencode = t.lendyn;
                            t.lenbits = 7;
                            Te = {
                                bits: t.lenbits
                            };
                            Ce = f(l, t.lens, 0, 19, t.lencode, 0, t.work, Te);
                            t.lenbits = Te.bits;
                            if (Ce) {
                                e.msg = "invalid code lengths set";
                                t.mode = Q;
                                break
                            }
                            t.have = 0;
                            t.mode = H;
                        case H:
                            while (t.have < t.nlen + t.ndist) {
                                for (;;) {
                                    me = t.lencode[fe & (1 << t.lenbits) - 1];
                                    be = me >>> 24;
                                    ge = me >>> 16 & 255;
                                    we = me & 65535;
                                    if (be <= le) {
                                        break
                                    }
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                if (we < 16) {
                                    fe >>>= be;
                                    le -= be;
                                    t.lens[t.have++] = we
                                } else {
                                    if (we === 16) {
                                        ye = be + 2;
                                        while (le < ye) {
                                            if (ie === 0) {
                                                break e
                                            }
                                            ie--;
                                            fe += ee[te++] << le;
                                            le += 8
                                        }
                                        fe >>>= be;
                                        le -= be;
                                        if (t.have === 0) {
                                            e.msg = "invalid bit length repeat";
                                            t.mode = Q;
                                            break
                                        }
                                        _e = t.lens[t.have - 1];
                                        ue = 3 + (fe & 3);
                                        fe >>>= 2;
                                        le -= 2
                                    } else if (we === 17) {
                                        ye = be + 3;
                                        while (le < ye) {
                                            if (ie === 0) {
                                                break e
                                            }
                                            ie--;
                                            fe += ee[te++] << le;
                                            le += 8
                                        }
                                        fe >>>= be;
                                        le -= be;
                                        _e = 0;
                                        ue = 3 + (fe & 7);
                                        fe >>>= 3;
                                        le -= 3
                                    } else {
                                        ye = be + 7;
                                        while (le < ye) {
                                            if (ie === 0) {
                                                break e
                                            }
                                            ie--;
                                            fe += ee[te++] << le;
                                            le += 8
                                        }
                                        fe >>>= be;
                                        le -= be;
                                        _e = 0;
                                        ue = 11 + (fe & 127);
                                        fe >>>= 7;
                                        le -= 7
                                    }
                                    if (t.have + ue > t.nlen + t.ndist) {
                                        e.msg = "invalid bit length repeat";
                                        t.mode = Q;
                                        break
                                    }
                                    while (ue--) {
                                        t.lens[t.have++] = _e
                                    }
                                }
                            }
                            if (t.mode === Q) {
                                break
                            }
                            if (t.lens[256] === 0) {
                                e.msg = "invalid code -- missing end-of-block";
                                t.mode = Q;
                                break
                            }
                            t.lenbits = 9;
                            Te = {
                                bits: t.lenbits
                            };
                            Ce = f(o, t.lens, 0, t.nlen, t.lencode, 0, t.work, Te);
                            t.lenbits = Te.bits;
                            if (Ce) {
                                e.msg = "invalid literal/lengths set";
                                t.mode = Q;
                                break
                            }
                            t.distbits = 6;
                            t.distcode = t.distdyn;
                            Te = {
                                bits: t.distbits
                            };
                            Ce = f(c, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, Te);
                            t.distbits = Te.bits;
                            if (Ce) {
                                e.msg = "invalid distances set";
                                t.mode = Q;
                                break
                            }
                            t.mode = CFB;
                            if (r === d) {
                                break e
                            };
                        case CFB:
                            t.mode = V;
                        case V:
                            if (ie >= 6 && se >= 258) {
                                e.next_out = ae;
                                e.avail_out = se;
                                e.next_in = te;
                                e.avail_in = ie;
                                t.hold = fe;
                                t.bits = le;
                                s(e, ce);
                                ae = e.next_out;
                                re = e.output;
                                se = e.avail_out;
                                te = e.next_in;
                                ee = e.input;
                                ie = e.avail_in;
                                fe = t.hold;
                                le = t.bits;
                                if (t.mode === F) {
                                    t.back = -1
                                }
                                break
                            }
                            t.back = 0;
                            for (;;) {
                                me = t.lencode[fe & (1 << t.lenbits) - 1];
                                be = me >>> 24;
                                ge = me >>> 16 & 255;
                                we = me & 65535;
                                if (be <= le) {
                                    break
                                }
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            if (ge && (ge & 240) === 0) {
                                Ee = be;
                                jszip = ge;
                                Se = we;
                                for (;;) {
                                    me = t.lencode[Se + ((fe & (1 << Ee + jszip) - 1) >> Ee)];
                                    be = me >>> 24;
                                    ge = me >>> 16 & 255;
                                    we = me & 65535;
                                    if (Ee + be <= le) {
                                        break
                                    }
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                fe >>>= Ee;
                                le -= Ee;
                                t.back += Ee
                            }
                            fe >>>= be;
                            le -= be;
                            t.back += be;
                            t.length = we;
                            if (ge === 0) {
                                t.mode = K;
                                break
                            }
                            if (ge & 32) {
                                t.back = -1;
                                t.mode = F;
                                break
                            }
                            if (ge & 64) {
                                e.msg = "invalid literal/length code";
                                t.mode = Q;
                                break
                            }
                            t.extra = ge & 15;
                            t.mode = z;
                        case z:
                            if (t.extra) {
                                ye = t.extra;
                                while (le < ye) {
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                t.length += fe & (1 << t.extra) - 1;
                                fe >>>= t.extra;
                                le -= t.extra;
                                t.back += t.extra
                            }
                            t.was = t.length;
                            t.mode = X;
                        case X:
                            for (;;) {
                                me = t.distcode[fe & (1 << t.distbits) - 1];
                                be = me >>> 24;
                                ge = me >>> 16 & 255;
                                we = me & 65535;
                                if (be <= le) {
                                    break
                                }
                                if (ie === 0) {
                                    break e
                                }
                                ie--;
                                fe += ee[te++] << le;
                                le += 8
                            }
                            if ((ge & 240) === 0) {
                                Ee = be;
                                jszip = ge;
                                Se = we;
                                for (;;) {
                                    me = t.distcode[Se + ((fe & (1 << Ee + jszip) - 1) >> Ee)];
                                    be = me >>> 24;
                                    ge = me >>> 16 & 255;
                                    we = me & 65535;
                                    if (Ee + be <= le) {
                                        break
                                    }
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                fe >>>= Ee;
                                le -= Ee;
                                t.back += Ee
                            }
                            fe >>>= be;
                            le -= be;
                            t.back += be;
                            if (ge & 64) {
                                e.msg = "invalid distance code";
                                t.mode = Q;
                                break
                            }
                            t.offset = we;
                            t.extra = ge & 15;
                            t.mode = G;
                        case G:
                            if (t.extra) {
                                ye = t.extra;
                                while (le < ye) {
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                t.offset += fe & (1 << t.extra) - 1;
                                fe >>>= t.extra;
                                le -= t.extra;
                                t.back += t.extra
                            }
                            if (t.offset > t.dmax) {
                                e.msg = "invalid distance too far back";
                                t.mode = Q;
                                break
                            }
                            t.mode = j;
                        case j:
                            if (se === 0) {
                                break e
                            }
                            ue = ce - se;
                            if (t.offset > ue) {
                                ue = t.offset - ue;
                                if (ue > t.whave) {
                                    if (t.sane) {
                                        e.msg = "invalid distance too far back";
                                        t.mode = Q;
                                        break
                                    }
                                }
                                if (ue > t.wnext) {
                                    ue -= t.wnext;
                                    he = t.wsize - ue
                                } else {
                                    he = t.wnext - ue
                                }
                                if (ue > t.length) {
                                    ue = t.length
                                }
                                de = t.window
                            } else {
                                de = re;
                                he = ae - t.offset;
                                ue = t.length
                            }
                            if (ue > se) {
                                ue = se
                            }
                            se -= ue;
                            t.length -= ue;
                            do {
                                re[ae++] = de[he++]
                            } while (--ue);
                            if (t.length === 0) {
                                t.mode = V
                            }
                            break;
                        case K:
                            if (se === 0) {
                                break e
                            }
                            re[ae++] = t.length;
                            se--;
                            t.mode = V;
                            break;
                        case Y:
                            if (t.wrap) {
                                while (le < 32) {
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe |= ee[te++] << le;
                                    le += 8
                                }
                                ce -= se;
                                e.total_out += ce;
                                t.total += ce;
                                if (ce) {
                                    e.adler = t.check = t.flags ? i(t.check, re, ce, ae - ce) : n(t.check, re, ce, ae - ce)
                                }
                                ce = se;
                                if ((t.flags ? fe : ne(fe)) !== t.check) {
                                    e.msg = "incorrect data check";
                                    t.mode = Q;
                                    break
                                }
                                fe = 0;
                                le = 0
                            }
                            t.mode = $;
                        case $:
                            if (t.wrap && t.flags) {
                                while (le < 32) {
                                    if (ie === 0) {
                                        break e
                                    }
                                    ie--;
                                    fe += ee[te++] << le;
                                    le += 8
                                }
                                if (fe !== (t.total & 4294967295)) {
                                    e.msg = "incorrect length check";
                                    t.mode = Q;
                                    break
                                }
                                fe = 0;
                                le = 0
                            }
                            t.mode = Z;
                        case Z:
                            Ce = p;
                            break e;
                        case Q:
                            Ce = g;
                            break e;
                        case J:
                            return w;
                        case q:
                            ;
                        default:
                            return b;
                    }
                }
                e.next_out = ae;
                e.avail_out = se;
                e.next_in = te;
                e.avail_in = ie;
                t.hold = fe;
                t.bits = le;
                if (t.wsize || ce !== e.avail_out && t.mode < Q && (t.mode < Y || r !== u)) {
                    if (pe(e, e.output, e.next_out, ce - e.avail_out)) {
                        t.mode = J;
                        return w
                    }
                }
                oe -= e.avail_in;
                ce -= e.avail_out;
                e.total_in += oe;
                e.total_out += ce;
                t.total += ce;
                if (t.wrap && ce) {
                    e.adler = t.check = t.flags ? i(t.check, re, ce, e.next_out - ce) : n(t.check, re, ce, e.next_out - ce)
                }
                e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === F ? 128 : 0) + (t.mode === CFB || t.mode === N ? 256 : 0);
                if ((oe === 0 && ce === 0 || r === u) && Ce === v) {
                    Ce = E
                }
                return Ce
            }

            function be(e) {
                if (!e || !e.state) {
                    return b
                }
                var r = e.state;
                if (r.window) {
                    r.window = null
                }
                e.state = null;
                return v
            }

            function ge(e, r) {
                var t;
                if (!e || !e.state) {
                    return b
                }
                t = e.state;
                if ((t.wrap & 2) === 0) {
                    return b
                }
                t.head = r;
                r.done = false;
                return v
            }
            t.inflateReset = fe;
            t.inflateReset2 = le;
            t.inflateResetKeep = se;
            t.inflateInit = ce;
            t.inflateInit2 = oe;
            t.inflate = me;
            t.inflateEnd = be;
            t.inflateGetHeader = ge;
            t.inflateInfo = "pako inflate (from Nodeca project)"
        }, {
            "../utils/common": 27,
            "./adler32": 29,
            "./crc32": 31,
            "./inffast": 34,
            "./inftrees": 36
        }],
        36: [function(e, r, t) {
            "use strict";
            var a = e("../utils/common");
            var n = 15;
            var i = 852;
            var s = 592;
            var f = 0;
            var l = 1;
            var o = 2;
            var c = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
            var u = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
            var h = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
            var d = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            r.exports = function v(e, r, t, p, m, b, g, w) {
                var E = w.bits;
                var k = 0;
                var S = 0;
                var _ = 0,
                    C = 0;
                var B = 0;
                var T = 0;
                var y = 0;
                var x = 0;
                var A = 0;
                var I = 0;
                var R;
                var D;
                var F;
                var O;
                var P;
                var N = null;
                var L = 0;
                var M;
                var U = new a.Buf16(n + 1);
                var H = new a.Buf16(n + 1);
                var CFB = null;
                var V = 0;
                var z, X, G;
                for (k = 0; k <= n; k++) {
                    U[k] = 0
                }
                for (S = 0; S < p; S++) {
                    U[r[t + S]]++
                }
                B = E;
                for (C = n; C >= 1; C--) {
                    if (U[C] !== 0) {
                        break
                    }
                }
                if (B > C) {
                    B = C
                }
                if (C === 0) {
                    m[b++] = 1 << 24 | 64 << 16 | 0;
                    m[b++] = 1 << 24 | 64 << 16 | 0;
                    w.bits = 1;
                    return 0
                }
                for (_ = 1; _ < C; _++) {
                    if (U[_] !== 0) {
                        break
                    }
                }
                if (B < _) {
                    B = _
                }
                x = 1;
                for (k = 1; k <= n; k++) {
                    x <<= 1;
                    x -= U[k];
                    if (x < 0) {
                        return -1
                    }
                }
                if (x > 0 && (e === f || C !== 1)) {
                    return -1
                }
                H[1] = 0;
                for (k = 1; k < n; k++) {
                    H[k + 1] = H[k] + U[k]
                }
                for (S = 0; S < p; S++) {
                    if (r[t + S] !== 0) {
                        g[H[r[t + S]]++] = S
                    }
                }
                if (e === f) {
                    N = CFB = g;
                    M = 19
                } else if (e === l) {
                    N = c;
                    L -= 257;
                    CFB = u;
                    V -= 257;
                    M = 256
                } else {
                    N = h;
                    CFB = d;
                    M = -1
                }
                I = 0;
                S = 0;
                k = _;
                P = b;
                T = B;
                y = 0;
                F = -1;
                A = 1 << B;
                O = A - 1;
                if (e === l && A > i || e === o && A > s) {
                    return 1
                }
                var j = 0;
                for (;;) {
                    j++;
                    z = k - y;
                    if (g[S] < M) {
                        X = 0;
                        G = g[S]
                    } else if (g[S] > M) {
                        X = CFB[V + g[S]];
                        G = N[L + g[S]]
                    } else {
                        X = 32 + 64;
                        G = 0
                    }
                    R = 1 << k - y;
                    D = 1 << T;
                    _ = D;
                    do {
                        D -= R;
                        m[P + (I >> y) + D] = z << 24 | X << 16 | G | 0
                    } while (D !== 0);
                    R = 1 << k - 1;
                    while (I & R) {
                        R >>= 1
                    }
                    if (R !== 0) {
                        I &= R - 1;
                        I += R
                    } else {
                        I = 0
                    }
                    S++;
                    if (--U[k] === 0) {
                        if (k === C) {
                            break
                        }
                        k = r[t + g[S]]
                    }
                    if (k > B && (I & O) !== F) {
                        if (y === 0) {
                            y = B
                        }
                        P += _;
                        T = k - y;
                        x = 1 << T;
                        while (T + y < C) {
                            x -= U[T + y];
                            if (x <= 0) {
                                break
                            }
                            T++;
                            x <<= 1
                        }
                        A += 1 << T;
                        if (e === l && A > i || e === o && A > s) {
                            return 1
                        }
                        F = I & O;
                        m[F] = B << 24 | T << 16 | P - b | 0
                    }
                }
                if (I !== 0) {
                    m[P + I] = k - y << 24 | 64 << 16 | 0
                }
                w.bits = B;
                return 0
            }
        }, {
            "../utils/common": 27
        }],
        37: [function(e, r, t) {
            "use strict";
            r.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        }, {}],
        38: [function(e, r, t) {
            "use strict";
            var a = e("../utils/common");
            var n = 4;
            var i = 0;
            var s = 1;
            var f = 2;

            function l(e) {
                var r = e.length;
                while (--r >= 0) {
                    e[r] = 0
                }
            }
            var o = 0;
            var c = 1;
            var u = 2;
            var h = 3;
            var d = 258;
            var v = 29;
            var p = 256;
            var m = p + 1 + v;
            var b = 30;
            var g = 19;
            var w = 2 * m + 1;
            var E = 15;
            var k = 16;
            var S = 7;
            var _ = 256;
            var C = 16;
            var B = 17;
            var T = 18;
            var y = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
            var x = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
            var A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
            var I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            var R = 512;
            var D = new Array((m + 2) * 2);
            l(D);
            var F = new Array(b * 2);
            l(F);
            var O = new Array(R);
            l(O);
            var P = new Array(d - h + 1);
            l(P);
            var N = new Array(v);
            l(N);
            var L = new Array(b);
            l(L);
            var M = function(e, r, t, a, n) {
                this.static_tree = e;
                this.extra_bits = r;
                this.extra_base = t;
                this.elems = a;
                this.max_length = n;
                this.has_stree = e && e.length
            };
            var U;
            var H;
            var CFB;
            var V = function(e, r) {
                this.dyn_tree = e;
                this.max_code = 0;
                this.stat_desc = r
            };

            function z(e) {
                return e < 256 ? O[e] : O[256 + (e >>> 7)]
            }

            function X(e, r) {
                e.pending_buf[e.pending++] = r & 255;
                e.pending_buf[e.pending++] = r >>> 8 & 255
            }

            function G(e, r, t) {
                if (e.bi_valid > k - t) {
                    e.bi_buf |= r << e.bi_valid & 65535;
                    X(e, e.bi_buf);
                    e.bi_buf = r >> k - e.bi_valid;
                    e.bi_valid += t - k
                } else {
                    e.bi_buf |= r << e.bi_valid & 65535;
                    e.bi_valid += t
                }
            }

            function j(e, r, t) {
                G(e, t[r * 2], t[r * 2 + 1])
            }

            function K(e, r) {
                var t = 0;
                do {
                    t |= e & 1;
                    e >>>= 1;
                    t <<= 1
                } while (--r > 0);
                return t >>> 1
            }

            function Y(e) {
                if (e.bi_valid === 16) {
                    X(e, e.bi_buf);
                    e.bi_buf = 0;
                    e.bi_valid = 0
                } else if (e.bi_valid >= 8) {
                    e.pending_buf[e.pending++] = e.bi_buf & 255;
                    e.bi_buf >>= 8;
                    e.bi_valid -= 8
                }
            }

            function $(e, r) {
                var t = r.dyn_tree;
                var a = r.max_code;
                var n = r.stat_desc.static_tree;
                var i = r.stat_desc.has_stree;
                var s = r.stat_desc.extra_bits;
                var f = r.stat_desc.extra_base;
                var l = r.stat_desc.max_length;
                var o;
                var c, u;
                var h;
                var d;
                var v;
                var p = 0;
                for (h = 0; h <= E; h++) {
                    e.bl_count[h] = 0
                }
                t[e.heap[e.heap_max] * 2 + 1] = 0;
                for (o = e.heap_max + 1; o < w; o++) {
                    c = e.heap[o];
                    h = t[t[c * 2 + 1] * 2 + 1] + 1;
                    if (h > l) {
                        h = l;
                        p++
                    }
                    t[c * 2 + 1] = h;
                    if (c > a) {
                        continue
                    }
                    e.bl_count[h]++;
                    d = 0;
                    if (c >= f) {
                        d = s[c - f]
                    }
                    v = t[c * 2];
                    e.opt_len += v * (h + d);
                    if (i) {
                        e.static_len += v * (n[c * 2 + 1] + d)
                    }
                }
                if (p === 0) {
                    return
                }
                do {
                    h = l - 1;
                    while (e.bl_count[h] === 0) {
                        h--
                    }
                    e.bl_count[h]--;
                    e.bl_count[h + 1] += 2;
                    e.bl_count[l]--;
                    p -= 2
                } while (p > 0);
                for (h = l; h !== 0; h--) {
                    c = e.bl_count[h];
                    while (c !== 0) {
                        u = e.heap[--o];
                        if (u > a) {
                            continue
                        }
                        if (t[u * 2 + 1] !== h) {
                            e.opt_len += (h - t[u * 2 + 1]) * t[u * 2];
                            t[u * 2 + 1] = h
                        }
                        c--
                    }
                }
            }

            function Z(e, r, t) {
                var a = new Array(E + 1);
                var n = 0;
                var i;
                var s;
                for (i = 1; i <= E; i++) {
                    a[i] = n = n + t[i - 1] << 1
                }
                for (s = 0; s <= r; s++) {
                    var f = e[s * 2 + 1];
                    if (f === 0) {
                        continue
                    }
                    e[s * 2] = K(a[f]++, f)
                }
            }

            function Q() {
                var e;
                var r;
                var t;
                var a;
                var n;
                var i = new Array(E + 1);
                t = 0;
                for (a = 0; a < v - 1; a++) {
                    N[a] = t;
                    for (e = 0; e < 1 << y[a]; e++) {
                        P[t++] = a
                    }
                }
                P[t - 1] = a;
                n = 0;
                for (a = 0; a < 16; a++) {
                    L[a] = n;
                    for (e = 0; e < 1 << x[a]; e++) {
                        O[n++] = a
                    }
                }
                n >>= 7;
                for (; a < b; a++) {
                    L[a] = n << 7;
                    for (e = 0; e < 1 << x[a] - 7; e++) {
                        O[256 + n++] = a
                    }
                }
                for (r = 0; r <= E; r++) {
                    i[r] = 0
                }
                e = 0;
                while (e <= 143) {
                    D[e * 2 + 1] = 8;
                    e++;
                    i[8]++
                }
                while (e <= 255) {
                    D[e * 2 + 1] = 9;
                    e++;
                    i[9]++
                }
                while (e <= 279) {
                    D[e * 2 + 1] = 7;
                    e++;
                    i[7]++
                }
                while (e <= 287) {
                    D[e * 2 + 1] = 8;
                    e++;
                    i[8]++
                }
                Z(D, m + 1, i);
                for (e = 0; e < b; e++) {
                    F[e * 2 + 1] = 5;
                    F[e * 2] = K(e, 5)
                }
                U = new M(D, y, p + 1, m, E);
                H = new M(F, x, 0, b, E);
                CFB = new M(new Array(0), A, 0, g, S)
            }

            function J(e) {
                var r;
                for (r = 0; r < m; r++) {
                    e.dyn_ltree[r * 2] = 0
                }
                for (r = 0; r < b; r++) {
                    e.dyn_dtree[r * 2] = 0
                }
                for (r = 0; r < g; r++) {
                    e.bl_tree[r * 2] = 0
                }
                e.dyn_ltree[_ * 2] = 1;
                e.opt_len = e.static_len = 0;
                e.last_lit = e.matches = 0
            }

            function q(e) {
                if (e.bi_valid > 8) {
                    X(e, e.bi_buf)
                } else if (e.bi_valid > 0) {
                    e.pending_buf[e.pending++] = e.bi_buf
                }
                e.bi_buf = 0;
                e.bi_valid = 0
            }

            function ee(e, r, t, n) {
                q(e);
                if (n) {
                    X(e, t);
                    X(e, ~t)
                }
                a.arraySet(e.pending_buf, e.window, r, t, e.pending);
                e.pending += t
            }

            function re(e, r, t, a) {
                var n = r * 2;
                var i = t * 2;
                return e[n] < e[i] || e[n] === e[i] && a[r] <= a[t]
            }

            function te(e, r, t) {
                var a = e.heap[t];
                var n = t << 1;
                while (n <= e.heap_len) {
                    if (n < e.heap_len && re(r, e.heap[n + 1], e.heap[n], e.depth)) {
                        n++
                    }
                    if (re(r, a, e.heap[n], e.depth)) {
                        break
                    }
                    e.heap[t] = e.heap[n];
                    t = n;
                    n <<= 1
                }
                e.heap[t] = a
            }

            function ae(e, r, t) {
                var a;
                var n;
                var i = 0;
                var s;
                var f;
                if (e.last_lit !== 0) {
                    do {
                        a = e.pending_buf[e.d_buf + i * 2] << 8 | e.pending_buf[e.d_buf + i * 2 + 1];
                        n = e.pending_buf[e.l_buf + i];
                        i++;
                        if (a === 0) {
                            j(e, n, r)
                        } else {
                            s = P[n];
                            j(e, s + p + 1, r);
                            f = y[s];
                            if (f !== 0) {
                                n -= N[s];
                                G(e, n, f)
                            }
                            a--;
                            s = z(a);
                            j(e, s, t);
                            f = x[s];
                            if (f !== 0) {
                                a -= L[s];
                                G(e, a, f)
                            }
                        }
                    } while (i < e.last_lit)
                }
                j(e, _, r)
            }

            function ne(e, r) {
                var t = r.dyn_tree;
                var a = r.stat_desc.static_tree;
                var n = r.stat_desc.has_stree;
                var i = r.stat_desc.elems;
                var s, f;
                var l = -1;
                var o;
                e.heap_len = 0;
                e.heap_max = w;
                for (s = 0; s < i; s++) {
                    if (t[s * 2] !== 0) {
                        e.heap[++e.heap_len] = l = s;
                        e.depth[s] = 0
                    } else {
                        t[s * 2 + 1] = 0
                    }
                }
                while (e.heap_len < 2) {
                    o = e.heap[++e.heap_len] = l < 2 ? ++l : 0;
                    t[o * 2] = 1;
                    e.depth[o] = 0;
                    e.opt_len--;
                    if (n) {
                        e.static_len -= a[o * 2 + 1]
                    }
                }
                r.max_code = l;
                for (s = e.heap_len >> 1; s >= 1; s--) {
                    te(e, t, s)
                }
                o = i;
                do {
                    s = e.heap[1];
                    e.heap[1] = e.heap[e.heap_len--];
                    te(e, t, 1);
                    f = e.heap[1];
                    e.heap[--e.heap_max] = s;
                    e.heap[--e.heap_max] = f;
                    t[o * 2] = t[s * 2] + t[f * 2];
                    e.depth[o] = (e.depth[s] >= e.depth[f] ? e.depth[s] : e.depth[f]) + 1;
                    t[s * 2 + 1] = t[f * 2 + 1] = o;
                    e.heap[1] = o++;
                    te(e, t, 1)
                } while (e.heap_len >= 2);
                e.heap[--e.heap_max] = e.heap[1];
                $(e, r);
                Z(t, l, e.bl_count)
            }

            function ie(e, r, t) {
                var a;
                var n = -1;
                var i;
                var s = r[0 * 2 + 1];
                var f = 0;
                var l = 7;
                var o = 4;
                if (s === 0) {
                    l = 138;
                    o = 3
                }
                r[(t + 1) * 2 + 1] = 65535;
                for (a = 0; a <= t; a++) {
                    i = s;
                    s = r[(a + 1) * 2 + 1];
                    if (++f < l && i === s) {
                        continue
                    } else if (f < o) {
                        e.bl_tree[i * 2] += f
                    } else if (i !== 0) {
                        if (i !== n) {
                            e.bl_tree[i * 2]++
                        }
                        e.bl_tree[C * 2]++
                    } else if (f <= 10) {
                        e.bl_tree[B * 2]++
                    } else {
                        e.bl_tree[T * 2]++
                    }
                    f = 0;
                    n = i;
                    if (s === 0) {
                        l = 138;
                        o = 3
                    } else if (i === s) {
                        l = 6;
                        o = 3
                    } else {
                        l = 7;
                        o = 4
                    }
                }
            }

            function se(e, r, t) {
                var a;
                var n = -1;
                var i;
                var s = r[0 * 2 + 1];
                var f = 0;
                var l = 7;
                var o = 4;
                if (s === 0) {
                    l = 138;
                    o = 3
                }
                for (a = 0; a <= t; a++) {
                    i = s;
                    s = r[(a + 1) * 2 + 1];
                    if (++f < l && i === s) {
                        continue
                    } else if (f < o) {
                        do {
                            j(e, i, e.bl_tree)
                        } while (--f !== 0)
                    } else if (i !== 0) {
                        if (i !== n) {
                            j(e, i, e.bl_tree);
                            f--
                        }
                        j(e, C, e.bl_tree);
                        G(e, f - 3, 2)
                    } else if (f <= 10) {
                        j(e, B, e.bl_tree);
                        G(e, f - 3, 3)
                    } else {
                        j(e, T, e.bl_tree);
                        G(e, f - 11, 7)
                    }
                    f = 0;
                    n = i;
                    if (s === 0) {
                        l = 138;
                        o = 3
                    } else if (i === s) {
                        l = 6;
                        o = 3
                    } else {
                        l = 7;
                        o = 4
                    }
                }
            }

            function fe(e) {
                var r;
                ie(e, e.dyn_ltree, e.l_desc.max_code);
                ie(e, e.dyn_dtree, e.d_desc.max_code);
                ne(e, e.bl_desc);
                for (r = g - 1; r >= 3; r--) {
                    if (e.bl_tree[I[r] * 2 + 1] !== 0) {
                        break
                    }
                }
                e.opt_len += 3 * (r + 1) + 5 + 5 + 4;
                return r
            }

            function le(e, r, t, a) {
                var n;
                G(e, r - 257, 5);
                G(e, t - 1, 5);
                G(e, a - 4, 4);
                for (n = 0; n < a; n++) {
                    G(e, e.bl_tree[I[n] * 2 + 1], 3)
                }
                se(e, e.dyn_ltree, r - 1);
                se(e, e.dyn_dtree, t - 1)
            }

            function oe(e) {
                var r = 4093624447;
                var t;
                for (t = 0; t <= 31; t++, r >>>= 1) {
                    if (r & 1 && e.dyn_ltree[t * 2] !== 0) {
                        return i
                    }
                }
                if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0) {
                    return s
                }
                for (t = 32; t < p; t++) {
                    if (e.dyn_ltree[t * 2] !== 0) {
                        return s
                    }
                }
                return i
            }
            var ce = false;

            function ue(e) {
                if (!ce) {
                    Q();
                    ce = true
                }
                e.l_desc = new V(e.dyn_ltree, U);
                e.d_desc = new V(e.dyn_dtree, H);
                e.bl_desc = new V(e.bl_tree, CFB);
                e.bi_buf = 0;
                e.bi_valid = 0;
                J(e)
            }

            function he(e, r, t, a) {
                G(e, (o << 1) + (a ? 1 : 0), 3);
                ee(e, r, t, true)
            }

            function de(e) {
                G(e, c << 1, 3);
                j(e, _, D);
                Y(e)
            }

            function ve(e, r, t, a) {
                var i, s;
                var l = 0;
                if (e.level > 0) {
                    if (e.strm.data_type === f) {
                        e.strm.data_type = oe(e)
                    }
                    ne(e, e.l_desc);
                    ne(e, e.d_desc);
                    l = fe(e);
                    i = e.opt_len + 3 + 7 >>> 3;
                    s = e.static_len + 3 + 7 >>> 3;
                    if (s <= i) {
                        i = s
                    }
                } else {
                    i = s = t + 5
                }
                if (t + 4 <= i && r !== -1) {
                    he(e, r, t, a)
                } else if (e.strategy === n || s === i) {
                    G(e, (c << 1) + (a ? 1 : 0), 3);
                    ae(e, D, F)
                } else {
                    G(e, (u << 1) + (a ? 1 : 0), 3);
                    le(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, l + 1);
                    ae(e, e.dyn_ltree, e.dyn_dtree)
                }
                J(e);
                if (a) {
                    q(e)
                }
            }

            function pe(e, r, t) {
                e.pending_buf[e.d_buf + e.last_lit * 2] = r >>> 8 & 255;
                e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = r & 255;
                e.pending_buf[e.l_buf + e.last_lit] = t & 255;
                e.last_lit++;
                if (r === 0) {
                    e.dyn_ltree[t * 2]++
                } else {
                    e.matches++;
                    r--;
                    e.dyn_ltree[(P[t] + p + 1) * 2]++;
                    e.dyn_dtree[z(r) * 2]++
                }
                return e.last_lit === e.lit_bufsize - 1
            }
            t._tr_init = ue;
            t._tr_stored_block = he;
            t._tr_flush_block = ve;
            t._tr_tally = pe;
            t._tr_align = de
        }, {
            "../utils/common": 27
        }],
        39: [function(e, r, t) {
            "use strict";

            function a() {
                this.input = null;
                this.next_in = 0;
                this.avail_in = 0;
                this.total_in = 0;
                this.output = null;
                this.next_out = 0;
                this.avail_out = 0;
                this.total_out = 0;
                this.msg = "";
                this.state = null;
                this.data_type = 2;
                this.adler = 0
            }
            r.exports = a
        }, {}]
    }, {}, [9])(9)
});

var XLSX = {};
function make_xlsx_lib(XLSX){
	if(!bUse){
		return;
	}
	XLSX.version = '0.14.3';
	var current_codepage = 1200;
	var current_ansi = 1252;
	
	var VALID_ANSI = [ 874, 932, 936, 949, 950 ];
	for(var i = 0; i <= 8; ++i) VALID_ANSI.push(1250 + i);
	/* ECMA-376 Part I 18.4.1 charset to codepage mapping */
	var CS2CP = ({
		0:			1252, /* ANSI */
		1:			65001, /* DEFAULT */
		2:			65001, /* SYMBOL */
		77:		10000, /* MAC */
		128:		932, /* SHIFTJIS */
		129:		949, /* HANGUL */
		130:		1361, /* JOHAB */
		134:		936, /* GB2312 */
		136:		950, /* CHINESEBIG5 */
		161:		1253, /* GREEK */
		162:		1254, /* TURKISH */
		163:		1258, /* VIETNAMESE */
		177:		1255, /* HEBREW */
		178:		1256, /* ARABIC */
		186:		1257, /* BALTIC */
		204:		1251, /* RUSSIAN */
		222:		874, /* THAI */
		238:		1250, /* EASTEUROPE */
		255:		1252, /* OEM */
		69:		6969  /* MISC */
	});
	
	var set_ansi = function(cp) {
		if(VALID_ANSI.indexOf(cp) == -1) return;
		current_ansi = CS2CP[0] = cp;
	};
	function reset_ansi() {
		set_ansi(1252);
	}
	
	var set_cp = function(cp) {
		current_codepage = cp;
		set_ansi(cp);
	};
	function reset_cp() {
		set_cp(1200);
		reset_ansi();
	}
	function s2ab(s) {
		var buf = new ArrayBuffer(s.length), view = new Uint8Array(buf);
		for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}
	function a2s(data) {
		if(Array.isArray(data)) return data.map(_chr).join("");
		var o = []; for(var i = 0; i < data.length; ++i) o[i] = _chr(data[i]); return o.join("");
	}
	function ab2a(data) {
		if(typeof ArrayBuffer == 'undefined') throw new Error("Unsupported");
		if(data instanceof ArrayBuffer) return ab2a(new Uint8Array(data));
		var o = new Array(data.length);
		for(var i = 0; i < data.length; ++i) o[i] = data[i];
		return o;
	}
	
	/*jshint -W041 */
	var SSF = ({});
	var make_ssf = function make_ssf(SSF){
		SSF.version = '0.10.2';
		var days = [
			['Sun', 'Sunday'],
			['Mon', 'Monday'],
			['Tue', 'Tuesday'],
			['Wed', 'Wednesday'],
			['Thu', 'Thursday'],
			['Fri', 'Friday'],
			['Sat', 'Saturday']
		];
		var months = [
			['J', 'Jan', 'January'],
			['F', 'Feb', 'February'],
			['M', 'Mar', 'March'],
			['A', 'Apr', 'April'],
			['M', 'May', 'May'],
			['J', 'Jun', 'June'],
			['J', 'Jul', 'July'],
			['A', 'Aug', 'August'],
			['S', 'Sep', 'September'],
			['O', 'Oct', 'October'],
			['N', 'Nov', 'November'],
			['D', 'Dec', 'December']
		];
		function init_table(t) {
			t[0]=  'General';
			t[1]=  '0';
			t[2]=  '0.00';
			t[3]=  '#,##0';
			t[4]=  '#,##0.00';
			t[9]=  '0%';
			t[10]= '0.00%';
			t[11]= '0.00E+00';
			t[12]= '# ?/?';
			t[13]= '# ??/??';
			t[14]= 'm/d/yy';
			t[15]= 'd-mmm-yy';
			t[16]= 'd-mmm';
			t[17]= 'mmm-yy';
			t[18]= 'h:mm AM/PM';
			t[19]= 'h:mm:ss AM/PM';
			t[20]= 'h:mm';
			t[21]= 'h:mm:ss';
			t[22]= 'm/d/yy h:mm';
			t[37]= '#,##0 ;(#,##0)';
			t[38]= '#,##0 ;[Red](#,##0)';
			t[39]= '#,##0.00;(#,##0.00)';
			t[40]= '#,##0.00;[Red](#,##0.00)';
			t[45]= 'mm:ss';
			t[46]= '[h]:mm:ss';
			t[47]= 'mmss.0';
			t[48]= '##0.0E+0';
			t[49]= '@';
			t[56]= '"上午/下午 "hh"時"mm"分"ss"秒 "';
			t[65535]= 'General';
		}
		var table_fmt = {};
		init_table(table_fmt);
		function load_entry(fmt, idx) {
			if(typeof idx != 'number') {
				idx = +idx || -1;
				for(var i = 0; i < 0x0188; ++i) {
				}
				if(idx < 0) idx = 0x187;
			}
			return idx;
		}
		SSF.load = load_entry;
		SSF._table = table_fmt;
		SSF.get_table = function get_table() { return table_fmt; };
		SSF.load_table = function load_table(tbl) {
			for(var i=0; i!=0x0188; ++i)
				if(tbl[i] !== undefined) load_entry(tbl[i], i);
		};
		SSF.init_table = init_table;
	};
	make_ssf(SSF);
	
	/* dateNF parse TODO: move to SSF */
	var dateNFregex = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
	function evert(obj) {
		var o = ([]), K = _.keys(obj);
		for(var i = 0; i !== K.length; ++i) o[obj[K[i]]] = K[i];
		return o;
	}
	
	function evert_num(obj) {
		var o = ([]), K = _.keys(obj);
		for(var i = 0; i !== K.length; ++i) o[obj[K[i]]] = parseInt(K[i],10);
		return o;
	}
	
	function evert_arr(obj) {
		var o = ([]), K = _.keys(obj);
		for(var i = 0; i !== K.length; ++i) {
			if(o[obj[K[i]]] == null) o[obj[K[i]]] = [];
			o[obj[K[i]]].push(K[i]);
		}
		return o;
	}
	
	var basedate = new Date(1899, 11, 30, 0, 0, 0); // 2209161600000
	var dnthresh = basedate.getTime() + (new Date().getTimezoneOffset() - basedate.getTimezoneOffset()) * 60000;
	function datenum(v, date1904) {
		var epoch = v.getTime();
		if(date1904) epoch -= 1462*24*60*60*1000;
		return (epoch - dnthresh) / (24 * 60 * 60 * 1000);
	}
	
	var good_pd_date = new Date('2017-02-19T19:06:09.000Z');
	if(isNaN(good_pd_date.getFullYear())) good_pd_date = new Date('2/19/17');
	var good_pd = good_pd_date.getFullYear() == 2017;
	/* parses a date as a local date */
	function parseDate(str, fixdate) {
		var d = new Date(str);
		if(good_pd) {
			if(fixdate > 0) d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
			else if(fixdate < 0) d.setTime(d.getTime() - d.getTimezoneOffset() * 60 * 1000);
			return d;
		}
		if(str instanceof Date) return str;
		if(good_pd_date.getFullYear() == 1917 && !isNaN(d.getFullYear())) {
			var s = d.getFullYear();
			if(str.indexOf("" + s) > -1) return d;
			d.setFullYear(d.getFullYear() + 100); return d;
		}
		var n = str.match(/\d+/g)||["2017","2","19","0","0","0"];
		var out = new Date(+n[0], +n[1] - 1, +n[2], (+n[3]||0), (+n[4]||0), (+n[5]||0));
		if(str.indexOf("Z") > -1) out = new Date(out.getTime() - out.getTimezoneOffset() * 60 * 1000);
		return out;
	}
	
	function dup(o) {
		if(typeof JSON != 'undefined' && !Array.isArray(o)) return JSON.parse(JSON.stringify(o));
		if(typeof o != 'object' || o == null) return o;
		if(o instanceof Date) return new Date(o.getTime());
		var out = {};
		for(var k in o) if(o.hasOwnProperty(k)) out[k] = dup(o[k]);
		return out;
	}
	
	function fill(c,l) { var o = ""; while(o.length < l) o+=c; return o; }
	
	/* TODO: stress test */
	function fuzzynum(s) {
		var v = Number(s);
		if(!isNaN(v)) return v;
		var wt = 1;
		var ss = s.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g, function() { wt *= 100; return "";});
		if(!isNaN(v = Number(ss))) return v / wt;
		ss = ss.replace(/[(](.*)[)]/,function($$, $1) { wt = -wt; return $1;});
		if(!isNaN(v = Number(ss))) return v / wt;
		return v;
	}
	function fuzzydate(s) {
		var o = new Date(s), n = new Date(NaN);
		var y = o.getYear(), m = o.getMonth(), d = o.getDate();
		if(isNaN(d)) return n;
		if(y < 0 || y > 8099) return n;
		if((m > 0 || d > 1) && y != 101) return o;
		if(s.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) return o;
		if(s.match(/[^-0-9:,\/\\]/)) return n;
		return o;
	}
	
	var safe_split_regex = "abacaba".split(/(:?b)/i).length == 5;
	function split_regex(str, re, def) {
		if(safe_split_regex || typeof re == "string") return str.split(re);
		var p = str.split(re), o = [p[0]];
		for(var i = 1; i < p.length; ++i) { o.push(def); o.push(p[i]); }
		return o;
	}
	function getdatastr(data) {
		if(!data) return null;
		if(data.asBinary) {return data.asBinary()};
		return null;
	}
	
	/* Part 2 Section 10.1.2 "Mapping Content Types" Names are case-insensitive */
	/* OASIS does not comment on filename case sensitivity */
	function safegetzipfile(zip, file) {
		var k = _.keys(zip.files);
		var f = file.toLowerCase(), g = f.replace(/\//g,'\\');
		for(var i=0; i<k.length; ++i) {
			var n = k[i].toLowerCase();
			if(f == n || g == n) return zip.files[k[i]];
		}
		return null;
	}
	
	function getzipdata(zip, file, safe) {
		if(!safe) return getdatastr(safegetzipfile(zip, file));
		if(!file) return null;
		try { return getzipdata(zip, file); } catch(e) { return null; }
	}
	
	var jszip;
	if(typeof JSZipSync !== 'undefined') jszip = JSZipSync;
	if(typeof exports !== 'undefined') {
		if(typeof module !== 'undefined' && module.exports) {
			if(typeof jszip === 'undefined') jszip = undefined;
		}
	}
	function resolve_path(path, base) {
		var result = base.split('/');
		if(base.slice(-1) != "/") result.pop(); // folder path
		var target = path.split('/');
		while (target.length !== 0) {
			var step = target.shift();
			if (step === '..') result.pop();
			else if (step !== '.') result.push(step);
		}
		return result.join('/');
	}
	var XML_HEADER = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
	var attregexg=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
	var tagregex=/<[\/\?]?[a-zA-Z0-9:]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s?[\/\?]?>/g;
	if(!(XML_HEADER.match(tagregex))) tagregex = /<[^>]*>/g;
	var nsregex =/<\w*:/;
	var nsregex2 = /<(\/?)\w+:/;
	function parsexmltag(tag, skip_root) {
		var z = ({});
		var eq = 0, c = 0;
		for(; eq !== tag.length; ++eq) if((c = tag.charCodeAt(eq)) === 32 || c === 10 || c === 13) break;
		if(!skip_root) z[0] = tag.slice(0, eq);
		if(eq === tag.length) return z;
		var m = tag.match(attregexg), j=0, v="", i=0, q="", cc="", quot = 1;
		if(m) for(i = 0; i != m.length; ++i) {
			cc = m[i];
			for(c=0; c != cc.length; ++c) if(cc.charCodeAt(c) === 61) break;
			q = cc.slice(0,c).trim();
			while(cc.charCodeAt(c+1) == 32) ++c;
			quot = ((eq=cc.charCodeAt(c+1)) == 34 || eq == 39) ? 1 : 0;
			v = cc.slice(c+1+quot, cc.length-quot);
			for(j=0;j!=q.length;++j) if(q.charCodeAt(j) === 58) break;
			if(j===q.length) {
				if(q.indexOf("_") > 0) q = q.slice(0, q.indexOf("_")); // from ods
				z[q] = v;
				z[q.toLowerCase()] = v;
			} else {
				var k = (j===5 && q.slice(0,5)==="xmlns"?"xmlns":"")+q.slice(j+1);
				if(z[k] && q.slice(j-3,j) == "ext") continue; // from ods
				z[k] = v;
				z[k.toLowerCase()] = v;
			}
		}
		return z;
	}
	function strip_ns(x) { return x.replace(nsregex2, "<$1"); }
	
	var encodings = {
		'&quot;': '"',
		'&apos;': "'",
		'&gt;': '>',
		'&lt;': '<',
		'&amp;': '&'
	};
	var rencoding = evert(encodings);
	//var rencstr = "&<>'\"".split("");
	
	// TODO: CP remap (need to read file version to determine OS)
	var unescapexml = (function() {
		/* 22.4.2.4 bstr (Basic String) */
		var encregex = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g, coderegex = /_x([\da-fA-F]{4})_/g;
		return function unescapexml(text) {
			var s = text + '', i = s.indexOf("<![CDATA[");
			if(i == -1) return s.replace(encregex, function($$, $1) { return encodings[$$]||String.fromCharCode(parseInt($1,$$.indexOf("x")>-1?16:10))||$$; }).replace(coderegex,function(m,c) {return String.fromCharCode(parseInt(c,16));});
			var j = s.indexOf("]]>");
			return unescapexml(s.slice(0, i)) + s.slice(i+9,j) + unescapexml(s.slice(j+3));
		};
	})();
	
	var decregex=/[&<>'"]/g;
	var charegex = /[\u0000-\u0008\u000b-\u001f]/g;
	function escapexml(text){
		var s = text + '';
		return s.replace(decregex, function(y) { return rencoding[y]; }).replace(charegex,function(s) { return "_x" + ("000"+s.charCodeAt(0).toString(16)).slice(-4) + "_";});
	}
	function parsexmlbool(value) {
		switch(value) {
			case 1: case true: case '1': case 'true': case 'TRUE': return true;
			/* case '0': case 'false': case 'FALSE':*/
			default: return false;
		}
	}
	
	var utf8read = function utf8reada(orig) {
		var out = "", i = 0, c = 0, d = 0, e = 0, f = 0, w = 0;
		while (i < orig.length) {
			c = orig.charCodeAt(i++);
			if (c < 128) { out += String.fromCharCode(c); continue; }
			d = orig.charCodeAt(i++);
			if (c>191 && c<224) { f = ((c & 31) << 6); f |= (d & 63); out += String.fromCharCode(f); continue; }
			e = orig.charCodeAt(i++);
			if (c < 240) { out += String.fromCharCode(((c & 15) << 12) | ((d & 63) << 6) | (e & 63)); continue; }
			f = orig.charCodeAt(i++);
			w = (((c & 7) << 18) | ((d & 63) << 12) | ((e & 63) << 6) | (f & 63))-65536;
			out += String.fromCharCode(0xD800 + ((w>>>10)&1023));
			out += String.fromCharCode(0xDC00 + (w&1023));
		}
		return out;
	};
	
	// matches <foo>...</foo> extracts content
	var matchtag = (function() {
		var mtcache = ({});
		return function matchtag(f,g) {
			var t = f+"|"+(g||"");
			if(mtcache[t]) return mtcache[t];
			return (mtcache[t] = new RegExp('<(?:\\w+:)?'+f+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+f+'>',((g||""))));
		};
	})();
	
	var htmldecode = (function() {
		var entities = [
			['nbsp', ' '], ['middot', '·'],
			['quot', '"'], ['apos', "'"], ['gt',   '>'], ['lt',   '<'], ['amp',  '&']
		].map(function(x) { return [new RegExp('&' + x[0] + ';', "g"), x[1]]; });
		return function htmldecode(str) {
			var o = str.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/,"").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g,"\n").replace(/<[^>]*>/g,"");
			for(var i = 0; i < entities.length; ++i) o = o.replace(entities[i][0], entities[i][1]);
			return o;
		};
	})();
	
	
	var wtregex = /(^\s|\s$|\n)/;
	function writetag(f,g) { return '<' + f + (g.match(wtregex)?' xml:space="preserve"' : "") + '>' + g + '</' + f + '>'; }
	
	function wxt_helper(h) { return _.keys(h).map(function(k) { return " " + k + '="' + h[k] + '"';}).join(""); }
	function writextag(f,g,h) { return '<' + f + ((h != null) ? wxt_helper(h) : "") + ((g != null) ? (g.match(wtregex)?' xml:space="preserve"' : "") + '>' + g + '</' + f : "/") + '>';}
	
	var XMLNS = ({
		'dc': 'http://purl.org/dc/elements/1.1/',
		'dcterms': 'http://purl.org/dc/terms/',
		'dcmitype': 'http://purl.org/dc/dcmitype/',
		'mx': 'http://schemas.microsoft.com/office/mac/excel/2008/main',
		'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
		'sjs': 'http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties',
		'vt': 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
		'xsi': 'http://www.w3.org/2001/XMLSchema-instance',
		'xsd': 'http://www.w3.org/2001/XMLSchema'
	});
	
	XMLNS.main = [
		'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
		'http://purl.oclc.org/ooxml/spreadsheetml/main',
		'http://schemas.microsoft.com/office/excel/2006/main',
		'http://schemas.microsoft.com/office/excel/2006/2'
	];
	var OFFCRYPTO = {};
	
	var make_offcrypto = function(O, _crypto) {
		var crypto;
		if(typeof _crypto !== 'undefined') crypto = _crypto;
		O.md5 = function(hex) {
			if(!crypto) throw new Error("Unsupported crypto");
			return crypto.createHash('md5').update(hex).digest('hex');
		};
	};
	
	/*global crypto:true */
	make_offcrypto(OFFCRYPTO, typeof crypto !== "undefined" ? crypto : undefined);
	
	function decode_row(rowstr) { return parseInt(unfix_row(rowstr),10) - 1; }
	function encode_row(row) { return "" + (row + 1); }
	function unfix_row(cstr) { return cstr.replace(/\$(\d+)$/,"$1"); }
	
	function decode_col(colstr) { var c = unfix_col(colstr), d = 0, i = 0; for(; i !== c.length; ++i) d = 26*d + c.charCodeAt(i) - 64; return d - 1; }
	function encode_col(col) { var s=""; for(++col; col; col=Math.floor((col-1)/26)) s = String.fromCharCode(((col-1)%26) + 65) + s; return s; }
	function unfix_col(cstr) { return cstr.replace(/^\$([A-Z])/,"$1"); }
	
	function split_cell(cstr) { return cstr.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(","); }
	function decode_cell(cstr) { var splt = split_cell(cstr); return { c:decode_col(splt[0]), r:decode_row(splt[1]) }; }
	function encode_cell(cell) { return encode_col(cell.c) + encode_row(cell.r); }
	function encode_range(cs,ce) {
		if(typeof ce === 'undefined' || typeof ce === 'number') {
			return encode_range(cs.s, cs.e);
		}
		if(typeof cs !== 'string') cs = encode_cell((cs));
		if(typeof ce !== 'string') ce = encode_cell((ce));
		return cs == ce ? cs : cs + ":" + ce;
	}
	
	function safe_decode_range(range) {
		var o = {s:{c:0,r:0},e:{c:0,r:0}};
		var idx = 0, i = 0, cc = 0;
		var len = range.length;
		for(idx = 0; i < len; ++i) {
			if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
			idx = 26*idx + cc;
		}
		o.s.c = --idx;
	
		for(idx = 0; i < len; ++i) {
			if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
			idx = 10*idx + cc;
		}
		o.s.r = --idx;
	
		if(i === len || range.charCodeAt(++i) === 58) { o.e.c=o.s.c; o.e.r=o.s.r; return o; }
	
		for(idx = 0; i != len; ++i) {
			if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
			idx = 26*idx + cc;
		}
		o.e.c = --idx;
	
		for(idx = 0; i != len; ++i) {
			if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
			idx = 10*idx + cc;
		}
		o.e.r = --idx;
		return o;
	}
	
	function sheet_to_workbook(sheet, opts) {
		var n = opts && opts.sheet ? opts.sheet : "Sheet1";
		var sheets = {}; sheets[n] = sheet;
		return { SheetNames: [n], Sheets: sheets };
	}
	
	var BErr = {
	0x00: "#NULL!",
	0x07: "#DIV/0!",
	0x0F: "#VALUE!",
	0x17: "#REF!",
	0x1D: "#NAME?",
	0x24: "#NUM!",
	0x2A: "#N/A",
	0x2B: "#GETTING_DATA",
	0xFF: "#WTF?"
	};
	var RBErr = evert_num(BErr);
	
	var ct2type/*{[string]:string}*/ = ({
		/* Workbook */
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
	
		/* Worksheet */
		"application/vnd.ms-excel.binIndexWs": "TODO", /* Binary Index */
	
		/* Macrosheet */
		"application/vnd.ms-excel.intlmacrosheet": "TODO",
		"application/vnd.ms-excel.binIndexMs": "TODO", /* Binary Index */
	
		/* File Properties */
		"application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
		"application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
		"application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
	
		/* Custom Data Properties */
		"application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
	
		/* PivotTable */
		"application/vnd.ms-excel.pivotTable": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
	
		/* Chart Colors */
		"application/vnd.ms-office.chartcolorstyle+xml": "TODO",
	
		/* Chart Style */
		"application/vnd.ms-office.chartstyle+xml": "TODO",
	
		/* Calculation Chain */
		"application/vnd.ms-excel.calcChain": "calcchains",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
	
		/* Printer Settings */
		"application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
	
		/* ActiveX */
		"application/vnd.ms-office.activeX": "TODO",
		"application/vnd.ms-office.activeX+xml": "TODO",
	
		/* Custom Toolbars */
		"application/vnd.ms-excel.attachedToolbars": "TODO",
	
		/* External Data Connections */
		"application/vnd.ms-excel.connections": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
	
		/* External Links */
		"application/vnd.ms-excel.externalLink": "links",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
	
		/* Metadata */
		"application/vnd.ms-excel.sheetMetadata": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",
	
		/* PivotCache */
		"application/vnd.ms-excel.pivotCacheDefinition": "TODO",
		"application/vnd.ms-excel.pivotCacheRecords": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
	
		/* Query Table */
		"application/vnd.ms-excel.queryTable": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
	
		/* Shared Workbook */
		"application/vnd.ms-excel.userNames": "TODO",
		"application/vnd.ms-excel.revisionHeaders": "TODO",
		"application/vnd.ms-excel.revisionLog": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
	
		/* Single Cell Table */
		"application/vnd.ms-excel.tableSingleCells": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
	
		/* Slicer */
		"application/vnd.ms-excel.slicer": "TODO",
		"application/vnd.ms-excel.slicerCache": "TODO",
		"application/vnd.ms-excel.slicer+xml": "TODO",
		"application/vnd.ms-excel.slicerCache+xml": "TODO",
	
		/* Sort Map */
		"application/vnd.ms-excel.wsSortMap": "TODO",
	
		/* Table */
		"application/vnd.ms-excel.table": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
	
		/* Themes */
		"application/vnd.openxmlformats-officedocument.theme+xml": "themes",
	
		/* Theme Override */
		"application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
	
		/* Timeline */
		"application/vnd.ms-excel.Timeline+xml": "TODO", /* verify */
		"application/vnd.ms-excel.TimelineCache+xml": "TODO", /* verify */
	
		/* VBA */
		"application/vnd.ms-office.vbaProject": "vba",
		"application/vnd.ms-office.vbaProjectSignature": "vba",
	
		/* Volatile Dependencies */
		"application/vnd.ms-office.volatileDependencies": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
	
		/* Control Properties */
		"application/vnd.ms-excel.controlproperties+xml": "TODO",
	
		/* Data Model */
		"application/vnd.openxmlformats-officedocument.model+data": "TODO",
	
		/* Survey */
		"application/vnd.ms-excel.Survey+xml": "TODO",
	
		/* Drawing */
		"application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
		"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
	
		/* VML */
		"application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
	
		"application/vnd.openxmlformats-package.relationships+xml": "rels",
		"application/vnd.openxmlformats-officedocument.oleObject": "TODO",
	
		/* Image */
		"image/png": "TODO",
	
		"sheet": "js"
	});
	
	var CT_LIST = (function(){
		var o = {
			workbooks: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
				xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
				xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
				xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
				xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
			},
			strs: { /* Shared Strings */
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
				xlsb: "application/vnd.ms-excel.sharedStrings"
			},
			comments: { /* Comments */
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
				xlsb: "application/vnd.ms-excel.comments"
			},
			sheets: { /* Worksheet */
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
				xlsb: "application/vnd.ms-excel.worksheet"
			},
			charts: { /* Chartsheet */
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
				xlsb: "application/vnd.ms-excel.chartsheet"
			},
			dialogs: { /* Dialogsheet */
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
				xlsb: "application/vnd.ms-excel.dialogsheet"
			},
			macros: { /* Macrosheet (Excel 4.0 Macros) */
				xlsx: "application/vnd.ms-excel.macrosheet+xml",
				xlsb: "application/vnd.ms-excel.macrosheet"
			},
			styles: { /* Styles */
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
				xlsb: "application/vnd.ms-excel.styles"
			}
		};
		_.keys(o).forEach(function(k) { ["xlsm", "xlam"].forEach(function(v) { if(!o[k][v]) o[k][v] = o[k].xlsx; }); });
		_.keys(o).forEach(function(k){ _.keys(o[k]).forEach(function(v) { ct2type[o[k][v]] = k; }); });
		return o;
	})();
	
	var type2ct/*{[string]:Array<string>}*/ = evert_arr(ct2type);
	
	XMLNS.CT = 'http://schemas.openxmlformats.org/package/2006/content-types';
	
	function new_ct() {
		return ({
			workbooks:[], sheets:[], charts:[], dialogs:[], macros:[],
			rels:[], strs:[], comments:[], links:[],
			coreprops:[], extprops:[], custprops:[], themes:[], styles:[],
			calcchains:[], vba: [], drawings: [],
			TODO:[], xmlns: "" });
	}
	
	function parse_ct(data) {
		var ct = new_ct();
		if(!data || !data.match) return ct;
		var ctext = {};
		(data.match(tagregex)||[]).forEach(function(x) {
			var y = parsexmltag(x);
			switch(y[0].replace(nsregex,"<")) {
				case '<?xml': break;
				case '<Types': ct.xmlns = y['xmlns' + (y[0].match(/<(\w+):/)||["",""])[1] ]; break;
				case '<Default': ctext[y.Extension] = y.ContentType; break;
				case '<Override':
					if(ct[ct2type[y.ContentType]] !== undefined) ct[ct2type[y.ContentType]].push(y.PartName);
					break;
			}
		});
		ct.calcchain = ct.calcchains.length > 0 ? ct.calcchains[0] : "";
		ct.sst = ct.strs.length > 0 ? ct.strs[0] : "";
		ct.style = ct.styles.length > 0 ? ct.styles[0] : "";
		ct.defaults = ctext;
		delete ct.calcchains;
		return ct;
	}
	
	var CTYPE_XML_ROOT = writextag('Types', null, {
		'xmlns': XMLNS.CT,
		'xmlns:xsd': XMLNS.xsd,
		'xmlns:xsi': XMLNS.xsi
	});
	
	var CTYPE_DEFAULTS = [
		['xml', 'application/xml'],
		['bin', 'application/vnd.ms-excel.sheet.binary.macroEnabled.main'],
		['vml', 'application/vnd.openxmlformats-officedocument.vmlDrawing'],
		/* from test files */
		['bmp', 'image/bmp'],
		['png', 'image/png'],
		['gif', 'image/gif'],
		['emf', 'image/x-emf'],
		['wmf', 'image/x-wmf'],
		['jpg', 'image/jpeg'], ['jpeg', 'image/jpeg'],
		['tif', 'image/tiff'], ['tiff', 'image/tiff'],
		['pdf', 'application/pdf'],
		['rels', type2ct.rels[0]]
	].map(function(x) {
		return writextag('Default', null, {'Extension':x[0], 'ContentType': x[1]});
	});
	
	function write_ct(ct, opts) {
		var o = [], v;
		o[o.length] = (XML_HEADER);
		o[o.length] = (CTYPE_XML_ROOT);
		o = o.concat(CTYPE_DEFAULTS);
		var f1 = function(w) {
			if(ct[w] && ct[w].length > 0) {
				v = ct[w][0];
				o[o.length] = (writextag('Override', null, {
					'PartName': (v[0] == '/' ? "":"/") + v,
					'ContentType': CT_LIST[w][opts.bookType || 'xlsx']
				}));
			}
		};
		var f2 = function(w) {
			(ct[w]||[]).forEach(function(v) {
				o[o.length] = (writextag('Override', null, {
					'PartName': (v[0] == '/' ? "":"/") + v,
					'ContentType': CT_LIST[w][opts.bookType || 'xlsx']
				}));
			});
		};
		var f3 = function(t) {
			(ct[t]||[]).forEach(function(v) {
				o[o.length] = (writextag('Override', null, {
					'PartName': (v[0] == '/' ? "":"/") + v,
					'ContentType': type2ct[t][0]
				}));
			});
		};
		f1('workbooks');
		f2('sheets');
		f2('charts');
		f3('themes');
		['strs', 'styles'].forEach(f1);
		['coreprops', 'extprops', 'custprops'].forEach(f3);
		f3('vba');
		f3('comments');
		f3('drawings');
		if(o.length>2){ o[o.length] = ('</Types>'); o[1]=o[1].replace("/>",">"); }
		return o.join("");
	}
	/* 9.3 Relationships */
	var RELS = ({
		WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
		SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
		HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
		VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
		VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
	});
	
	function parse_rels(data, currentFilePath) {
		if (!data) return data;
		if (currentFilePath.charAt(0) !== '/') {
			currentFilePath = '/'+currentFilePath;
		}
		var rels = {};
		var hash = {};
		(data.match(tagregex)||[]).forEach(function(x) {
			var y = parsexmltag(x);
			/* 9.3.2.2 OPC_Relationships */
			if (y[0] === '<Relationship') {
				var rel = {}; rel.Type = y.Type; rel.Target = y.Target; rel.Id = y.Id; rel.TargetMode = y.TargetMode;
				var canonictarget = y.TargetMode === 'External' ? y.Target : resolve_path(y.Target, currentFilePath);
				rels[canonictarget] = rel;
				hash[y.Id] = rel;
			}
		});
		rels["!id"] = hash;
		return rels;
	}
	
	XMLNS.RELS = 'http://schemas.openxmlformats.org/package/2006/relationships';
	
	var RELS_ROOT = writextag('Relationships', null, {
		//'xmlns:ns0': XMLNS.RELS,
		'xmlns': XMLNS.RELS
	});
	
	/* TODO */
	function write_rels(rels) {
		var o = [XML_HEADER, RELS_ROOT];
		_.keys(rels['!id']).forEach(function(rid) {
			o[o.length] = (writextag('Relationship', null, rels['!id'][rid]));
		});
		if(o.length>2){ o[o.length] = ('</Relationships>'); o[1]=o[1].replace("/>",">"); }
		return o.join("");
	}
	
	function add_rels(rels, rId, f, type, relobj) {
		if(!relobj) relobj = {};
		if(!rels['!id']) rels['!id'] = {};
		if(rId < 0) for(rId = 1; rels['!id']['rId' + rId]; ++rId){/* empty */}
		relobj.Id = 'rId' + rId;
		relobj.Type = type;
		relobj.Target = f;
		if(relobj.Type == RELS.HLINK) relobj.TargetMode = "External";
		if(rels['!id'][relobj.Id]) throw new Error("Cannot rewrite rId " + rId);
		rels['!id'][relobj.Id] = relobj;
		rels[('/' + relobj.Target).replace("//","/")] = relobj;
		return rId;
	}
	
	XMLNS.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
	RELS.CORE_PROPS  = 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties';
	
	var CORE_PROPS_XML_ROOT = writextag('cp:coreProperties', null, {
		//'xmlns': XMLNS.CORE_PROPS,
		'xmlns:cp': XMLNS.CORE_PROPS,
		'xmlns:dc': XMLNS.dc,
		'xmlns:dcterms': XMLNS.dcterms,
		'xmlns:dcmitype': XMLNS.dcmitype,
		'xmlns:xsi': XMLNS.xsi
	});
	/* 15.2.12.3 Extended File Properties Part */
	/* [MS-OSHARED] 2.3.3.2.[1-2].1 (PIDSI/PIDDSI) */
	var EXT_PROPS = [
		["Application", "Application", "string"],
		["AppVersion", "AppVersion", "string"],
		["Company", "Company", "string"],
		["DocSecurity", "DocSecurity", "string"],
		["Manager", "Manager", "string"],
		["HyperlinksChanged", "HyperlinksChanged", "bool"],
		["SharedDoc", "SharedDoc", "bool"],
		["LinksUpToDate", "LinksUpToDate", "bool"],
		["ScaleCrop", "ScaleCrop", "bool"],
		["HeadingPairs", "HeadingPairs", "raw"],
		["TitlesOfParts", "TitlesOfParts", "raw"]
	];
	
	XMLNS.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
	RELS.EXT_PROPS  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties';
	
	var EXT_PROPS_XML_ROOT = writextag('Properties', null, {
		'xmlns': XMLNS.EXT_PROPS,
		'xmlns:vt': XMLNS.vt
	});
	
	function write_ext_props(cp) {
		var o = [], W = writextag;
		cp.Application = "SheetJS";
		o[o.length] = (XML_HEADER);
		o[o.length] = (EXT_PROPS_XML_ROOT);
		EXT_PROPS.forEach(function(f) {
			if(cp[f[1]] === undefined) return;
			var v;
			switch(f[2]) {
				case 'string': v = String(cp[f[1]]); break;
				case 'bool': v = cp[f[1]] ? 'true' : 'false'; break;
			}
			if(v !== undefined) o[o.length] = (W(f[0], v));
		});
	
		/* TODO: HeadingPairs, TitlesOfParts */
		o[o.length] = (W('HeadingPairs', W('vt:vector', W('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>')+W('vt:variant', W('vt:i4', String(cp.Worksheets))), {size:2, baseType:"variant"})));
		o[o.length] = (W('TitlesOfParts', W('vt:vector', cp.SheetNames.map(function(s) { return "<vt:lpstr>" + escapexml(s) + "</vt:lpstr>"; }).join(""), {size: cp.Worksheets, baseType:"lpstr"})));
		if(o.length>2){ o[o.length] = ('</Properties>'); o[1]=o[1].replace("/>",">"); }
		return o.join("");
	}
	/* 15.2.12.2 Custom File Properties Part */
	XMLNS.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
	RELS.CUST_PROPS  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties';
	
	/* 18.4.8 si CT_Rst */
	var sitregex = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, sirregex = /<(?:\w+:)?r>/;
	var sirphregex = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
	function parse_si(x, opts) {
		var z = {};
		if(!x) return null;
		//var y;
		/* 18.4.12 t ST_Xstring (Plaintext String) */
		// TODO: is whitespace actually valid here?
		if(x.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
			z.t = unescapexml(utf8read(x.slice(x.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||""));
			z.r = utf8read(x);
		}
		/* 18.4.4 r CT_RElt (Rich Text Run) */
		else if((/*y = */x.match(sirregex))) {
			z.r = utf8read(x);
			z.t = unescapexml(utf8read((x.replace(sirphregex, '').match(sitregex)||[]).join("").replace(tagregex,"")));
		}
		/* 18.4.3 phoneticPr CT_PhoneticPr (TODO: needed for Asian support) */
		/* 18.4.6 rPh CT_PhoneticRun (TODO: needed for Asian support) */
		return z;
	}
	
	/* 18.4 Shared String Table */
	var sstr0 = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
	var sstr1 = /<(?:\w+:)?(?:si|sstItem)>/g;
	var sstr2 = /<\/(?:\w+:)?(?:si|sstItem)>/;
	function parse_sst_xml(data, opts) {
		var s = ([]), ss = "";
		if(!data) return s;
		/* 18.4.9 sst CT_Sst */
		var sst = data.match(sstr0);
		if(sst) {
			ss = sst[2].replace(sstr1,"").split(sstr2);
			for(var i = 0; i != ss.length; ++i) {
				var o = parse_si(ss[i].trim(), opts);
				if(o != null) s[s.length] = o;
			}
			sst = parsexmltag(sst[1]); s.Count = sst.count; s.Unique = sst.uniqueCount;
		}
		return s;
	}
	
	RELS.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
	var DEF_PPI = 96, PPI = DEF_PPI;
	function px2pt(px) { return px * 96 / PPI; }
	function write_numFmts(NF) {
		var o = ["<numFmts>"];
		[[5,8],[23,26],[41,44],[/*63*/50,/*66],[164,*/392]].forEach(function(r) {
			for(var i = r[0]; i <= r[1]; ++i) if(NF[i] != null) o[o.length] = (writextag('numFmt',null,{numFmtId:i,formatCode:escapexml(NF[i])}));
		});
		if(o.length === 1) return "";
		o[o.length] = ("</numFmts>");
		o[0] = writextag('numFmts', null, { count:o.length-2 }).replace("/>", ">");
		return o.join("");
	}
	var cellXF_uint = [ "numFmtId", "fillId", "fontId", "borderId", "xfId" ];
	function parse_cellXfs(t, styles, opts) {
		styles.CellXf = [];
		var xf;
		var pass = false;
		t[0].match(tagregex).forEach(function(x) {
			var y = parsexmltag(x), i = 0;
			switch(strip_ns(y[0])) {
				case '<cellXfs': case '<cellXfs>': case '<cellXfs/>': case '</cellXfs>': break;
	
				/* 18.8.45 xf CT_Xf */
				case '<xf': case '<xf/>':
					xf = y;
					delete xf[0];
					for(i = 0; i < cellXF_uint.length; ++i){
						if(xf[cellXF_uint[i]]){
							xf[cellXF_uint[i]] = parseInt(xf[cellXF_uint[i]], 10);
						}
					}
					if(xf.numFmtId > 0x188) {
						for(i = 0x188; i > 0x3c; --i) if(styles.NumberFmt[xf.numFmtId] == styles.NumberFmt[i]) { xf.numFmtId = i; break; }
					}
					styles.CellXf.push(xf); break;
				case '</xf>': break;
	
				/* 18.8.1 alignment CT_CellAlignment */
				case '<alignmparse_cellXfsent': case '<alignment/>':
					var alignment = {};
					if(y.vertical) alignment.vertical = y.vertical;
					if(y.horizontal) alignment.horizontal = y.horizontal;
					if(y.textRotation != null) alignment.textRotation = y.textRotation;
					if(y.indent) alignment.indent = y.indent;
					if(y.wrapText) alignment.wrapText = y.wrapText;
					xf.alignment = alignment;
					break;
				case '</alignment>': break;
	
				/* 18.8.33 protection CT_CellProtection */
				case '<protection': case '</protection>': case '<protection/>': break;
	
				/* 18.2.10 extLst CT_ExtensionList ? */
				case '<extLst': case '<extLst>': case '</extLst>': break;
				case '<ext': pass = true; break;
				case '</ext>': pass = false; break;
				default: if(opts && opts.WTF) {
					if(!pass) throw new Error('unrecognized ' + y[0] + ' in cellXfs');
				}
			}
		});
	}
	
	function write_cellXfs(cellXfs) {
		var o = [];
		o[o.length] = (writextag('cellXfs',null));
		cellXfs.forEach(function(c) { o[o.length] = (writextag('xf', null, c)); });
		o[o.length] = ("</cellXfs>");
		if(o.length === 2) return "";
		o[0] = writextag('cellXfs',null, {count:o.length-2}).replace("/>",">");
		return o.join("");
	}
	
	var parse_sty_xml= (function make_pstyx() {
		var numFmtRegex = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
		var cellXfRegex = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
		var fillsRegex = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
		var fontsRegex = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
		var bordersRegex = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
		
		return function parse_sty_xml(data, themes, opts) {
			var styles = {};
			if(!data) return styles;
			data = data.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");
			/* 18.8.39 styleSheet CT_Stylesheet */
			var t;
		
			/* 18.8.10 cellXfs CT_CellXfs ? */
			if((t=data.match(cellXfRegex))) parse_cellXfs(t, styles, opts);
		
			return styles;
		};
		})();
	
	var STYLES_XML_ROOT = writextag('styleSheet', null, {
		'xmlns': XMLNS.main[0],
		'xmlns:vt': XMLNS.vt
	});
	
	RELS.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
	
	function write_sty_xml(wb, opts) {
		var o = [XML_HEADER, STYLES_XML_ROOT], w;
		if(wb.SSF && (w = write_numFmts(wb.SSF)) != null) o[o.length] = w;
		o[o.length] = ('<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>');
		o[o.length] = ('<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>');
		o[o.length] = ('<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>');
		o[o.length] = ('<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>');
		if((w = write_cellXfs(opts.cellXfs))) o[o.length] = (w);
		o[o.length] = ('<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>');
		o[o.length] = ('<dxfs count="0"/>');
		o[o.length] = ('<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>');
	
		if(o.length>2){ o[o.length] = ('</styleSheet>'); o[1]=o[1].replace("/>",">"); }
		return o.join("");
	}
	
	RELS.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
	
	function write_theme(Themes, opts) {
		if(opts && opts.themeXLSX) return opts.themeXLSX;
		var o = [XML_HEADER];
		o[o.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
		o[o.length] =  '<a:themeElements>';
	
		o[o.length] =   '<a:clrScheme name="Office">';
		o[o.length] =    '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
		o[o.length] =    '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
		o[o.length] =    '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
		o[o.length] =    '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
		o[o.length] =    '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
		o[o.length] =    '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
		o[o.length] =    '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
		o[o.length] =    '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
		o[o.length] =    '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
		o[o.length] =    '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
		o[o.length] =    '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
		o[o.length] =    '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
		o[o.length] =   '</a:clrScheme>';
	
		o[o.length] =   '<a:fontScheme name="Office">';
		o[o.length] =    '<a:majorFont>';
		o[o.length] =     '<a:latin typeface="Cambria"/>';
		o[o.length] =     '<a:ea typeface=""/>';
		o[o.length] =     '<a:cs typeface=""/>';
		o[o.length] =     '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
		o[o.length] =     '<a:font script="Hang" typeface="맑은 고딕"/>';
		o[o.length] =     '<a:font script="Hans" typeface="宋体"/>';
		o[o.length] =     '<a:font script="Hant" typeface="新細明體"/>';
		o[o.length] =     '<a:font script="Arab" typeface="Times New Roman"/>';
		o[o.length] =     '<a:font script="Hebr" typeface="Times New Roman"/>';
		o[o.length] =     '<a:font script="Thai" typeface="Tahoma"/>';
		o[o.length] =     '<a:font script="Ethi" typeface="Nyala"/>';
		o[o.length] =     '<a:font script="Beng" typeface="Vrinda"/>';
		o[o.length] =     '<a:font script="Gujr" typeface="Shruti"/>';
		o[o.length] =     '<a:font script="Khmr" typeface="MoolBoran"/>';
		o[o.length] =     '<a:font script="Knda" typeface="Tunga"/>';
		o[o.length] =     '<a:font script="Guru" typeface="Raavi"/>';
		o[o.length] =     '<a:font script="Cans" typeface="Euphemia"/>';
		o[o.length] =     '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
		o[o.length] =     '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
		o[o.length] =     '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
		o[o.length] =     '<a:font script="Thaa" typeface="MV Boli"/>';
		o[o.length] =     '<a:font script="Deva" typeface="Mangal"/>';
		o[o.length] =     '<a:font script="Telu" typeface="Gautami"/>';
		o[o.length] =     '<a:font script="Taml" typeface="Latha"/>';
		o[o.length] =     '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
		o[o.length] =     '<a:font script="Orya" typeface="Kalinga"/>';
		o[o.length] =     '<a:font script="Mlym" typeface="Kartika"/>';
		o[o.length] =     '<a:font script="Laoo" typeface="DokChampa"/>';
		o[o.length] =     '<a:font script="Sinh" typeface="Iskoola Pota"/>';
		o[o.length] =     '<a:font script="Mong" typeface="Mongolian Baiti"/>';
		o[o.length] =     '<a:font script="Viet" typeface="Times New Roman"/>';
		o[o.length] =     '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
		o[o.length] =     '<a:font script="Geor" typeface="Sylfaen"/>';
		o[o.length] =    '</a:majorFont>';
		o[o.length] =    '<a:minorFont>';
		o[o.length] =     '<a:latin typeface="Calibri"/>';
		o[o.length] =     '<a:ea typeface=""/>';
		o[o.length] =     '<a:cs typeface=""/>';
		o[o.length] =     '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
		o[o.length] =     '<a:font script="Hang" typeface="맑은 고딕"/>';
		o[o.length] =     '<a:font script="Hans" typeface="宋体"/>';
		o[o.length] =     '<a:font script="Hant" typeface="新細明體"/>';
		o[o.length] =     '<a:font script="Arab" typeface="Arial"/>';
		o[o.length] =     '<a:font script="Hebr" typeface="Arial"/>';
		o[o.length] =     '<a:font script="Thai" typeface="Tahoma"/>';
		o[o.length] =     '<a:font script="Ethi" typeface="Nyala"/>';
		o[o.length] =     '<a:font script="Beng" typeface="Vrinda"/>';
		o[o.length] =     '<a:font script="Gujr" typeface="Shruti"/>';
		o[o.length] =     '<a:font script="Khmr" typeface="DaunPenh"/>';
		o[o.length] =     '<a:font script="Knda" typeface="Tunga"/>';
		o[o.length] =     '<a:font script="Guru" typeface="Raavi"/>';
		o[o.length] =     '<a:font script="Cans" typeface="Euphemia"/>';
		o[o.length] =     '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
		o[o.length] =     '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
		o[o.length] =     '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
		o[o.length] =     '<a:font script="Thaa" typeface="MV Boli"/>';
		o[o.length] =     '<a:font script="Deva" typeface="Mangal"/>';
		o[o.length] =     '<a:font script="Telu" typeface="Gautami"/>';
		o[o.length] =     '<a:font script="Taml" typeface="Latha"/>';
		o[o.length] =     '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
		o[o.length] =     '<a:font script="Orya" typeface="Kalinga"/>';
		o[o.length] =     '<a:font script="Mlym" typeface="Kartika"/>';
		o[o.length] =     '<a:font script="Laoo" typeface="DokChampa"/>';
		o[o.length] =     '<a:font script="Sinh" typeface="Iskoola Pota"/>';
		o[o.length] =     '<a:font script="Mong" typeface="Mongolian Baiti"/>';
		o[o.length] =     '<a:font script="Viet" typeface="Arial"/>';
		o[o.length] =     '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
		o[o.length] =     '<a:font script="Geor" typeface="Sylfaen"/>';
		o[o.length] =    '</a:minorFont>';
		o[o.length] =   '</a:fontScheme>';
	
		o[o.length] =   '<a:fmtScheme name="Office">';
		o[o.length] =    '<a:fillStyleLst>';
		o[o.length] =     '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
		o[o.length] =     '<a:gradFill rotWithShape="1">';
		o[o.length] =      '<a:gsLst>';
		o[o.length] =       '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
		o[o.length] =       '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
		o[o.length] =       '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		o[o.length] =      '</a:gsLst>';
		o[o.length] =      '<a:lin ang="16200000" scaled="1"/>';
		o[o.length] =     '</a:gradFill>';
		o[o.length] =     '<a:gradFill rotWithShape="1">';
		o[o.length] =      '<a:gsLst>';
		o[o.length] =       '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
		o[o.length] =       '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		o[o.length] =      '</a:gsLst>';
		o[o.length] =      '<a:lin ang="16200000" scaled="0"/>';
		o[o.length] =     '</a:gradFill>';
		o[o.length] =    '</a:fillStyleLst>';
		o[o.length] =    '<a:lnStyleLst>';
		o[o.length] =     '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
		o[o.length] =     '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
		o[o.length] =     '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
		o[o.length] =    '</a:lnStyleLst>';
		o[o.length] =    '<a:effectStyleLst>';
		o[o.length] =     '<a:effectStyle>';
		o[o.length] =      '<a:effectLst>';
		o[o.length] =       '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
		o[o.length] =      '</a:effectLst>';
		o[o.length] =     '</a:effectStyle>';
		o[o.length] =     '<a:effectStyle>';
		o[o.length] =      '<a:effectLst>';
		o[o.length] =       '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
		o[o.length] =      '</a:effectLst>';
		o[o.length] =     '</a:effectStyle>';
		o[o.length] =     '<a:effectStyle>';
		o[o.length] =      '<a:effectLst>';
		o[o.length] =       '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
		o[o.length] =      '</a:effectLst>';
		o[o.length] =      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
		o[o.length] =      '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
		o[o.length] =     '</a:effectStyle>';
		o[o.length] =    '</a:effectStyleLst>';
		o[o.length] =    '<a:bgFillStyleLst>';
		o[o.length] =     '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
		o[o.length] =     '<a:gradFill rotWithShape="1">';
		o[o.length] =      '<a:gsLst>';
		o[o.length] =       '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		o[o.length] =       '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		o[o.length] =       '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
		o[o.length] =      '</a:gsLst>';
		o[o.length] =      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
		o[o.length] =     '</a:gradFill>';
		o[o.length] =     '<a:gradFill rotWithShape="1">';
		o[o.length] =      '<a:gsLst>';
		o[o.length] =       '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
		o[o.length] =       '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
		o[o.length] =      '</a:gsLst>';
		o[o.length] =      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
		o[o.length] =     '</a:gradFill>';
		o[o.length] =    '</a:bgFillStyleLst>';
		o[o.length] =   '</a:fmtScheme>';
		o[o.length] =  '</a:themeElements>';
	
		o[o.length] =  '<a:objectDefaults>';
		o[o.length] =   '<a:spDef>';
		o[o.length] =    '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
		o[o.length] =   '</a:spDef>';
		o[o.length] =   '<a:lnDef>';
		o[o.length] =    '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
		o[o.length] =   '</a:lnDef>';
		o[o.length] =  '</a:objectDefaults>';
		o[o.length] =  '<a:extraClrSchemeLst/>';
		o[o.length] = '</a:theme>';
		return o.join("");
	}
	
	RELS.IMG = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
	RELS.DRAW = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
	
	/* L.5.5.2 SpreadsheetML Comments + VML Schema */
	var _shapeid = 1024;
	
	RELS.CMNT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
	var VBAFMTS = [ "xlsb", "xlsm", "xlam", "biff8", "xla" ];
	
	RELS.DS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet";
	RELS.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
	var strs = {}; // shared strings
	
	RELS.WS = [
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
		"http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
	];
	
	/*global Map */
	var browser_has_Map = typeof Map !== 'undefined';
	
	function get_cell_style(styles, cell, opts) {
		var z = opts.revssf[cell.z != null ? cell.z : "General"];
		var i = 0x3c, len = styles.length;
		if(z == null && opts.ssf) {
			for(; i < 0x188; ++i) if(opts.ssf[i] == null) {
				SSF.load(cell.z, i);
				// $FlowIgnore
				opts.ssf[i] = cell.z;
				opts.revssf[cell.z] = z = i;
				break;
			}
		}
		for(i = 0; i != len; ++i) if(styles[i].numFmtId === z) return i;
		styles[len] = {
			numFmtId:z,
			fontId:0,
			fillId:0,
			borderId:0,
			xfId:0,
			applyNumberFormat:1
		};
		return len;
	}
	
	function safe_format(p, fmtid, fillid, opts, themes, styles) {
		if(p.t === 'z') return;
		if(p.t === 'd' && typeof p.v === 'string') p.v = parseDate(p.v);
		
	}
	
	function check_ws(ws, sname, i) {
		if(ws && ws['!ref']) {
			var range = safe_decode_range(ws['!ref']);
			if(range.e.c < range.s.c || range.e.r < range.s.r) throw new Error("Bad range (" + i + "): " + ws['!ref']);
		}
	}
	function parse_ws_xml_dim(ws, s) {
		var d = safe_decode_range(s);
		if(d.s.r<=d.e.r && d.s.c<=d.e.c && d.s.r>=0 && d.s.c>=0) ws["!ref"] = encode_range(d);
	}
	var sheetdataregex = /<(?:\w+:)?sheetData>([\s\S]*)<\/(?:\w+:)?sheetData>/;
	var dimregex = /"(\w*:\w*)"/;
	var marginregex= /<(?:\w:)?pageMargins[^>]*\/>/g;
	var svsregex = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
	/* 18.3 Worksheets */
	function parse_ws_xml(data, opts, idx, rels, wb, themes, styles) {
		/* 18.3.1.99 worksheet CT_Worksheet */
		var s = opts.dense ? ([]) : ({});
		var refguess = ({s: {r:2000000, c:2000000}, e: {r:0, c:0} });
	
		var data1 = "", data2 = "";
		var mtch = data.match(sheetdataregex);
		if(mtch) {
			data1 = data.slice(0, mtch.index);
			data2 = data.slice(mtch.index + mtch[0].length);
		} else data1 = data2 = data;
	
	
		/* 18.3.1.35 dimension CT_SheetDimension */
		var ridx = (data1.match(/<(?:\w*:)?dimension/)||{index:-1}).index;
		if(ridx > 0) {
			var ref = data1.slice(ridx,ridx+50).match(dimregex);
			if(ref) parse_ws_xml_dim(s, ref[1]);
		}
	
		/* 18.3.1.88 sheetViews CT_SheetViews */
		var svs = data1.match(svsregex);
		if(svs && svs[1]) parse_ws_xml_sheetviews(svs[1], wb);
		
	
		/* 18.3.1.80 sheetData CT_SheetData ? */
		if(mtch) parse_ws_xml_data(mtch[1], s, opts, refguess, themes, styles);
		
	
		/* 18.3.1.62 pageMargins CT_PageMargins */
		var margins = data2.match(marginregex);
		if(margins) s['!margins'] = parse_ws_xml_margins(parsexmltag(margins[0]));
	
		if(!s["!ref"] && refguess.e.c >= refguess.s.c && refguess.e.r >= refguess.s.r) s["!ref"] = encode_range(refguess);
		return s;
	}
	function parse_ws_xml_margins(margin) {
		var o = {};
		["left", "right", "top", "bottom", "header", "footer"].forEach(function(k) {
			if(margin[k]) o[k] = parseFloat(margin[k]);
		});
		return o;
	}
	
	/* 18.3.1.88 sheetViews CT_SheetViews */
	/* 18.3.1.87 sheetView CT_SheetView */
	var sviewregex = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/>/;
	function parse_ws_xml_sheetviews(data, wb) {
		(data.match(sviewregex)||[]).forEach(function(r) {
			var tag = parsexmltag(r);
			if(parsexmlbool(tag.rightToLeft)) {
				if(!wb.Views) wb.Views = [{}];
				if(!wb.Views[0]) wb.Views[0] = {};
				wb.Views[0].RTL = true;
			}
		});
	}
	function write_ws_xml_sheetviews(ws, opts, idx, wb) {
		var sview = {workbookViewId:"0"};
		// $FlowIgnore
		if( (((wb||{}).Workbook||{}).Views||[])[0] ) sview.rightToLeft = wb.Workbook.Views[0].RTL ? "1" : "0";
		return writextag("sheetViews", writextag("sheetView", null, sview), {});
	}
	
	function write_ws_xml_cell(cell, ref, ws, opts) {
		if(cell.v === undefined && cell.f === undefined || cell.t === 'z') return "";
		var vv = "";
		var oldt = cell.t, oldv = cell.v;
		switch(cell.t) {
			case 'b': vv = cell.v ? "1" : "0"; break;
			case 'n': vv = ''+cell.v; break;
			case 'e': vv = BErr[cell.v]; break;
			case 'd':
				cell = dup(cell);
				cell.t = 'n';
				vv = ''+(cell.v = datenum(parseDate(cell.v)));
				if(typeof cell.z === 'undefined') cell.z = SSF._table[14];
				break;
			default: vv = cell.v; break;
		}
		var v = writetag('v', escapexml(vv)), o = ({r:ref});
		/* TODO: cell style */
		var os = get_cell_style(opts.cellXfs, cell, opts);
		if(os !== 0) o.s = os;
		switch(cell.t) {
			case 'n': break;
			case 'd': o.t = "d"; break;
			case 'b': o.t = "b"; break;
			case 'e': o.t = "e"; break;
			default: 
				if(cell.v == null) { delete cell.t; break; }
				o.t = "str"; break;
		}
		if(cell.t != oldt) { cell.t = oldt; cell.v = oldv; }
		if(cell.f) {
			var ff = cell.F && cell.F.slice(0, ref.length) == ref ? {t:"array", ref:cell.F} : null;
			v = writextag('f', escapexml(cell.f), ff) + (cell.v != null ? v : "");
		}
		if(cell.l) ws['!links'].push([ref, cell.l]);
		if(cell.c) ws['!comments'].push([ref, cell.c]);
		return writextag('c', v, o);
	}
	
	var parse_ws_xml_data = (function() {
		var cellregex = /<(?:\w+:)?c[ >]/, rowregex = /<\/(?:\w+:)?row>/;
		var rregex = /r=["']([^"']*)["']/, isregex = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
		var refregex = /ref=["']([^"']*)["']/;
		var match_v = matchtag("v"), match_f = matchtag("f");
	
		return function parse_ws_xml_data(sdata, s, opts, guess, themes, styles) {
			var ri = 0, x = "", cells = [], cref = [], idx=0, i=0, cc=0, d="", p;
			var tag, tagr = 0, tagc = 0;
			var sstr, ftag;
			var fmtid = 0, fillid = 0;
			var do_format = Array.isArray(styles.CellXf), cf;
			var arrayf = [];
			var sharedf = [];
			var dense = Array.isArray(s);
			var rows = [], rowobj = {}, rowrite = false;
			for(var marr = sdata.split(rowregex), mt = 0, marrlen = marr.length; mt != marrlen; ++mt) {
				x = marr[mt].trim();
				var xlen = x.length;
				if(xlen === 0) continue;
				/* 18.3.1.73 row CT_Row */
				for(ri = 0; ri < xlen; ++ri) if(x.charCodeAt(ri) === 62) break; ++ri;
				tag = parsexmltag(x.slice(0,ri), true);
				tagr = tag.r != null ? parseInt(tag.r, 10) : tagr+1; tagc = -1;
				if(opts.sheetRows && opts.sheetRows < tagr) continue;
				if(guess.s.r > tagr - 1) guess.s.r = tagr - 1;
				if(guess.e.r < tagr - 1) guess.e.r = tagr - 1;

				/* 18.3.1.4 c CT_Cell */
				cells = x.slice(ri).split(cellregex);
				for(ri = 0; ri != cells.length; ++ri) {
					x = cells[ri].trim();
					if(x.length === 0) continue;
					cref = x.match(rregex); idx = ri; i=0; cc=0;
					x = "<c " + (x.slice(0,1)=="<"?">":"") + x;
					if(cref != null && cref.length === 2) {
						idx = 0; d=cref[1];
						for(i=0; i != d.length; ++i) {
							if((cc=d.charCodeAt(i)-64) < 1 || cc > 26) break;
							idx = 26*idx + cc;
						}
						--idx;
						tagc = idx;
					} else{
						++tagc;
					}
					for(i = 0; i != x.length; ++i) {
						if(x.charCodeAt(i) === 62) break;
					}
					++i;
					tag = parsexmltag(x.slice(0,i), true);
					if(!tag.r) tag.r = encode_cell({r:tagr-1, c:tagc});
					d = x.slice(i);
					p = ({t:""});

					if((cref=d.match(match_v))!= null && cref[1] !== '') p.v=unescapexml(cref[1]);

					if(tag.t == null && p.v === undefined) {
						if(p.f || p.F) {
							p.v = 0; p.t = "n";
						} else if(!opts.sheetStubs){
							continue;
						} else{
							p.t = "z";
						}
					} else {
						p.t = tag.t || "n"
					};
					if(guess.s.c > tagc) guess.s.c = tagc;
					if(guess.e.c < tagc) guess.e.c = tagc;
					/* 18.18.11 t ST_CellType */
					switch(p.t) {
						case 'n':
							if(p.v == "" || p.v == null) {
								if(!opts.sheetStubs) continue;
								p.t = 'z';
							} else p.v = parseFloat(p.v);
							break;
						case 's':
							if(typeof p.v == 'undefined') {
								if(!opts.sheetStubs) continue;
								p.t = 'z';
							} else {
								sstr = strs[parseInt(p.v, 10)];
								p.v = sstr.t;
								p.r = sstr.r;
							}
							break;
						case 'str':
							p.t = "s";
							p.v = (p.v!=null) ? utf8read(p.v) : '';
							break;
						case 'b': p.v = parsexmlbool(p.v); break;
						case 'd':
							p.v = datenum(parseDate(p.v, 1)); p.t = 'n';
							break;
						case 'e':
							if(!opts) p.w = p.v;
							p.v = RBErr[p.v];
							break;
					}
					/* formatting */
					fmtid = fillid = 0;
					if(do_format && tag.s !== undefined) {
						cf = styles.CellXf[tag.s];
						if(cf != null) {
							if(cf.numFmtId != null) fmtid = cf.numFmtId;
							if(opts.cellStyles) {
								if(cf.fillId != null) fillid = cf.fillId;
							}
						}
					}
					safe_format(p, fmtid, fillid, opts, themes, styles);
					if(dense) {
						var _r = decode_cell(tag.r);
						if(!s[_r.r]) s[_r.r] = [];
						s[_r.r][_r.c] = p;
					} else s[tag.r] = p;
				}
			}
			if(rows.length > 0) s['!rows'] = rows;
		};
	})();
	
	function write_ws_xml_data(ws, opts, idx, wb) {
		var o = [], r = [], range = safe_decode_range(ws['!ref']), cell="", ref, rr = "", cols = [], R=0, C=0, rows = ws['!rows'];
		var dense = Array.isArray(ws);
		var params = ({r:rr}), row, height = -1;
		for(C = range.s.c; C <= range.e.c; ++C) cols[C] = encode_col(C);
		for(R = range.s.r; R <= range.e.r; ++R) {
			r = [];
			rr = encode_row(R);
			for(C = range.s.c; C <= range.e.c; ++C) {
				ref = cols[C] + rr;
				var _cell = dense ? (ws[R]||[])[C]: ws[ref];
				if(_cell === undefined) continue;
				if((cell = write_ws_xml_cell(_cell, ref, ws, opts, idx, wb)) != null) r.push(cell);
			}
			if(r.length > 0 || (rows && rows[R])) {
				params = ({r:rr});
				if(rows && rows[R]) {
					row = rows[R];
					if(row.hidden) params.hidden = 1;
					height = -1;
					if(row.hpx) height = px2pt(row.hpx);
					else if(row.hpt) height = row.hpt;
					if(height > -1) { params.ht = height; params.customHeight = 1; }
					if(row.level) { params.outlineLevel = row.level; }
				}
				o[o.length] = (writextag('row', r.join(""), params));
			}
		}
		if(rows) for(; R < rows.length; ++R) {
			if(rows && rows[R]) {
				params = ({r:R+1});
				row = rows[R];
				if(row.hidden) params.hidden = 1;
				height = -1;
				if (row.hpx) height = px2pt(row.hpx);
				else if (row.hpt) height = row.hpt;
				if (height > -1) { params.ht = height; params.customHeight = 1; }
				if (row.level) { params.outlineLevel = row.level; }
				o[o.length] = (writextag('row', "", params));
			}
		}
		return o.join("");
	}
	
	var WS_XML_ROOT = writextag('worksheet', null, {
		'xmlns': XMLNS.main[0],
		'xmlns:r': XMLNS.r
	});
	
	function write_ws_xml(idx, opts, wb, rels) {
		var o = [XML_HEADER, WS_XML_ROOT];
		var s = wb.SheetNames[idx], sidx = 0, rdata = "";
		var ws = wb.Sheets[s];
		if(ws == null) ws = {};
		var ref = ws['!ref'] || 'A1';
		var range = safe_decode_range(ref);
		if(range.e.c > 0x3FFF || range.e.r > 0xFFFFF) {
			if(opts.WTF) throw new Error("Range " + ref + " exceeds format limit A1:XFD1048576");
			range.e.c = Math.min(range.e.c, 0x3FFF);
			range.e.r = Math.min(range.e.c, 0xFFFFF);
			ref = encode_range(range);
		}
		if(!rels) rels = {};
		ws['!comments'] = [];
		ws['!drawing'] = [];
	
		if(opts.bookType !== 'xlsx' && wb.vbaraw) {
			var cname = wb.SheetNames[idx];
			try { if(wb.Workbook) cname = wb.Workbook.Sheets[idx].CodeName || cname; } catch(e) {}
			o[o.length] = (writextag('sheetPr', null, {'codeName': escapexml(cname)}));
		}
	
		o[o.length] = (writextag('dimension', null, {'ref': ref}));
	
		o[o.length] = write_ws_xml_sheetviews(ws, opts, idx, wb);
	
		/* TODO: store in WB, process styles */
		if(opts.sheetFormat) o[o.length] = (writextag('sheetFormatPr', null, {
			defaultRowHeight:opts.sheetFormat.defaultRowHeight||'16',
			baseColWidth:opts.sheetFormat.baseColWidth||'10',
			outlineLevelRow:opts.sheetFormat.outlineLevelRow||'7'
		}));
		o[sidx = o.length] = '<sheetData/>';
		ws['!links'] = [];
		if(ws['!ref'] != null) {
			rdata = write_ws_xml_data(ws, opts, idx, wb, rels);
			if(rdata.length > 0) o[o.length] = (rdata);
		}
		if(o.length>sidx+1) { o[o.length] = ('</sheetData>'); o[sidx]=o[sidx].replace("/>",">"); }
	
		if(ws['!merges'] != null && ws['!merges'].length > 0) o[o.length] = (write_ws_xml_merges(ws['!merges']));
	
		/* phoneticPr */
		/* conditionalFormatting */
		/* dataValidations */
	
		var relc = -1, rel, rId = -1;
		if(ws['!links'].length > 0) {
			o[o.length] = "<hyperlinks>";
			ws['!links'].forEach(function(l) {
				if(!l[1].Target) return;
				rel = ({"ref":l[0]});
				if(l[1].Target.charAt(0) != "#") {
					rId = add_rels(rels, -1, escapexml(l[1].Target).replace(/#.*$/, ""), RELS.HLINK);
					rel["r:id"] = "rId"+rId;
				}
				if((relc = l[1].Target.indexOf("#")) > -1) rel.location = escapexml(l[1].Target.slice(relc+1));
				if(l[1].Tooltip) rel.tooltip = escapexml(l[1].Tooltip);
				o[o.length] = writextag("hyperlink",null,rel);
			});
			o[o.length] = "</hyperlinks>";
		}
		delete ws['!links'];
		//var hfidx = o.length;
		o[o.length] = "";
	
		/* rowBreaks */
		/* colBreaks */
		/* customProperties */
		/* cellWatches */
	
		if(!opts || opts.ignoreEC || (opts.ignoreEC == (void 0))) o[o.length] = writetag("ignoredErrors", writextag("ignoredError", null, {numberStoredAsText:1, sqref:ref}));
	
		/* smartTags */
	
		if(ws['!drawing'].length > 0) {
			rId = add_rels(rels, -1, "../drawings/drawing" + (idx+1) + ".xml", RELS.DRAW);
			o[o.length] = writextag("drawing", null, {"r:id":"rId" + rId});
		}
		else delete ws['!drawing'];
	
		if(ws['!comments'].length > 0) {
			rId = add_rels(rels, -1, "../drawings/vmlDrawing" + (idx+1) + ".vml", RELS.VML);
			o[o.length] = writextag("legacyDrawing", null, {"r:id":"rId" + rId});
			ws['!legacy'] = rId;
		}
	
		/* drawingHF */
		/* picture */
		/* oleObjects */
		/* controls */
		/* webPublishItems */
		/* tableParts */
		/* extList */
	
		if(o.length>2) { o[o.length] = ('</worksheet>'); o[1]=o[1].replace("/>",">"); }
		return o.join("");
	}
	RELS.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
	
	
	/* 18.2.28 (CT_WorkbookProtection) Defaults */
	var WBPropsDef = [
		['allowRefreshQuery',           false, "bool"],
		['autoCompressPictures',        true,  "bool"],
		['backupFile',                  false, "bool"],
		['checkCompatibility',          false, "bool"],
		['CodeName',                    ''],
		['date1904',                    false, "bool"],
		['defaultThemeVersion',         0,      "int"],
		['filterPrivacy',               false, "bool"],
		['hidePivotFieldList',          false, "bool"],
		['promptedSolutions',           false, "bool"],
		['publishItems',                false, "bool"],
		['refreshAllConnections',       false, "bool"],
		['saveExternalLinkValues',      true,  "bool"],
		['showBorderUnselectedTables',  true,  "bool"],
		['showInkAnnotation',           true,  "bool"],
		['showObjects',                 'all'],
		['showPivotChartFilter',        false, "bool"],
		['updateLinks', 'userSet']
	];
	
	/* 18.2.30 (CT_BookView) Defaults */
	var WBViewDef = [
		['activeTab',                   0,      "int"],
		['autoFilterDateGrouping',      true,  "bool"],
		['firstSheet',                  0,      "int"],
		['minimized',                   false, "bool"],
		['showHorizontalScroll',        true,  "bool"],
		['showSheetTabs',               true,  "bool"],
		['showVerticalScroll',          true,  "bool"],
		['tabRatio',                    600,    "int"],
		['visibility',                  'visible']
		//window{Height,Width}, {x,y}Window
	];
	
	/* 18.2.2  (CT_CalcPr) Defaults */
	var CalcPrDef = [
		['calcCompleted', 'true'],
		['calcMode', 'auto'],
		['calcOnSave', 'true'],
		['concurrentCalc', 'true'],
		['fullCalcOnLoad', 'false'],
		['fullPrecision', 'true'],
		['iterate', 'false'],
		['iterateCount', '100'],
		['iterateDelta', '0.001'],
		['refMode', 'A1']
	];
	
	function push_defaults_array(target, defaults) {
		for(var j = 0; j != target.length; ++j) { var w = target[j];
			for(var i=0; i != defaults.length; ++i) { var z = defaults[i];
				if(w[z[0]] == null) w[z[0]] = z[1];
				else switch(z[2]) {
				case "bool": if(typeof w[z[0]] == "string") w[z[0]] = parsexmlbool(w[z[0]]); break;
				case "int": if(typeof w[z[0]] == "string") w[z[0]] = parseInt(w[z[0]], 10); break;
				}
			}
		}
	}
	function push_defaults(target, defaults) {
		for(var i = 0; i != defaults.length; ++i) {
			var z = defaults[i];
			if(target[z[0]] == null) target[z[0]] = z[1];
			else switch(z[2]) {
				case "bool": if(typeof target[z[0]] == "string") target[z[0]] = parsexmlbool(target[z[0]]); break;
				case "int": if(typeof target[z[0]] == "string") target[z[0]] = parseInt(target[z[0]], 10); break;
			}
		}
	}
	
	function parse_wb_defaults(wb) {
		push_defaults(wb.WBProps, WBPropsDef);
		push_defaults(wb.CalcPr, CalcPrDef);
		push_defaults_array(wb.WBView, WBViewDef);
	}
	
	
	var badchars = "][*?\/\\".split("");
	function check_ws_name(n, safe) {
		if(n.length > 31) { if(safe) return false; throw new Error("Sheet names cannot exceed 31 chars"); }
		var _good = true;
		badchars.forEach(function(c) {
			if(n.indexOf(c) == -1) return;
			if(!safe) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
			_good = false;
		});
		return _good;
	}
	function check_wb_names(N, S, codes) {
		N.forEach(function(n,i) {
			check_ws_name(n);
			for(var j = 0; j < i; ++j) if(n == N[j]) throw new Error("Duplicate Sheet Name: " + n);
			if(codes) {
				var cn = (S && S[i] && S[i].CodeName) || n;
				if(cn.charCodeAt(0) == 95 && cn.length > 22) throw new Error("Bad Code Name: Worksheet" + cn);
			}
		});
	}
	function check_wb(wb) {
		if(!wb || !wb.SheetNames || !wb.Sheets) throw new Error("Invalid Workbook");
		if(!wb.SheetNames.length) throw new Error("Workbook is empty");
		var Sheets = (wb.Workbook && wb.Workbook.Sheets) || [];
		check_wb_names(wb.SheetNames, Sheets, !!wb.vbaraw);
		for(var i = 0; i < wb.SheetNames.length; ++i) check_ws(wb.Sheets[wb.SheetNames[i]], wb.SheetNames[i], i);
		/* TODO: validate workbook */
	}
	/* 18.2 Workbook */
	var wbnsregex = /<\w+:workbook/;
	function parse_wb_xml(data, opts) {
		var wb = { AppVersion:{}, WBProps:{}, WBView:[], Sheets:[], CalcPr:{}, Names:[], xmlns: "" };
		var pass = false, xmlns = "xmlns";
		var dname = {}, dnstart = 0;
		data.replace(tagregex, function xml_wb(x, idx) {
			var y = parsexmltag(x);
			switch(strip_ns(y[0])) {
				case '<?xml': break;
				
				case '<workbook':
					if(x.match(wbnsregex)) xmlns = "xmlns" + x.match(/<(\w+):/)[1];
					wb.xmlns = y[xmlns];
					break;
				case '</workbook>': break;
				case '<fileVersion': delete y[0]; wb.AppVersion = y; break;
				case '<workbookPr': case '<workbookPr/>':
					WBPropsDef.forEach(function(w) {
						if(y[w[0]] == null) return;
						switch(w[2]) {
							case "bool": wb.WBProps[w[0]] = parsexmlbool(y[w[0]]); break;
							case "int": wb.WBProps[w[0]] = parseInt(y[w[0]], 10); break;
							default: wb.WBProps[w[0]] = y[w[0]];
						}
					});
					if(y.codeName) wb.WBProps.CodeName = y.codeName;
					break;
				case '<workbookView': case '<workbookView/>': delete y[0]; wb.WBView.push(y); break;
				case '<sheet':
					switch(y.state) {
						case "hidden": y.Hidden = 1; break;
						case "veryHidden": y.Hidden = 2; break;
						default: y.Hidden = 0;
					}
					delete y.state;
					y.name = unescapexml(utf8read(y.name));
					delete y[0]; wb.Sheets.push(y); break;
				case '<calcPr': delete y[0]; wb.CalcPr = y; break;
				case '<calcPr/>': delete y[0]; wb.CalcPr = y; break;
				case '<ext': pass=true; break;
				case '</ext>': pass=false; break;
				case '<AlternateContent': case '<AlternateContent>': pass=true; break;
				case '</AlternateContent>': pass=false; break;
				default: break;
			}
			return x;
		});
		if(XMLNS.main.indexOf(wb.xmlns) === -1) throw new Error("Unknown Namespace: " + wb.xmlns);
	
		parse_wb_defaults(wb);
	
		return wb;
	}
	
	var WB_XML_ROOT = writextag('workbook', null, {
		'xmlns': XMLNS.main[0],
		//'xmlns:mx': XMLNS.mx,
		//'xmlns:s': XMLNS.main[0],
		'xmlns:r': XMLNS.r
	});
	
	function write_wb_xml(wb) {
		var o = [XML_HEADER];
		o[o.length] = WB_XML_ROOT;
		
		var workbookPr = ({codeName:"ThisWorkbook"});
		o[o.length] = writextag('workbookPr', null, workbookPr);
	
		/* workbookProtection */
	
		var sheets = wb.Workbook && wb.Workbook.Sheets || [];
		var i = 0;
		
		/* bookViews */
	
		o[o.length] = "<sheets>";
		for(i = 0; i != wb.SheetNames.length; ++i) {
			var sht = {name:escapexml(wb.SheetNames[i].slice(0,31))};
			sht.sheetId = ""+(i+1);
			sht["r:id"] = "rId"+(i+1);
			if(sheets[i]) switch(sheets[i].Hidden) {
				case 1: sht.state = "hidden"; break;
				case 2: sht.state = "veryHidden"; break;
			}
			o[o.length] = writextag('sheet',null,sht);
		}
		o[o.length] = "</sheets>";
		
		if(o.length>2){ o[o.length] = '</workbook>'; o[1]=o[1].replace("/>",">"); }
		return o.join("");
	}
	function write_ws(data, name, opts, wb, rels) {
		return write_ws_xml(data, opts, wb, rels);
	}
	var _chr = function(c) { return String.fromCharCode(c); };
	function parse_xlml(d, _opts) {
		fix_read_opts(opts=_opts||{});
		make_ssf(SSF);
		var str = d;
		str = utf8read(str);
		var opening = str.slice(0, 1024).toLowerCase(), ishtml = false;
		if(opening.indexOf("<?xml") == -1) {
			["html", "table", "head", "meta", "script", "style", "div"].forEach(function(tag) {
				if(opening.indexOf("<" + tag) >= 0) ishtml = true;
			});
		}
		if(ishtml) return HTML_.to_workbook(str, opts);
	}
	
	var HTML_ = (function() {
		function html_to_sheet(str, _opts) {
			var opts = _opts || {};
			var ws = opts.dense ? ([]) : ({});
			var mtch = str.match(/<table/i);
			if(!mtch) throw new Error("Invalid HTML: could not find <table>");
			var mtch2 = str.match(/<\/table/i);
			var i = mtch.index, j = mtch2 && mtch2.index || str.length;
			var rows = split_regex(str.slice(i, j), /(:?<tr[^>]*>)/i, "<tr>");
			var R = -1, C = 0, RS = 0, CS = 0;
			var range = {s:{r:10000000, c:10000000},e:{r:0,c:0}};
			for(i = 0; i < rows.length; ++i) {
				var row = rows[i].trim();
				var hd = row.slice(0,3).toLowerCase();
				if(hd == "<tr") { ++R; if(opts.sheetRows && opts.sheetRows <= R) { --R; break; } C = 0; continue; }
				if(hd != "<td" && hd != "<th") continue;
				var cells = row.split(/<\/t[dh]>/i);
				for(j = 0; j < cells.length; ++j) {
					var cell = cells[j].trim();
					if(!cell.match(/<t[dh]/i)) continue;
					var m = cell, cc = 0;
					/* TODO: parse styles etc */
					while(m.charAt(0) == "<" && (cc = m.indexOf(">")) > -1) m = m.slice(cc+1);
					var tag = parsexmltag(cell.slice(0, cell.indexOf(">")));
					CS = tag.colspan ? +tag.colspan : 1;
					var _t = tag.t || "";
					/* TODO: generate stub cells */
					if(!m.length) { C += CS; continue; }
					m = htmldecode(m);
					if(range.s.r > R) range.s.r = R; if(range.e.r < R) range.e.r = R;
					if(range.s.c > C) range.s.c = C; if(range.e.c < C) range.e.c = C;
					if(!m.length) continue;
					var o = {t:'s', v:m};
					if(opts.raw || !m.trim().length || _t == 's'){}
					else if(m === 'TRUE') o = {t:'b', v:true};
					else if(m === 'FALSE') o = {t:'b', v:false};
					else if(!isNaN(fuzzynum(m))) o = {t:'n', v:fuzzynum(m)};
					else if(!isNaN(fuzzydate(m).getDate())) {
						o = ({t:'d', v:parseDate(m)});
						if(!opts.cellDates) o = ({t:'n', v:datenum(o.v)});
						o.z = SSF._table[14];
					}
					if(opts.dense) { if(!ws[R]) ws[R] = []; ws[R][C] = o; }
					else ws[encode_cell({r:R, c:C})] = o;
					C += CS;
				}
			}
			ws['!ref'] = encode_range(range);
			return ws;
		}
		function html_to_book(str, opts) {
			return sheet_to_workbook(html_to_sheet(str, opts), opts);
		}
		return {
			to_workbook: html_to_book,
			to_sheet: html_to_sheet,
		};
	})();
	function fix_opts_func(defaults) {
		return function fix_opts(opts) {
			for(var i = 0; i != defaults.length; ++i) {
				var d = defaults[i];
				if(opts[d[0]] === undefined) opts[d[0]] = d[1];
				if(d[2] === 'n') opts[d[0]] = Number(opts[d[0]]);
			}
		};
	}
	
	var fix_read_opts = fix_opts_func([
		['cellFormula', true], /* emit formulae as .f */
		['cellStyles', false], /* emits style/theme as .s */
	
		['sheetStubs', false], /* emit empty cells */
		['sheetRows', 0, 'n'], /* read n rows (0 = read all rows) */
	
		['password',''], /* password */
		['WTF', false] /* WTF mode (throws errors) */
	]);
	
	
	var fix_write_opts = fix_opts_func([
	
		['bookSST', false], /* Generate Shared String Table */
	
		['bookType', 'xlsx'], /* Type of workbook (xlsx/m/b) */
	
		['compression', false], /* Use file compression */
	
		['WTF', false] /* WTF mode (throws errors) */
	]);
	function get_sheet_type(n) {
		if(RELS.WS.indexOf(n) > -1) return "sheet";
		if(RELS.CS && n == RELS.CS) return "chart";
		if(RELS.DS && n == RELS.DS) return "dialog";
		if(RELS.MS && n == RELS.MS) return "macro";
		return (n && n.length) ? n : "sheet";
	}
	function safe_parse_wbrels(wbrels, sheets) {
		if(!wbrels) return 0;
		try {
			wbrels = sheets.map(function pwbr(w) {
				if(!w.id) w.id = w.strRelID;
				return [w.name, wbrels['!id'][w.id].Target, get_sheet_type(wbrels['!id'][w.id].Type)];
			});
		} catch(e) { return null; }
		return !wbrels || wbrels.length === 0 ? null : wbrels;
	}
	
	function safe_parse_sheet(zip, path, relsPath, sheet, idx, sheetRels, sheets, opts, wb, themes, styles) {
		try {
			sheetRels[sheet]=parse_rels(getzipdata(zip, relsPath, true), path);
			var data = getzipdata(zip, path);
			var _ws = parse_ws_xml((data), opts, idx, sheetRels[sheet], wb, themes, styles);
			sheets[sheet] = _ws;
		} catch(e) { if(opts.WTF) throw e; }
	}
	
	function strip_front_slash(x) {return x.charAt(0) == '/' ? x.slice(1) : x; }
	
	function parse_zip(zip, opts) {
		make_ssf(SSF);
		opts = opts || {};
		fix_read_opts(opts);
		var dir = parse_ct(getzipdata(zip, '[Content_Types].xml'));
		var sheets = {};
		var themes = ({});
		var styles = ({});
		strs = [];
		if(dir.sst) strs=parse_sst_xml(getzipdata(zip, strip_front_slash(dir.sst)), opts);
		if(dir.style) styles = parse_sty_xml(getzipdata(zip, strip_front_slash(dir.style)), themes, opts);
		var wb = parse_wb_xml(getzipdata(zip, strip_front_slash(dir.workbooks[0])), opts);
		
		var props = {};
		var out = ({});
		var deps = {};
		var i=0;
		var sheetRels = ({});
		var path, relsPath;
		var wbsheets = wb.Sheets;
		props.Worksheets = wbsheets.length;
		props.SheetNames = [];
		for(var j = 0; j != wbsheets.length; ++j) {
			props.SheetNames[j] = wbsheets[j].name;
		}
	
		var wbext = "xml";
		var wbrelsi = dir.workbooks[0].lastIndexOf("/");
		var wbrelsfile = (dir.workbooks[0].slice(0, wbrelsi+1) + "_rels/" + dir.workbooks[0].slice(wbrelsi+1) + ".rels").replace(/^\//,"");
		var wbrels = parse_rels(getzipdata(zip, wbrelsfile, true), wbrelsfile);
		if(wbrels) wbrels = safe_parse_wbrels(wbrels, wb.Sheets);
		/* Numbers iOS hack */
		var nmode = (getzipdata(zip,"xl/worksheets/sheet.xml",true))?1:0;
		for(i = 0; i != props.Worksheets; ++i) {
			if(wbrels && wbrels[i]) {
				path = 'xl/' + (wbrels[i][1]).replace(/[\/]?xl\//, "");
				if(!safegetzipfile(zip, path)) path = wbrels[i][1];
				if(!safegetzipfile(zip, path)) path = wbrelsfile.replace(/_rels\/.*$/,"") + wbrels[i][1];
			} else{
				path = 'xl/worksheets/sheet'+(i+1-nmode)+"." + wbext;
				path = path.replace(/sheet0\./,"sheet.");
			}
			relsPath = path.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
			safe_parse_sheet(zip, path, relsPath, props.SheetNames[i], i, sheetRels, sheets, opts, wb, themes, styles);
		}
	
		out = ({
			Directory: dir,
			Workbook: wb,
			Props: props,
			Deps: deps,
			Sheets: sheets,
			SheetNames: props.SheetNames,
			Strings: strs,
			Styles: styles,
			Themes: themes,
			SSF: SSF.get_table()
		});
		return out;
	}
	
	
	function write_zip(wb, opts) {
		_shapeid = 1024;
		if(wb && !wb.SSF) {
			wb.SSF = SSF.get_table();
		}
		
		if(wb && wb.SSF) {
			make_ssf(SSF);
			SSF.load_table(wb.SSF);
			// $FlowIgnore
			opts.revssf = evert_num(wb.SSF); opts.revssf[wb.SSF[65535]] = 0;
			opts.ssf = wb.SSF;
		}
		opts.rels = {}; opts.wbrels = {};
		opts.Strings = []; opts.Strings.Count = 0; opts.Strings.Unique = 0;
		if(browser_has_Map) opts.revStrings = new Map();
		else { opts.revStrings = {}; opts.revStrings.foo = []; delete opts.revStrings.foo; }
		var wbext = "xml";
		var vbafmt = VBAFMTS.indexOf(opts.bookType) > -1;
		var ct = new_ct();
		fix_write_opts(opts = opts || {});
		var zip = new jszip();
		var f = "", rId = 0;
		opts.cellXfs = [];
		get_cell_style(opts.cellXfs, {}, {revssf:{"General":0}});
		if(!wb.Props) wb.Props = {};
		f = "docProps/core.xml";
		zip.file(f, XML_HEADER + CORE_PROPS_XML_ROOT);
		ct.coreprops.push(f);
		add_rels(opts.rels, 2, f, RELS.CORE_PROPS);

		f = "docProps/app.xml";
		if(!wb.Workbook || !wb.Workbook.Sheets) wb.Props.SheetNames = wb.SheetNames;
		wb.Props.Worksheets = wb.Props.SheetNames.length;
		zip.file(f, write_ext_props(wb.Props, opts));
		ct.extprops.push(f);
		add_rels(opts.rels, 3, f, RELS.EXT_PROPS);
		for(rId=1;rId <= wb.SheetNames.length; ++rId) {
			var wsrels = {'!id':{}};
			var ws = wb.Sheets[wb.SheetNames[rId-1]];
			var _type = (ws || {})["!type"] || "sheet";
			f = "xl/worksheets/sheet" + rId + "." + wbext;
			zip.file(f, write_ws(rId-1, f, opts, wb, wsrels));
			ct.sheets.push(f);
			add_rels(opts.wbrels, -1, "worksheets/sheet" + rId + "." + wbext, RELS.WS[0]);
			if(ws) {
				delete ws['!comments'];
				delete ws['!legacy'];
			}
		}
		f = "xl/workbook." + wbext;
		zip.file(f, write_wb_xml(wb, opts));
		ct.workbooks.push(f);
		add_rels(opts.rels, 1, f, RELS.WB);
		/* TODO: something more intelligent with themes */
		
		f = "xl/theme/theme1.xml";
		zip.file(f, write_theme(wb.Themes, opts));
		ct.themes.push(f);
		add_rels(opts.wbrels, -1, "theme/theme1.xml", RELS.THEME);
	
		/* TODO: something more intelligent with styles */
		
		f = "xl/styles." + wbext;
		zip.file(f, write_sty_xml(wb, opts));
		ct.styles.push(f);
		add_rels(opts.wbrels, -1, "styles." + wbext, RELS.STY);
		
		if(wb.vbaraw && vbafmt) {
			f = "xl/vbaProject.bin";
			zip.file(f, wb.vbaraw);
			ct.vba.push(f);
			add_rels(opts.wbrels, -1, "vbaProject.bin", RELS.VBA);
		}
		
		zip.file("[Content_Types].xml", write_ct(ct, opts));
		zip.file('_rels/.rels', write_rels(opts.rels));
		zip.file('xl/_rels/workbook.' + wbext + '.rels', write_rels(opts.wbrels));
		
		delete opts.revssf; delete opts.ssf;
		return zip;
	}
	function firstbyte(f) {
		return [f[0], f[1], f[2], f[3]];
	}
	
	
	function read_zip(data, opts) {
		var zip = new jszip(data, opts, { base64:false });
		return parse_zip(zip, opts);
	}
	
	function readSync(data, opts) {
		reset_cp();
		var n = [0,0,0,0];
		if(typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer){
			return readSync(new Uint8Array(data), opts)
		};
		if(opts.type == 'array' && typeof Uint8Array !== 'undefined' && data instanceof Uint8Array && typeof ArrayBuffer !== 'undefined') {
			var ab=new ArrayBuffer(3), vu=new Uint8Array(ab); vu.foo="bar";
			if(!vu.foo) {
				opts=dup(opts);
				opts.type='array';
				return readSync(ab2a(data), opts);
			}
		}
		switch((n = firstbyte(data))[0]) {
			//xls
			case 0x3C: return parse_xlml(a2s(data), opts);
			
			//xlsx
			case 0x50: return read_zip(data, opts);
		}
	}
	/*global encrypt_agile */
	function write_zip_type(wb, opts) {
		var o = opts||{};
		var z = write_zip(wb, o);
		var oopts = {};
		if(o.compression) oopts.compression = 'DEFLATE';
		else switch(o.type) {
			case "base64": oopts.type = "base64"; break;
			case "binary": oopts.type = "string"; break;
			default: throw new Error("Unrecognized type " + o.type);
		}
		var out = z.generate(oopts);
		return o.type == "string" ? utf8read(out) : out;
	}
	
	function writeSync(wb, opts) {
		check_wb(wb);
		var o = opts||{};
		if(o.type == "array") {
			o.type = "binary";
			var out = (writeSync(wb, o));
			o.type = "array";
			return s2ab(out);
		}
		return write_zip_type(wb, o);
	}
	
	function make_json_row(sheet, r, R, cols, hdr, o) {
		var rr = encode_row(R);
		var defval = o.defval, raw = o.raw || !o.hasOwnProperty("raw");
		var isempty = true;
		var row = {};
		if(Object.defineProperty)  {
			Object.defineProperty(row, '__rowNum__', {value:R, enumerable:false})
		}
		for (var C = r.s.c; C <= r.e.c; ++C) {
			var val = sheet[cols[C] + rr];
			if(val === undefined || val.t === undefined) {
				if(defval === undefined) continue;
				if(hdr[C] != null) { row[hdr[C]] = defval; }
				continue;
			}
			var v = val.v;
			switch(val.t){
				case 'z': if(v == null) break; continue;
				case 'e': v = void 0; break;
				case 's': case 'd': case 'b': case 'n': break;
				default: throw new Error('unrecognized type ' + val.t);
			}
			if(hdr[C] != null) {
				if(v == null) {
					if(defval !== undefined) row[hdr[C]] = defval;
					else if(raw && v === null) row[hdr[C]] = null;
					else continue;
				} else {
					row[hdr[C]] = raw ? v : v;
				}
				if(v != null) isempty = false;
			}
		}
		return { row: row, isempty: isempty };
	}
	
	
	function sheet_to_json(sheet, opts) {
		if(sheet == null || sheet["!ref"] == null) return [];
		var val = {t:'n',v:0}, header = 3, offset = 1, hdr = [], v=0, vv="";
		var r = {s:{r:0,c:0},e:{r:0,c:0}};
		var o = opts || {};
		var range = o.range != null ? o.range : sheet["!ref"];
		switch(typeof range) {
			case 'string': r = safe_decode_range(range); break;
			case 'number': r = safe_decode_range(sheet["!ref"]); r.s.r = range; break;
			default: r = range;
		}
		offset = 0;
		var rr = encode_row(r.s.r);
		var cols = [];
		var out = [];
		var outi = 0, counter = 0;
		var R = r.s.r, C = 0, CC = 0;
		for(C = r.s.c; C <= r.e.c; ++C) {
			cols[C] = encode_col(C);
			val = sheet[cols[C] + rr];
			hdr[C] = o.header[C - r.s.c];
		}
		for (R = r.s.r + offset; R <= r.e.r; ++R) {
			var row = make_json_row(sheet, r, R, cols, hdr, o);
			if((row.isempty === false) || (!!o.blankrows)){
				out[outi++] = row.row;
			}
		}
		out.length = outi;
		return out;
	}
	
	function sheet_add_json(_ws, js, opts) {
		var o = opts || {};
		var offset = +!o.skipHeader;
		var ws = _ws || ({});
		var _R = 0, _C = 0;
		if(ws && o.origin != null) {
			if(typeof o.origin == 'number') _R = o.origin;
			else {
				var _origin = typeof o.origin == "string" ? decode_cell(o.origin) : o.origin;
				_R = _origin.r; _C = _origin.c;
			}
		}
		var cell;
		var range = ({s: {c:0, r:0}, e: {c:_C, r:_R + js.length - 1 + offset}});
		if(ws['!ref']) {
			var _range = safe_decode_range(ws['!ref']);
			range.e.c = Math.max(range.e.c, _range.e.c);
			range.e.r = Math.max(range.e.r, _range.e.r);
			if(_R == -1) { _R = range.e.r + 1; range.e.r = _R + js.length - 1 + offset; }
		}
		var hdr = o.header || [], C = 0;
	
		js.forEach(function (JS, R) {
			_.keys(JS).forEach(function(k) {
				if((C=hdr.indexOf(k)) == -1) hdr[C=hdr.length] = k;
				var v = JS[k];
				var t = 's';
				var z = "";
				ws[encode_cell({c:_C + C,r:_R + R + offset})] = cell = ({t:t, v:v});
				if(z) cell.z = z;
			});
		});
		range.e.c = Math.max(range.e.c, _C + hdr.length - 1);
		var __R = encode_row(_R);
		if(offset) for(C = 0; C < hdr.length; ++C) ws[encode_col(C + _C) + __R] = {t:'s', v:hdr[C]};
		ws['!ref'] = encode_range(range);
		return ws;
	}
	function json_to_sheet(js, opts) { return sheet_add_json(null, js, opts); }
	
	var utils = {
		encode_col: encode_col,
		encode_row: encode_row,
		encode_cell: encode_cell,
		encode_range: encode_range,
		decode_col: decode_col,
		decode_row: decode_row,
		split_cell: split_cell,
		decode_cell: decode_cell,
		sheet_add_json: sheet_add_json,
		json_to_sheet: json_to_sheet,
		sheet_to_json: sheet_to_json,
	};
	
	(function(utils) {
		utils.consts = utils.consts || {};
		function add_consts(R/*Array<any>*/) { R.forEach(function(a){ utils.consts[a[0]] = a[1]; }); }
		/* simple blank workbook object */
		utils.book_new = function() {
			return { SheetNames: [], Sheets: {} };
		};
		
		/* add a worksheet to the end of a given workbook */
		utils.book_append_sheet = function(wb, ws, name) {
			if(!name) for(var i = 1; i <= 0xFFFF; ++i) if(wb.SheetNames.indexOf(name = "Sheet" + i) == -1) break;
			if(!name) throw new Error("Too many worksheets");
			check_ws_name(name);
			if(wb.SheetNames.indexOf(name) >= 0) throw new Error("Worksheet with name |" + name + "| already exists!");
		
			wb.SheetNames.push(name);
			wb.Sheets[name] = ws;
		};
		
		add_consts([
			["SHEET_VISIBLE", 0],
			["SHEET_HIDDEN", 1],
			["SHEET_VERY_HIDDEN", 2]
		]);
		return utils;
	})(utils);
	
	XLSX.read = readSync; //xlsread
	XLSX.write = writeSync;
	XLSX.utils = utils;
	XLSX.SSF = SSF;
}
if(typeof exports !== 'undefined') make_xlsx_lib(exports);
else if(typeof module !== 'undefined' && module.exports) make_xlsx_lib(module.exports);
else if(typeof define === 'function' && define.amd) define('xlsx', function() { if(!XLSX.version) make_xlsx_lib(XLSX); return XLSX; });
else make_xlsx_lib(XLSX);