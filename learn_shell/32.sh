#!/bin/sh

ls > text.txt
ls -a >> text.txt

wc -l < text.txt
