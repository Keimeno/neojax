<p align="center">
	<img src="https://i.imgur.com/SjvwtGV.png" style="max-width: 500px;"/><br />
	<a href="https://www.codacy.com/manual/Keimeno/neojax?utm_source=github.com&utm_medium=referral&utm_content=Keimeno/neojax&utm_campaign=Badge_Grade">
		<img src="https://api.codacy.com/project/badge/Grade/2964d5b17a2c4bf8957bc205160157ae" alt="CodacyBadge" />
	</a>
	<a href="https://api.codeclimate.com/v1/badges/fc83b2376da001e0df6b/maintainability">
		<img src="https://api.codeclimate.com/v1/badges/fc83b2376da001e0df6b/maintainability" alt="Maintainability" />
	</a>
	<a href="https://travis-ci.com/Keimeno/neojax">
		<img src="https://travis-ci.com/Keimeno/neojax.svg?branch=develop" alt="Build status" />
	</a>
	<a href="https://coveralls.io/github/Keimeno/neojax?branch=develop">
		<img src="https://coveralls.io/repos/github/Keimeno/neojax/badge.svg?branch=develop" alt="Coverage status" />
	</a>
	<a href="https://npmjs.com/package/neojax">
		<img src="https://img.shields.io/npm/l/neojax.svg" alt="neojax npm" />
	</a>
	<a href="https://npmjs.com/package/neojax">
		<img src="https://img.shields.io/npm/v/neojax.svg" alt="neojax npm" />
	</a>
</p>

## Description

neojax is a lightweight alternative to axios, with native typescript support.

## Setup

### npm

```bash
npm install neojax --save
```

### cdn

```html
<script
	src="https://cdn.jsdelivr.net/npm/neojax@latest"
	type="text/javascript"
></script>
```

## Documentation

To import in the module do:

```javascript
import Neojax from 'neojax';
```

With typescript you can as well import the different types

```typescript
import Neojax, { NeojaxResponse, NeojaxError } from 'neojax';
```

This will give you a new Neojax instance, without any preset options.

If you want to predefine the baseUrl or headers you can create a new instance from this object, with the create() method.

```javascript
const neojax = Neojax.create({
	baseUrl: 'https://example.org/',
	headers: {
		Authorization: 'Bearer mytoken'
	}
});
```

To send out a basic get request:

```javascript
Neojax.get(url, options)
	.then(response => {
		console.log(response.data);
	})
	.catch(error => {
		console.log(error.message);
		console.log(error.response.data);
	});
```

You can also use async/await, because it returns a Promise.

```javascript
const response = await Neojax.get(url, options);
```

This works similarly in typescript:

```typescript
Neojax.get(url, options)
	.then((response: NeojaxResponse) => {
		console.log(response.data);
	})
	.catch((error: NeojaxError) => {
		console.log(error.message);
		console.log(error.message.data);
	});
```

And with async/await it looks like the following:

```typescript
const response: NeojaxResponse = await Neojax.get(url, options);
```

A post request looks similar, with the main difference, that you have an optional data parameter.

```javascript
const response = await Neojax.post(url, data, options);
```

It is now possible to change global defaults. (As well as those defined in your instance).

```typescript
// global
Neojax.options.headers['Content-Type'] = 'application/json; charset=utf-8';

// for instances
neojax.options.baseUrl = 'https://api.example.org/';
```

The currently supported request types are:

-   GET
-   POST
-   PUT
-   DELETE

## Contribute

If you want to contribute to this project please make sure to follow our guidelines.

-   You need to use tabs for indentation.
-   Explain your changes in the description of your pull request.
-   You may build the package locally, but you don't have to commit it, as this is done automatically.

Other than that, feel free to support neojax!
