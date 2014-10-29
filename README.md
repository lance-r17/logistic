# Logistic

A System Built on Kraken.js

## Prerequisites
* This example requires that [MongoDB](http://www.mongodb.org/downloads) is installed and running on it's default port.
* You will -- of course -- need [Node](http://nodejs.org) (Version >= 0.10.22 preferred)

## Installation
This example is a part of the kraken-examples repository. Clone, install and run.

```shell
$ git clone git@github.com:lance-r17/logistic.git
$ cd logistic
$ npm install
$ npm start
```

## Illustrates

* Use of mongodb for storing product information
* Integration with the PayPal SDK
* Localized content (en-US or es-ES)
* Usage of bundalo for localized messages with model data

### app/lib/spec.js

`app/lib/spec.js` holds the `onconfig` event handler. You can see in the main `index.js` file, `app/lib/spec`'s onconfig handler is passed in with the line: 

```javascript
app.use(kraken(options))
```

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

### PayPal SDK

config changes (config.json):

```javascript
"paypalConfig": {
	"host": "api.sandbox.paypal.com",
	"port": "",
	"client_id": "EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM",
	"client_secret": "EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM"
},
```

Payment initiated in the `/pay` route which is defined in app/routes/pay/index.js

### Localized content

config changes (config.json):
```javascript
"i18n": {
	"contentPath": "path:./app/locales",
	"fallback": "en-US"
},
```

config changes (config.json) under middleware:
```javascript
"locale": {
	"priority": 95,
	"enabled": true,
	"module": {
		"name": "path:./app/lib/locale"
	}
}
```

locale is chosen via the `/setLanguage/:locale` route, which is initiated by hyperlinked flag images in the UI

locale is set into the response via the locale middleware defined in `app/lib/locale.js`

### Localized model data with bundalo

config changes (config.json):
```javascript
"bundle engine": "dust",
```

bundle is configured as middleware directly in routes where it is required, as in `app/routes/cart/index.js` and `app/routes/pay/index.js`

bundle middleware defined in `app/lib/getBundle.js`. Note that the 'bundle' object is attached to the response object for use in the downstream response handlers

Server included localized content can be seen after payment, and also on the cart page.
