package contro

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"strconv"
	"time"
)

// Respond .
type Respond struct {
	Code int         `json:"code"`
	Info string      `json:"info"`
	Data interface{} `json:"data,omitempty"`
}

func number(str string) int {
	num, _ := strconv.Atoi(str)
	return num
}

func typeof(v interface{}) string {
	return fmt.Sprintf("%T", v)
}

// Reply .
func Reply(code int, errs string, data ...interface{}) Respond {
	if len(data) == 0 {
		return Respond{
			Code: code,
			Info: errs,
		}
	}
	return Respond{
		Code: code,
		Info: errs,
		Data: data[0],
	}
}

// Succ .
func Succ(w http.ResponseWriter, code int, info string, mode ...interface{}) {
	resp, _ := json.Marshal(Reply(code, info, mode))
	w.Header().Set("content-Type", "application/json")
	w.Write(resp)
}

// Fail .
func Fail(w http.ResponseWriter, code int, info string) {
	resp, _ := json.Marshal(Reply(code, info))
	w.Header().Set("content-Type", "application/json")
	w.Write(resp)
}

// RandName .
func RandName() string {
	bytes := []byte("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
	result := []byte{}
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	for i := 0; i < len(bytes); i++ {
		result = append(result, bytes[r.Intn(len(bytes))])
	}
	return string(result)
}

// RandCode .
func RandCode() string {
	bytes := []byte("0123456789")
	result := []byte{}
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	for i := 0; i < 6; i++ {
		result = append(result, bytes[r.Intn(len(bytes))])
	}
	return string(result)
}
