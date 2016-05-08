package main

import (
	"fmt"
)

func main() {
	arr := [6]int{1, 2, 3, 4, 5, 6}
	var s []int = arr[1:4]
	fmt.Println(s)

	//A slice does not store any data, it just describes a section of an underlying array.
	//Changing the elements of a slice modifies the corresponding elements of its underlying array.
	//Other slices that share the same underlying array will see those changes.
	names := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}
	fmt.Println(names)

	a := names[0:2]
	b := names[1:3]
	fmt.Println(a, b)

	b[0] = "XXX"
	fmt.Println(a, b)
	fmt.Println(names)

	q := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(q)
	q1 := q[:]
	fmt.Printf("len=%d cap=%d %v\n", len(q1), cap(q1), q1)
	q2 := q[0:]
	fmt.Printf("len=%d cap=%d %v\n", len(q2), cap(q2), q2)
	q3 := q[1:]
	fmt.Printf("len=%d cap=%d %v\n", len(q3), cap(q3), q3)
	q4 := q[1:3]
	fmt.Printf("len=%d cap=%d %v\n", len(q4), cap(q4), q4)
	q5 := q[:5]
	fmt.Printf("len=%d cap=%d %v\n", len(q5), cap(q5), q5)

	r := []bool{true, false, true, true, false, true}
	fmt.Println(r)

	st := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	}
	fmt.Println(st)

	var f []int
	fmt.Println(f, len(f), cap(f))
	if f == nil {
		fmt.Println("nil!")
	}

	//Slices can be created with the built-in make function; this is how you create dynamically-sized arrays.
	g := make([]int, 5)
	fmt.Printf("len=%d cap=%d %v\n", len(g), cap(g), g)
	//To specify a capacity, pass a third argument to make:
	h := make([]int, 0, 5) // len(b)=0, cap(b)=5
	fmt.Printf("len=%d cap=%d %v\n", len(h), cap(h), h)

}
