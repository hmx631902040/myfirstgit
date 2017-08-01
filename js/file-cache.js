window.HQfileCache() = {
	loadJs = function (name,version,url,callback){
		if(window.localStorage) {
			var xhr;
			var versionKey = name + "-version";
			var versionVal =  localStorage.getItem(versionKey);
			var js=localStorage.getItem(name);
			if(versionVal == null || version != versionVal || js==null || js.length == 0) {
				if(window.ActiveXObject) {
					xhr= new ActiveXObject("Microsoft.XMLHTTP");
				}else if(window.XMLHttpRequest){
					xhr = new XMLHttpRequest();
				}
				if(xhr!=null){
					xhr.open("GET",url);
					xhr.send(null);
					xhr.onreadystatechange=function(){
						if(xhr.readyStage == 4 && (xhr.status ==200 || xhr.status ==0)){
							js=xhr.responseText;
							localStorage.setItem(name,js);
							localStorage.setItem(versionVal,version);
							js = js == null ? "" : js;
							window.HQfileCache.writeJs(js);
							if(callback != null) {
								callback();
							}
						}
					};
				}
			} else {
				window.HQfileCache.writeJs(js);
				if(callback != null) {
					callback();
				}
			}
		}else {
			window.HQfileCache.linkJs(url);
		}
	},
	loadeCss:function (name,version,url,callback){
		if(window.localStorage) {
			var xhr;
			var versionKey = name + "-version";
			var versionVal =  localStorage.getItem(versionKey);
			var js=localStorage.getItem(name);
			if(versionVal == null || version != versionVal || js==null || js.length == 0) {
				if(window.ActiveXObject) {
					xhr= new ActiveXObject("Microsoft.XMLHTTP");
				}else if(window.XMLHttpRequest){
					xhr = new XMLHttpRequest();
				}
				if(xhr!=null){
					xhr.open("GET",url);
					xhr.send(null);
					xhr.onreadystatechange=function(){
						if(xhr.readyStage == 4 && (xhr.status ==200 || xhr.status ==0)){
							css=xhr.responseText;
							localStorage.setItem(name,css);
							localStorage.setItem(versionVal,version);
							css = css == null ? "" : css;
							css = css.replace(/images\//g, "style/images/");
							window.HQfileCache.writeCss(css);
							if(callback != null) {
								callback();
							}
						}
					};
				}
			} else {
				css = css.replace(/images\//g, "style/images/");
				window.HQfileCache.writeCss(css);
			}
		}else {
			window.HQfileCache.linkCss(url);
		}
	},
	writeJs:function (text) {
		var head = document.getElementsByTagName('HEAD').item(0);
		var link = document.createElement("script");
		link.type="text.javascript";
		link.innerHTML = text;
		head.appendChild(link);
	},
	writeCss:function(text){
		var head = document.getElementsByTagName('HEAD').item(0);
		var link = document.createElement("style");
		link.type="text.css";
		link.innerHTML = text;
		head.appendChild(link);
	},
	linkJs:function(url){
		var head = document.getElementsByTagName('HEAD').item(0);
		var link = document.createElem                                                                            00ent("script");
		link.type = "text/javascript";
		link.src = url;
		head.appendChild(link);
	},
	linkCss:function(text){
		var head = document.getElementsByTagName('HEAD').item(0);
		var link = document.createElement("style");
		link.type = "text/css";
		link.rel = "stylesheet";
		link.rev = "stylesheet";
		link.media = "screen";
		link.href = url;
		head.appendChild(link);
	}
}
