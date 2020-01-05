# neocajax v2

## Description

neocajax is an extremely lightweight alternative to axios, with native typescript support.

## Setup

### npm

```bash
npm install neocajax --save
```

### cdn

```html
<script
	src="https://cdn.jsdelivr.net/npm/neocajax@latest/dist/neocajax.min.js"
	type="text/javascript"
></script>
```

## Documentation

To import in the module do:

```javascript
import NeoCajax from 'neocajax';
```

With typescript you can as well import the different types

```typescript
import NeoCajax, { NeoCajaxResponse, NeoCajaxError } from 'neocajax';
```

This will give you a new NeoCajax instance, without any preset options.

If you want to predefine the baseUrl or headers you can create a new instance from this object, with the create() method.

```javascript
neocajax = NeoCajax.create({
	baseUrl: 'https://example.org/',
	headers: {
		Authorization: 'Bearer mytoken'
	}
});
```

To send out a basic get request, one method to do it, is:

```javascript
NeoCajax.get(url, options)
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
const response = await NeoCajax.get(url, options);
```

This works similarly in typescript:

```typescript
NeoCajax.get(url, options)
	.then((response: NeoCajaxResponse) => {
		console.log(response.data);
	})
	.catch((error: NeoCajaxError) => {
		console.log(error.message);
		console.log(error.message.data);
	});
```

And with async/await it looks like the following:

```typescript
const response: NeoCajaxResponse = await NeoCajax.get(url, options);
```

A post request looks similar, just with the difference, that you can pass data with it.

```javascript
const response = await NeoCajax.post(url, data, options);
```

The supported request types currently are:

-   GET
-   POST
-   PUT
-   DELETE

## Contribute

If you want to contribute to this project please make sure to read our guidelines.

-   You need to use tabs as indentation.
-   Explain your changes in the description of your pull request.

Other than that, feel free to support neocajax!
