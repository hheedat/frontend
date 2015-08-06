<?php

class Num
{
    private $num;

    function __construct($num = 0)
    {
        $this->num = $num;
    }

    function __set($property_name, $num)
    {
        $this->$property_name = $num;
    }

    function __get($property_name)
    {
        if (isset($property_name)) {
            return $this->$property_name;
        } else {
            return NULL;
        }
    }

    function __toString()
    {
        return (string)$this->num;
    }

    public function add($num)
    {
        $this->num += $num;
    }

    public function minus($num)
    {
        $this->num -= $num;
    }

    public function mul($num)
    {
        $this->num *= $num;
    }

    public function divide($num)
    {
        $this->num /= $num;
    }

}