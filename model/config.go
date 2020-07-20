package model

import (
	"log"

	_ "github.com/go-sql-driver/mysql" //
	"github.com/jmoiron/sqlx"
)

const (
	user     = "root"      // 数据库用户名.
	dbname   = "goblin"    // 数据库名
	port     = "3306"      // 端口号
	password = "root"      // 密码
	ip       = "127.0.0.1" // 服务器ip地址
)

// Keys .
const Keys = "goblin.show"

// DB 服务器数据库
var DB *sqlx.DB

// init 全局配置
func init() {
	path := user + ":" + password + "@tcp(" + ip + ":" + port + ")/" + dbname + "?charset=utf8&parseTime=true"
	db, err := sqlx.Open("mysql", path)

	if err != nil {
		log.Fatal(err.Error())
	}
	DB = db

	// DB.SetConnMaxLifetime(100) // 设置数据库最大连接数
	// DB.SetMaxIdleConns(10)     // 设置数据库最大闲置连接数
	// //验证连接
	// if err := DB.Ping(); err != nil {
	// 	log.Println("opon database fail")
	// }
}
