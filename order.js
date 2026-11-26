(function(){
var BR={y:{n:"فرع حي اليرموك",w:"966551296445"},a:{n:"فرع حي العقيق",w:"966509404366"}};
var M=window.MENU||[],BYALT={},BYID={};
M.forEach(function(d){BYID[d.id]=d;if(d.alt)BYALT[d.alt]=d});
function AR(n){return String(n).replace(/\d/g,function(d){return "٠١٢٣٤٥٦٧٨٩"[d]})}
function ck(k){var a=String(k).split("_");return {d:BYID[a[0]],o:+a[1]||0}}
function ctot(){var t=0;for(var k in S.cart){var x=ck(k);t+=x.d.o[x.o][1]*S.cart[k]}return t}
function olab(d,o){return d.single?"":AR(d.o[o][0])+" حبة"}
var KEY="mentu_site_order";
var S;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
S=S||{cart:{},br:null,loc:null};for(var _k in S.cart)if(String(_k).indexOf("_")<0){S.cart={};break}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function count(){var t=0;for(var k in S.cart)t+=S.cart[k];return t}
var css=document.createElement("style");
css.textContent=".mo-add{position:absolute;left:12px;bottom:12px;width:44px;height:44px;border:0;border-radius:50%;background:#d9a441;color:#1a100a;font-size:28px;line-height:1;font-family:inherit;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.5);z-index:3}"+
".mo-add.on{background:#25a244;color:#fff;font-size:15px;font-weight:700}"+
".mo-pr{position:absolute;right:12px;bottom:12px;background:rgba(20,12,7,.82);color:#f5b72e;border:1px solid #d9a441;border-radius:99px;padding:6px 12px;font-size:14px;font-weight:700;z-index:3;direction:rtl}.mo-pr small{display:block;font-size:11px;font-weight:400;color:rgba(253,249,244,.8)}"+
".mo-bar{position:fixed;left:0;right:0;bottom:0;display:none;justify-content:center;padding:10px 14px calc(10px + env(safe-area-inset-bottom));z-index:9000;background:linear-gradient(transparent,rgba(14,8,4,.85) 40%)}"+
".mo-bar button{width:100%;max-width:430px;height:52px;border-radius:14px;border:0;background:#25a244;color:#fff;font-weight:700;font-size:16px;font-family:inherit;display:flex;justify-content:space-between;align-items:center;padding:0 18px;cursor:pointer}"+
".mo-ov{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9500;display:none;justify-content:center;align-items:flex-end}"+
".mo-ov.open{display:flex}"+
".mo-sh{width:100%;max-width:480px;max-height:92vh;overflow-y:auto;background:#1a100a;color:#fdf9f4;border-radius:22px 22px 0 0;padding:18px 18px calc(20px + env(safe-area-inset-bottom));border-top:1px solid rgba(253,249,244,.25);font-family:inherit;direction:rtl}"+
".mo-h{display:flex;justify-content:space-between;align-items:center;font-size:20px;margin-bottom:12px}.mo-h b{color:#f5b72e}"+
".mo-x{background:none;border:0;color:#fdf9f4;font-size:26px;cursor:pointer}"+
".mo-it{display:flex;gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid rgba(253,249,244,.14)}.mo-it img{width:54px;height:54px;border-radius:10px;object-fit:cover}.mo-it span{flex:1;font-size:14px}"+
".mo-q{display:flex;align-items:center;gap:10px}.mo-q button{width:32px;height:32px;border-radius:50%;border:1px solid #d9a441;background:none;color:#f5b72e;font-size:18px;cursor:pointer;font-family:inherit}"+
".mo-lb{font-size:13px;color:rgba(253,249,244,.7);margin:16px 0 8px}"+
".mo-br{display:flex;gap:8px}.mo-br div{flex:1;text-align:center;padding:12px 6px;border-radius:12px;border:1.5px solid rgba(253,249,244,.25);font-size:14px;cursor:pointer}.mo-br div.on{border-color:#d9a441;background:rgba(217,164,65,.16);color:#f5b72e}"+
".mo-map{height:260px;border-radius:14px;overflow:hidden;border:1px solid rgba(253,249,244,.2);background:#222}"+
".mo-st{font-size:12.5px;color:#f5b72e;margin:8px 0;min-height:18px}"+
".mo-go{display:block;width:100%;height:52px;border-radius:14px;border:0;background:#25a244;color:#fff;font-weight:700;font-size:16px;font-family:inherit;margin-top:14px;cursor:pointer}"+
".mo-er{color:#ff8a7a;font-size:12.5px;min-height:18px;margin-top:8px}"+
".mo-cl{background:none;border:0;color:rgba(253,249,244,.55);font-size:12px;margin-top:10px;cursor:pointer;font-family:inherit}";
document.head.appendChild(css);
var bar=document.createElement("div");bar.className="mo-bar";bar.innerHTML='<button type="button"><span id="mo-bt"></span><span id="mo-bs">عرض السلة ‹</span></button>';
var ov=document.createElement("div");ov.className="mo-ov";ov.innerHTML='<div class="mo-sh" id="mo-sh"></div>';
document.body.appendChild(bar);document.body.appendChild(ov);
bar.firstChild.onclick=function(){openCart()};
ov.onclick=function(e){if(e.target==ov)closeCart()};
var PK=null,pso=0,pq=1;
function addC(id,q,o){var k=id+"_"+(o||0);S.cart[k]=(S.cart[k]||0)+q;save();paint()}
function scan(){
 document.querySelectorAll("img.mentu-card-img").forEach(function(im){
  var d=BYALT[im.alt]||M.filter(function(x){return !x.alt&&x.n==im.alt})[0];if(!d)return;
  var card=im.closest(".mentu-card");if(!card||card.querySelector(".mo-add"))return;
  if(getComputedStyle(card).position=="static")card.style.position="relative";
  var b=document.createElement("button");b.type="button";b.className="mo-add";b.setAttribute("data-id",d.id);b.setAttribute("aria-label","أضف "+d.n);b.textContent="+";
  b.onclick=function(e){e.preventDefault();e.stopPropagation();if(d.single){addC(d.id,1,0)}else{PK=d;pso=0;pq=1;drawPick();ov.classList.add("open")}};
  var pl=document.createElement("div");pl.className="mo-pr";pl.innerHTML=(d.single?"":"من ")+AR(d.o[0][1])+" ر.س";card.appendChild(pl);
  card.appendChild(b)});
 paint()}
function drawPick(){var d=PK,sh=document.getElementById("mo-sh");
 var h='<div class="mo-h"><b>'+d.n+'</b><button class="mo-x" id="mo-c">×</button></div><div class="mo-br" style="flex-wrap:wrap;margin-top:14px">';
 d.o.forEach(function(x,i){h+='<div data-o="'+i+'" class="'+(i==pso?"on":"")+'" style="flex:1 1 30%">'+AR(x[0])+' حبة<br><b>'+AR(x[1])+' ر.س</b></div>'});
 h+='</div><div class="mo-q" style="justify-content:center;margin:18px 0;font-size:20px"><button data-q="1">+</button><b>'+AR(pq)+'</b><button data-q="-1">−</button></div><button class="mo-go" id="mo-ad">أضف إلى السلة · '+AR(d.o[pso][1]*pq)+' ر.س</button>';
 sh.innerHTML=h;document.getElementById("mo-c").onclick=closeCart;
 sh.querySelectorAll("[data-o]").forEach(function(e){e.onclick=function(){pso=+e.getAttribute("data-o");drawPick()}});
 sh.querySelectorAll("[data-q]").forEach(function(e){e.onclick=function(){pq=Math.max(1,pq+(+e.getAttribute("data-q")));drawPick()}});
 document.getElementById("mo-ad").onclick=function(){addC(d.id,pq,pso);closeCart()}}
function paint(){
 document.querySelectorAll(".mo-add").forEach(function(b){var q=0;for(var k in S.cart)if(k.split("_")[0]==b.getAttribute("data-id"))q+=S.cart[k];var cn="mo-add"+(q?" on":""),tx=q?AR(q):"+";if(b.className!=cn)b.className=cn;if(b.textContent!=tx)b.textContent=tx});
 var c=count();bar.style.display="flex";var t=document.getElementById("mo-bt");if(t)t.textContent=c?"🛒 سلتك: "+AR(c)+(c==1?" طبق":" أطباق"):"🛒 اطلب الآن";
 document.body.style.paddingBottom="80px";
 if(ov.classList.contains("open")&&!PK)draw()}
function closeCart(){PK=null;ov.classList.remove("open")}
function openCart(){PK=null;ov.classList.add("open");draw()}
function draw(){
 var sh=document.getElementById("mo-sh"),ks=Object.keys(S.cart).filter(function(k){return S.cart[k]>0});
 if(!ks.length){sh.innerHTML='<div class="mo-h"><b>طلبك</b><button class="mo-x" id="mo-c">×</button></div><p style="text-align:center;padding:30px 0;color:rgba(253,249,244,.6)">السلة فارغة<br>اضغط على + في أي طبق لإضافته</p>';document.getElementById("mo-c").onclick=closeCart;return}
 var h='<div class="mo-h"><b>طلبك</b><button class="mo-x" id="mo-c">×</button></div>';
 ks.forEach(function(k,i){var x=ck(k),d=x.d;h+='<div class="mo-it"><img src="'+d.s+'"><span>'+d.n+(d.single?"":" - "+olab(d,x.o))+'<br><b style="color:#f5b72e;font-size:12.5px">'+AR(d.o[x.o][1]*S.cart[k])+' ر.س</b></span><div class="mo-q"><button data-i="'+i+'" data-d="1">+</button><b>'+AR(S.cart[k])+'</b><button data-i="'+i+'" data-d="-1">−</button></div></div>'});
 h+='<div style="display:flex;justify-content:space-between;padding:12px 0;font-weight:700;color:#f5b72e"><span>مجموع الطلب</span><span>'+AR(ctot())+' ر.س</span></div><div class="mo-lb">اختر الفرع</div><div class="mo-br"><div data-b="y" class="'+(S.br=="y"?"on":"")+'">'+BR.y.n+'</div><div data-b="a" class="'+(S.br=="a"?"on":"")+'">'+BR.a.n+'</div></div>';
 h+='<div class="mo-lb">موقع التوصيل في الرياض (اضغط على الخريطة لتحديد الدبوس)</div><div class="mo-map" id="mo-map"></div><div class="mo-st" id="mo-st">'+(S.loc?"الموقع المحدد: "+S.loc.lat.toFixed(5)+" ، "+S.loc.lng.toFixed(5):"")+'</div>';
 h+='<div class="mo-er" id="mo-er"></div><button class="mo-go" id="mo-go">إرسال الطلب عبر واتساب ✆</button><div style="text-align:center"><button class="mo-cl" id="mo-clr">تفريغ السلة</button></div>';
 sh.innerHTML=h;
 document.getElementById("mo-c").onclick=closeCart;
 sh.querySelectorAll(".mo-q button").forEach(function(b){b.onclick=function(){var k=ks[b.getAttribute("data-i")];S.cart[k]=Math.max(0,S.cart[k]+(+b.getAttribute("data-d")));if(!S.cart[k])delete S.cart[k];save();paint()}});
 sh.querySelectorAll("[data-b]").forEach(function(d){d.onclick=function(){S.br=d.getAttribute("data-b");save();draw()}});
 document.getElementById("mo-clr").onclick=function(){S.cart={};save();closeCart();paint()};
 document.getElementById("mo-go").onclick=send;
 initMap()}
function send(){var er=document.getElementById("mo-er");
 if(!S.br){er.textContent="الرجاء اختيار الفرع";return}
 if(!S.loc){er.textContent="الرجاء تحديد موقع التوصيل على الخريطة";return}
 var l=["السلام عليكم، أرغب بطلب من "+BR[S.br].n+":",""];
 Object.keys(S.cart).forEach(function(k){if(S.cart[k]>0){var x=ck(k),d=x.d;l.push("- "+d.n+(d.single?"":" ("+olab(d,x.o)+")")+" × "+AR(S.cart[k])+" = "+AR(d.o[x.o][1]*S.cart[k])+" ر.س")}});l.push("","مجموع الطلب: "+AR(ctot())+" ر.س");
 l.push("","موقع التوصيل: https://maps.google.com/?q="+S.loc.lat.toFixed(6)+","+S.loc.lng.toFixed(6),"","(طلب من موقع منتو اكسبرس)");
 window.location.href="https://wa.me/"+BR[S.br].w+"?text="+encodeURIComponent(l.join("\n"))}
var TMP=null;
function initMap(){function run(){var el=document.getElementById("mo-map");if(!el)return;var c=S.loc?[S.loc.lat,S.loc.lng]:[24.7136,46.6753];var m=L.map(el).setView(c,S.loc?15:11);
 L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(m);
 var mk=S.loc?L.marker(c).addTo(m):null,cl=0;
 function setp(ll,t){S.loc={lat:ll.lat,lng:ll.lng};save();if(mk)mk.setLatLng(ll);else mk=L.marker(ll).addTo(m);var s=document.getElementById("mo-st");if(s)s.textContent=t+S.loc.lat.toFixed(5)+" ، "+S.loc.lng.toFixed(5);var e=document.getElementById("mo-er");if(e)e.textContent=""}
 m.on("click",function(e){cl=1;setp(e.latlng,"الموقع المحدد: ")});
 setTimeout(function(){m.invalidateSize()},150);
 if(!S.loc&&navigator.geolocation){var s=document.getElementById("mo-st");if(s)s.textContent="جاري تحديد موقعك الحالي...";
  navigator.geolocation.getCurrentPosition(function(p){if(cl)return;var ll=L.latLng(p.coords.latitude,p.coords.longitude);m.setView(ll,16);setp(ll,"موقعك الحالي: ")},function(){var s=document.getElementById("mo-st");if(s&&!S.loc)s.textContent="تعذر تحديد موقعك. اختر موقع التوصيل على الخريطة"},{enableHighAccuracy:true,timeout:10000})}}
 if(window.L){run();return}
 if(!document.getElementById("mo-lcss")){var l=document.createElement("link");l.id="mo-lcss";l.rel="stylesheet";l.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";document.head.appendChild(l)}
 var j=document.createElement("script");j.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";j.onload=run;document.head.appendChild(j)}
new MutationObserver(function(ms){var go=0;ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType==1&&!(n.classList&&(n.classList.contains("mo-add")||n.classList.contains("mo-pr"))))go=1})});if(go)scan()}).observe(document.getElementById("root"),{childList:true,subtree:true});
scan();
})();
