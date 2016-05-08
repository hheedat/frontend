package main

import "fmt"

func fibonacci() func() int {
	x, y := 0, 1
	return func() int {
		tmp := x
		x = y
		y = tmp + x
		return tmp
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}

