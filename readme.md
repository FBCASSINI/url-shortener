
## Synopsis

This is a url-shortener to shorten url links smaller.

## Code Example

The application is incomplete at the moment but you can test it out on postman

## Motivation

This was a School project at fullsail university

## Installation
First you will need to install homebrew by running this
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)

```
Second we will need to install node through brew by running code
```
brew install node

```

Third you will need to install node.js by entering this code (without quotes)
```
// nvm install v7.6.0

```
Then in your working directory install the node package manager(without quotes)
```
// npm init

```
Then answer the questions given and click yes to build the package. Then install express by entering this code (without quotes)

```
npm install express --save

```

Then you will need to install body parser by entering this code (without quotes)
```
npm install body-parser --save

```
Then install mysql by running this code
```
brew install mysql

```
Then
```
npm install mysql --save

```
Also Install sequelize by running this code
```

npm install sequelize --save

```
Then install dotenv by running this code
```
npm install dotenv --save

```
Then download the zip file or clone repo from github and adding to your working environment.

## Database

Make a .env file and add these with your credentials...
```
// DB_NAME=  
// DB_USER=  
// DB_PASS=  
// DB_HOST=  
// DB_SCHEMA=mysql  
// DB_PORT=  
```

## Start server

To run then server you will need to run the code
```
node src/server.js
```

If you would like to have the server run on autopilot you can install nodemon by entering this code
```
npm install -g nodemon

```

This will install nodemon globally so you can use on the command line.

You will then need to start mysql so run this code.

```
brew services start mysql

```


## Screenshot with Postmon

![Postmon screenshot](http://i.imgur.com/RAJFESe.png)


## UPDTAE V1.3.0

To use the debug tool part of this app you will need to install supertest, mocha, chai, chalk

```
//mocha

npm install mocha --save-dev

// supertest

npm install supertest --save-dev

//chai

npm install chai --save-dev

//chalk

npm install chalk --save
```

To turn on debug mode run this

```
debug=true mocha nodemon src/server.js

```

The debug logs are located in logs/log.log

## Update 1.4.0

To use ESLint Please install eslint to atom by running this code.
```
apm install linter-eslint

npm i --save-dev eslint

npm i -g eslint


```

and run this code and to choose airbnb format
```
eslint --init

```
