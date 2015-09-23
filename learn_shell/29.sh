#!/bin/sh

sayHello(){
    echo "hello world!"
}

function sayApple(){
    echo "hello apple"
}

sayHello
sayApple

sayApple2(){
    sayApple
}

sayApple2

sayApple3(){
    sayApple2
}

unset -f sayApple3

sayApple3
