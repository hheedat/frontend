package main

import "fmt"

type Vertex struct {
	X, Y int
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["aa"] = Vertex{1, 1}
	m["bb"] = Vertex{2, 2}
	m["cc"] = Vertex{3, 3}
	fmt.Println(m)

	v := map[string]Vertex{
		"aa":Vertex{1, 1},
		"bb":Vertex{2, 2},
	}
	fmt.Println(v)

	v1 := map[string]Vertex{
		"aa":{1, 1},
		"bb":{2, 2},
	}
	fmt.Println(v1)

	m["aa"] = Vertex{6, 6}
	delete(m, "bb")
	fmt.Println(m)

	elem, ok := m["aa"]
	fmt.Println(elem, ok)
	elem, ok = m["bb"]
	fmt.Println(elem, ok)
}
