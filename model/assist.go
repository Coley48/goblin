package model

import (
	"crypto/md5"
	"encoding/hex"
	"log"
)

func encrypt(str string) string {
	temp := str + Keys
	buff := md5.Sum([]byte(temp))
	return hex.EncodeToString(buff[:])
}

func check(err error, info ...string) error {
	if err != nil {
		if len(info) != 0 {
			log.Println(info[0] + err.Error())
		} else {
			log.Println(err.Error())
		}
	}
	return err
}
