package contro

import (
	"encoding/json"
	"net/http"

	"../model"
)

// LoginAPI .
func LoginAPI(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		id := GetUserID(r)
		if id != "-1" {
			mode, err := model.UserInquireByID(id)
			if err != nil {
				Fail(w, 301, "内部错误："+err.Error())
				return
			}
			Succ(w, 200, "", id, mode.Username)
			return
		}
		Fail(w, 102, "")
	case "POST":
		if TokenCheck(w, r) {
			Fail(w, 103, "您已登录，请勿重复登录！")
			return
		}
		var mode model.User
		err := json.NewDecoder(r.Body).Decode(&mode)
		if err != nil {
			Fail(w, 501, "内部错误："+err.Error())
			return
		}

		user, nameErr := model.UserInquireByName(mode.Username)
		if nameErr != nil || (Encrypt(mode.Password) != user.Password) {
			Fail(w, 104, "账号或密码错误！")
			return
		}
		SetCookie(w, user)
		Succ(w, 200, "欢迎回来！"+mode.Username)
	default:
		Fail(w, 405, "方法错误！")
	}
}

// RegistAPI .
func RegistAPI(w http.ResponseWriter, r *http.Request) {
	if TokenCheck(w, r) {
		Fail(w, 103, "您已登录！")
		return
	}
	switch r.Method {
	case "GET":
		r.ParseForm()
		name := r.Form.Get("name")
		_, nameErr := model.UserInquireByName(name)
		if nameErr == nil {
			Fail(w, 101, "该用户名已被注册！")
			return
		}

		Succ(w, 200, "")

	case "POST":
		var data model.Register
		err := json.NewDecoder(r.Body).Decode(&data)
		if err != nil {
			Fail(w, 501, "内部错误："+err.Error())
			return
		}

		_, nameErr := model.UserInquireByName(data.Username)
		if nameErr == nil {
			Fail(w, 101, "该用户名已被注册！")
			return
		}
		cookie, err := r.Cookie("Goblin")
		if err != nil {
			Fail(w, 105, "验证码已失效，请重新获取！")
			return
		}

		if Encrypt(data.Code) != cookie.Value {
			Fail(w, 106, "验证码错误！")
			return
		}
		user := model.User{
			Username:   data.Username,
			Email:      data.Email,
			Phone:      data.Phone,
			Password:   Encrypt(data.Password),
			Avator:     "/resource/avator/default.jpg",
			Background: "/resource/background/default.jpg",
		}

		err = model.RegistDB(user)
		if err != nil {
			Fail(w, 303, "内部错误："+err.Error())
			return
		}
		Succ(w, 200, "注册成功！")
	default:
		Fail(w, 405, "方法错误！")
	}
}

// UserInfo .
func UserInfo(w http.ResponseWriter, r *http.Request) {
	if !TokenCheck(w, r) {
		Fail(w, 102, "未登录，请求失败！")
		return
	}

	if r.Method == "GET" {
		r.ParseForm()
		id := GetUserID(r)
		user, err := model.UserInquireByID(id)
		if err != nil {
			Fail(w, 301, "内部错误："+err.Error())
			return
		}
		Succ(w, 200, "", user)
		return
	} else if r.Method == "POST" {
		r.ParseForm()
		var mode model.User
		err := json.NewDecoder(r.Body).Decode(&mode)
		if err != nil {
			Fail(w, 501, "内部错误："+err.Error())
			return
		}
		user, err := model.UserInquireByName(mode.Username)

		if err == nil && mode.Password != user.Password {
			mode.Password = Encrypt(mode.Password)
		}
		model.ResetUserDB(mode)
		Succ(w, 200, "修改成功！")
		return
	} else {
		Fail(w, 405, "方法错误！")
	}
}

// LogoutAPI .
func LogoutAPI(w http.ResponseWriter, r *http.Request) {
	if !TokenCheck(w, r) {
		Fail(w, 102, "未登录，请求失败！")
		return
	}

	DelCookie(w, r, "token")
	DelCookie(w, r, "user")
	Succ(w, 200, "")
}

// ContactAPI .
func ContactAPI(w http.ResponseWriter, r *http.Request) {
	if !TokenCheck(w, r) {
		Fail(w, 102, "未登录，请求失败！")
		return
	}

	var mode model.Contact
	err := json.NewDecoder(r.Body).Decode(&mode)
	if err != nil {
		Fail(w, 501, "内部错误："+err.Error())
		return
	}

	err = model.ContactDB(mode)
	if err != nil {
		Fail(w, 303, "内部错误："+err.Error())
		return
	}

	Succ(w, 200, "")
}

// VerifyAPI .
func VerifyAPI(w http.ResponseWriter, r *http.Request) {
	if PostCheck(r) == false {
		Fail(w, 405, "方法错误！")
		return
	}
	r.ParseForm()
	var data model.Verify
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		Fail(w, 501, "内部错误："+err.Error())
		return
	}
	code, err := SendMail(data.Email)
	if err != nil {
		Fail(w, 505, "内部错误："+err.Error())
		return
	}

	SetCodeCookie(w, code)
	Succ(w, 200, "")
}
