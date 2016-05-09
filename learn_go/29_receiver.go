package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X * v.X + v.Y * v.Y)
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func FuncScale(v *Vertex, f float64) {
	v.X *= f
	v.Y *= f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(10)
	fmt.Println(v.Abs())

	p := &v
	p.Scale(10)
	fmt.Println(p.Abs())

	FuncScale(p, 10)
	fmt.Println(v.Abs())

	//cannot use v (type Vertex) as type *Vertex in argument to FuncScale
	//FuncScale(v, 10)
	//fmt.Println(v.Abs())
}
