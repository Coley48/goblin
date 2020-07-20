/*
Navicat MariaDB Data Transfer

Source Server         : localhost
Source Server Version : 100408
Source Host           : localhost:3306
Source Database       : goblin

Target Server Type    : MariaDB
Target Server Version : 100408
File Encoding         : 65001

Date: 2020-07-10 21:39:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for homeinfo
-- ----------------------------
DROP TABLE IF EXISTS `homeinfo`;
CREATE TABLE `homeinfo` (
  `id` int(11) NOT NULL,
  `danma` int(11) DEFAULT NULL,
  `fond` int(11) DEFAULT NULL,
  `share` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homeinfo
-- ----------------------------
INSERT INTO `homeinfo` VALUES ('0', '28', '7', '17');
