<?php

class Node
{
    public $data;
    public $next;
}

class LinkedList
{
    private $_head;
    private $_tail;
    private $_length;

    function init()
    {
        $this->_head = $this->_tail = null;
        $this->_length = 0;
    }

    function makeNode($data)
    {
        $node = new Node();
        $node->data = $data;
        return $node;
    }

    function push($node)
    {
        if ($this->_length == 0) {
            $this->_head = $this->_tail = $node;
        } else {
            $this->_tail->next = $node;
            $this->_tail = $node;
        }
        ++$this->_length;
    }

    function pop()
    {
        if ($this->_length == 0) {
            return false;
        } elseif ($this->_length == 1) {
            $node = $this->makeNode($this->_tail->data);
            $this->_head = $this->_tail = null;
            --$this->_length;
            return $node;
        } elseif ($this->_length > 1) {
            $node = $this->makeNode($this->_tail->data);
            $secondTail = $this->_head;
            while ($secondTail->next != $this->_tail) {
                $secondTail = $secondTail->next;
            }
            $this->_tail = $secondTail;
            $this->_tail->next = null;
            --$this->_length;
            return $node;
        }
    }

    function unshift($node)
    {
        if ($this->_length == 0) {
            $this->_head = $this->_tail = $node;
        } else {
            $node->next = $this->_head;
            $this->_head = $node;
        }
        ++$this->_length;
    }

    function shift()
    {
        if ($this->_length == 0) {
            return false;
        } else {
            $node = $this->makeNode($this->_head->data);
            $this->_head = $this->_head->next;
            --$this->_length;
            return $node;
        }
    }

    function map($func)
    {
        $node = $this->_head;
        $index = 0;
        while ($node != null) {
            $func($node->data, $index++);
            $node = $node->next;
        }
    }

    function reverse()
    {
        if ($this->_length == 0) return;

        $node = $this->_head;
        $next = $node->next;

        while ($next != null) {
            $third = $next->next;
            $next->next = $node;
            $node = $next;
            $next = $third;
        }

        $this->_tail = $this->_head;
        $this->_tail->next = null;
        $this->_head = $node;
    }

    function reverseRecursion()
    {
        if ($this->_length == 0) return;

        $head = $this->_head;
        $tail = $this->_tail;

        function reverse($next, $node, $tail)
        {
            if ($node == $tail || $node == null) {
                return;
            } else {
                reverse($next->next, $next, $tail);
                $next->next = $node;
            }
        }

        reverse($head->next, $head, $tail);

        $this->_tail = $head;
        $this->_tail->next = null;
        $this->_head = $tail;
    }

    function getLength()
    {
        return $this->_length;
    }
}

//test code
$linkedList = new LinkedList();
for ($i = 0; $i < 5; ++$i) {
    $node = $linkedList->makeNode(($i + 1) . ' apple');
    $linkedList->push($node);
    $node = $linkedList->makeNode(($i + 1) . ' banana');
    $linkedList->unshift($node);
}

echo "linked list length is " . $linkedList->getLength() . " \n";
$linkedList->map(function ($val, $index) {
    echo "index is : $index \t value is : $val \n";
});

echo "shift , value is : " . $linkedList->shift()->data . "\n";
echo "pop , value is : " . $linkedList->pop()->data . "\n";
echo "shift , value is : " . $linkedList->shift()->data . "\n";
echo "pop , value is : " . $linkedList->pop()->data . "\n";

echo "linked list length is " . $linkedList->getLength() . " \n";
$linkedList->map(function ($val, $index) {
    echo "index is : $index \t value is : $val \n";
});

$linkedList->reverse();
echo "linked list length is " . $linkedList->getLength() . " after reverse\n";
$linkedList->map(function ($val, $index) {
    echo "index is : $index \t value is : $val \n";
});

$linkedList->reverseRecursion();
echo "linked list length is " . $linkedList->getLength() . " after reverse recursion\n";
$linkedList->map(function ($val, $index) {
    echo "index is : $index \t value is : $val \n";
});
