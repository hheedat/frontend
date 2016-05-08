package main

import "fmt"

func main() {
	fna, fnb := adder(), adder()
	var a, b int
	for i := 0; i < 10; i++ {
		a = fna(i)
		b = fnb(i * 2)
	}
	fmt.Println(a, b)
}

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}
