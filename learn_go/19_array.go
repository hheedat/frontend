package main

import "fmt"

func main() {
	//wrong way
	//var a [2]string
	//a={"hello","world"}
	//fmt.Println(a)

	var a [2]string
	a[0] = "hello"
	a[1] = "world"
	fmt.Println(a)

	b := [2]string{"hello", "世界"}
	fmt.Println(b)

	var c [2]string = [2]string{"hello", "world"}
	fmt.Println(c)
	//array can compare by "==" when type and length are the same
	fmt.Println(a == b, a == c)

	var d [2]string
	d = [2]string{"hello", "world"}
	fmt.Println(d)

	e := [...]int{1, 2, 3, 4}
	fmt.Println(e, len(e))

	f := [...]int{9: 666}
	fmt.Println(f)

}
