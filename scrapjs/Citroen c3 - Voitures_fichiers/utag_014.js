//tealium universal tag - utag.43 ut4.0.201702140834, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
if(utag_data.eventname==="shop::shop_listing"){var t=$('.trackable');var ati="";for(var i=0;i<t.length;i++){var item=t[i];var data_info=$(item).attr('data-info');if(typeof(data_info)!="undefined"){data_info=JSON.parse(data_info);var xiti_type=data_info.event_type;if(xiti_type==="publisher"){var campaign=data_info.campaign;if(campaign==="shop_listing"){var shop_cat=data_info.shop_cat;var shop_region=data_info.shop_region;var shop_subregion=data_info.shop_subregion;var shop_city=data_info.shop_city;var shop_id=data_info.shop_id;var shop_name=data_info.shop_name;if(ati!=""){ati+=",";}
ati+="PUB-["+campaign+"]-["+shop_cat+"]-[]-["+shop_region+"]-["+shop_subregion+"]-["+shop_city+"]-["+shop_id+"_"+shop_name+"]";}}}}
window.xt_ati=ati;if(window.xtparam!=null){window.xtparam+="&ati="+xt_ati;}
else{window.xtparam="&ati="+xt_ati;};}
$('.trackable').on('click',function(){var data_info=$(this).attr('data-info');if(typeof(data_info)!="undefined"){data_info=JSON.parse(data_info);var xiti_type=data_info.event_type;if(xiti_type==="publisher"){var campaign=data_info.campaign;var action=data_info.action;var campaignid="";if(campaign==="shop_listing"||campaign==="shop_website"){var shop_cat=data_info.shop_cat;var shop_region=data_info.shop_region;var shop_subregion=data_info.shop_subregion;var shop_city=data_info.shop_city;var shop_id=data_info.shop_id;var shop_name=data_info.shop_name;return xt_adc(this,"PUB-["+campaign+"]-["+shop_cat+"]-[]-["+shop_region+"]-["+shop_subregion+"]-["+shop_city+"]-["+shop_id+"_"+shop_name+"]");}
if(campaign!=undefined&&action!=undefined){return xt_adc(this,"PUB-["+campaign+"]-["+action+"]");}}}});$('.store.trackable').on('click',function(){return xt_adc(this,"PUB-[shop_adview]-["+utag_data.cat+"]-[]-["+utag_data.region+"]-["+utag_data.departement+"]-["+utag_data.city+"]-["+utag_data.boutique_id+"_"+utag_data.boutique_name+"]");});if(utag_data.eventname=="mes_annonces::mes_annonces_sauvegardees"){if(utag_data.store_id==undefined||utag_data.store_id==''){xt_ati="PUB-[mes_annonces::mes_annonces_sauvegardees]";if(window.xtparam!=null){window.xtparam+="&ati="+xt_ati;}
else{window.xtparam="&ati="+xt_ati;};}
if(utag_data.store_id!=undefined&&utag_data.previouspage=="mes_annonces::mes_annonces_sauvegardees"){xt_atc="PUB-[mes_annonces::mes_annonces_sauvegardees]-[identification]";if(window.xtparam!=null){window.xtparam+="&atc="+xt_atc;}
else{window.xtparam="&atc="+xt_atc;};}}
}};utag.o[loader].loader.LOAD(id);})("43","schibsted.leboncoin-responsive");}catch(error){utag.DB(error);}