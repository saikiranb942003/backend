/*
-> the package.json file is a core part of any node.js project 
-> it acts as the blueprint or metadata file for our project and tells others how to run, build and manage it

package.json :

-> its a json file
-> describes our project name, version etc
-> list all the dependencies
-> contains scripts to run tasks (like npm start, npm test)
-> stores configuration info of packages

// eg : sample package.json

{
  "name": "samplejson",
  "version": "1.0.0",
  "description": "this is a demo one",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://gitlab.com/grepruby/freshers-training/sb-team/training-2025/saikiran-bodinath/backend.git"
  },
  "author": "Sai Kiran",
  "license": "ISC",
  "bugs": {
    "url": "https://gitlab.com/grepruby/freshers-training/sb-team/training-2025/saikiran-bodinath/backend/issues"
  },
  "homepage": "https://gitlab.com/grepruby/freshers-training/sb-team/training-2025/saikiran-bodinath/backend#readme"
}


// uses of it :

-> install dependecies
// eg : npm install express

-> it adds in dependencies section like:
"dependencies": {
  "express": "^1.5.0"
}

-> run scripts 
   -> npm start
   -> npm run dev
-> we can share our project and someone else also can download our project and they just need to
   npm install
-> it reads package.json and installs required depencies
-> it provides the project information and versios
   -> name, version - for tracking releases
   -> author, license - for open source information

 
 






*/