#!/bin/bash

#获取日志文件的最后更新时间戳
timeLogFile=`stat -c %Y test_sleep.php`
#获取当前时间戳
timeNow=`date +%s`
#时间戳的差值，单位秒
timeDiff=180
#如果超过时间戳的差值log文件没有更新，则可能程序已经不下载数据了，kill掉，会有另一个脚本定时启动
if [ $[ $timeNow - $timeLogFile ] -gt $timeDiff ];
then
    #找到Java客户端，并且kill掉
    jarPid=`ps aux | grep sleep | grep php | awk '{print $2}'`
    if [ -n "$jarPid" ]; then
        `kill -9 $jarPid`
        echo "kill pid $jarPid at " `date`
    fi
else
    echo "time less than $timeDiff"
fi