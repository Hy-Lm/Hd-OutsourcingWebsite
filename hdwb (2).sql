-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2021-07-02 12:20:13
-- 服务器版本： 10.4.13-MariaDB
-- PHP 版本： 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `hdwb`
--

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `bannerImgs` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '轮播图片',
  `banner_title` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '标题'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`id`, `bannerImgs`, `banner_title`) VALUES
(1, '8901624586023.png,5211624586023.png,1401624586023.png,7181624586023.png', 'APP开发,网站开发,运营维护,小程序开发,公众号开发,分销系统开发,吸粉工具开发,管理系统开发,电商平台开发,技术服务支持');

-- --------------------------------------------------------

--
-- 表的结构 `ifyproject`
--

CREATE TABLE `ifyproject` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '名称',
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '标题',
  `imgsrc` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '图片路径'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `ifyproject`
--

INSERT INTO `ifyproject` (`id`, `name`, `title`, `imgsrc`) VALUES
(1, 'APP', '益园养车APP', '20210623yy.png'),
(2, 'APP', '轻听音乐APP', '1681624871397.tmp'),
(3, 'APP', '茶茶APP', '20210623cc.png'),
(4, 'APP', '电子商城APP', '7111624871578.tmp'),
(5, 'APP', '乐高APP', '7261624871552.tmp'),
(6, 'APP', '宜家APP', '20210623ss.png'),
(7, '小程序', '益园养车小程序', '20210623yy.png'),
(8, '小程序', '轻听音乐小程序', '20210623ss.png'),
(9, '小程序', '茶茶小程序', '20210623cc.png'),
(10, '小程序', '奶茶类小程序', '20210623nn.png'),
(11, '小程序', '养生小程序', '751624871854.tmp'),
(12, '小程序', '素颜美妆小程序', '9031624871767.tmp'),
(13, 'PC商城', '益园养车', '4411624871893.tmp'),
(14, 'PC商城', '轻听音乐', '20210623ss.png'),
(15, 'PC商城', '茶茶', '20210623cc.png'),
(16, 'PC商城', '奶茶类', '20210623nn.png'),
(17, 'PC商城', '养生', '20210623cc.png'),
(18, 'PC商城', '素颜美妆', '20210623yy.png'),
(19, 'H5', '益园养车H5', '781624871880.tmp'),
(20, 'H5', '轻听音乐H5', '20210623ss.png'),
(21, 'H5', '茶茶H5', '20210623cc.png'),
(22, 'H5', '奶茶类H5', '20210623nn.png'),
(23, 'H5', '养生H5', '20210623yy.png'),
(24, 'H5', '素颜美妆H5', '20210623cc.png'),
(25, '移动端', '益园养车移动端', '20210623yy.png'),
(26, '移动端', '轻听音乐移动端', '20210623ss.png'),
(27, '移动端', '茶茶移动端', '20210623cc.png'),
(28, '移动端', '奶茶类移动端', '20210623nn.png'),
(29, '移动端', '养生移动端', '9741624871924.tmp'),
(30, '移动端', '素颜美妆移动端', '20210623cc.png'),
(31, 'APP', '奶茶类app', '20210623nn.png'),
(32, 'APP', '养生app', '20210623yy.png'),
(33, 'APP', '素颜美妆app', '6951624871828.tmp');

-- --------------------------------------------------------

--
-- 表的结构 `industry`
--

