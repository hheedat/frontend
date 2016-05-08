package main

import "fmt"

func main() {
	var p *int
	fmt.Println(p)

	i := 42
	p = &i
	fmt.Println(p)
	fmt.Println(*p)

	*p = 41
	fmt.Println(i)
	fmt.Println(*p)

	*p = *p / 3
	fmt.Println(*p)
}
