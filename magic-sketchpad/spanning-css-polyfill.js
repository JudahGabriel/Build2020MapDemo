!function(){var n="single-fold-vertical",e="none",t="__foldables_env_vars__",i=/\((.*?)\)/gi,o=/@media[^\(]+/gi,a=function(n){return new RegExp("env\\(\\s*"+n+"\\s*\\)","gi")},r={"fold-top":"top","fold-left":"left","fold-height":"height","fold-width":"width"},l={"single-fold-horizontal":!0};l[n]=!0,l[e]=!0;var d="",s={all:""};s[n]="",s["single-fold-horizontal"]="";var f,c=[],u={spanning:sessionStorage.getItem(t+"-spanning")||"single-fold-horizontal",updateState:g};function h(){if(Array.from(document.querySelectorAll("."+t)).forEach(function(n){return n.parentElement.removeChild(n)}),u.spanning!==e){var i=s[u.spanning],o=document.createElement("style");o.className=t;var l,d,f,c,h=(function(e){return e.spanning===n}(u)?(f=20,c=window.innerHeight,l=window.innerWidth/2-10,d=0):(f=window.innerWidth,c=20,l=0,d=window.innerHeight/2-70),{top:d,left:l,width:f,height:c});Object.keys(r).forEach(function(n){var e;e=h[r[n]]+"px",i=i.replace(a(n),e)}),o.textContent=i,document.head.appendChild(o)}}function g(n){Object.keys(n).forEach(function(e){"spanning"===e&&void 0!==l[n[e]]&&(u.spanning=n[e],sessionStorage.setItem(t+"-spanning",u.spanning)),h()})}(f=c=Array.from(document.querySelectorAll('link[rel="stylesheet"], style')),Promise.all(f.map(function(n){var e=n.href;return e?fetch(e).then(function(n){return n.text()}):n.textContent}))).then(function(e){var a,r;d=e.join("\n"),s.all=d.replace(new RegExp("(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})\\s*\\}","gi"),""),(a=d,r=new RegExp("(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})\\s*\\}","gi"),Array.from(a.matchAll(r))).forEach(function(e){var t=e[1],a=e[2],r=function(e,t,i){var o=n;if(i.includes("single-fold-horizontal")&&(o="single-fold-horizontal"),t.length<2)return{type:o,definition:null};var a=e;return{type:o,definition:a+=t.filter(function(n){return!n.includes("spanning")}).join(" and ")}}(t.match(o)||[],t.match(i)||[],t);s[r.type]+=null===r.definition?a+"\n":r.definition+" { "+a+" }\n"});var l=document.createElement("style");l.textContent=s.all,c.forEach(function(n){return n.parentElement.removeChild(n)}),document.head.appendChild(l),Object.defineProperty(window,t,{value:u});var f,p,m=(f=h,function(){var n=arguments,e=this;clearTimeout(p),p=setTimeout(function(){return f.apply(e,n)},100)});window.addEventListener("resize",m),window.addEventListener("message",function(n){"updateState"===(n.data.action||"")&&g(n.data.value||{})}),h()})}();
//# sourceMappingURL=spanning-css-polyfill.js.map
