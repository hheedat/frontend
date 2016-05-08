package main

import "fmt"

func main() {
	//Deferred function calls are pushed onto a stack.
	//When a function returns, its deferred calls are executed in last-in-first-out order.
	defer fmt.Println("world")
	defer hello()
	defer world()

	fmt.Println("hello")

	fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")
}

func hello() {
	fmt.Println("hello-1")
}

func world() {
	fmt.Println("world-1")
}
