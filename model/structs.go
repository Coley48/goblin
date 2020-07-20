package model

// User .
type User struct {
	ID         int    `json:"id"`
	Username   string `json:"username"`
	Password   string `json:"password"`
	Phone      string `json:"phone"`
	Location   string `json:"location"`
	Email      string `json:"email"`
	Actions    string `json:"actions"`
	Avator     string `json:"avator"`
	Background string `json:"background"`
	Brief      string `json:"brief"`
	Story      string `json:"story"`
}

// Register .
type Register struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Phone    string `json:"phone"`
	Email    string `json:"email"`
	Code     string `json:"code"`
}

// Card .
type Card struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Title    string `json:"title"`
	Content  string `json:"content"`
	Datetime string `json:"datetime"`
	Click    int    `json:"click"`
	Comment  int    `json:"comment"`
	Image    string `json:"image"`
	UID      int    `json:"uid"`
}

// Studio .
type Studio struct {
	ID        int    `json:"id"`
	Name      string `json:"name"`
	Wallpaper string `json:"wallpaper"`
	Location  string `json:"location"`
	Open      string `json:"open"`
	Price     string `json:"price"`
	Main      string `json:"main"`
	Class     string `json:"class"`
	Phone     string `json:"phone"`
	Info      string `json:"info"`
}

// Danmaku .
type Danmaku struct {
	Time   float64 `json:"time"`
	Type   int     `json:"type"`
	Color  int     `json:"color"`
	Author string  `json:"author"`
	Text   string  `json:"text"`
	// ID     int     `json:"id"`
}

// HomeInfo .
type HomeInfo struct {
	ID    int `json:"id"`
	Danma int `json:"danma"`
	Fond  int `json:"fond"`
	Share int `json:"share"`
}

// Comment .
type Comment struct {
	ID       int    `json:"id"`
	CID      int    `json:"cid"`
	UID      int    `json:"uid"`
	Username string `json:"username"`
	Content  string `json:"content"`
	Datetime string `json:"datetime"`
}

// Contact .
type Contact struct {
	ID       int    `json:"id"`
	UID      int    `json:"uid"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Message  string `json:"message"`
	Datetime string `json:"datetime"`
}

// Detail .
type Detail struct {
	ID    int    `json:"id"`
	Click int    `json:"click"`
	Type  string `json:"type"`
	Title string `json:"title"`
	Brief string `json:"brief"`
	Intro string `json:"intro"`
	Image string `json:"image"`
}

// Verify .
type Verify struct {
	Email string `json:"email"`
}
