package main

import (
	"fmt"
	"strings"
)

func WordCount(s string) map[string]int {
	var sli []string
	var myMap map[string]int
	myMap = make(map[string]int)

	sli = strings.Fields(s)

	for _, v := range sli {
		if _, ok := myMap[v]; ok {
			myMap[v] = myMap[v] + 1
		} else {
			myMap[v] = 1
		}
	}

	return myMap
}

func main() {
	fmt.Println(WordCount(" hello world haha haha apple banana "))
}
