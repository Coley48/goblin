/*
Navicat MariaDB Data Transfer

Source Server         : localhost
Source Server Version : 100408
Source Host           : localhost:3306
Source Database       : goblin

Target Server Type    : MariaDB
Target Server Version : 100408
File Encoding         : 65001

Date: 2020-07-10 21:41:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for danmaku
-- ----------------------------
DROP TABLE IF EXISTS `danmaku`;
CREATE TABLE `danmaku` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(10) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `time` double DEFAULT NULL,
  `text` varchar(255) DEFAULT '',
  `author` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of danmaku
-- ----------------------------
INSERT INTO `danmaku` VALUES ('12', '0', '16777215', '50.714479', '你好！', 'any');
INSERT INTO `danmaku` VALUES ('13', '0', '16777215', '0', '好棒！', 'any');
INSERT INTO `danmaku` VALUES ('14', '0', '16777215', '3', '6666666', 'any');
INSERT INTO `danmaku` VALUES ('15', '0', '16777215', '30.525661', '哥布零冲呀！！！', 'any');
INSERT INTO `danmaku` VALUES ('16', '0', '16777215', '49.132153', '哈哈哈', 'any');
INSERT INTO `danmaku` VALUES ('17', '2', '15024726', '25.012636', '太棒了吧！', 'any');
INSERT INTO `danmaku` VALUES ('18', '0', '16769331', '12.778233', 'Record life with camera.', 'any');
INSERT INTO `danmaku` VALUES ('19', '0', '3788031', '50.469191', '用光影留住美好。', 'any');
INSERT INTO `danmaku` VALUES ('20', '0', '16777215', '0', '666666', 'any');
INSERT INTO `danmaku` VALUES ('21', '0', '16777215', '19.379644', '你好啊！', 'any');
INSERT INTO `danmaku` VALUES ('22', '0', '15024726', '17.15341', '哥布零摄影', 'any');
INSERT INTO `danmaku` VALUES ('23', '0', '6610199', '19.074425', '青春', 'any');
INSERT INTO `danmaku` VALUES ('24', '0', '3788031', '26.663734', '感动世界，感到你', 'any');
INSERT INTO `danmaku` VALUES ('25', '0', '16777215', '18.254434', '毕业了', 'any');
INSERT INTO `danmaku` VALUES ('26', '0', '16769331', '6.447058', '疯狂打call！', 'any');
INSERT INTO `danmaku` VALUES ('27', '0', '3788031', '0', '哥布零666', 'any');
INSERT INTO `danmaku` VALUES ('28', '0', '16777215', '7.459256', 'goblin', 'any');
INSERT INTO `danmaku` VALUES ('29', '0', '13959417', '0', '每日一遍', 'any');
INSERT INTO `danmaku` VALUES ('30', '0', '16769331', '5.417091', '再来亿遍', 'any');
INSERT INTO `danmaku` VALUES ('31', '0', '6610199', '12.547679', '打造高校青春摄影品牌', 'any');
INSERT INTO `danmaku` VALUES ('32', '0', '15024726', '2.635212', '用相机记录生活！', 'any');
INSERT INTO `danmaku` VALUES ('33', '0', '16777215', '4.801496', 'goblin', 'any');
INSERT INTO `danmaku` VALUES ('34', '0', '16769331', '2.11304', '冲冲冲！', 'any');
INSERT INTO `danmaku` VALUES ('35', '0', '15024726', '9.957848', '加油', 'any');
INSERT INTO `danmaku` VALUES ('36', '0', '3788031', '20.656291', '四年好快啊！！！', 'any');
INSERT INTO `danmaku` VALUES ('37', '0', '13959417', '24.03129', '我们就这么毕业了。', 'any');
INSERT INTO `danmaku` VALUES ('38', '0', '16777215', '26.837211', '嗐！这该死的疫情', 'any');
INSERT INTO `danmaku` VALUES ('39', '0', '15024726', '33.643997', '冲鸭！', 'any');
