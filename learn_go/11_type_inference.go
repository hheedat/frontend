package main

import "fmt"

func main() {
	v := 42
	fmt.Printf("v is of type %T\n", v)

	j := 42.1
	fmt.Printf("j is of type %T\n", j)

	k := "hello"
	fmt.Printf("k is of type %T\n", k)

	//m := v + j
	m := float64(v) + j
	fmt.Printf("m is of type %T\n", m)
}
