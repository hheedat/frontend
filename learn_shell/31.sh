#!/bin/sh

#!/bin/bash
testFunParam(){
    echo "The value of the first parameter is $1 !"
    echo "The value of the second parameter is $2 !"
    echo "The value of the tenth parameter is $10 !"
    echo "The value of the tenth parameter is ${10} !"
    echo "The value of the eleventh parameter is ${11} !"
    echo "The amount of the parameters is $# !"  # 参数个数
    echo "The string of the parameters is $* !"  # 所有参数
}

testFunParam 1a 2b 3c 4d 5e 6f 7g 8h 9i 10j 11k
