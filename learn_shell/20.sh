#!/bin/sh

if test $[2*3] -eq $[1+5]; then echo 'The two numbers are equal!'; fi;

num1=$[2*3]
num2=$[1+5]
if test $[num1] -eq $[num2]
then
    echo 'The two numbers are equal!'
else
    echo 'The two numbers are not equal!'
fi
