function weekends() {
	for(var i = 0; i < 7; i++) {
		var tr = $('.minicalc').eq(0).find('tr').eq(i);
		if(!tr) break;
		tr.find('td').eq(0).css('color', '#f84949');
		tr.find('td').eq(6).css('color', '#f84949');
	}
}

function dom(id) {
	return document.getElementById(id);
};

/*閫氳繃className鑾峰彇dom鍏冪礌杩涜杩囨护*/
function domClass(pidDom, sClass) {
	var aEle = typeof pidDom == "string" ? dom(pidDom) : pidDom.getElementsByTagName('*');
	var arrs = [];
	for(var i = 0; i < aEle.length; i++) {
		if(aEle[i].className.indexOf(sClass) != -1) {
			arrs.push(aEle[i]);
		}
	}
	return arrs;
};

//绠€鍗曟贩鍏�
function mixin(obj, obj2) {
	for(var k in obj2) {
		if(obj2.hasOwnProperty(k)) {
			obj[k] = obj2[k];
		}
	}
	return obj;
};

//澶氬璞℃贩鍏�
function mix(target, source) {
	var arr = [];
	var args = arr.slice.call(arguments);

	var i = 1;
	if(args.length == 1) {
		return target;
	};

	while((source = args[i++])) {
		for(var miniy in source) {
			if(source.hasOwnProperty(miniy)) {
				target[miniy] = source[miniy];
			}
		}
	}
	return target;
};

