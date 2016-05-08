package main

import "fmt"

//The range form of the for loop iterates over a slice or map.
//When ranging over a slice, two values are returned for each iteration.
//The first is the index, and the second is a copy of the element at that index.
func main() {
	pow := []int{1, 2, 4, 8, 16, 32, 64, 128}
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}

	for i, _ := range pow {
		fmt.Printf("%d\n", i)
	}

	for i := range pow {
		fmt.Printf("%d\n", i)
	}

	for _, v := range pow {
		fmt.Printf("%d\n", v)
	}
}
