package main

import "fmt"

func main() {
	b := equal(map[string]int{"A": 0}, map[string]int{"B": 42})
	fmt.Println(b)
}

func equal(x, y map[string]int) bool {
	if len(x) != len(y) {
		return false
	}
	for k, xv := range x {
		if yv, ok := y[k]; !ok || yv != xv {
			return false
		}
		//a wrong way :
		//fmt.Println(xv, y[k])
		//if xv != y[k] {
		//	return false
		//}
	}
	return true
}
