// ======================= DOM Utility Functions from PastryKit =============================== // // Sure, we could use jQuery or XUI for these, // but these are concise and will work with plain vanilla JS Element.prototype.hasClassName = function (a) {return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);};Element.prototype.addClassName = function (a) {if (!this.hasClassName(a)) {this.className = [this.className, a].join(" ");}};Element.prototype.removeClassName = function (b) {if (this.hasClassName(b)) {var a = this.className;this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");}};Element.prototype.toggleClassName = function (a) {this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);};// ======================= Modernizr =============================== // ;window.Modernizr = function (a, b, c) {function C(a, b) {var c = a.charAt(0).toUpperCase() + a.substr(1), d = (a + " " + o.join(c + " ") + c).split(" ");return B(d, b) }function B(a, b) {for (var d in a) if (k[a[d]] !== c) return b == "pfx" ? a[d] : !0;return !1 }function A(a, b) {return !!~("" + a).indexOf(b) }function z(a, b) {return typeof a === b }function y(a, b) {return x(n.join(a + ";") + (b || "")) }function x(a) {k.cssText = a }var d = "2.0.6", e = {}, f = !0, g = b.documentElement, h = b.head || b.getElementsByTagName("head")[0], i = "modernizr", j = b.createElement(i), k = j.style, l, m = Object.prototype.toString, n = " -webkit- -moz- -o- -ms- -khtml- ".split(" "), o = "Webkit Moz O ms Khtml".split(" "), p = {}, q = {}, r = {}, s = [], t = function (a, c, d, e) {var f, h, j, k = b.createElement("div");if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : i + (d + 1), k.appendChild(j);f = ["&shy;", "<style>", a, "</style>"].join(""), k.id = i, k.innerHTML += f, g.appendChild(k), h = c(k, a), k.parentNode.removeChild(k);return !!h }, u, v = {}.hasOwnProperty, w;!z(v, c) && !z(v.call, c) ? w = function (a, b) {return v.call(a, b) }: w = function (a, b) {return b in a && z(a.constructor.prototype[b], c) };var D = function (a, c) {var d = a.join(""), f = c.length;t(d, function (a, c) {var d = b.styleSheets[b.styleSheets.length - 1], g = d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText : d.cssText || "", h = a.childNodes, i = {};while (f--) i[h[f].id] = h[f];e.csstransforms3d = i.csstransforms3d.offsetLeft === 9 }, f, c) }([, ["@media (", n.join("transform-3d),("), i, ")", "{#csstransforms3d{left:9px;position:absolute}}"].join("")], [, "csstransforms3d"]);p.csstransforms3d = function () {var a = !!B(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);a && "webkitPerspective" in g.style && (a = e.csstransforms3d);return a };for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));x(""), j = l = null, a.attachEvent && function () {var a = b.createElement("div");a.innerHTML = "<elem></elem>";return a.childNodes.length !== 1 }() && function (a, b) {function s(a) {var b = -1;while (++b < g) a.createElement(f[b]) }a.iepp = a.iepp || {};var d = a.iepp, e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", f = e.split("|"), g = f.length, h = new RegExp("(^|\\s)(" + e + ")", "gi"), i = new RegExp("<( if ($('#carousel').length > 0) {var transformProp = Modernizr.prefixed('transform');function Carousel3D(el) {this.element = el;this.rotation = 0;this.panelCount = 0;this.totalPanelCount = this.element.children.length;this.theta = 0;this.isHorizontal = true;}Carousel3D.prototype.modify = function () {var panel, angle, i;this.panelSize = this.element[this.isHorizontal ? 'offsetWidth' : 'offsetHeight'];this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';this.theta = 360 / this.panelCount;// do some trig to figure out how big the carousel // is in 3D space this.radius = Math.round((this.panelSize / 2) / Math.tan(Math.PI / this.panelCount));for (i = 0;i < this.panelCount;i++) {panel = this.element.children[i];angle = this.theta * i;panel.style.opacity = 1;//panel.style.backgroundColor = 'hsla(' + angle + ', 100%, 50%, 0.8)';// rotate panel, then push it out in 3D space panel.style[transformProp] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';}// hide other panels for (;i < this.totalPanelCount;i++) {panel = this.element.children[i];panel.style.opacity = 0;panel.style[transformProp] = 'none';}// adjust rotation so panels are always flat this.rotation = Math.round(this.rotation / this.theta) * this.theta;this.transform();};Carousel3D.prototype.transform = function () {// push the carousel back in 3D space, // and rotate it this.element.style[transformProp] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';};var init = function () {var carousel = new Carousel3D(document.getElementById('carousel')), navButtons = document.querySelectorAll('#navigation button'), onNavButtonClick = function (event) {var increment = parseInt(event.target.getAttribute('data-increment'));carousel.rotation += carousel.theta * increment * -1;carousel.transform();};// populate on startup carousel.panelCount = 12;carousel.modify();for (var i = 0;i < 2;i++) {navButtons[i].addEventListener('click', onNavButtonClick, false);}setTimeout(function () {document.body.addClassName('ready');}, 0);};window.addEventListener('DOMContentLoaded', init, false);}