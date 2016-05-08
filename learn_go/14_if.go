package main

import "fmt"

func main() {
	if v := 1; v < 2 {
		fmt.Println("1")
	}

	var i = 1
	if i = 2; i == 2 {
		fmt.Println("2")
	}

	if i == 3 {
		fmt.Println("3-1")
	} else if i == 1 {
		fmt.Println("3-2")
	} else {
		fmt.Println("3-3")
	}
}
