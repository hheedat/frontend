#!/bin/sh

function mysql86()
{
    mysql -h localhost -u root -p
}

if [ $1 = "mysql_dev" ]
then 
    mysql86
fi

