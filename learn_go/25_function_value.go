package main

import "fmt"

func main() {
	num := b(a, 3)
	fmt.Println(num)
}

func a(x, y int) int {
	return x + y
}

func b(fn func(x, y int) int, x int) int {
	return x + fn(x, x)
}