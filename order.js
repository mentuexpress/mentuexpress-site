(function(){
var BR={y:{n:"فرع حي اليرموك",w:"966551296445"},a:{n:"فرع حي العقيق",w:"966509404366"}};
var M=window.MENU||[],BYALT={},BYID={};
M.forEach(function(d){BYID[d.id]=d;if(d.alt)BYALT[d.alt]=d});
function AR(n){return String(n).replace(/\d/g,function(d){return "٠١٢٣٤٥٦٧٨٩"[d]})}
function ck(k){var a=String(k).split("_");return {d:BYID[a[0]],o:+a[1]||0}}
var BRC={y:[24.8120591,46.7989583],a:[24.7852511,46.632454]};
function dfee(){if(!S.br||!S.loc)return null;var c=BRC[S.br],R=6371,r=Math.PI/180,dl=(S.loc.lat-c[0])*r,dn=(S.loc.lng-c[1])*r,x=Math.sin(dl/2)*Math.sin(dl/2)+Math.cos(c[0]*r)*Math.cos(S.loc.lat*r)*Math.sin(dn/2)*Math.sin(dn/2),km=2*R*Math.asin(Math.sqrt(x));return {km:km,fee:km>3?10:0,out:km>10}}
function updFee(){var e=document.getElementById("mo-fee");if(!e)return;var f=dfee(),h='<div style="font-size:12.5px;opacity:.75;padding:2px 0 6px">التوصيل مجاني حتى ٣ كم، وأبعد من ذلك ١٠ ر.س</div>';if(f&&f.out){h='<div style="padding:10px 12px;margin:6px 0;border:1px solid #e0594b;border-radius:10px;color:#ff9b8f;font-size:14px;line-height:1.6">موقعك خارج نطاق التوصيل ('+AR(f.km.toFixed(1))+' كم). أقصى مسافة للتوصيل ١٠ كم من الفرع. اختر موقعاً أقرب أو غيّر الفرع.</div>'}else if(f){h='<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:14px"><span>رسوم التوصيل ('+AR(f.km.toFixed(1))+' كم)</span><span>'+(f.fee?AR(f.fee)+' ر.س':"مجاني")+'</span></div><div style="display:flex;justify-content:space-between;padding:6px 0 10px;font-weight:700;color:#f5b72e"><span>الإجمالي مع التوصيل</span><span>'+AR(ctot()+f.fee)+' ر.س</span></div>'}e.innerHTML=h}
function ctot(){var t=0;for(var k in S.cart){var x=ck(k);t+=x.d.o[x.o][1]*S.cart[k]}return t}
function olab(d,o){return d.single?"":AR(d.o[o][0])+" حبة"}
var KEY="mentu_site_order";
var S;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
S=S||{cart:{},br:null,loc:null};S.u=S.u||{n:"",p:""};for(var _k in S.cart)if(String(_k).indexOf("_")<0){S.cart={};break}
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
".mo-del{width:34px;height:34px;border-radius:50%;border:1px solid #d9a441;background:none;color:#f5b72e;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none;margin-inline-start:8px;padding:0}.mo-del[disabled]{opacity:.3;cursor:default}"+
".mo-q{display:flex;align-items:center;gap:10px}.mo-q button{width:32px;height:32px;border-radius:50%;border:1px solid #d9a441;background:none;color:#f5b72e;font-size:18px;cursor:pointer;font-family:inherit}"+
".mo-lb{font-size:13px;color:rgba(253,249,244,.7);margin:16px 0 8px}"+
".mo-br{display:flex;gap:8px}.mo-br div{flex:1;text-align:center;padding:12px 6px;border-radius:12px;border:1.5px solid rgba(253,249,244,.25);font-size:14px;cursor:pointer}.mo-br div.on{border-color:#d9a441;background:rgba(217,164,65,.16);color:#f5b72e}"+
".mo-map{height:260px;border-radius:14px;overflow:hidden;border:1px solid rgba(253,249,244,.2);background:#222}"+
".mo-st{font-size:12.5px;color:#f5b72e;margin:8px 0;min-height:18px}"+
".mo-go{display:block;width:100%;height:52px;border-radius:14px;border:0;background:#25a244;color:#fff;font-weight:700;font-size:16px;font-family:inherit;margin-top:14px;cursor:pointer}"+
".mo-er{color:#ff8a7a;font-size:12.5px;min-height:18px;margin-top:8px}"+
".mo-in{display:block;width:100%;height:48px;margin-top:6px;border-radius:12px;border:1px solid rgba(253,249,244,.28);background:rgba(253,249,244,.08);color:#fdf9f4;font-size:16px;font-family:inherit;padding:0 12px;direction:rtl;box-sizing:border-box}.mo-loc{display:block;width:100%;height:42px;border-radius:12px;border:1px solid #d9a441;background:none;color:#f5b72e;font-size:14px;font-family:inherit;margin-bottom:8px;cursor:pointer}"+
".mo-cl{background:none;border:0;color:rgba(253,249,244,.55);font-size:12px;margin-top:10px;cursor:pointer;font-family:inherit}";
document.head.appendChild(css);
var bar=document.createElement("div");bar.className="mo-bar";bar.innerHTML='<button type="button"><span id="mo-bt"></span><span id="mo-bs">عرض السلة ‹</span></button>';
var ov=document.createElement("div");ov.className="mo-ov";ov.innerHTML='<div class="mo-sh" id="mo-sh"></div>';
document.body.appendChild(bar);document.body.appendChild(ov);
bar.firstChild.onclick=function(){openCart()};
ov.onclick=function(e){if(e.target==ov)closeCart()};
var PK=null,pso=0,pq=0;
function addC(id,q,o){var k=id+"_"+(o||0);S.cart[k]=(S.cart[k]||0)+q;save();paint()}
function scan(){
 document.querySelectorAll("img.mentu-card-img").forEach(function(im){
  var d=BYALT[im.alt]||M.filter(function(x){return !x.alt&&x.n==im.alt})[0];if(!d)return;
  var card=im.closest(".mentu-card");if(!card||card.querySelector(".mo-add"))return;
  if(getComputedStyle(card).position=="static")card.style.position="relative";
  var b=document.createElement("button");b.type="button";b.className="mo-add";b.setAttribute("data-id",d.id);b.setAttribute("aria-label","أضف "+d.n);b.textContent="+";
  b.onclick=function(e){e.preventDefault();e.stopPropagation();if(d.single){addC(d.id,1,0)}else{PK=d;pso=0;pq=0;drawPick();ov.classList.add("open")}};
  var pl=document.createElement("div");pl.className="mo-pr";pl.innerHTML=(d.single?"":"من ")+AR(d.o[0][1])+" ر.س";card.appendChild(pl);
  card.appendChild(b)});
 paint()}
function drawPick(){var d=PK,sh=document.getElementById("mo-sh");
 var h='<div class="mo-h"><b>'+d.n+'</b><button class="mo-x" id="mo-c">×</button></div><div class="mo-br" style="flex-wrap:wrap;margin-top:14px">';
 d.o.forEach(function(x,i){h+='<div data-o="'+i+'" class="'+(i==pso?"on":"")+'" style="flex:1 1 30%">'+AR(x[0])+' حبة<br><b>'+AR(x[1])+' ر.س</b></div>'});
 h+='</div><div class="mo-q" style="justify-content:center;margin:18px 0;font-size:20px;position:relative"><button data-q="1">+</button><b>'+AR(pq)+'</b><button data-q="-1">−</button><button class="mo-del" id="mo-tr" aria-label="حذف من السلة" style="position:absolute;left:18px"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v7M14 10v7"/></svg></button></div><button class="mo-go" id="mo-ad"'+(pq?"":" disabled style=\"opacity:.4;cursor:default\"")+'>'+(pq?"أضف إلى السلة - "+AR(d.o[pso][1]*pq)+" ر.س":"اختر الكمية")+'</button>';
 sh.innerHTML=h;document.getElementById("mo-c").onclick=closeCart;
 sh.querySelectorAll("[data-o]").forEach(function(e){e.onclick=function(){pso=+e.getAttribute("data-o");drawPick()}});
 sh.querySelectorAll("[data-q]").forEach(function(e){e.onclick=function(){pq=Math.max(0,pq+(+e.getAttribute("data-q")));drawPick()}});
 document.getElementById("mo-tr").onclick=function(){var k=d.id+"_"+pso;if(S.cart[k]>0){S.cart[k]--;if(S.cart[k]<=0)delete S.cart[k];save();paint()}pq=Math.max(0,pq-1);drawPick()};
 document.getElementById("mo-ad").onclick=function(){if(!pq)return;addC(d.id,pq,pso);closeCart()}}
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
 ks.forEach(function(k,i){var x=ck(k),d=x.d;h+='<div class="mo-it"><img src="'+d.s+'"><span>'+d.n+(d.single?"":" - "+olab(d,x.o))+'<br><b style="color:#f5b72e;font-size:12.5px">'+AR(d.o[x.o][1]*S.cart[k])+' ر.س</b></span><div class="mo-q"><button data-i="'+i+'" data-d="1">+</button><b>'+AR(S.cart[k])+'</b><button data-i="'+i+'" data-d="-1">−</button></div><button class="mo-del" data-del="'+i+'" aria-label="حذف"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v7M14 10v7"/></svg></button></div>'});
 h+='<div style="display:flex;justify-content:space-between;padding:12px 0;font-weight:700;color:#f5b72e"><span>مجموع الطلب</span><span>'+AR(ctot())+' ر.س</span></div><div id="mo-fee"></div><div class="mo-lb">الاسم</div><input class="mo-in" id="mo-n" type="text" autocomplete="name" value="'+esc(S.u.n)+'"><div class="mo-lb">رقم الجوال</div><input class="mo-in" id="mo-p" type="tel" inputmode="numeric" placeholder="05XXXXXXXX" autocomplete="tel" value="'+esc(S.u.p)+'"><div class="mo-lb">اختر الفرع</div><div class="mo-br"><div data-b="y" class="'+(S.br=="y"?"on":"")+'">'+BR.y.n+'</div><div data-b="a" class="'+(S.br=="a"?"on":"")+'">'+BR.a.n+'</div></div>';
 h+='<div class="mo-lb">موقع التوصيل (اضغط على الخريطة أو حرّك الدبوس)</div><button class="mo-loc" id="mo-loc" type="button">📍 تحديد موقعي الحالي</button><div class="mo-map" id="mo-map"></div><div class="mo-st" id="mo-st">'+(S.loc?"الموقع المحدد: "+S.loc.lat.toFixed(5)+" ، "+S.loc.lng.toFixed(5):"")+'</div>';
 h+='<div style="text-align:center;font-size:12.5px;color:#f5b72e;padding:6px 0">كل ٥ طلبات فوق ٦٠ ريال، السادس مشكل حجازي ٤٠ حبة مجاناً</div>';
 h+='<div class="mo-er" id="mo-er"></div><button class="mo-go" id="mo-go">إرسال الطلب عبر واتساب ✆</button><div style="text-align:center"><button class="mo-cl" id="mo-clr">تفريغ السلة</button></div>';
 sh.innerHTML=h;
 document.getElementById("mo-c").onclick=closeCart;
 sh.querySelectorAll("[data-del]").forEach(function(b){b.onclick=function(){delete S.cart[ks[b.getAttribute("data-del")]];save();paint()}});
 sh.querySelectorAll(".mo-q button").forEach(function(b){b.onclick=function(){var k=ks[b.getAttribute("data-i")];S.cart[k]=Math.max(0,S.cart[k]+(+b.getAttribute("data-d")));if(!S.cart[k])delete S.cart[k];save();paint()}});
 sh.querySelectorAll("[data-b]").forEach(function(d){d.onclick=function(){S.br=d.getAttribute("data-b");save();draw()}});
 document.getElementById("mo-clr").onclick=function(){S.cart={};save();closeCart();paint()};
 document.getElementById("mo-go").onclick=send;
 document.getElementById("mo-n").oninput=function(){S.u.n=this.value;save()};
 document.getElementById("mo-p").oninput=function(){S.u.p=this.value;save()};
 document.getElementById("mo-loc").onclick=function(){locate(1)};
 updFee();initMap()}
var esc=function(x){return String(x).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
var setPin=null;
function locate(manual){var s=document.getElementById("mo-st");if(!navigator.geolocation){if(s)s.textContent="المتصفح لا يدعم تحديد الموقع، اضغط على الخريطة";return}
 if(manual)S.src="gps";if(s&&(manual||!S.loc))s.textContent="جاري تحديد موقعك الحالي...";
 function ok(p){if(S.src==="manual"&&!manual)return;var ll={lat:p.coords.latitude,lng:p.coords.longitude};S.src="gps";if(setPin)setPin(ll,"موقعك الحالي: ",1);else{S.loc=ll;save();updFee();var s2=document.getElementById("mo-st");if(s2)s2.textContent="موقعك الحالي: "+ll.lat.toFixed(5)+" ، "+ll.lng.toFixed(5)}}
 function bad(e){var s2=document.getElementById("mo-st");if(s2&&(!S.loc||manual))s2.textContent=(e&&e.code===1)?"إذن الموقع مرفوض لهذا الموقع. فعّله من إعدادات المتصفح (على الآيفون: الإعدادات > الخصوصية > خدمات الموقع)، أو اضغط على الخريطة لتحديد موقعك":"تعذر الحصول على موقعك. تأكد أن خدمة الموقع شغالة أو اضغط على الخريطة لتحديد موقعك"}
 navigator.geolocation.getCurrentPosition(ok,function(e){if(e&&e.code===1){bad(e);return}navigator.geolocation.getCurrentPosition(ok,bad,{enableHighAccuracy:false,timeout:15000,maximumAge:600000})},{enableHighAccuracy:true,timeout:8000,maximumAge:0})}
function send(){var er=document.getElementById("mo-er");
 var rh=(new Date().getUTCHours()+3)%24;if(rh>=2&&rh<13){er.textContent="المطعم مغلق حالياً، نفتح الساعة ١ ظهراً. لا يمكن إرسال الطلب الآن، تقدر تتصفح القائمة وتجهز السلة.";return}
 var nm=(S.u.n||"").trim(),ph=(S.u.p||"").replace(/[\s\-]/g,"").replace(/[٠-٩]/g,function(d){return "٠١٢٣٤٥٦٧٨٩".indexOf(d)});
 if(!nm){er.textContent="الرجاء إدخال الاسم";return}
 if(!/^05\d{8}$/.test(ph)){er.textContent="الرجاء إدخال رقم جوال صحيح من ١٠ أرقام يبدأ بـ 05";return}
 if(!S.br){er.textContent="الرجاء اختيار الفرع";return}
 if(!S.loc){er.textContent="الرجاء تحديد موقع التوصيل على الخريطة";return}
 var DO=dfee();if(DO&&DO.out){er.textContent="موقعك خارج نطاق التوصيل (أكثر من ١٠ كم من الفرع). اختر موقعاً أقرب أو غيّر الفرع.";return}
 if(window._mob)return;window._mob=1;var items=[];Object.keys(S.cart).forEach(function(k){if(S.cart[k]>0){var x=ck(k);items.push({n:x.d.n,o:x.d.single?"":x.d.o[x.o][0],q:S.cart[k],s:x.d.o[x.o][1]*S.cart[k]})}});
 var DBU="https://cdqqxjbadgivujibehzt.supabase.co",DBK="sb_publishable_dpe06zJ0jZ68-ZEVonhqAQ_7DkEXOjS",done=false;
 function go(r){if(done)return;done=true;window._mob=0;compose(r)}
 try{var ac=window.AbortController?new AbortController():null;setTimeout(function(){if(ac)ac.abort();go(null)},5000);
 fetch(DBU+"/rest/v1/rpc/place_order",{method:"POST",headers:{"apikey":DBK,"Content-Type":"application/json"},body:JSON.stringify({p_name:nm,p_phone:ph,p_branch:S.br=="a"?"aqiq":"yarmouk",p_total:ctot(),p_items:items,p_lat:S.loc.lat,p_lng:S.loc.lng,p_fee:(dfee()||{fee:0}).fee,p_km:+(dfee()||{km:0}).km.toFixed(2)}),signal:ac?ac.signal:undefined}).then(function(x){return x.ok?x.json():null}).then(go,function(){go(null)})}catch(e){go(null)}
 function compose(r){
 var l=["السلام عليكم، أرغب بطلب من "+BR[S.br].n+":"+(r&&r.id?" (طلب رقم #"+AR(r.id)+")":""),""];
 Object.keys(S.cart).forEach(function(k){if(S.cart[k]>0){var x=ck(k),d=x.d;l.push("- "+d.n+(d.single?"":" ("+olab(d,x.o)+")")+" × "+AR(S.cart[k])+" = "+AR(d.o[x.o][1]*S.cart[k])+" ر.س")}});var DF=dfee()||{km:0,fee:0};l.push("","مجموع الطلب: "+AR(ctot())+" ر.س","رسوم التوصيل ("+AR(DF.km.toFixed(1))+" كم): "+(DF.fee?AR(DF.fee)+" ر.س":"مجاني"),"الإجمالي مع التوصيل: "+AR(ctot()+DF.fee)+" ر.س");
 l.push("","الاسم: "+nm,"رقم الجوال: "+ph);l.push("","موقع التوصيل: https://maps.google.com/?q="+S.loc.lat.toFixed(6)+","+S.loc.lng.toFixed(6),"","(طلب من موقع منتو اكسبرس)");
 if(r&&r.reward)l.push("","عرض الولاء (يُحتسب بعد تأكيد الفرع): هذا الطلب السادس، مشكل حجازي ٤٠ حبة مجاناً");else if(r&&r.qualifying)l.push("","عرض الولاء (يُحتسب بعد تأكيد الفرع): طلب رقم "+AR(r.qual_no)+(r.to_next>0?" (باقي "+AR(r.to_next)+" طلبات للمشكل الحجازي المجاني)":" (الطلب القادم مشكل حجازي ٤٠ حبة مجاناً)"));
 window.location.href="https://wa.me/"+BR[S.br].w+"?text="+encodeURIComponent(l.join("\n"))}}
var TMP=null;
function initMap(){function run(){var el=document.getElementById("mo-map");if(!el)return;var c=S.loc?[S.loc.lat,S.loc.lng]:[24.7136,46.6753];var m=L.map(el).setView(c,S.loc?16:11);
 L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(m);
 var mk=null;
 function put(ll){if(mk)mk.setLatLng(ll);else{mk=L.marker(ll,{draggable:true}).addTo(m);mk.on("dragend",function(){var q=mk.getLatLng();S.src="manual";setPin({lat:q.lat,lng:q.lng},"الموقع المحدد: ")})}}
 setPin=function(ll,t,fly){S.loc={lat:ll.lat,lng:ll.lng};save();updFee();put(ll);if(fly)m.setView(ll,17);var s=document.getElementById("mo-st");if(s)s.textContent=t+S.loc.lat.toFixed(5)+" ، "+S.loc.lng.toFixed(5);var e=document.getElementById("mo-er");if(e)e.textContent=""};
 if(S.loc)put(S.loc);
 m.on("click",function(e){S.src="manual";setPin(e.latlng,"الموقع المحدد: ")});
 setTimeout(function(){m.invalidateSize()},200);
 if(!S.loc||S.src!=="manual")locate()}
 if(window.L){run();return}
 var fail=function(){setPin=null;if(!S.loc||S.src!=="manual")locate();var el=document.getElementById("mo-map");if(el)el.innerHTML='<div style="padding:90px 14px;text-align:center;color:rgba(253,249,244,.7);font-size:13px">تعذر تحميل الخريطة. اضغط «تحديد موقعي الحالي» أعلاه.</div>'};
 if(!document.getElementById("mo-lcss")){var l=document.createElement("link");l.id="mo-lcss";l.rel="stylesheet";l.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";document.head.appendChild(l)}
 var j=document.createElement("script");j.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";j.onload=run;j.onerror=fail;document.head.appendChild(j)}
new MutationObserver(function(ms){var go=0;ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType==1&&!(n.classList&&(n.classList.contains("mo-add")||n.classList.contains("mo-pr"))))go=1})});if(go)scan()}).observe(document.getElementById("root"),{childList:true,subtree:true});
scan();
try{if(!S.loc||S.src!=="manual")locate()}catch(e){}

