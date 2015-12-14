#!/usr/bin/env php
<?php

// how to use
function usage() {
	echo "Have to add filename as first command line parameter\n";
	echo "Usage: ./convert.php inputfile.txt > outputfile.txt\n";
	die();
}

// no args
if(!isset($argv)) usage();

// not enuff args
if(count($argv) < 2) usage();

// get filename
$filename = $argv[1];

// read
$input = file_get_contents($filename);

// map
$in  = array('¹', 'æ', 'ê', '³', 'œ', '¿', 'ñ', 'œ', 'Ÿ');
$out = array('ą', 'ć', 'ę', 'ł', 'ś', 'ż', 'ń', 'ś', 'ź');

// replace
$output = str_replace($in, $out, $input);

// output > file.txt
echo $output;

?>

