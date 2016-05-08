package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum = sum + i
	}
	fmt.Println(sum)

	sum1 := 0
	//for ;sum1<1000;{
	for sum1 < 1000 {
		sum1 = sum1 + 1
	}
	fmt.Println(sum1)

	var sum2 = 0
	for {
		sum2 = sum2 + 1
		if sum2 == 1000 {
			break
		}
	}
	fmt.Println(sum2)
}