var Calender = (function() {
	/**
	 * 瀵笵ate鐨勬墿灞曪紝灏� Date 杞寲涓烘寚瀹氭牸寮忕殑String 鏈�(M)銆佹棩(d)銆�12灏忔椂(h)銆�24灏忔椂(H)銆佸垎(m)銆佺(s)銆佸懆(E)銆佸搴�(q)
	 * 鍙互鐢� 1-2 涓崰浣嶇 骞�(y)鍙互鐢� 1-4 涓崰浣嶇锛屾绉�(S)鍙兘鐢� 1 涓崰浣嶇(鏄� 1-3 浣嶇殑鏁板瓧) eg: (new
	 * Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 (new
	 * Date()).format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 浜� 20:09:04 (new
	 * Date()).format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 鍛ㄤ簩 08:09:04 (new
	 * Date()).format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 鏄熸湡浜� 08:09:04 (new
	 * Date()).format("yyyy-M-d h:m:s.S q ") ==> 2006-7-2 8:9:4.18
	 */
	Date.prototype.format = function(fmt) {
		var o = {
			"Y+": this.getFullYear(),
			"M+": this.getMonth() + 1,
			// 鏈堜唤
			"d+": this.getDate(),
			// 鏃�
			"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
			// 灏忔椂
			"H+": this.getHours(),
			// 灏忔椂
			"m+": this.getMinutes(),
			// 鍒�
			"s+": this.getSeconds(),
			// 绉�
			"q+": Math.floor((this.getMonth() + 3) / 3),
			// 瀛ｅ害
			"S": this.getMilliseconds()
				// 姣
		};
		var week = {
			"0": "鏃�",
			"1": "涓€",
			"2": "浜�",
			"3": "涓�",
			"4": "鍥�",
			"5": "浜�",
			"6": "鍏�"
		};
		if(/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
		}
		if(/(E+)/.test(fmt)) {
			fmt = fmt
				.replace(
					RegExp.$1,
					((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" :
							"/u5468") :
						"") +
					week[this.getDay() + ""]);
		}
		for(var k in o) {
			if(new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
					(("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	};

	//鏋勯€犲嚱鏁�
	var miniCalender = function(opts) {
		this.id = opts.id;
		this.defaults = {
				width: 500,
				height: 500,
				background: "#fff",
				color: "#999",
				format: "yyyy-MM-dd",
				start : 2015 ,
				end : 2100
			},
		this.options = mix(this.defaults, opts); //jquery extend鍘熺悊
		this.yrange = this.options.yrange || miniCalender.YEARS;
		this.monthTag = this.options.monthTag || miniCalender.MONTHS;
		this.weekTag = this.options.weekTag || miniCalender.WEEKS;
		this.dbclick = this.options.dbclick;
		this.click = this.options.click;
	};

	//闈欐€佸父閲�
	miniCalender.WEEKS = ["鏄熸湡鏃�", "鏄熸湡涓€", "鏄熸湡浜�", "鏄熸湡涓�", "鏄熸湡鍥�", "鏄熸湡浜�", "鏄熸湡鍏�"];
	miniCalender.MONTHS = ["涓€鏈�", "浜屾湀", "涓夋湀", "鍥涙湀", "浜旀湀", "鍏湀", "涓冩湀", "鍏湀", "涔濇湀", "鍗佹湀", "鍗佷竴鏈�", "鍗佷簩鏈�"];
	miniCalender.YEARS = [2015, 2100];

	//瀵筸iniCalender 鍑芥暟 杩涜鎵╁睍
	miniCalender.prototype = {
		consturctor: miniCalender,

		//鍒濆鍖�
		init: function() {
			var args = arguments;
			var year = "",
				month = "";

			//濡傛灉浼犺繘鏉ヤ袱涓弬鏁帮紝灏辩粰year鍜宮onth璧嬪€硷紝鍚﹀垯閲囩敤褰撳墠鏃堕棿
			if(args.length == 2) {
				year = args[0];
				month = args[1];
			} else {
				var date = new Date();
				year = date.getFullYear();
				month = date.getMonth() + 1;
			};
			//鍒濆鍖栨ā鏉�
			var domObj = this.template(year, month);

			var json = {};
			domClass(domObj, "mini_calcd").forEach(function(obj) {
				json[obj.getAttribute("ymd")] = obj;
			});
			if(this.success) this.success.call(json);
		},

		//妯℃澘鍑芥暟
		template: function(year, month) {
			var $calc = this;
			var boxDom = dom($calc.id);
			var html = "<div class='minicalc'>" +
				"<div class='kcalcr'>" +
				"	<div class='minicln-controls'>" +
				"		<div class='minicln-control-button'>" +
				"			<p class='mini_calc_prev mini_prev'></p>" +
				"		</div>" +
				"		<div class='month'>" + year + " 骞� " + $calc.monthTag[month - 1] + "</div>" +
				"		<div class='minicln-control-button rightalign'>" +
				"			<p class='mini_calc_next mini_next'></p>" +
				"		</div>" +
				"		<div class='minicalc_box' id='mini_cacle_" + $calc.id + "'></div>" +
				"	</div>" +
				"</div>" +
				"</div>";
			boxDom.innerHTML = html;
			//缁欑洅瀛愭坊鍔犳牱寮忥紝姣斿璇村搴︼紝楂樺害锛岃儗鏅壊锛�
			$calc.css(boxDom, $calc.options);
			//缁戝畾浜嬩欢,涓婁竴骞达紝涓嬩竴骞�
			$calc.prevEvent(boxDom, year, month);
			$calc.nextEvent(boxDom, year, month);

			//鍒涘缓涓€涓〃鏍�
			var tableDom = $calc.element("table");
			$calc.css(tableDom, {
				height: $calc.options.height - 65
			});
			$calc.addClass(tableDom, "minicln-table");
			//鍒涘缓琛ㄥご
			var theadDom = $calc.element("thead");
			//鍒涘缓涓€涓猼r
			var trDom = $calc.element("tr");
			$calc.addClass(trDom, "header-days");
			for(var i = 0, len = $calc.weekTag.length; i < len; i++) {
				var tdDom = $calc.element("td");
				$calc.addClass(tdDom, "header-day");
				tdDom.innerHTML = $calc.weekTag[i];
				trDom.appendChild(tdDom);
			};
			//灏嗚娣诲姞鍒拌〃澶翠腑
			$calc.append(theadDom, trDom);

			//鍒涘缓琛ㄤ綋
			var tbodyDom = $calc.element("tbody");

			//鑾峰彇褰撴湀鐨勫ぉ鏁�
			var days = $calc.getMonthDay(year, month);
			//鎷垮埌涓婁竴涓湀鐨勬€诲ぉ鏁帮紝琛ラ綈鍓嶉潰鐨勭┖鏍�
			var pdays = $calc.getMonthDay(year, month - 1);
			//鍒涘缓姣忎釜鏈堢殑绗竴澶╃殑鏃ユ湡瀵硅薄
			var date = new Date(year, month - 1, 1);
			var currentDate = new Date();
			var cdate = currentDate.getDate();
			//鑾峰彇姣忎釜鏈堢殑绗竴澶╂槸鏄熸湡鍑�
			var week = date.getDay();
			var j = 0; //璁板綍澶╂暟
			var tdHtml = "";
			var cmark = false;
			var nindex = 1;
			var pwdays = pdays - week + 1;
			while(true) {
				tdHtml += "<tr>";
				//鎷垮埌涓€涓湀鏈夊灏戝ぉ
				//鎷垮埌杩欎釜鏈堢涓€澶╂槸鏄熸湡鍑�
				for(var i = 0; i < 7; i++) {
					var mark = "day";
					if(j == 0 && i == week) { //灏卞幓鏄鎵炬瘡涓湀绗竴澶╂槸鏄熸湡鍑�
						j++;
						if(j == cdate) mark = "day  today";
						tdHtml += "<td ymd='" + year + "/" + month + "/" + j + "' class='mini_calcd " + mark + "'>1</td>";
						cmark = true;
					} else if(j > 0 && j < days) {
						j++;
						if(j == cdate) mark = "day today";
						tdHtml += "<td ymd='" + year + "/" + month + "/" + j + "' class='mini_calcd " + mark + "'>" + j + "</td>";
					} else {
						//td濉┖鏍�
						if(!cmark) {
							var oy = year;
							if(month == 1) {
								oy = year - 1;
							}
							tdHtml += "<td ymd='" + oy + "/" + (month - 1 == 0 ? 12 : month - 1) + "/" + pwdays + "' class='mini_calcd day empt'>" + pwdays + "</td>";
							pwdays++;
						} else {
							var oy = year;
							if(month == 12) oy = year + 1;
							tdHtml += "<td ymd='" + oy + "/" + (month + 1) + "/" + nindex + "' class='mini_calcd day empt'>" + nindex + "</td>";
							nindex++;
						}
					}
				}
				tdHtml += "</tr>";
				if(j >= days) break;
			};

			//杩藉姞鎷兼帴鐨勬棩鏈熸枃鏈�
			tbodyDom.innerHTML = tdHtml;
			//杩藉姞鍏冪礌
			$calc.append(tableDom, theadDom);
			$calc.append(tableDom, tbodyDom);
			$calc.append(dom("mini_cacle_" + $calc.id), tableDom);

			//缁欐墍鏈夌殑td鍏冪礌缁戝畾鐐瑰嚮浜嬩欢
			domClass(tbodyDom, "mini_calcd").forEach(function(obj) {
				obj.ondblclick = function() {
					var ymd = this.getAttribute("ymd");
					var date = new Date();
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var dataStr = ymd + " " + hour + ":" + min + ":" + sec;
					var rdate = new Date(dataStr);
					if($calc.dbclick) $calc.dbclick.call(rdate, rdate.format($calc.options.format));
				}

				obj.onclick = function() {

					var ymd = this.getAttribute("ymd");
					var date = new Date();
					var hour = date.getHours();
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var dataStr = ymd + " " + hour + ":" + min + ":" + sec;
					var rdate = new Date(dataStr);
					if($calc.click) $calc.click.call(rdate, rdate.format($calc.options.format));
				}
			});
			weekends();
			return boxDom;
		},

		nextEvent: function(dom, year, month) { //涓嬩竴骞�
			var $calc = this;
			domClass(dom, "mini_next")[0].onclick = function() {
				var m = month + 1;
				var y = year;
				if(year == $calc.yrange[1] && m > 12) {
					alert("浣犲凡缁忓埌鏈€澶у勾闄愪簡...");
					return;
				}
				if(m > 12) {
					y = year + 1;
					m = 1;
				}

				$calc.template(y, m);
			};
		},
		prevEvent: function(dom, year, month) { //涓婁竴骞�
			var $calc = this;
			domClass(dom, "mini_prev")[0].onclick = function() {
				var m = month - 1;
				var y = year;
				if(year == $calc.yrange[0] && m == 0) {
					alert("浣犲凡缁忓埌鏈€灏忓勾闄愪簡...");
					return;
				}
				if(m == 0) {
					y = year - 1;
					m = 12;
				}
				$calc.template(y, m);
			};
		},
		getMonthDay: function(year, month) { //鎷垮埌涓€涓湀鏈夊灏戝ぉ锛実etDate()鎷垮埌浠婂ぉ鏄嚑鍙�
			return new Date(year, month, 0).getDate(); //鎷垮埌涓婁釜鏈堟渶鍚庝竴澶�
		},
		addClass: function(dom, className) { //娣诲姞鏍峰紡
			dom.className = className;
		},
		append: function(dom, subdom) { //杩藉姞鍏冪礌
			dom.appendChild(subdom);
		},
		element: function(ele) { //鍒涘缓鍏冪礌
			return document.createElement(ele);
		},
		css: function(dom, opts) {
			for(var miniy in opts) {
				var v = opts[miniy];
				dom.style[miniy] = (typeof v === "number" ? v + "px" : v);
			}
		}
	};
	return miniCalender;
})();
