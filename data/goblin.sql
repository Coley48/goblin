/*
Navicat MariaDB Data Transfer

Source Server         : goblin
Source Server Version : 100408
Source Host           : 101.132.134.158:3306
Source Database       : goblin

Target Server Type    : MariaDB
Target Server Version : 100408
File Encoding         : 65001

Date: 2020-06-29 17:16:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cards
-- ----------------------------
DROP TABLE IF EXISTS `cards`;
CREATE TABLE `cards` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `datetime` varchar(255) DEFAULT NULL,
  `click` varchar(255) DEFAULT '',
  `comment` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cards
-- ----------------------------
INSERT INTO `cards` VALUES ('19', 'coley48', '你好，世界.', 'Hello, world.', '2020-06-12 09:57', '8', '107', '_Dreamy Digital Paintings of Whales Flying Across the Sky_ by Artem Chebokha.jpg', '21');
INSERT INTO `cards` VALUES ('20', 'coley48', '摄影', '摄影（英语：photography）是指使用某种专门设备进行影像记录的过程。一般我们使用机械照相机或者数码照相机进行静态图片摄影，静态摄影也会被称为照相。而摄影机（摄像放像机）则可以动态摄影，例如电视、电影。目前部分数码相机、数位摄影机，同时具有静态摄影与动态摄影的功能。', '2020-06-12 09:58', '2', '48', '', '21');
INSERT INTO `cards` VALUES ('21', 'coley48', '哥布零摄影', '用相机记录生活，用光影留住美好！', '2020-06-13 00:26', '8', '32', 'IMG_1639.JPG,IMG_1658.JPG,wallhaven-112917.jpg', '21');
INSERT INTO `cards` VALUES ('22', 'coley48', '摄影定义', '摄影一词是源于希腊语φῶς phos（光线）和 γραφι graphis（绘画、绘图）或γραφή graphê，两字一起的意思是”以光线绘图”。摄影是指使用某种专门设备进行影像记录的过程，一般我们使用机械照相机或者数码照相机进行摄影。有时摄影也会被称为照相，也就是通过物体所发射或反射的光线使感光介质曝光的过程。有人说过的一句精辟的语言：摄影家的能力是把日常生活中稍纵即逝的平凡事物转化为不朽的视觉图像。', '2020-06-13 08:21', '4', '109', '4A3846BB57BA209FB1F8C329F0C099A6.png', '21');
INSERT INTO `cards` VALUES ('23', 'miaomiao', '我爱的摄影', '摄像对大部分人来说，就是纪实，其实我觉得摄像要高于摄影，在这里补充一下，大家可不要把摄影和摄像搞的好像一个样子，摄影取决于对器材和景物的完美配合，而摄像要在这个基础上，还要做好把握每个镜头里包含故事内容的连贯。 也不是就说摄像比摄影高端，两件事物的相对性，摄影对快门的把握是摄像不用考虑的，摄像的故事叙述上是摄影不能做到的。', '2020-06-13 09:55', '1', '75', '', '22');
INSERT INTO `cards` VALUES ('24', 'miaomiao', '美丽摄影', '摄影的快乐有时是一种不能和大家分享的愉悦，每个人有每个人的角度，在自己眼里那种“还差一点点”的感觉，本身就是一种快乐', '2020-06-13 09:57', '3', '71', '2.jpg,4.jpg,7.jpg', '22');
INSERT INTO `cards` VALUES ('25', 'coley48', '毕业季', '愿你走出半生，归来仍是少年。', '2020-06-13 11:39', '8', '76', 't0.jpg,t2.jpg,t3.jpg', '21');
INSERT INTO `cards` VALUES ('26', 'Dimples', 'dimples girl', 'this is my girl', '2020-06-13 11:47', '0', '100', 'camera02.jpg', '23');
INSERT INTO `cards` VALUES ('27', 'miaomiao', '摄影', '我爱摄影', '2020-06-28 20:59', '9', '17', '001.jpg', '22');

-- ----------------------------
-- Table structure for studio
-- ----------------------------
DROP TABLE IF EXISTS `studio`;
CREATE TABLE `studio` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `wallpaper` varchar(255) DEFAULT NULL,
  `open` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `main` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `info` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of studio
-- ----------------------------
INSERT INTO `studio` VALUES ('0', '风采工作室', '南充市顺庆区1227购物广场3号楼三层01商铺', '../resource/studio/0.jpg', '工作日09:00-17:00，周末10:00-16:00', '500~3000', '婚纱照', '(0817)246669', '高级摄影', '深入理解你的拍摄主题，让镜头前的人参与进来。你并不能把眼睛贴着取景框，注重摄影师与客户的交流沟通，深得客户好评。');
INSERT INTO `studio` VALUES ('1', '校园影屋', '南充市顺庆区西华师范大学老区', '../resource/studio/1.jpg', '09:00-17:00', '5~1000', '存照、毕业照', '(0817)246669', '中级摄影', '帮你留住独一无二的点滴生活');
INSERT INTO `studio` VALUES ('2', 'fano主题摄影', '南充市高坪区', '../resource/studio/2.jpg', '工作日09:00-17:00', '200~800', '毕业照', '(0817)242569', '校园摄影', '每一次拍摄都花足心思，在意每一个人的个性特点，拒绝模式化生产。好照片，属于每一个特别的你。');
INSERT INTO `studio` VALUES ('3', 'LEBOTTLE摄影工作室', '北京', '../resource/studio/3.jpg', '工作日09:30-17:30', '2000~3000', '亲子照', '400-8353-331', '高级摄影', 'LEBOTTLE摄影工作室于2009年拍摄各种图片至今，一直备受姑娘的喜爱。因为她清新自然生活化。记录了欢乐喜悦悲伤感悟和成长的每一个瞬间。如果生活一部不知道结局的电影，那么我们愿意为你回放每一段你想去记忆的片刻。6年来，坚持一对一以及上门服务，记录你每一个重要时刻，从毕业到恋爱结婚然后怀孕生孩，各种纪念日我们都伴随左右，看见你所有的成长过程，为你高兴为你加油。谢谢一直以来大家对我们的关注和喜爱，而我们，会继续努力的！');
INSERT INTO `studio` VALUES ('4', '印象', '南充市顺庆区西华师范大学二期大门对面', '../resource/studio/4.jpg', '工作日09:00-17:00，周末10:00-16:00', '500~1500', '毕业照', '(0817)246669', '中级摄影', '这里每一位摄影师，都是我们从专业、创意、服务三个方面，于千百摄影师中精挑细选而来。');
INSERT INTO `studio` VALUES ('5', '麦田摄影', '上海市', '../resource/studio/5.jpg', '工作日09:00-17:00', '2500~4000', '孕妇照、婴幼儿摄影、婚纱', '718-666-9201', '高级摄影', '麦田摄影是一个有着多年摄影经验，并具有专业设备，齐全服装和独立室内影棚的工作室。主要服务范围是以上海为中心的长江三州地区。您可选择棚内棚外的婚纱摄影，婚礼现场的摄影，或是个人写真，也可选择婴儿幼儿摄影，孕妇摄影等。 如果您对麦田摄影工作室的摄影作品感兴趣的话，可到公众号进行浏览。');
INSERT INTO `studio` VALUES ('6', '锐摄影|SHARP', '杭州市滨江区滨安路650号', '../resource/studio/6.jpg', '工作日09:00-17:00', '500~3000', '婚纱照', '0571-86097260', '高级摄影', '所有服务内容均价格透明，没有任何形式的诱导消费，你最初看到的价格就是最终要支付的金额。');
INSERT INTO `studio` VALUES ('7', '创客文化传媒', '南充市顺庆区师大路112号', '../resource/studio/7.jpg', '09:00-17:00', '199-699', '个人照，寝室照，班级照', '15228313110', '校园摄影', '为你的大学四年生活留下最美好的纪念，一组照片记录毕业时刻最美的时光');
INSERT INTO `studio` VALUES ('8', '师大纪念', '南充市顺庆区西华师范大学二期、老区', '../resource/studio/8.jpg', '工作日09:00-18:00', '99/套', '手绘纪念手册、毕业照', '18283049322', '中级摄影', '师大纪念以信誉立足，专注师大摄影已有5年，提供优质周到的服务，期待你的加入。赶快联系我们吧！');
INSERT INTO `studio` VALUES ('9', '校内毕业写真工作室', '南充市顺庆区西华师大', '../resource/studio/9.jpg', '工作日09:00-17:00', '60~300/人', '班级照（含航拍）', '15255043922', '校园摄影', '让大学四年生活不留遗憾，送西华师大明信片一套');
INSERT INTO `studio` VALUES ('10', '创意约拍', '南充市顺庆区西华师大一期中门', '../resource/studio/10.jpg', '09:00-17:00，含周末', '299/套', '校园个人约拍', '15222633955', '校园摄影', '摄影是一门用光的艺术，是灵感选择的记录！创意约拍期待你的光临');
INSERT INTO `studio` VALUES ('11', '爱摄影DIY', '南充市高坪区川北医学院新校区', '../resource/studio/11.jpg', '工作日09:00-17:00，周末10:00-16:00', '599-699', '航拍宣传片、班级毕业照', '18788925699', '校园摄影', '提供2套服装，精修26张，含创意航拍，底片全送，更多优惠套餐欢迎咨询！');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL DEFAULT '',
  `location` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `actions` varchar(255) NOT NULL DEFAULT '',
  `avator` varchar(255) NOT NULL DEFAULT '',
  `background` varchar(255) NOT NULL DEFAULT '',
  `brief` longtext NOT NULL,
  `story` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('21', 'coley48', '5fd1499180bc064923b573ad85a372da', '15283870838', '', '934103197@qq.com', '', './resource/avator/21.jpg', './resource/background/21.jpg', '我是一个有些伪有些佛的摄影爱好者，取这么一个简单的名字，就是为了让人见名便知所以然。作为一个摄影爱好者，我不知是何时何因爱上摄影的，称己为爱好者其实过于牵强，因为对拍摄没多大热忱，只是觉得自己大部分钱都花在摄影器材上，所以自认属于爱好者范畴，最近更把自己归为佛系摄影爱好者，也就是拍照随缘的那种人。', '关于摄影爱好，就不得不提器材，说到器材，我总是会触景伤情，往事历历在目，不由得潸然泪下，这些年，买过的器材足够开家小型器材店，虽比不上器材党疯狂，但对于一个不靠摄影赚钱，大部分工资用来支撑爱好的人来说，压力山大，人们说，摄影穷三代，单反毁一生，以前我当玩笑，如今我觉得这是真理，不去亲身经历，你永远感悟不到真理。');
INSERT INTO `user` VALUES ('22', 'miaomiao', '5bec07943260753f3bc4422f12db7871', '18180096424', '', '594027806@qq.com', '', './resource/avator/22.jpg', './resource/background/22.jpg', '摄像对大部分人来说，就是纪实，其实我觉得摄像要高于摄影，在这里补充一下，大家可不要把摄影和摄像搞的好像一个样子，摄影取决于对器材和景物的完美配合，而摄像要在这个基础上，还要做好把握每个镜头里包含故事内容的连贯。 也不是就说摄像比摄影高端，两件事物的相对性，摄影对快门的把握是摄像不用考虑的，摄像的故事叙述上是摄影不能做到的。', '不管从那方面进入，做到自己的就是最好的。留给自己最美好的记忆，就是那么一点点就好。永远不要太高的要求自己，那样只会疲劳不堪。玩的有乐就好，太痴迷是有害的。快乐的感觉其实一直都在我们心里，只是我们有时会刻意的回避。请拿起手中的相机去尽情的记录身边的点点滴滴吧。');
INSERT INTO `user` VALUES ('23', 'Dimples', '5bec07943260753f3bc4422f12db7871', '18283043922', '', '1272493237@qq.com', '', '/resource/avator/default.jpg', '/resource/background/default.jpg', '', '');
INSERT INTO `user` VALUES ('24', 'mm', '5bec07943260753f3bc4422f12db7871', '18180096424', '', '594027806@qq.com', '', '/resource/avator/default.jpg', '/resource/background/default.jpg', '', '');
INSERT INTO `user` VALUES ('25', 'miao123', '5bec07943260753f3bc4422f12db7871', '18180096424', '', '594027806@qq.com', '', '/resource/avator/default.jpg', '/resource/background/default.jpg', '', '');
INSERT INTO `user` VALUES ('26', 'sheying', '5bec07943260753f3bc4422f12db7871', '18180096424', '', '594027806@qq.com', '', './resource/avator/26.jpg', './resource/background/26.jpg', '摄影的快乐有时是一种不能和大家分享的愉悦，每个人有每个人的角度，在自己眼里那种“还差一点点”的感觉，本身就是一种快乐。从一开始的傻瓜式卡卡，到发现每个微调的不同，再到后来对色调的感悟。这才是满满的喜悦，不同于表面的浮夸，这是实实在在的开心。', '摄影的快乐有时是一种不能和大家分享的愉悦，每个人有每个人的角度，在自己眼里那种“还差一点点”的感觉，本身就是一种快乐。从一开始的傻瓜式卡卡，到发现每个微调的不同，再到后来对色调的感悟。这才是满满的喜悦，不同于表面的浮夸，这是实实在在的开心。');
INSERT INTO `user` VALUES ('27', '123456', '5bec07943260753f3bc4422f12db7871', '18180096424', '', '594027806@qq.com', '', './resource/avator/27.jpg', './resource/background/27.jpg', '摄影的快乐有时是一种不能和大家分享的愉悦，每个人有每个人的角度，在自己眼里那种“还差一点点”的感觉，本身就是一种快乐。', '摄影的快乐有时是一种不能和大家分享的愉悦，每个人有每个人的角度，在自己眼里那种“还差一点点”的感觉，本身就是一种快乐。');
INSERT INTO `user` VALUES ('28', '111222', '5bec07943260753f3bc4422f12db7871', '18180096424', '', '594027806@qq.com', '', '/resource/avator/default.jpg', '/resource/background/default.jpg', '', '');
