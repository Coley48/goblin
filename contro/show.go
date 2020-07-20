package contro

import (
	"encoding/json"
	"net/http"
	"strconv"

	"../model"
)

type danmaku struct {
	Code int           `json:"code"`
	Data []interface{} `json:"data"`
}

var dan danmaku

func packDanmaku(data ...interface{}) {
	dan.Data = append(dan.Data, data)
}

func init() {
	dan.Code = 0
	data, _ := model.GetDanmakuDB(1000)
	for i := range data {
		packDanmaku(data[i].Time, data[i].Type, data[i].Color, data[i].Author, data[i].Text)
	}
}

// GetCards .
func GetCards(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		r.ParseForm()
		page, _ := strconv.Atoi(r.FormValue("p"))
		num, _ := strconv.Atoi(r.FormValue("n"))
		Succ(w, 200, "", model.GetCardsListDB(page, num))

	case "POST":
		r.ParseForm()
		cid := r.Form.Get("cid")
		model.AddClickDB("cards", "click", number(cid))
		Succ(w, 200, "")
	default:
		Fail(w, 405, "方法错误！")
	}
}

// GetUserCards .
func GetUserCards(w http.ResponseWriter, r *http.Request) {
	Succ(w, 200, "", model.GetUserCardsDB(GetUserID(r)))
}

// DelCard .
func DelCard(w http.ResponseWriter, r *http.Request) {
	if !TokenCheck(w, r) {
		Fail(w, 102, "登录超时！")
		return
	}

	r.ParseForm()
	err := model.DelCardDB(r.FormValue("cid"))
	if err != nil {
		Fail(w, 304, "内部错误："+err.Error())
		return
	}
	Succ(w, 200, "操作成功！")
}

// GetStudio .
func GetStudio(w http.ResponseWriter, r *http.Request) {
	if !GetCheck(r) {
		Fail(w, 405, "方法错误！")
		return
	}

	// json
	// buf, err := ioutil.ReadFile("./data/studio.json")
	// if err != nil {
	// 	Fail(w, 500, "内部错误！获取数据失败")
	// 	return
	// }
	// Succ(w, 200, "", string(buf))

	// mysql
	r.ParseForm()
	search := r.FormValue("s")
	Succ(w, 200, "", model.SearchStudioDB(search))
}

// DanmakuAPI .
func DanmakuAPI(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		resp, _ := json.Marshal(dan)
		w.Header().Set("content-Type", "application/json")
		w.Write(resp)

	case "POST":
		var mode model.Danmaku
		json.NewDecoder(r.Body).Decode(&mode)

		err := model.PutDanmakuDB(mode)
		if err != nil {
			Fail(w, 303, "内部错误："+err.Error())
			return
		}

		packDanmaku(mode.Time, mode.Type, mode.Color, mode.Author, mode.Text)
		Succ(w, 200, "")
		model.AddClickDB("homeinfo", "danma", 0)

	default:
		Fail(w, 405, "方法错误！")
		return
	}
}

// HomeInfo .
func HomeInfo(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		r.ParseForm()
		var err error
		switch r.FormValue("column") {
		case "all":
			data, err := model.GetHomeInfoDB(0)
			if err != nil {
				Fail(w, 301, "内部错误："+err.Error())
				return
			}
			Succ(w, 200, "", data)
			return

		case "fond":
			err = model.AddClickDB("homeinfo", "fond", 0)
		case "share":
			err = model.AddClickDB("homeinfo", "share", 0)
		default:
		}

		if err != nil {
			Fail(w, 302, "内部错误："+err.Error())
			return
		}
		Succ(w, 200, "")

	default:
		Fail(w, 405, "方法错误！")
		return
	}
}

// CommentAPI .
func CommentAPI(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		r.ParseForm()

		cid := r.Form.Get("cid")
		data, err := model.GetCommentDB(cid)
		if err != nil {
			Fail(w, 301, "内部错误："+err.Error())
			return
		}
		Succ(w, 200, "", data)
		model.AddClickDB("cards", "click", number(cid))

	case "POST":
		var mode model.Comment
		json.NewDecoder(r.Body).Decode(&mode)

		idx, err := model.PutCommentDB(mode)
		if err != nil {
			Fail(w, 303, "内部错误："+err.Error())
			return
		}

		mode.ID = int(idx)
		Succ(w, 200, "发表成功！", mode)

		model.AddClickDB("cards", "comment", mode.CID)
	default:
		Fail(w, 405, "方法错误！")
		return
	}
}

// DetailAPI .
func DetailAPI(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	t := r.Form.Get("type")
	if t == "" {
		t = "campus"
	}

	data, err := model.DetailDB(t)
	if err != nil {
		Fail(w, 301, "内部错误："+err.Error())
		return
	}

	Succ(w, 200, "", data)
	model.AddClickDB("detail", "click", data.ID)
}
