#!/bin/sh

list=(apple banana pear orange)
list[4]="watermelon"

echo ${list[0]}
echo ${list[2]}
echo ${list[4]}

echo ${list[*]}
echo ${list[@]}

echo ${#list[*]}
echo ${#list[@]}
echo ${#list[4]}
