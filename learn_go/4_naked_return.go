package main

import "fmt"

func main() {
	fmt.Println(split(17))
}

func split(num int) (x, y int) {
	x = num * 4 / 9
	y = num - x
	return
}
