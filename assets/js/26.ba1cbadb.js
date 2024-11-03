(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{296:function(t,s,a){t.exports=a.p+"assets/img/9 并行分支不汇聚.f66c7561.png"},580:function(t,s,a){t.exports=a.p+"assets/img/9 缺少起始和结束节点.b2a239bf.png"},581:function(t,s,a){t.exports=a.p+"assets/img/9 永远无法执行的任务.e430b32e.png"},582:function(t,s,a){t.exports=a.p+"assets/img/9 存在任务阻塞.086b48b1.png"},583:function(t,s,a){t.exports=a.p+"assets/img/9 死循环任务.2a831850.png"},584:function(t,s,a){t.exports=a.p+"assets/img/2 流程的三个维度.7c275774.png"},585:function(t,s,a){t.exports=a.p+"assets/img/9 控制流视角-时间瓶颈分析.13c176b8.png"},586:function(t,s,a){t.exports=a.p+"assets/img/9 控制流视角-数量分析.7c4725f6.png"},587:function(t,s,a){t.exports=a.p+"assets/img/9 数据视角.fec471ed.png"},588:function(t,s,a){t.exports=a.p+"assets/img/9 资源视角.33d2b8ad.png"},657:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("流程分析分以下三个阶段，每个阶段分析的数据都不一样。")]),t._v(" "),s("ul",[s("li",[t._v("运行前。分析流程结构的合理性。")]),t._v(" "),s("li",[t._v("运行中。分析当前的执行状况。")]),t._v(" "),s("li",[t._v("运行后。分析历史数据，找到的瓶颈所在并进行优化。")])]),t._v(" "),s("h2",{attrs:{id:"运行前流程结构分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行前流程结构分析"}},[t._v("#")]),t._v(" 运行前流程结构分析")]),t._v(" "),s("p",[t._v("在工作流管理系统中，流程定义是一个关键步骤，它决定了工作流的执行路径和处理逻辑。然而，在定义流程的过程中，经常会出现一些错误，这些错误可能会导致工作流的执行出现问题，甚至导致工作流的失败。以下是一些常见的流程定义错误：")]),t._v(" "),s("h3",{attrs:{id:"流程没有起始和结束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程没有起始和结束"}},[t._v("#")]),t._v(" 流程没有起始和结束")]),t._v(" "),s("p",[t._v("正常一个流程至少要有一个起始节点和一个结束节点，没有起始节点，就无法知道流程从哪里开始执行，没有结束节点，流程就不知道要执行到哪里才是结束。前面我们介绍基于Petri网的工作流网的定义中就有一个：必须包含一个起点和终点，这里也是一样的要求。")]),t._v(" "),s("p",[t._v("例如下面缺少一个起始节点。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(580),alt:"image-20240328223249665"}}),t._v(" "),s("h3",{attrs:{id:"存在无法执行的任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在无法执行的任务"}},[t._v("#")]),t._v(" 存在无法执行的任务")]),t._v(" "),s("p",[t._v('这种情况通常被称为"死任务"，即任务在任何情况下都无法被执行。这可能是因为任务的输入条件永远无法满足，或者任务的执行逻辑存在问题。例如下图的任务C就是一个孤单的任务。')]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(581),alt:"image-20240328221234830"}}),t._v(" "),s("h3",{attrs:{id:"存在任务阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在任务阻塞"}},[t._v("#")]),t._v(" 存在任务阻塞")]),t._v(" "),s("p",[t._v('这种情况通常被称为"死锁"，即任务在到达结束状态前发生了阻塞，无法继续执行。这可能是因为任务之间的依赖关系设置不正确，或者任务的执行逻辑存在问题。例如下面的任务E就会一直阻塞，因为前面的AND Join需要任务B和任务C都完成才能满足条件继续执行。但是XOR Split只有一个分支会执行，这就意味着任务B和任务C要么都不执行，要么只有一个分支执行，所以AND Join永远无法满足条件。')]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(582),alt:"image-20240328224157338"}}),t._v(" "),s("h3",{attrs:{id:"存在无尽的任务循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在无尽的任务循环"}},[t._v("#")]),t._v(" 存在无尽的任务循环")]),t._v(" "),s("p",[t._v("这种情况通常是任务被引入了无休止的循环中，无法达到结束状态。这可能是因为任务之间的依赖关系设置不正确。例如下面的任务A、B、C就进入了死循环，永远无法结束。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(583),alt:"image-20240328221436068"}}),t._v(" "),s("h3",{attrs:{id:"在达到结束状态后-仍有任务在执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在达到结束状态后-仍有任务在执行"}},[t._v("#")]),t._v(" 在达到结束状态后，仍有任务在执行")]),t._v(" "),s("p",[t._v("这种情况可能是因为工作流的结束条件设置不正确。正常的流程在执行到结束节点时，其他所有运行中的节点都应该已经结束才对。这就有点像Linux操作系统中的孤儿进程，即一个父进程退出结束了，而它的一个或多个子进程如果还在运行，那么这些子进程将成为孤儿进程。")]),t._v(" "),s("p",[t._v("例如下面出现并行的任务B和任务C，但是没有对分支进行合并，导致执行完任务B结束后，任务C依然可能还在执行。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(296),alt:"image-20240328221641637"}}),t._v(" "),s("h3",{attrs:{id:"并行分支不同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并行分支不同步"}},[t._v("#")]),t._v(" 并行分支不同步")]),t._v(" "),s("p",[t._v("正常的流程，并行分支是有多少个分支出去，最终这些分支都要汇聚到一起，即保证这些分支是同步的，否则无法控制子分支的结束，这就造成了流程执行的不可控局面出现，可能会出现资源泄漏之类的问题。")]),t._v(" "),s("p",[t._v("这有点像我们写多线程时，在开启多个子线程任务后，一般都会有一个Join或Wait的等待所有子线程执行结束的步骤，保证这些子线程能正常结束，否则子线程就时不可控的因素。")]),t._v(" "),s("blockquote",[s("p",[t._v("Golang并发控制：")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sync"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wg sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WaitGroup\n \n    wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置计数器，数值即为goroutine的个数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//goroutine执行结束后将计数器减1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Do something")]),t._v("\n        time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n        fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Goroutine 1 finished!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//goroutine执行结束后将计数器减1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Do something")]),t._v("\n        time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n        fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Goroutine 2 finished!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n    wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主goroutine阻塞等待计数器变为0")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"All Goroutine finished!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("python的多线程同步：")])]),t._v(" "),s("p",[t._v("在 Python 中使用多线程时，可以通过 "),s("code",[t._v("threading")]),t._v(" 模块创建和管理线程，并使用 "),s("code",[t._v("join()")]),t._v(" 方法等待子线程结束。")]),t._v(" "),s("p",[t._v("通过这种方式，你可以有效地管理多线程任务，并确保在继续执行主程序之前，所有子线程都已完成。")]),t._v(" "),s("p",[t._v("以下是一个简单的示例，演示了如何创建多个线程并等待它们完成。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义一个线程要执行的函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("worker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thread_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"线程 ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("thread_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(' 开始工作"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模拟耗时操作")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"线程 ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("thread_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(' 工作完成"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个线程列表")]),t._v("\nthreads "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并启动多个线程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    thread "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("worker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    threads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待所有子线程结束")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" thread "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" threads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"所有线程已完成"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("例如下面的任务B和任务C没有合并分支。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(296),alt:"image-20240328221641637"}}),t._v(" "),s("h2",{attrs:{id:"运行中流程记录分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行中流程记录分析"}},[t._v("#")]),t._v(" 运行中流程记录分析")]),t._v(" "),s("p",[t._v("在执行时生成的流程实例中，可以分析出以下有用信息或指标：")]),t._v(" "),s("ol",[s("li",[t._v("流程执行时间：通过分析流程实例的开始和结束时间，可以计算出流程的执行时间，从而了解流程的效率。")]),t._v(" "),s("li",[t._v("任务执行情况：流程实例中包含了各个任务的执行情况，可以了解每个任务的完成情况、执行时间、执行人等信息，有助于分析任务的效率和质量。")]),t._v(" "),s("li",[t._v("节点流转路径：通过流程实例中的节点信息，可以了解流程在执行过程中的流转路径，以便分析流程的合理性和优化流程设计。")]),t._v(" "),s("li",[t._v("异常情况：流程实例中可能包含异常情况，例如任务超时、流程终止等，通过分析这些异常情况，可以找到流程的瓶颈和潜在问题。")]),t._v(" "),s("li",[t._v("参与者信息：流程实例中包含了参与者的信息，例如执行人、审批人等，有助于分析参与者的工作负荷和协作情况。")])]),t._v(" "),s("h2",{attrs:{id:"运行后历史数据分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行后历史数据分析"}},[t._v("#")]),t._v(" 运行后历史数据分析")]),t._v(" "),s("p",[t._v("通过分析历史的运行记录数据，将流程的历史运行数据进行量化和可视化，来了解流程的表现情况，从而揭示流程中运行的瓶颈以及有待改进的地方。通过数据驱动的方法进行流程优化，帮助管理者有效地改进当前的资源分配决策。")]),t._v(" "),s("p",[t._v("这里的流程分析可以从不同的视角来进行，例如：控制流视角、数据视角、资源视角等。")]),t._v(" "),s("p",[t._v("控制流视角可以解释流程整体的运行状况能让管理者一目了然发现瓶颈所在；数据视角可以查看到流程运行时的上下面数据以及运行时的数据；资源视角以人的角度来分析，可以看到每个员工的任务安排（即甘特图）。")]),t._v(" "),s("p",[t._v("下面我们分别从最主要的控制流视角、数据视角和资源视角三个来介绍。")]),t._v(" "),s("blockquote",[s("p",[t._v("业务流程的三个模式")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("控制流视角：")])]),t._v(" "),s("p",[t._v("控制流模式关注的是业务流程中的任务集合以及这些任务之间的流转关系。这包括三个方面：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("功能视角：")]),t._v(" 描述组成业务流程的各项活动。")]),t._v(" "),s("li",[s("strong",[t._v("控制视角：")]),t._v(" 描述这些活动之间的路由，即活动执行的顺序。")]),t._v(" "),s("li",[s("strong",[t._v("行为视角：")]),t._v(" 描述个别活动实际上如何被进行。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("数据视角：")])]),t._v(" "),s("p",[t._v("数据模式关注的是在执行业务流程时所需的信息，即“运行时的工作数据”。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("资源视角：")])]),t._v(" "),s("p",[t._v("资源模式关注的是实际执行业务流程的人员和设施，以及他们运作的组织背景和彼此之间的各种关系。这包含了两点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("资源视角：")]),t._v(" 确定实际执行业务流程的人员和设施。")]),t._v(" "),s("li",[s("strong",[t._v("组织视角：")]),t._v(" 描述人员和物理资源如何被利用以完成业务流程，以及它们之间的关系。")])])])]),t._v(" "),s("p",[t._v("总体而言，这三个模式为业务流程提供了全面的描述，涵盖了控制的执行流程、所涉及的数据以及执行人员和资源。通过这些模式，企业能够更好地理解、管理和优化其业务流程。它们提供了一个多维度的视角，帮助企业在制定和优化业务流程时考虑到不同方面的需求和关注点。")]),t._v(" "),s("p",[t._v("如下是三种模式的对应工具和技术：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(584),alt:"image-20240130231851920"}}),t._v(" "),s("h3",{attrs:{id:"控制流视角"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制流视角"}},[t._v("#")]),t._v(" 控制流视角")]),t._v(" "),s("h4",{attrs:{id:"时间瓶颈分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间瓶颈分析"}},[t._v("#")]),t._v(" 时间瓶颈分析")]),t._v(" "),s("p",[t._v("在业务流程中，如果想分析人工任务的瓶颈所在，则需要如下图一样，通过分析历史的数据，得到每个人工任务节点的平均执行时间，并在展示时以颜色深浅的方式更友好的方式展现给管理者，让管理者能够一眼就看出流程的时间瓶颈卡点所在。")]),t._v(" "),s("p",[t._v("同时，在前面任务节点的生命周期，我们知道，一个需要分配人工资源的任务，在进入【已开始】状态之前，有一个等待人员分配和就绪的时间，在下图的展示中，标注在箭头连线上。")]),t._v(" "),s("p",[t._v("这样就可以非常直观地看到流程中所有环节的平均耗时，快速定位到时那个节点出现了瓶颈。")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:a(585),alt:"image-20240306204701498"}}),t._v(" "),s("p",[t._v("在这个视角下可以监控分析下面几个关键的指标：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("流程（案例Case）统计")]),t._v(" "),s("ul",[s("li",[t._v("流程的最小耗时（min）")]),t._v(" "),s("li",[t._v("流程的中位数耗时（median）")]),t._v(" "),s("li",[t._v("流程的平均耗时（average）")]),t._v(" "),s("li",[t._v("流程的最大耗时（max）")])])]),t._v(" "),s("li",[s("p",[t._v("任务统计")]),t._v(" "),s("p",[t._v("监控分析流程中各个任务节点的统计数据（注意：下面的指标是流程中每个任务节点都有的数据）")]),t._v(" "),s("ul",[s("li",[t._v("任务的最小耗时（min）")]),t._v(" "),s("li",[t._v("任务的中位数耗时（median）")]),t._v(" "),s("li",[t._v("任务的平均耗时（average）")]),t._v(" "),s("li",[t._v("任务的最大耗时（max）")])])]),t._v(" "),s("li",[s("p",[t._v("资源统计")]),t._v(" "),s("p",[t._v("更近一步，由于流程中同一个任务节点可能分配给不同的人员处理，不同人员之间的能力差异会导致任务执行耗时不同。通过对流程中任务进一步分析人员的执行情况，可以看到哪个员工处理时长久导致整体耗时变长，从而进行优化。")]),t._v(" "),s("ul",[s("li",[t._v("每个人员的最小耗时（min）")]),t._v(" "),s("li",[t._v("每个人员的中位数耗时（median）")]),t._v(" "),s("li",[t._v("每个人员的平均耗时（average）")]),t._v(" "),s("li",[t._v("每个人员的最大耗时（max）")])])]),t._v(" "),s("li",[s("p",[t._v("资源分配耗时统计")]),t._v(" "),s("p",[t._v("如上图中我们可以看到任务在人员就绪之前，有一个资源分配，即人员分配调度的过程，这里面也会产生一定的耗时，也是流程中需要关注的一个瓶颈所在。")])])]),t._v(" "),s("h4",{attrs:{id:"空间瓶颈分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空间瓶颈分析"}},[t._v("#")]),t._v(" 空间瓶颈分析")]),t._v(" "),s("p",[t._v("这里的空间指的是流程中哪个任务出现了堆积，导致瓶颈问题产生，也就是分析流程中哪个位置出现了问题。")]),t._v(" "),s("p",[t._v("如下图，就可以一目了然看到流程中哪个任务堆积了大量任务，可以及时进行改善。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("流程（案例Case）统计")]),t._v(" "),s("ul",[s("li",[t._v("已完成的流程实例数量和百分比")]),t._v(" "),s("li",[t._v("未完成的流程数量和百分比")])])]),t._v(" "),s("li",[s("p",[t._v("任务统计")]),t._v(" "),s("p",[t._v("监控分析流程中各个任务节点的统计数据（注意：下面的指标是流程中每个任务节点都有的数据）")]),t._v(" "),s("ul",[s("li",[t._v("已完成的任务数量和百分比")]),t._v(" "),s("li",[t._v("未完成的任务数量和百分比")])])])]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:a(586),alt:"image-20240306204956527"}}),t._v(" "),s("h3",{attrs:{id:"数据视角"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据视角"}},[t._v("#")]),t._v(" 数据视角")]),t._v(" "),s("p",[t._v("数据视角下可以把前面自定义的变量历史数据统一进行展示，这里实际上是变相支持用户自己设计一套监控指标，给系统预留了一个拓展空间。")]),t._v(" "),s("p",[t._v("流程中每个任务节点如果设置了自定义变量后，在查看历史数据时，都可以看到一个表格数据，表格会展示历史每次运行后的变量值。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(587),alt:"image-20240306232312291"}}),t._v(" "),s("p",[t._v("同时，每一个运行中的流程实例，都记录了运行时的上下文数据，即运行时产生的数据。")]),t._v(" "),s("h3",{attrs:{id:"资源视角"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源视角"}},[t._v("#")]),t._v(" 资源视角")]),t._v(" "),s("p",[t._v("资源视角下每个员工都可以看到自己过去、现在和未来的任务排期（甘特图），而站在管理者角度，则可以看到所有员工的任务排期，让管理者对项目进度有整体的把握。")]),t._v(" "),s("p",[t._v("当然这里的任务甘特图是基于前面引擎的资源调度能力规划的。")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:a(588),alt:"image-20240306201609238"}}),t._v(" "),s("p",[t._v("备注：这里资源默认指人非自动化机器。")])])}),[],!1,null,null,null);s.default=r.exports}}]);