/* floating contact button */
(function(){
 var st=document.createElement("style");
 st.textContent=".mc-fab{position:fixed;right:14px;bottom:calc(86px + env(safe-area-inset-bottom));width:54px;height:54px;border-radius:50%;border:0;background:#d9a441;color:#1a100a;font-size:26px;line-height:1;cursor:pointer;z-index:8900;box-shadow:0 3px 14px rgba(0,0,0,.55);font-family:inherit}"+
 ".mc-menu{position:fixed;right:14px;align-items:flex-end;bottom:calc(150px + env(safe-area-inset-bottom));z-index:8900;display:none;flex-direction:column;gap:8px;direction:rtl}.mc-menu.open{display:flex}"+
 ".mc-menu a{display:block;background:rgba(26,16,10,.96);color:#fdf9f4;border:1px solid #d9a441;border-radius:14px;padding:11px 16px;font-size:14px;text-decoration:none;font-family:inherit;white-space:nowrap}.mc-menu a b{color:#f5b72e;font-weight:600}";
 document.head.appendChild(st);
 var m=document.createElement("div");m.className="mc-menu";
 m.innerHTML='<a href="tel:0551296445"><b>اتصال</b> فرع حي اليرموك</a><a href="tel:0509404366"><b>اتصال</b> فرع حي العقيق</a><a href="https://wa.me/966551296445" target="_blank" rel="noopener"><b>واتساب</b> فرع حي اليرموك</a><a href="https://wa.me/966509404366" target="_blank" rel="noopener"><b>واتساب</b> فرع حي العقيق</a>';
 var b=document.createElement("button");b.type="button";b.className="mc-fab";b.setAttribute("aria-label","تواصل معنا");b.textContent="✆";
 b.onclick=function(e){e.stopPropagation();m.classList.toggle("open");b.textContent=m.classList.contains("open")?"×":"✆"};
 document.addEventListener("click",function(e){if(m.classList.contains("open")&&!m.contains(e.target)){m.classList.remove("open");b.textContent="✆"}});
 document.body.appendChild(m);document.body.appendChild(b);
})();
})();

