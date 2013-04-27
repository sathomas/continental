/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'continental\'">' + entity + '</span>' + html;
	}
	var icons = {
			'map-va' : '&#xe000;',
			'map-uk' : '&#xe001;',
			'map-ua' : '&#xe002;',
			'map-tr' : '&#xe003;',
			'map-sm' : '&#xe004;',
			'map-sk' : '&#xe005;',
			'map-si' : '&#xe006;',
			'map-se' : '&#xe007;',
			'map-ru' : '&#xe008;',
			'map-rs' : '&#xe009;',
			'map-ro' : '&#xe00a;',
			'map-pt' : '&#xe00b;',
			'map-pl' : '&#xe00c;',
			'map-no' : '&#xe00d;',
			'map-nl' : '&#xe00e;',
			'map-mt' : '&#xe00f;',
			'map-mk' : '&#xe010;',
			'map-me' : '&#xe011;',
			'map-md' : '&#xe012;',
			'map-mc' : '&#xe013;',
			'map-lv' : '&#xe014;',
			'map-lu' : '&#xe015;',
			'map-lt' : '&#xe016;',
			'map-li' : '&#xe017;',
			'map-je' : '&#xe018;',
			'map-it' : '&#xe019;',
			'map-is' : '&#xe01a;',
			'map-im' : '&#xe01b;',
			'map-ie' : '&#xe01c;',
			'map-hu' : '&#xe01d;',
			'map-hr' : '&#xe01e;',
			'map-gr' : '&#xe01f;',
			'map-gg' : '&#xe020;',
			'map-ge' : '&#xe021;',
			'map-fr' : '&#xe022;',
			'map-fo' : '&#xe023;',
			'map-fi' : '&#xe024;',
			'map-eu' : '&#xe025;',
			'map-es' : '&#xe026;',
			'map-ee' : '&#xe027;',
			'map-dk' : '&#xe028;',
			'map-de' : '&#xe029;',
			'map-cz' : '&#xe02a;',
			'map-cy' : '&#xe02b;',
			'map-ch' : '&#xe02c;',
			'map-by' : '&#xe02d;',
			'map-bg' : '&#xe02e;',
			'map-be' : '&#xe02f;',
			'map-ba' : '&#xe030;',
			'map-at' : '&#xe031;',
			'map-al' : '&#xe032;',
			'map-ad' : '&#xe033;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/map-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};