/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Continental-Symbol-ST\'">' + entity + '</span>' + html;
	}
	var icons = {
			'map-eur' : '&#xe001;',
			'map-va' : '&#xe002;',
			'map-uk' : '&#xe003;',
			'map-ua' : '&#xe004;',
			'map-tr' : '&#xe005;',
			'map-sm' : '&#xe006;',
			'map-sk' : '&#xe007;',
			'map-si' : '&#xe008;',
			'map-se' : '&#xe009;',
			'map-ru' : '&#xe00a;',
			'map-rs' : '&#xe00b;',
			'map-ro' : '&#xe00c;',
			'map-pt' : '&#xe00d;',
			'map-pl' : '&#xe00e;',
			'map-no' : '&#xe00f;',
			'map-nl' : '&#xe010;',
			'map-mt' : '&#xe011;',
			'map-mk' : '&#xe012;',
			'map-me' : '&#xe013;',
			'map-md' : '&#xe014;',
			'map-mc' : '&#xe015;',
			'map-lv' : '&#xe016;',
			'map-lu' : '&#xe017;',
			'map-lt' : '&#xe018;',
			'map-li' : '&#xe019;',
			'map-je' : '&#xe01a;',
			'map-it' : '&#xe01b;',
			'map-is' : '&#xe01c;',
			'map-im' : '&#xe01d;',
			'map-ie' : '&#xe01e;',
			'map-hu' : '&#xe01f;',
			'map-hr' : '&#xe020;',
			'map-gr' : '&#xe021;',
			'map-gg' : '&#xe022;',
			'map-ge' : '&#xe023;',
			'map-fr' : '&#xe024;',
			'map-fo' : '&#xe025;',
			'map-fi' : '&#xe026;',
			'map-es' : '&#xe027;',
			'map-ee' : '&#xe028;',
			'map-dk' : '&#xe029;',
			'map-de' : '&#xe02a;',
			'map-cz' : '&#xe02b;',
			'map-cy' : '&#xe02c;',
			'map-ch' : '&#xe02d;',
			'map-by' : '&#xe02e;',
			'map-bg' : '&#xe02f;',
			'map-be' : '&#xe030;',
			'map-ba' : '&#xe031;',
			'map-at' : '&#xe032;',
			'map-al' : '&#xe033;',
			'map-ad' : '&#xe034;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/map-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};