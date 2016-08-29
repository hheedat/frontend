<?php


function start()
{
    echo "start\n";
    $arr = [1, 2, 3, 4, 5, 'apple', 6];
    runP($arr);
    echo "end\n";
}

function runP($arr)
{
    foreach ($arr as $i) {
        $pid = pcntl_fork();
        //父进程和子进程都会执行下面代码
        if ($pid == -1) {
            //错误处理：创建子进程失败时返回-1.
            die('could not fork');
        } else if ($pid) {
            //父进程会得到子进程号，所以这里是父进程执行的逻辑
            //echo "fff {$pid}\n";
            pcntl_wait($status, WNOHANG); //等待子进程中断，防止子进程成为僵尸进程。
        } else {
            //子进程得到的$pid为0, 所以这里是子进程执行的逻辑。
            $rand = rand(1, 2);
            sleep($rand);
            echo "No.$i\n";
            exit;
        }
    }
}

function runByChild($func, $args)
{
    $pid = pcntl_fork();
    if ($pid == -1) {
        die('could not fork');
    } elseif ($pid) {
        pcntl_wait($status, WNOHANG);
    } else {
        if (function_exists($func)) {
            call_user_func_array($func, $args);
        } else {
            exit(-1);
        }
        exit;
    }
}

function start2()
{
    echo "start\n";
    $pid = getmypid();
    $arr = [1, 2, 3, 4, 5, 'apple', 6];
    foreach ($arr as $item) {
        runByChild('myEcho', array($item));
    }
    echo "$pid\n";
    echo "end\n";
}

function myEcho($str)
{
    $pid = getmypid();
    $rand = rand(10, 30);
    sleep($rand);
    echo "pid {$pid} say hello {$str}\n";
}

start2();