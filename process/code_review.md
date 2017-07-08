review 记录：作者记录，表格记录，checkout -b review， checkout -b review_by_Foo, git pull && checkout -b review_by_Foo

http://blog.csdn.net/haoel/article/details/4469526

http://blog.csdn.net/haoel/article/details/4469462

http://www.cnblogs.com/lhb25/p/15-best-code-review-tools-for-developers.html

Code Review中的几个提示

Code Review应该是软件工程最最有价值的一个活动，之前，本站发表过《简单实用的Code Review工具》，那些工具主要是用来帮助更有效地进行这个活动，这里的这篇文章，我们主要想和大家分享一下Code Review代码审查的一些心得。

首先，我们先来看看Code Reivew的用处：

Code reviews 中，可以通过大家的建议增进代码的质量。
Code reviews  是一个传递知识的手段，可以让其它并不熟悉代码的人知道作者的意图和想法，从而可以在以后轻松维护代码。
Code reviews 也鼓励程序员们相互学习对方的长处和优点。
Code reviews 也可以被用来确认自己的设计和实现是一个清楚和简单的。
你也许注意到了在上面的Code Reivew中的诸多用处中，我们没有提到可以帮助找到程序的bug和保证代码风格和编码标准。这是因为我们认为：

Code reviews 不应该承担发现代码错误的职责。Code Review主要是审核代码的质量，如可读性，可维护性，以及程序的逻辑和对需求和设计的实现。代码中的bug和错误应该由单元测试，功能测试，性能测试，回归测试来保证的（其中主要是单元测试，因为那是最接近Bug，也是Bug没有扩散的地方）

所以，在今天，请不要把上面的那两件事分散了Code Review的注意力，取而代之的是，对于Bug，程序的作者要在Review前提交自己的单元测试报告（如：XUnit的测试结果），对于代码规范，这是程序作者自己需要保证的，而且，有一些工具是可以帮你来检查代码规范的。

不是说不能在Code Review中报告一个程序的bug或是一个代码规范的问题。只是说那并不是Code Review的意图。


1.- 经常进行Code Review
以前经历过几个相当痛苦的Code Review，那几次Code Review都是在程序完成的时候进行的，当你面对那近万行的代码，以前N我掺和在一起的功能，你会发现，整个Code Review变得非常地艰难，用不了一会儿，你就会发现大家都在拼命地打着哈欠，但还是要坚持，有时候，这样的Review会持续3个小时以上，相当的夸张。而且，会议上会出现相当多的问题和争论，因为，这就好像，人家都把整个房子盖好了，大家Review时这挑一点那挑一点，有时候触动地基或是承重墙体，需要大动手术，让人返工，这当然会让盖房的人一下就跳起来极力地维护自己的代码，最后还伤了团队成员的感情。

所以，千万不要等大厦都盖好了再去Reivew，而且当有了地基，有了框架，有了房顶，有了门窗，有了装修，的各个时候循序渐进地进行Review，这样反而会更有效率，也更有帮助。

下面是一些观点，千万要铭记：

要Review的代码越多，那么要重构，重写的代码就会越多。而越不被程序作者接受的建议也会越多，唾沫口水战也会越多。
程序员代码写得时候越长，程序员就会在代码中加入越来越多的个人的东西。 程序员最大的问题就是“自负”，无论什么时候，什么情况下，有太多的机会会让这种“自负”澎涨开来，并开始影响团队影响整个项目，以至于听不见别人的建议，从而让Code Review变成了口水战。
越接近软件发布的最终期限，代码也就不能改得太多。
我个人的习惯，并且也是对团队成员的要求是——先Review设计实现思路，然后Review设计模式，接着Review成形的骨干代码，最后Review完成的代码，如果程序复杂的话，需要拆成几个单元或模块分别Review。当然，最佳的practice是，每次Review的代码应该在1000行以内，时间不能超过一部电影的时间——1.5小时（因为据说那个一个正常人的膀胱可以容纳尿液的最长限度）

当然，在敏捷开发中，他们不需要Code Reivew，其实，敏捷开发中使用更为极端的“结对编程”（Pair-Programming）的方法 —— 一种时时刻刻都在进行Code Review的方法，个人感觉在实际过程中，这种方法有点过了。另外，大家可以看看本站的另一篇文章《结对编程的利与弊》来了解一下这种方法的问题。


