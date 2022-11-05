(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{408:function(a,e,t){"use strict";t.r(e);var n=t(56),o=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"boolean-algebra"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean-algebra"}},[a._v("#")]),a._v(" Boolean Algebra")]),a._v(" "),t("p",[a._v("2학년 1학기 떄 디지털논리 수업을 들었을 떄, 가히 충격적이었다. 기계적으로(?) 컴터 속을 들여다 보기위한 첫 전공 수업이었고 "),t("s",[a._v("(그리고 교수님의 강의력에 놀라버렸고)")]),a._v(" 무엇보다 "),t("code",[a._v("1은 true, 0은 false")]),a._v("에서 복잡해져가는 과정이 너무 그 당시에 따라가기 힘들었다. combinational logic을 지나치고 clock을 이해하려면서 Synchronous sequential logic과 함꼐하는 벌어지는 가슴뛰는 모험을 시작하는데 register, counter 라는 나쁜 칭구들이 등장하는 그런 식이었다.")]),a._v(" "),t("p",[t("strong",[a._v("불형 대수")]),a._v("라고 하겠다. 근데 어떻게 사람 이름이 불이지? 대수학의 갈래로 이진 변수와 논리 연산을 다룬다.")]),a._v(" "),t("h2",{attrs:{id:"boolean-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean-function"}},[a._v("#")]),a._v(" Boolean Function")]),a._v(" "),t("p",[a._v("Boolean function은 binary variable과 상수 0과 1, 그리고 logic equation symbol로 구성된 대수 표현식으로 나타낼 수 있다. 이 함수의 값은 항상 0 또는 1이다. 예를 들면 이런 식이다,")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("F1 = x + y'z\n")])])]),t("p",[a._v("이런 걸 가지고 truth table 막 손으로 만들고 재밌는 gate 칭구들을 그렸던 기억이 난다. 정말 재.미.있.었.다. "),t("code",[a._v("+")]),a._v("는 뾰족한 OR 칭구로 묶고 둥그런 AND 칭구는 "),t("code",[a._v("*")]),a._v(", NOT은 세모 앞에 작은 점이 있는 칭구(Complement)로 바꿔서 열심히 그리면 된다.")]),a._v(" "),t("h2",{attrs:{id:"canonical-and-standard-forms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canonical-and-standard-forms"}},[a._v("#")]),a._v(" Canonical and Standard forms")]),a._v(" "),t("p",[a._v("binary variable은 normal form인 "),t("code",[a._v("x")]),a._v("와 complement form인 "),t("code",[a._v("x'")]),a._v("으로 나타낼 수 있다. 그러면 변수 x, y를 생각해보고 AND 연산자로 조합해보면 4가지 경우가 나오겠다. "),t("code",[a._v("x'y', x'y, xy', xy")]),a._v(" 이런 칭구들은 "),t("code",[a._v("minterm")]),a._v(" 또는 "),t("code",[a._v("standard product")]),a._v("라고 부른다. 반대로 OR 연산자로 조합한 애들은 "),t("code",[a._v("maxterm")]),a._v(" 또는 "),t("code",[a._v("standard sum")]),a._v("이라고 한다.")]),a._v(" "),t("p",[a._v("중요한 특성으로 모든 Boolean function은 진리표 상에서 1을 뱉는 minterm들을 OR한 것으로 나타낼 수 있다. 예를 들어,")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("F1  = x'y'z + xy'z' + xyz\n    = m1 + m4 + m7\nF1' = x'y'z' + x'yz' + x'yz + xy'z + xyz'\n    = m0 + m2 + m3 + m5 + m6\n")])])]),t("p",[a._v("이렇게 "),t("code",[a._v("sum of minterms")]),a._v("로 나타낼 수 있다. (SOP, sum of products) 궁금하면 진리표를 직접 그려보는 수고를 해보자. F1'은 위와 같은데, F1'의 complement로 되돌려보자.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(F1')' = F1\n       = (x + y + z)(x + y' + z)(x + y' + z')(x' + y + z')(x' + y' + z)\n       = M0*M2*M3*M5*M6\n")])])]),t("p",[a._v("기가 막히게도 "),t("code",[a._v("product of maxterms")]),a._v("로도 나타낼 수 있다. (POS, product of sum) 이렇게 나타낸 불형 함수를 "),t("code",[a._v("canonical form")]),a._v("을 갖는다고 한다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("F(x, y, z)  = Σ(1, 4, 7) = Π(0, 2, 3, 5, 6)\n\nF'(x, y, z) = (m1 + m4 + m7)'\n            = m1'*m4'*m7'\n            = M1*M4*M7\n            = Π(1, 4, 7)\n")])])]),t("p",[a._v("그리고 이렇게 시그마랑 파이로 나타나타낼 수 있는데 그냥 뭐 딱 보면 알만한(?) 관계를 갖는다. 무엇이 minimal 하고 standard 한지 엄밀히는 잘 모르겠지만 별로 크게 알고싶지는 않으니 그만 알아보도록 하자.")]),a._v(" "),t("h3",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" # Reference")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(Pearson) Digital Design with an introduction to the verilog HDL, 5th edition by M. Morris Mano & Michael D. Ciletti - Chapter 2.5 ~ 2.6\n\nCanonical forms for Boolean logic (pdf) - Washington\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);