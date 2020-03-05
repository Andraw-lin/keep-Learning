(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{245:function(t,i,e){"use strict";e.r(i);var l=e(0),v=Object(l.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"some-css-summary-in-css-the-definitive-guide-to-be-continue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#some-css-summary-in-css-the-definitive-guide-to-be-continue"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Some CSS Summary In << CSS The Definitive Guide >>(To Be Continue)")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#css"}},[t._v("(一) CSS和文档")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#section"}},[t._v("(二) 选择器")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#section-1"}},[t._v("(三) 结构与层叠")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#section-2"}},[t._v("(四) 字体和文本属性")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#section-3"}},[t._v("(五) 基本视觉格式化")])])]),t._v(" "),e("h3",{attrs:{id:"一-css和文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-css和文档"}},[t._v("#")]),t._v(" (一) CSS和文档")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("元素")]),t._v(" "),e("ul",[e("li",[t._v("替换元素: 是指用来替换元素内容部分并非由文档内容直接表示,例如img,表单input元素(替换元素一般相对比较小);")]),t._v(" "),e("li",[t._v("img元素中,当src不指向任何外部地址的时候,不占任何地方;")]),t._v(" "),e("li",[t._v("非替换元素: 大多数html和xhtml元素都是非替换元素;")]),t._v(" "),e("li",[t._v("替换元素可以是块级元素,不过通常不是;")]),t._v(" "),e("li",[t._v("在html和xhtml中,块级元素不能继承行内元素(即不能嵌套在行内元素中);")]),t._v(" "),e("li",[t._v("html中插入css方法: link标记,style元素,@import指令,内联样式;")])])])]),t._v(" "),e("h3",{attrs:{id:"二-选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-选择器"}},[t._v("#")]),t._v(" (二) 选择器")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("规则结构")]),t._v(" "),e("ul",[e("li",[t._v("css规则都有两个基本部分: 选择器和声明块;\n##2.伪类和为元素")]),t._v(" "),e("li",[t._v("css定义4个伪元素: 设置首字母样式,设置第一行样式,设置之前和之后元素的样式;")])])])]),t._v(" "),e("h3",{attrs:{id:"三-结构与层叠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-结构与层叠"}},[t._v("#")]),t._v(" (三) 结构与层叠")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("特殊性")]),t._v(" "),e("ul",[e("li",[t._v("对于选择器中给定的各个ID属性值,加0,1,0,0;")]),t._v(" "),e("li",[t._v("对于选择器中给定的各个类属性值,属性选择或伪类,加0,0,1,0;")]),t._v(" "),e("li",[t._v("对于选择器中给定的各个元素和伪元素,加0,0,0,1;")]),t._v(" "),e("li",[t._v("结合符和通配选择器对特殊性没有任何的贡献,但通配选择器属于0特殊性,而结合符选择器没有任何的特殊性(注意: 0特殊性比没有特殊性的优先级要高);")]),t._v(" "),e("li",[t._v("一般地,内联样式的特殊性为: 1,0,0,0(即在相对应的元素里面加上style属性);")])])]),t._v(" "),e("li",[e("p",[t._v("重要性")]),t._v(" "),e("ul",[e("li",[t._v("在css相对应的属性的后面加上!important,在与相同名字的属性混合的时候,带有!important的属性优先选择;")]),t._v(" "),e("li",[t._v("注意,带有!important的css属性的特殊性比内联样式的特殊性要高;")])])]),t._v(" "),e("li",[e("p",[t._v("继承")]),t._v(" "),e("ul",[e("li",[t._v("一般地,大多数框模型属性(比如内外边距,背景和边框)都不能继承;")]),t._v(" "),e("li",[t._v("继承没有任何的特殊性!!!例如:\n"),e("code",[t._v("*{color: gray;}")]),t._v(" "),e("code",[t._v("h1#page-title{color: black;}")]),t._v(" "),e("code",[t._v("<h1>Meerkat <em>Central</em></h1>")]),t._v(" "),e("code",[t._v("<p>HelloWord</p>")]),t._v("\n在这段代码里面,Meerkat会依然继承h1的属性,即显示黑色,而Central则会显示灰色,因为通配选择器有0特殊性,继承则没有特殊性,因此0特殊性要比没特殊性要强")])])])]),t._v(" "),e("h3",{attrs:{id:"四-字体和文本属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-字体和文本属性"}},[t._v("#")]),t._v(" (四) 字体和文本属性")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("字体")]),t._v(" "),e("ul",[e("li",[t._v("font-family: 用于所有元素,有继承性,初始值由用户代理指定;")]),t._v(" "),e("li",[t._v("font-weight: 值有:normal,bold,bolder,lighter,100-900,inherit,用于所有元素,有继承性,初始值为normal;")]),t._v(" "),e("li",[t._v("font-size: 值有:xx-small,x-small,small,medium,large,x-large,xx-large,smaller,larger,"),e("length",[t._v(","),e("percentage",[t._v(",inherit,用于所有元素,有继承性,初始值为medium;")])],1)],1),t._v(" "),e("li",[t._v("font-style: 值有italic,oblique,normal,inherit,用于所有元素,有继承性,初始值为normal;")]),t._v(" "),e("li",[t._v("font-variant(字体变形): 值有small-caps,normal,inherit,用于所有元素,有继承性,初始值为normal;")]),t._v(" "),e("li",[t._v("font:\n值有font-style || font-variant || font-weight(这三个可有可无,值的顺序随便) || font-size/line-height || font-family(size和family一定要出现,size一定要在family前面,size后面跟有line-height时一定要/符号);")])])]),t._v(" "),e("li",[e("p",[t._v("文本")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("text-indent(文本缩进): 值有"),e("length",[t._v(","),e("percentage",[t._v(",inherit,应用于块级元素,有继承性,初始值为0;")])],1)],1)]),t._v(" "),e("li",[e("p",[t._v("text-align: 值有left,center,right,justify,inherit,只用于块级元素,有继承性,初始值由用户代理决定;")])]),t._v(" "),e("li",[e("p",[t._v("line-height: 值有"),e("length",[t._v(","),e("percentage",[t._v(","),e("number",[t._v(",normal,inherit,应用于所有元素,有继承性,初始值为normal;")])],1)],1)],1)]),t._v(" "),e("li",[e("p",[t._v("vertical-align: 值有baseline,sub,super,top,text-top,middle,bottom,text-bottom,"),e("percentage",[t._v(","),e("length",[t._v(",inherit,只用于行内元素和表格元素,无继承性,初始值为baseline;")])],1)],1)]),t._v(" "),e("li",[e("p",[t._v("word-spacing(字间隔): 值有"),e("length",[t._v(",normal,inherit,应用于所有元素,有继承性,初始值为normal;")])],1)]),t._v(" "),e("li",[e("p",[t._v("letter-spacing(字母间隔): 值有"),e("length",[t._v(",normal,inherit,应用于所有元素,有继承性,初始值为normal;")])],1)]),t._v(" "),e("li",[e("p",[t._v("text-transform(处理文本的大小写): 值有uppercase,lowercase,capitalize(只对首字母大写),none,inherit,应用于所有元素,有继承性,初始值为none;")])]),t._v(" "),e("li",[e("p",[t._v("text-decoration: 值有none,underline,overline,line-through,inherit,blink,应用于所有元素,无继承性,初始值为none;")])]),t._v(" "),e("li",[e("p",[t._v("text-shadow(文本阴影): 值有none,"),e("color",[t._v("|"),e("length",[e("length",[e("length",[t._v("(颜色和长度位置可交换),应用于所有元素,无继承性,初始值为none,例如,定义一个向右偏移5像素向下偏移0.5em像素绿色阴影,而且不模糊:text-shadow: green 5px 0.5em 0(前两个向右和向下的偏移,最后一个定义阴影的半径);")])],1)],1)],1)],1)]),t._v(" "),e("li",[e("p",[t._v("white-space(处理空白符,换行,tab字符): 应用所有元素,无继承性,初始值为normal,值有如下表")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("空白符")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("换行符")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("自动换行")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("pre-line")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("合并")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("保留")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("允许")])]),t._v(" "),e("tr",[e("td",[t._v("normal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("合并")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("忽略")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("允许")])]),t._v(" "),e("tr",[e("td",[t._v("nowrap")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("合并")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("忽略")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不允许")])]),t._v(" "),e("tr",[e("td",[t._v("pre")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("保留")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("保留")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不允许")])]),t._v(" "),e("tr",[e("td",[t._v("pre-wrap")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("保留")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("保留")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不允许")])])])])]),t._v(" "),e("li",[e("p",[t._v("direction属性影响块级元素中文本的书写方向,表中列布局的方向,内容水平填充其元素框的方向,以及两端对其元素中的最后一行位置.对于行内元素,只有当unicode-bidi属性设置为emed或bidi-override时才会应用direction属性;")])])])])]),t._v(" "),e("h3",{attrs:{id:"五-基本视觉格式化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-基本视觉格式化"}},[t._v("#")]),t._v(" (五) 基本视觉格式化")]),t._v(" "),e("ol",[e("li",[t._v("基本框\n"),e("ul",[e("li",[t._v("内边距不能是负值,但是外边距可以为负值;")]),t._v(" "),e("li",[t._v("边框的颜色跟字体的颜色一致;")])])]),t._v(" "),e("li",[t._v("水平属性\n"),e("ul",[e("li",[t._v('水平格式化有"7大属性":yangshi margin-left,border-left,padding-left,width,padding-right,border-right,margin-right;')]),t._v(" "),e("li",[t._v('"7大属性"中只有两个属性可以设置为auto,分别是元素内容的width,以及左右边距')]),t._v(" "),e("li",[t._v("使用width,margin-left,margin-right: ①如果左右边距都设置为auto,就会把元素居中显示,但这方法不同于text-align,text-align只用于块级元素的內联内容;②width和任意一个左右边距都设置为auto时,另一左右边距设置特定的值,则设置为auto的外边距将减为0;③当三个都设置为auto的时候,则左右边距将为0;")]),t._v(" "),e("li",[t._v("7个水平属性的总和要等于父元素的width;")]),t._v(" "),e("li",[t._v("边框的宽度不能师百分数,而只能是长度;")])])]),t._v(" "),e("li",[t._v("垂直属性\n"),e("ul",[e("li",[t._v('垂直格式化中也有跟水平格式化类似的"7大属性";')]),t._v(" "),e("li",[t._v("使用height,margin-top,margin-bottom: 当两个上下边距都设置为auto时,则不会跟水平格式化那样居中元素,相反则会自动把上下边距都变为0;")]),t._v(" "),e("li",[t._v("垂直外边距可以进行合并,两个外边距中较小的一个会被较大的一个合并;")]),t._v(" "),e("li",[t._v("在垂直外边距进行合并的时候,如果两个外边距都设置为负值,则浏览器会取两个外边距绝对值的最大值;")])])])])])}),[],!1,null,null,null);i.default=v.exports}}]);