package contro

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"

	"../model"
)

// UploadAPI .
func UploadAPI(w http.ResponseWriter, r *http.Request) {
	if !PostCheck(r) {
		Fail(w, 405, "方法错误！")
		return
	}
	if !TokenCheck(w, r) {
		http.Redirect(w, r, "/login.html", 307)
		return
	}

	switch r.FormValue("s") {
	case "forum":
		r.ParseForm()
		var mode model.Card
		err := json.NewDecoder(r.Body).Decode(&mode)

		if err != nil {
			Fail(w, 501, "内部错误："+err.Error())
			return
		}
		_, err = model.UserInquireByName(mode.Username)
		if err != nil {
			Fail(w, 301, "内部错误："+err.Error())
			return
		}
		err = model.UploadCardDB(mode)
		if err != nil {
			Fail(w, 303, "内部错误："+err.Error())
			return
		}
		Succ(w, 200, "发布成功！")
		break
	case "avator":
		uploadOne(w, r, "./resource/avator/")
	case "background":
		uploadOne(w, r, "./resource/background/")
	case "images":
		r.ParseForm()
		uploadMore(w, r)
	default:
		Fail(w, 402, "禁止访问！")
	}
}

func uploadOne(w http.ResponseWriter, r *http.Request, path string) {
	r.ParseForm()

	id := GetUserID(r)
	uploadFile, _, err := r.FormFile("file")
	if err != nil {
		Fail(w, 502, "文件解析错误："+err.Error())
		return
	}
	// 保存图片
	// part := strings.Split(file.Filename, ".")
	// filename := path + id + "." + part[1]
	filename := path + id + ".jpg"

	saveFile, err := os.OpenFile(filename, os.O_WRONLY|os.O_CREATE, 0666)
	if !check(err, "UploadAPI.image..") {
		Fail(w, 503, "内部错误："+err.Error())
		return
	}
	io.Copy(saveFile, uploadFile)

	defer uploadFile.Close()
	defer saveFile.Close()

	Succ(w, 200, "上传成功！", filename)
}

func uploadMore(w http.ResponseWriter, r *http.Request) {
	r.ParseMultipartForm(32 << 20) //设置内存大小

	id := GetUserID(r)
	files := r.MultipartForm.File["file"] //获取上传的文件组
	len := len(files)
	for i := 0; i < len; i++ {
		//打开上传文件
		file, err := files[i].Open()
		defer file.Close()
		if err != nil {
			log.Fatal(err)
		}
		//创建上传目录
		os.Mkdir("./upload/"+id, os.ModePerm)
		//创建上传文件
		cur, err := os.Create("./upload/" + id + "/" + files[i].Filename)
		defer cur.Close()
		if err != nil {
			log.Fatal(err)
		}
		io.Copy(cur, file)
	}
	Succ(w, 200, "上传成功！")
}
