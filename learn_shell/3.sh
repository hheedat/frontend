#!/bin/sh

name="Tom"
echo $name

name="Jack"
echo $name

echo "hello , my name is \"$name\""

age=23

echo $name $age

echo $name "length:" ${#name}

echo $name "1-3:" ${name:1:2}

str="how are you ? I'm fine."

echo `expr index "$str" w`
