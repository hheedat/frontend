#!/bin/sh

month=09
echo "today is $month - 22"
echo "today is ${month}-22"

echo "hello\n"
echo "world"

echo -e "hello\n"
echo "world"

echo "hello\c"
echo "world"

echo -e "hello\c"
echo "world"

echo 'hello \"world\"'

echo `date`

echo `ls` > apple.txt