;(function(){var css=document.createElement("style");css.textContent=".mo-promo{margin:14px auto 0;max-width:1100px;width:calc(100% - 28px);box-sizing:border-box;text-align:center;direction:rtl;background:rgba(245,183,46,.12);border:1px solid #f5b72e;border-radius:14px;padding:12px 16px;color:#f5b72e;font-weight:700;font-size:16px;line-height:1.6}.mo-promo small{display:block;font-weight:400;font-size:13px;color:inherit;opacity:.85}";document.head.appendChild(css);
function put(){if(document.querySelector(".mo-promo"))return;var h=document.querySelector(".mentu-heroimg");if(!h||!h.parentNode)return;var d=document.createElement("div");d.className="mo-promo";d.innerHTML="كل ٥ طلبات فوق ٦٠ ريال<small>الطلب السادس مشكل حجازي ٤٠ حبة مجاناً</small>";h.parentNode.insertBefore(d,h.nextSibling)}
function fh(){var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode()){if(n.nodeValue.indexOf("حتى ١ صباحاً")>-1)n.nodeValue=n.nodeValue.replace("حتى ١ صباحاً","حتى ٢ صباحاً")}}var ft=0;function fq(){if(ft)return;ft=setTimeout(function(){ft=0;fh()},150)}
put();fh();new MutationObserver(function(){put();fq()}).observe(document.documentElement,{childList:true,subtree:true})})();
