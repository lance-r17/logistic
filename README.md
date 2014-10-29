# Logistic

A system built on Kraken.js. Instead of directly using the project structure of Kraken.js, some small change is applied so as to make the project more modulized and easier to manage.

## Prerequisites
* This example requires that [MongoDB](http://www.mongodb.org/downloads) is installed and running on it's default port.
* You will -- of course -- need [Node](http://nodejs.org) (Version >= 0.10.22 preferred)

## Installation

```shell
$ git clone git@github.com:lance-r17/logistic.git
$ cd logistic
$ npm install
$ npm start
```

## Illustrates

* Use of mongodb for storing product information
* Localized content (en-US or es-ES)
* Usage of bundalo for localized messages with model data

### mongodb

Pre-requisite: An instance of [MongoDB](http://www.mongodb.org/downloads) installed and running on its default port.

config changes (config.json):
```javascript
"databaseConfig": {
	"host": "localhost",
	"database": "shocart"
},
```

`app/lib/database.js`: configure and connect to mongodb instance
`app/lib/spec.js`: call database.js config method in the kraken-js onconfig event

## To Do

* Enhance edit / exhibt function of product
* Enhance the cart / pay function
* Build an inventory management function
* Build a workflow of order management function
* Build a customer service / support management function