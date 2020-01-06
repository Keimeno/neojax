# neojax v2.1

## Description

neojax is a lightweight alternative to axios, with native typescript support.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2964d5b17a2c4bf8957bc205160157ae)](https://www.codacy.com/manual/Keimeno/neojax?utm_source=github.com&utm_medium=referral&utm_content=Keimeno/neojax&utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/fc83b2376da001e0df6b/maintainability)](https://codeclimate.com/github/Keimeno/neojax/maintainability)
[![neojax npm](https://img.shields.io/npm/l/neojax.svg)](https://npmjs.com/package/neojax)
[![neojax npm](https://img.shields.io/npm/v/neojax.svg)](https://npmjs.com/package/neojax)

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

The currently supported request types are:

-   GET
-   POST
-   PUT
-   DELETE

## Contribute

If you want to contribute to this project please make sure to follow our guidelines.

-   You need to use tabs for indentation.
-   Explain your changes in the description of your pull request.

Other than that, feel free to support neojax!
