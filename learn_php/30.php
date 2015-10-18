<?php

class Config
{
    private $values;

    // using ArrayObject rather than array
    public function __construct()
    {
        $this->values = new ArrayObject();
    }

    public function getValues()
    {
        return $this->values;
    }
}

$config = new Config();

$config->getValues()['test'] = 'test';
echo $config->getValues()['test'];
