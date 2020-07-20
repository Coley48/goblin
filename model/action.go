package model

import (
	"errors"
	"log"
	"strconv"
	"strings"
)

// check(DB.Select(&modes, "select id,title,datetime from Card where tag = ? order by id desc", tags[i]))
// check(DB.Select(&modes, "select id,title,datetime from Card order by id desc"))
// check(DB.Get(&mode, "select * from person limit 1"), "GetAboutDB:")

// UserInquireByName .
func UserInquireByName(key string) (User, error) {
	var mode User
	err := DB.Get(&mode, "select * from user where username = ?", key)
	return mode, err
}

// UserInquireByID .
func UserInquireByID(id string) (User, error) {
	var mode User
	err := DB.Get(&mode, "select * from user where id = ?", id)
	return mode, err
}

// RegistDB .
func RegistDB(mode User) error {
	tx := DB.MustBegin()
	result, err := DB.Exec("insert into user (`username`,`password`,`email`,`phone`,`avator`,`background`,`brief`,`story`) values(?,?,?,?,?,?,?,?)", mode.Username, mode.Password, mode.Email, mode.Phone, mode.Avator, mode.Background, mode.Brief, mode.Story)
	row, _ := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		return errors.New("Insert failed. ")
	}
	if check(err, "RegistDB:") != nil {
		tx.Rollback()
		return err
	}
	return nil
}

// ResetUserDB .
func ResetUserDB(mode User) error {
	tx := DB.MustBegin()
	result, err := DB.Exec("update user set password=?,email=?,phone=?,avator=?,background=?,brief=?,story=? where id=?", mode.Password, mode.Email, mode.Phone, mode.Avator, mode.Background, mode.Brief, mode.Story, mode.ID)
	row, _ := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		return errors.New("Insert failed. ")
	}
	if check(err, "RegistDB:") != nil {
		tx.Rollback()
		return err
	}
	return nil
}

// UploadCardDB .
func UploadCardDB(mode Card) error {
	tx := DB.MustBegin()
	result, err := DB.Exec("insert into cards (`username`,`title`,`content`,`datetime`,`click`,`comment`,`image`,`uid`) values(?,?,?,?,?,?,?,?)", mode.Username, mode.Title, mode.Content, mode.Datetime, mode.Click, mode.Comment, mode.Image, mode.UID)
	row, _ := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		return errors.New("Insert failed. ")
	}
	if check(err, "UploadCardDB:") != nil {
		tx.Rollback()
		return err
	}
	return nil
}

// GetCardsListDB .
func GetCardsListDB(page, num int) []Card {
	modes := make([]Card, 0, num)
	err := DB.Select(&modes, "select * from cards order by id desc limit ?,?", (page-1)*num, num)
	check(err, "ArticleListDB:")
	return modes
}

// GetUserCardsDB .
func GetUserCardsDB(uid string) []Card {
	modes := make([]Card, 0, 0)
	err := DB.Select(&modes, "select * from cards where uid = ? order by id desc", uid)
	check(err, "ArticleListDB:")
	return modes
}

// DelCardDB .
func DelCardDB(cid string) error {
	tx := DB.MustBegin()
	result := tx.MustExec("delete from cards  where id = ?", cid)
	row, _ := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		log.Println("DelCardDB")
	}

	return tx.Commit()
}

// ...................................................................................
// check(DB.Select(&modes, "select name from tags order by count desc"), "AllTagsDB:")

// CountDB .
func CountDB(table string) string {
	var num int
	check(DB.Get(&num, "select count(id) from "+table), "CountDB:")
	return strconv.Itoa(num)
}

// AddClickDB .
func AddClickDB(table string, column string, id int) error {
	tx := DB.MustBegin()
	result := tx.MustExec("update "+table+" set "+column+" = "+column+" + 1 where id = ?", id)
	row, _ := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		log.Println("AddClickDB:RowsAffected.")
	}
	return tx.Commit()
}

// SearchStudioDB .
func SearchStudioDB(search string) []Studio {
	modes := make([]Studio, 0)
	if search == "" {
		err := DB.Select(&modes, "select * from studio")
		check(err, "SearchStudioDB.0:")

	} else {
		keywords := strings.Split(search, " ")
		for i := 0; i < len(keywords); i++ {
			keywords[i] = "%" + keywords[i] + "%"
		}

		if len(keywords) == 1 {
			err := DB.Select(&modes, "select * from studio where upper(name) like upper(?) or info like ?", keywords[0], keywords[0])
			check(err, "SearchStudioDB.2")
		} else {
			err := DB.Select(&modes, "select * from studio where upper(name) like upper(?) and info like ?", keywords[0], keywords[1])
			check(err, "SearchStudioDB.3")
		}
	}
	return modes
}

// GetDanmakuDB .
func GetDanmakuDB(num int) ([]Danmaku, error) {
	var total = 0
	DB.Get(&total, "select count(id) from danmaku")
	if num > total {
		num = total
	}

	data := make([]Danmaku, 0, num)
	err := DB.Unsafe().Select(&data, "select * from danmaku order by time asc limit ?", num)
	return data, err
}

// PutDanmakuDB .
func PutDanmakuDB(mode Danmaku) error {
	tx := DB.MustBegin()
	result := DB.MustExec("insert into danmaku (`type`,`color`,`time`,`text`,`author`) values(?,?,?,?,?)", mode.Type, mode.Color, mode.Time, mode.Text, mode.Author)
	row, err := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		log.Println("PutDanmakuDB:RowsAffected.")
	}
	tx.Commit()
	return err
}

// GetHomeInfoDB .
func GetHomeInfoDB(id int) (HomeInfo, error) {
	var data HomeInfo
	err := DB.Get(&data, "select * from homeinfo where id = ?", id)
	return data, err
}

// GetCommentDB .
func GetCommentDB(cid string) ([]Comment, error) {
	data := make([]Comment, 0)
	err := DB.Select(&data, "select * from comment where cid = ? order by id desc", cid)
	return data, err
}

// PutCommentDB .
func PutCommentDB(mode Comment) (int64, error) {
	tx := DB.MustBegin()
	result := DB.MustExec("insert into comment (`cid`,`uid`,`username`,`content`,`datetime`) values(?,?,?,?,?)", mode.CID, mode.UID, mode.Username, mode.Content, mode.Datetime)
	row, err := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		log.Println("PutCommentDB:RowsAffected.")
	}
	tx.Commit()
	id, _ := result.LastInsertId()
	return id, err
}

// ContactDB .
func ContactDB(mode Contact) error {
	tx := DB.MustBegin()
	result := DB.MustExec("insert into contact (`uid`,`name`,`email`,`phone`,`message`,`datetime`) values(?,?,?,?,?,?)", mode.UID, mode.Name, mode.Email, mode.Phone, mode.Message, mode.Datetime)
	row, err := result.RowsAffected()
	if row != 1 {
		tx.Rollback()
		log.Println("PutCommentDB:RowsAffected.")
	}
	tx.Commit()
	return err
}

// DetailDB .
func DetailDB(t string) (Detail, error) {
	var data Detail
	err := DB.Get(&data, "select * from detail where type = ?", t)
	return data, err
}
