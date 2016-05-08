package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2})

	v := Vertex{1, 2}
	v.X = 2
	fmt.Println(v)

	p := &v
	(*p).X = 3
	p.Y = 3
	fmt.Println(v)

	//v1 := Vertex{1, } wrong way
	v1 := Vertex{1, 2}
	v2 := Vertex{Y: 2}
	v3 := Vertex{}
	p1 := &v1

	fmt.Println(v1, v2, v3, p1)
}
