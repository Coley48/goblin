package contro

import (
	"net/http"
	"os"
)

// RemoveAPI .
func RemoveAPI(w http.ResponseWriter, r *http.Request) {
	if !GetCheck(r) {
		Fail(w, 405, "方法错误！")
		return
	}
	if !TokenCheck(w, r) {
		http.Redirect(w, r, "/login.html", 307)
		return
	}

	r.ParseForm()
	file := r.FormValue("filename")
	path := "./upload/" + r.FormValue("username") + "/"

	err := os.Remove(path + file)
	if err != nil {
		Fail(w, 500, "内部错误："+err.Error())
		return
	}
	Succ(w, 200, "")
}
