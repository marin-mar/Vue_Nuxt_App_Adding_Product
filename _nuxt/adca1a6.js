(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{269:function(t,e,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(106).default)("d0effde8",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r.r(e);var o={name:"ProductCard",props:{card:{type:Object,required:!0,default:function(){}}},methods:{deleteCard:function(){this.$emit("deleteCard",this.card),this.$store.commit("REMOVE_CARD",this.card)}}},n=(r(273),r(51)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card",attrs:{tabindex:"0"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.deleteCard()}}},[o("img",{staticClass:"card__img",attrs:{src:"productCardImg.png"===t.card.link?""+r(271):t.card.link,alt:"ProductCardImg",width:"332",height:"200"}}),t._v(" "),o("div",{staticClass:"card__body"},[o("h3",{staticClass:"card__title"},[t._v(t._s(t.card.title))]),t._v(" "),o("p",{staticClass:"card__description"},[t._v("\n      "+t._s(t.card.description)+"\n    ")]),t._v(" "),o("p",{staticClass:"card__price"},[o("span",{staticClass:"card__sum"},[t._v(t._s(Number(t.card.price).toLocaleString()))]),t._v("\n      руб.\n    ")])]),t._v(" "),o("button",{staticClass:"card__delete",attrs:{tabindex:0},on:{click:function(e){return t.deleteCard()}}},[o("img",{staticClass:"card__delete-img",attrs:{src:r(272),alt:"ProductCardImg"}})])])}),[],!1,null,"60f2b278",null);e.default=component.exports},271:function(t,e,r){t.exports=r.p+"img/productCardImg.537c721.png"},272:function(t,e,r){t.exports=r.p+"img/deleteImg.e3c0dde.svg"},273:function(t,e,r){"use strict";r(269)},274:function(t,e,r){var o=r(105),n=r(192),c=r(193),d=r(194),l=r(195),f=o(!1),m=n(c),_=n(d),v=n(l);f.push([t.i,'@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("truetype")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:600;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url('+v+') format("truetype")}.card[data-v-60f2b278]{width:20.75rem;min-height:26.4375rem;color:#3f3f3f;display:flex;flex-direction:column;align-items:flex-start;grid-gap:1rem;gap:1rem;background-color:#fffefb;box-shadow:0 20px 30px rgba(0,0,0,.04),0 6px 10px rgba(0,0,0,.02);border-radius:4px;cursor:pointer;position:relative;transition:all .3s}.card[data-v-60f2b278]:active,.card[data-v-60f2b278]:focus,.card[data-v-60f2b278]:hover{transform:translateY(-.5rem)}.card:active .card__delete[data-v-60f2b278],.card:focus .card__delete[data-v-60f2b278],.card:hover .card__delete[data-v-60f2b278]{visibility:visible}.card__img[data-v-60f2b278]{border-radius:4px 4px 0 0}.card__body[data-v-60f2b278]{display:flex;flex-direction:column;align-items:flex-start;margin-right:1rem;margin-left:1rem;grid-gap:1rem;gap:1rem}.card__title[data-v-60f2b278]{font-weight:600;font-size:1.25rem;line-height:1.5625rem}.card__description[data-v-60f2b278],.card__title[data-v-60f2b278]{font-family:Source Sans Pro;font-style:normal}.card__description[data-v-60f2b278]{font-weight:400;font-size:1rem;line-height:1.25rem}.card__price[data-v-60f2b278]{font-family:Source Sans Pro;font-style:normal;font-weight:600;font-size:1.5rem;line-height:1.875rem;margin-top:1rem;margin-bottom:.5rem}.card__delete[data-v-60f2b278]{width:2rem;height:2rem;background-color:#ff8484;box-shadow:0 2px 4px rgba(0,0,0,.1);border:none;border-radius:10px;cursor:pointer;position:absolute;top:-.5rem;right:-.5rem;visibility:hidden;transition:all .3s}.card__delete[data-v-60f2b278]:active,.card__delete[data-v-60f2b278]:focus,.card__delete[data-v-60f2b278]:hover{visibility:visible;transform:scale(.9)}.card__delete-img[data-v-60f2b278]{margin:.5rem}',""]),t.exports=f},275:function(t,e,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(106).default)("681011fe",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r(275)},281:function(t,e,r){var o=r(105),n=r(192),c=r(193),d=r(194),l=r(195),f=o(!1),m=n(c),_=n(d),v=n(l);f.push([t.i,'@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("truetype")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:600;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url('+v+') format("truetype")}.card-list[data-v-140cb2be]{display:flex;flex-direction:row;flex-wrap:wrap;grid-gap:1rem;gap:1rem;list-style:none;z-index:2}.card-list-enter-active[data-v-140cb2be],.card-list-leave-active[data-v-140cb2be]{transition:all 1s}.card-list-enter[data-v-140cb2be],.card-list-leave-to[data-v-140cb2be]{opacity:0;transform:translateX(2rem) translateY(-2rem)}.card-list-move[data-v-140cb2be]{transition:transform 1s}.card-list__item[data-v-140cb2be]{width:-webkit-max-content;width:-moz-max-content;width:max-content}',""]),t.exports=f},291:function(t,e,r){"use strict";r.r(e);r(75);var o={name:"ProductCardList",components:{"product-card":r(270).default},computed:{cards:function(){return this.$store.commit("SHOW_SPINNER",!1),this.$store.state.cards}},watch:{cards:{handler:function(t){localStorage.cards=JSON.stringify(t)},deep:!0}},mounted:function(){var t=this;if(this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)})),localStorage.getItem("cards"))try{this.$store.commit("SET_CARDS",JSON.parse(localStorage.getItem("cards")))}catch(t){localStorage.removeItem("cards")}}},n=(r(280),r(51)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition-group",{staticClass:"card-list",attrs:{appear:"",name:"card-list",tag:"ul"}},t._l(t.cards,(function(t){return r("li",{key:t.id,staticClass:"card-list__item"},[r("product-card",{attrs:{card:t}})],1)})),0)}),[],!1,null,"140cb2be",null);e.default=component.exports;installComponents(component,{ProductCard:r(270).default})}}]);