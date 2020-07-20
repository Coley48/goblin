package main

import (
	"log"
	"net/http"

	"./contro"
)

func main() {
	http.HandleFunc("/API/login", contro.LoginAPI)
	http.HandleFunc("/API/logout", contro.LogoutAPI)
	http.HandleFunc("/API/regist", contro.RegistAPI)
	http.HandleFunc("/API/upload", contro.UploadAPI)
	http.HandleFunc("/API/userInfo", contro.UserInfo)
	http.HandleFunc("/API/getCards", contro.GetCards)
	http.HandleFunc("/API/getUserCards", contro.GetUserCards)
	http.HandleFunc("/API/delCard", contro.DelCard)
	http.HandleFunc("/API/getStudio", contro.GetStudio)
	http.HandleFunc("/API/danmaku", contro.DanmakuAPI)
	http.HandleFunc("/API/homeinfo", contro.HomeInfo)
	http.HandleFunc("/API/comment", contro.CommentAPI)
	http.HandleFunc("/API/contact", contro.ContactAPI)
	http.HandleFunc("/API/detail", contro.DetailAPI)
	http.HandleFunc("/API/verify", contro.VerifyAPI)

	err := http.ListenAndServeTLS(":8000", "./conf/ca/goblin.show.pem", "./conf/ca/goblin.show.key", nil)
	if err != nil {
		log.Fatal("ListenAndServe:", err.Error())
	}
}
