var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "王思翔",
    sex: "男",
    age: "21",
    phone: "18565678096",
    email: "2562187628@qq.com",
    address: "北京海淀",
    qq: "2562187628",
    log: "",
    excpect_work: "Java后端开发/前端开发/游戏开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "Ticking away the moments that make up a dull day",
        "You fritter and waste the hours in an offhand way",
        "Kicking around on a piece of ground in your home town",
        "Waiting for someone or something to show you the way",
        "Tired of lying in the sunshine staying home to watch the rain",
        "You are young and life is long and there is time to kill today",
        "And then one day you find ten years have got behind you",
        "No one told you when to run, you missed the starting gun"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "你好，我是王思翔，北京航空航天大学软件工程大三在读生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我是王思翔，性别男，期望的岗位是Java后端开发/前端开发/游戏开发</p>" +
        "<p>我有大量Java SpirngBoot后端开发和Vue前端开发经验，也有C++、Java小型项目的开发经验。" +
        "此外，我还使用Unity进行过个人独立游戏</p>" +
        "<p>计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。" +
        "此外，我有着充满激情的工作态度，团队协同作战能力强，同时也具备独立开发的能力，擅于发现并解决问题。" +
        "我的执行力强、责任感高、集体荣誉感强、敢于担当，能够接受加班或出差等安排</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java", 90, "red"],
        ["C++", 75, "blue"],
        ["Vue", 83, "green"],
        ["SQL", 70, "#1abc9c"],
        ["HTML5", 67, "rgba(255,255,255)"],
        ["JavaScript", 60, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握Java基础及SpringBoot等框架。</li>" +
        "     <li>熟练掌握HTML、CSS、JavaScript及Vue框架。</li>" +
        "     <li>熟练掌握Java、C++、C等基础知识。</li>" +
        "     <li>熟悉HTTP、WebSocket等网络协议。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>熟悉Docker、K8s等容器技术。</li>" +
        "     <li>熟悉Unity游戏引擎。</li>" +
        "     <li>熟悉Git版本控制工具。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/portfolio/Ace.png", "https://buaa-acemagic.github.io/", "社团主页", "维护的社团主页"],
        ["./images/portfolio/blog.png", "https://blog.unfinished.top/", "个人博客", "记录了一些学习笔记"],
        ["./images/portfolio/paper.png", "https://github.com/Sixiang-Wang/AllPaperEngine-WebApplication", "学术成果分享系统", "完成后端接口，完成前端大量网页，独立搭建后台"],
        ["./images/portfolio/iMusic.png", "https://github.com/Sixiang-Wang/iMusic/tree/master", "音乐交流网站", "负责全部后端，并独立完成后台管理系统"],
        ["./images/portfolio/HelloKnight.png", "https://www.bilibili.com/video/BV1uu411w7Fx", "Hello Knight", "模仿空洞骑士独立制作的类银河城游戏"],
        ["./images/portfolio/clock.png", "https://github.com/Sixiang-Wang/Tainaka-Ritsu-InkBoard", "实地提醒小挂件", "完成了单片机的软件部分代码"],
        ["./images/portfolio/Compiler.png", "https://github.com/Sixiang-Wang/BUAA-Compiler", "编译器设计", "使用Java完成了对C语言文法的子集完成从词法分析、语法分析、错误处理到目标代码生成等编译过程的编译器的实现，生成MIPS代码"],
        ["./images/portfolio/BUAACommunity.png", "https://github.com/Sixiang-Wang/BUAACommunity", "校园社区平台", "大二上学期初学Java完成的小型项目"],
        ["./images/portfolio/gcn.png", "https://github.com/Sixiang-Wang/GCN-logistics", "GCN实现物流网络预测", "在科研课堂中，根据GCN模型独立实现的物流网络预测"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        // ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
        //     "<p><strong>阎王殿研发部</strong></p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        // ],
        //
        // ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
        //     "<p><strong>阎王殿研发部</strong></p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
        //     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        // ]
        ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2023-04", "北航电子信息智能硬件创新大赛一等奖", "大一下学期与同学共同开发单片机，我负责了软件部分的全部工作，取得一等奖"],
        ["2024-06", "五星社团北航Ace魔术社教学部长", "在社团中担任教学部长，包括主持社团活动、招新、社团晚会等工作。"],
        ["2024-10", "北京航空航天大学校级三好学生", "有幸成为校级三好学生并获得奖学金"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        // ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/Sixiang-Wang", "我的GitHub主页"],
        ["./svg/博客.svg", "https://blog.unfinished.top", "我的个人博客"],
        ["./svg/steam.svg", "https://steamcommunity.com/profiles/76561199190316134", "我的Steam主页"],

        // ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        // ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/cover1.jpg",
        "./images/avatar.jpg",
        "./images/cover1.jpg",
        "./images/cover3.jpg"
    ]

}
