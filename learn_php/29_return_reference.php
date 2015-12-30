<?php

class Config
{
    private $values = [];

    // return a REFERENCE to the actual $values array
    public function &getValues()
    {
        return $this->values;
    }
}

$config = new Config();

$config->getValues()['test'] = 'test';
echo $config->getValues()['test'];

