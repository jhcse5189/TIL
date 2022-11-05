(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{415:function(t,s,a){"use strict";a.r(s);var e=a(56),c=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"type-cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-cast"}},[t._v("#")]),t._v(" Type Cast")]),t._v(" "),a("blockquote",[a("p",[t._v("PS 중 C-style '(char)'로 캐스팅하면서 std::cout 에서 캐스팅이 필요할 때 어떻게 쓰는게 일반적인지 궁금해졌다.")])]),t._v(" "),a("p",[t._v("C-style로 캐스팅을 하면 타입 체크를 따로 하지 않는다는 단점이 있다고 한다. C++에 static_cast, dynamic_cast, reinterpret_cast, const_cast 등 여러 cast operator들이 있다는데 (다 필요할까 싶기도 하고..) 천천히 알아보자.")]),t._v(" "),a("h2",{attrs:{id:"static-cast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-cast"}},[t._v("#")]),t._v(" # static_cast")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("static_cast")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("PS에서는 문자열 문제로 int와 char 간의 형변환을 자주 사용하는데 기본 자료형 간 변환이 필요할 떄 static_cast를 쓰면 된다. static_cast는 range 검사를 하지 않기 때문에 형에 맞지 않으면 overflow 된다.")]),t._v(" "),a("h2",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" Ref.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ㅇ https://boycoding.tistory.com/154\nㅇ https://gsong.pe.kr/dev/2011/12/15/ec-9d-bc-eb-b0-98-cast-static_cast-const_cast-dynamic_cast-reinterpret_cast.html\nㅇ https://books.google.co.kr/books?id=eC-iLe_iET8C&pg=PA107&lpg=PA107&dq=c%2B%2B+cast+tradition&source=bl&ots=HZmDLiI-m7&sig=ACfU3U0BUxTY0iNDOL2TynyeI8shxRskfA&hl=ko&sa=X&ved=2ahUKEwjj06SPxOH2AhWhEHAKHWEhDMkQ6AF6BAgmEAM#v=onepage&q=c%2B%2B%20cast%20tradition&f=false (C++ Primer Plus)\n")])])])])}),[],!1,null,null,null);s.default=c.exports}}]);