3.- 尽可能的让不同的人Reivew你的代码
这是一个好主意，如果可能的话，不要总是只找一个人来Review你的代码，不同的人有不同的思考方式，有不同的见解，所以，不同的人可以全面的从各个方面评论你的代码，有的从实现的角度，有的从需求的角度，有的从用户使用的角度，有的从算法的角度，有的从性能效率的角度，有的从易读的角度，有的从扩展性的角度……，啊，好多啊，还让不让人活了。不管怎么说，多找一些不同的人会对你很有好处。当然，不要太多了，人多嘴杂反而适得其反，基本上来说，不要超过3个人，这是因为，这是一个可以围在一起讨论的最大人员尺寸。

从不同的方向评审代码总是好的。
会有更多的人帮你在日后维护你的代码。
这也是一个增加团队凝聚力的方法。


Code Review中文应该译作“代码审查”或是“代码评审”，这是一个流程，当开发人员写好代码后，需要让别人来review一下他的代码，这是一种有效发现BUG的方法。由此，我们可以审查代码的风格、逻辑、思路……，找出问题，以及改进代码。因为这是代码刚刚出炉的时候，所以，这也是代码重构，代码调整，代码修改的最佳时候。所以，Code Review是编码实现中最最重要的一个环节。

长时间以来，Code Review需要有一些有效的工具来支持，这样我们就可以更容易，更有效率地来进行代码审查工作。下面是5个开源的代码审查工具，他们可以帮助你更容易地进行这项活动。

1. Review board:
Review board 是一个 基于web 的工具，主要设计给 django 和python的用户。 Review board 可以帮助我们追踪待决代码的改动，并可以让Code-Review更为容易和简练。尽管Review board 最初被设计在VMware项目中使用，但现在其足够地通用。当前，其支持这些代码版本管理软件： SVN, CVS, Perforce, Git, Bazaar, 和Mercurial.

 

Yahoo 是review-board的其中一个用户。

“Review board 已经改变了代码评审的方式，其可以强迫高质量的代码标准和风格，并可以成为程序员编程的指导者。每一次，当你访问search.yahoo.com 时，其代码都是使用 Review board工具Review过的。 We’re great fans of your work!” – Yahoo! Web Search

Detailed review requests
Powerful diff viewer
 


2. Codestriker:
Codestriker 也是一个基于Web的应用，其主要使用 GCI-Perl 脚本支持在线的代码审查。Codestriker 可以集成于CVS, Subversion, ClearCase, Perforce 和Visual SourceSafe。并有一些插件可以提供支持其它的源码管理工具。

David Sitsky 是 Codestriker 的作者，并也是最活跃的开发人员之一。 Jason Remillard 是另一个活路的开发者，并给这个项目提供了最深远最有意义的贡献。大量的程序员贡献他们的代码给 Codestriker 项目，导致了这个项目空前的繁荣。

http://codestriker.sourceforge.net/viewtopicdetail.png

 

3. Groogle:
Groogle 是一个基于WEB的代码评审工具。 Groogle 支持和 Subversion 集成。它主要提供如下的功能：

各式各样语言的语法高亮。
支持整个版本树的比较。
支持当个文件不同版本的diff功能，并有一个图形的版本树。
邮件通知所有的Reivew的人当前的状态。
认证机制。
Screenshot


4. Rietveld:
Rietveld 由Guido van Rossum 开发（他是Python的创造者，现在是Google的员工），这个工具是基于Mondrian 工具，作者一开始是为了Google 开发的，并且，它在很多方面和Review board 很像。它也是一个基于Web的应用，并可以Google App Engine 当主机。它使用了目前最流行的Web开发框架 django 并支持 Subversion 。当前，任何一个使用 Google Code 的项目都可以使用 Rietveld 并且使用 python Subversion 服务器。当然，它同样支持其它的Subversion服务器。

  

5. JCR
JCR 或者叫做 JCodeReview 也是一个基于WEB界面的最初设计给Reivew Java 语言的一个工具。当然，现在，它可以被用于其它的非Java的代码。

JCR 主要想协助：

审查者。所有的代码更改都会被高亮，以及大多数语言的语法高亮。Code extracts 可以显示代码评审意见。如果你正在Review Java的代码，你可以点击代码中的类名来查看相关的类的声明。
项目所有者。可以 轻松创建并配置需要Review的项目，并不需要集成任何的软件配置管理系统（SCM）。
流程信仰者。 所有的评语都会被记录在数据库中，并且会有状态报告，以及各种各样的统计。
架构师和开发者。 这个系统也可以让我们查看属于单个文件的评语，这样有利于我们重构代码。
JCR 主要面对的是大型的项目，或是非常正式的代码评审，从这方面看来，他并不像上面的那些工具。

Screenshot

Jupiter：最后我们要提一下Jupiter，这是另一个代码review的工具你可以去考虑使用的，它是一个Eclipse IDE 的插件。

