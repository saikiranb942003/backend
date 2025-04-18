/*
// module

-> module is a reusable block of code (functions, objects, variables etc)
-> it is stored in a seperate file
-> node.js uses the commonJs module sysstem and it helps to split our code into smaller files for better organisation and reuse
-> 


// require()

-> require() is used to import code from another file (build-in/ 3rd party module)
-> it returns whatever is exported from that file

// eg 
const item = require('./someModule');

refer data.js and index.js for exporting and importing files

// types of modules in node.js

1.coe modules : built into node.js (no install needed)
eg : fs, http, path, url

eg : const fs = require('fs');

2. Local modules : our own files
eg> like require('./data.js')

3. third party modules : insalled via npm
-> eg : express, axios
-> npm install express
const express = require('express');




*/