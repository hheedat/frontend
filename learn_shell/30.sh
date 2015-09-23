#!/bin/sh

numSum(){
    echo -e "input a num:\c"
    read num1
    echo -e "input another num:\c"
    read num2

    re=$(($num1+$num2))
    echo "the sum of two number is : $re"
    return $re
}

numSum

result=$?

printf "the sum of two number is : %d\n" $result