CREATE TABLE `industry` (
  `id` int(11) NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '标题',
  `big_title` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '大标题',
  `big_title_con` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '大标题内容',
  `small_img` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '小标题图片',
  `small_title` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '小标题',
  `small_title_con` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '小标题内容'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `industry`
--

INSERT INTO `industry` (`id`, `title`, `big_title`, `big_title_con`, `small_img`, `small_title`, `small_title_con`) VALUES
(1, ' 电商', '全行业全场景的电商解决方案', '微商城解决方案致力于为零售业提供多渠道电商解决方案，通过自建商城，以及营销系统、分销系统、会员系统帮助企业搭建新一代微商城销售体系，快速实现去中心化流量聚合，客户粉丝沉淀，助力企业快速步入移动电商时代。', '6621624852250.png,8781624852250.png,3761624852250.png', '社交电商,订货系统,供应链', '多用户商城 盈利模式丰富-O2O系统 线上线下新零售-多营销机制 抢占电商市场,互联网化转型 对接官网与微信-系统开放模式 拓展生意渠道-分销数字化系统 批发业务电商化,SRM供应商管理 采购管理一体化-DMS分销管理 打通全渠道库存-SCC供应链协同解决数据交换需求'),
(2, '直播短视频', '直播+短视频的多元解决方案', '是一款让用户通过手机观看直播、短视频、连麦、交流打赏、传播分享等功能的流媒体系统，它既能是独立的互动直播短视频app，也能在原有平台的基础上嵌入直播、短视频功能，搭建属于您自己的“直播+短视频”平台。', 'hudong-icon.png,duanshipin-icon.png,shejiao-icon.png', '互动直播系统,短视频系统,短视频社交系统', '多用户商城 盈利模式丰富-O2O系统 线上线下新零售-多营销机制 抢占电商市场,互联网化转型 对接官网与微信-系统开放模式 拓展生意渠道-分销数字化系统 批发业务电商化,SRM供应商管理 采购管理一体化-DMS分销管理 打通全渠道库存-SCC供应链协同解决数据交换需求'),
(3, '知识与共享', '助力内容运营者，构建完整内容变现平台', '更好的知识付费及教育培训解决方案，内置几十种营销变现和互动模块，让运营事半功倍，多种变现方式，多方位一体化构建内容承载、用户运营、商业变现，打造知识付费生态闭环。', 'zhishifufei.png,kaoxue-icon.png,zulin-icon.png', '社交电商,订货系统,供应链系统', '语音课堂 问答交流更方便-视频直播 互动教学更立体-图文讲解 内容完整更详尽,付费社群 提高师生互动性-付费问答 内容变现碎片化-评论互动 增强用户活跃度,激活码 激活新用户消费欲望-邀请卡 邀请人享受分成收益-推广员 挖掘社交圈海量客源求'),
(4, '管理系统', '电商任务系统一站式解决方案', '面向电商商家的一站式多渠道电商任务解决方案，有效提高传统电商的推广方式和模式，快速积累有效用户粉丝，实现全场景营销，紧跟市场，', 'taoke-icon.png,shiyong-icon.png,budan-icon.png', '互动直播系统,短视频系统,短视频社交系统', '多联盟平台对接 自定义切换-丰富营销功能 快速增客-灵活搭配营销插件 自主布局设计,全匹配淘宝规则 打造权重平台-优质内容打造 提权速度快-转化可控 智能筛选人群精准投放,下单流程多样 避开稽查系统-根据淘宝大数据 安排流量进店-分时段下单 有效把控流量高峰'),
(5, '区块链', '高安全高性能区块链解决方案', '基于区块链底层技术，提供智能合约定制开发服务，并可实现对应区块链应用的落地。根据您不同的业务需求，编写贴合所需应用场景的智能合', '数字货币.svg,区块链.svg,交易所.svg', '数字货币,区块链商城,交易所', '合约交易 次周合约季度合约-止盈止损交易 保障盈利稳定-流动性共享交易 完成平台挂单操作,多种挖矿机制 玩法丰富有趣-数字资产支付 消费场景延伸-多级分销 丰厚奖励机制拉新,币币交易 极速快捷交易体验-OTC交易 用户实时入场交易-严格风控规则 杠杆交易模式'),
(6, '吸粉工具', '电商任务系统一站式解决方案', '面向电商商家的一站式多渠道电商任务解决方案，有效提高传统电商的推广方式和模式，快速积累有效用户粉丝，实现全场景营销，紧跟市场，', 'taoke-icon.png,shiyong-icon.png,budan-icon.png', '互动直播系统,短视频系统,短视频社交系统', '多用户商城 盈利模式丰富-O2O系统 线上线下新零售-多营销机制 抢占电商市场,互联网化转型 对接官网与微信-系统开放模式 拓展生意渠道-分销数字化系统 批发业务电商化,SRM供应商管理 采购管理一体化-DMS分销管理 打通全渠道库存-SCC供应链协同解决数据交换需求'),
(7, '分销系统', '高安全高性能区块链解决方案', '基于区块链底层技术，提供智能合约定制开发服务，并可实现对应区块链应用的落地。根据您不同的业务需求，编写贴合所需应用场景的智能合', '数字货币.svg,区块链.svg,交易所.svg', '数字货币,区块链商城,交易所', '合约交易 次周合约季度合约-止盈止损交易 保障盈利稳定-流动性共享交易 完成平台挂单操作,多种挖矿机制 玩法丰富有趣-数字资产支付 消费场景延伸-多级分销 丰厚奖励机制拉新,币币交易 极速快捷交易体验-OTC交易 用户实时入场交易-严格风控规则 杠杆交易模式');

-- --------------------------------------------------------

--
-- 表的结构 `liu`
--

CREATE TABLE `liu` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `tel` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '电话',
  `text` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '反馈内容'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `liu`
--

INSERT INTO `liu` (`id`, `name`, `tel`, `text`) VALUES
(3, '3', '3', '3'),
(4, '2', '2', '2'),
(5, '1', '1', '1');

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `pass` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '密码'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`id`, `name`, `pass`) VALUES
(1, 'admin', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `time` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '新闻时间',
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '新闻标题'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `time`, `title`) VALUES
(2, '1623982575', '校企一体就是好！来辉达上着学就可以拿工资'),
(3, '1623982585', '【官宣】辉达IT教育使命升级'),
(12, '1624809600', '电商');

-- --------------------------------------------------------

--
-- 表的结构 `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '项目名称',
  `img` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '项目图片'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `project`
--

INSERT INTO `project` (`id`, `name`, `img`) VALUES
(1, '益园养车APP', '20210623cc.png'),
(2, '轻听音乐APP', '20210623dd.png'),
(3, '茶茶APP', '20210623ll.png'),
(4, '奶茶类APP', '20210623nn.png'),
(5, '养生APP', '20210623ss.png'),
(6, '素颜美妆APP', '20210623yy.png');

--
-- 转储表的索引
--

--
-- 表的索引 `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `ifyproject`
--
ALTER TABLE `ifyproject`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `industry`
--
ALTER TABLE `industry`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `liu`
--
ALTER TABLE `liu`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `ifyproject`
--
ALTER TABLE `ifyproject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- 使用表AUTO_INCREMENT `industry`
--
ALTER TABLE `industry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用表AUTO_INCREMENT `liu`
--
ALTER TABLE `liu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用表AUTO_INCREMENT `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
