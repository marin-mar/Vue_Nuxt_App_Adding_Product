(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{269:function(t,e,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(106).default)("d0effde8",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r.r(e);var d={name:"ProductCard",props:{card:{type:Object,required:!0,default:function(){}}},methods:{deleteCard:function(){this.$emit("deleteCard",this.card),this.$store.commit("REMOVE_CARD",this.card)}}},o=(r(273),r(51)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"card",attrs:{tabindex:"0"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.deleteCard()}}},[d("img",{staticClass:"card__img",attrs:{src:"productCardImg.png"===t.card.link?""+r(271):t.card.link,alt:"ProductCardImg",width:"332",height:"200"}}),t._v(" "),d("div",{staticClass:"card__body"},[d("h3",{staticClass:"card__title"},[t._v(t._s(t.card.title))]),t._v(" "),d("p",{staticClass:"card__description"},[t._v("\n      "+t._s(t.card.description)+"\n    ")]),t._v(" "),d("p",{staticClass:"card__price"},[d("span",{staticClass:"card__sum"},[t._v(t._s(Number(t.card.price).toLocaleString()))]),t._v("\n      руб.\n    ")])]),t._v(" "),d("button",{staticClass:"card__delete",attrs:{tabindex:0},on:{click:function(e){return t.deleteCard()}}},[d("img",{staticClass:"card__delete-img",attrs:{src:r(272),alt:"ProductCardImg"}})])])}),[],!1,null,"60f2b278",null);e.default=component.exports},271:function(t,e,r){t.exports=r.p+"img/productCardImg.537c721.png"},272:function(t,e,r){t.exports=r.p+"img/deleteImg.e3c0dde.svg"},273:function(t,e,r){"use strict";r(269)},274:function(t,e,r){var d=r(105),o=r(192),n=r(193),c=r(194),l=r(195),f=d(!1),m=o(n),_=o(c),v=o(l);f.push([t.i,'@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("truetype")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:600;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url('+v+') format("truetype")}.card[data-v-60f2b278]{width:20.75rem;min-height:26.4375rem;color:#3f3f3f;display:flex;flex-direction:column;align-items:flex-start;grid-gap:1rem;gap:1rem;background-color:#fffefb;box-shadow:0 20px 30px rgba(0,0,0,.04),0 6px 10px rgba(0,0,0,.02);border-radius:4px;cursor:pointer;position:relative;transition:all .3s}.card[data-v-60f2b278]:active,.card[data-v-60f2b278]:focus,.card[data-v-60f2b278]:hover{transform:translateY(-.5rem)}.card:active .card__delete[data-v-60f2b278],.card:focus .card__delete[data-v-60f2b278],.card:hover .card__delete[data-v-60f2b278]{visibility:visible}.card__img[data-v-60f2b278]{border-radius:4px 4px 0 0}.card__body[data-v-60f2b278]{display:flex;flex-direction:column;align-items:flex-start;margin-right:1rem;margin-left:1rem;grid-gap:1rem;gap:1rem}.card__title[data-v-60f2b278]{font-weight:600;font-size:1.25rem;line-height:1.5625rem}.card__description[data-v-60f2b278],.card__title[data-v-60f2b278]{font-family:Source Sans Pro;font-style:normal}.card__description[data-v-60f2b278]{font-weight:400;font-size:1rem;line-height:1.25rem}.card__price[data-v-60f2b278]{font-family:Source Sans Pro;font-style:normal;font-weight:600;font-size:1.5rem;line-height:1.875rem;margin-top:1rem;margin-bottom:.5rem}.card__delete[data-v-60f2b278]{width:2rem;height:2rem;background-color:#ff8484;box-shadow:0 2px 4px rgba(0,0,0,.1);border:none;border-radius:10px;cursor:pointer;position:absolute;top:-.5rem;right:-.5rem;visibility:hidden;transition:all .3s}.card__delete[data-v-60f2b278]:active,.card__delete[data-v-60f2b278]:focus,.card__delete[data-v-60f2b278]:hover{visibility:visible;transform:scale(.9)}.card__delete-img[data-v-60f2b278]{margin:.5rem}',""]),t.exports=f}}]);