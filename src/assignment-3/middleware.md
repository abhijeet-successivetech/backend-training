
# Middleware in Express.js

## Introduction

In Express.js, middleware refers to functions that have access to the request object (req), the response object (res), and the next  function in the application’s request-response cycle. Middleware functions can:

- Execute any code
- Modify the request and response objects
- End the request-response cycle
- Call the next middleware function in the stack

---

## Why Middleware is Important

Middleware helps in:

- Code reusability and cleaner routes
- Handling cross-cutting concerns like authentication, logging, error handling
- Structuring applications with separation of concerns

---

## Types of Middleware

1. **Application-Level Middleware**

   Applied to an instance of the Express app using app.use() or specific HTTP methods like  app.get().

   ```js
   const express = require('express');
   const app = express();

   app.use((req, res, next) => {
     console.log(`${req.method} ${req.url}`);
     next(); // pass control to the next middleware
   });
   ```

---

2. **Router-Level Middleware**

   Works the same way as application-level middleware but is bound to an instance of express.Router().

   ```js
   const router = express.Router();

   router.use((req, res, next) => {
     console.log('Router-level middleware');
     next();
   });
   ```

---

3. **Built-in Middleware**

   Express has built-in middleware functions, such as:

   - express.json() to parse incoming JSON payloads
   - express.urlencoded() to parse URL-encoded data

   ```js
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   ```

---

4. **Third-Party Middleware**

   Install via npm to extend Express functionality. For example, cors and morgan.

   ```js
   const cors = require('cors');
   const morgan = require('morgan');

   app.use(cors());
   app.use(morgan('dev'));
   ```

---

5. **Error-Handling Middleware**

   Middleware with four parameters: (err, req, res, next). It handles errors in the app.

   ```js
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('Something broke!');
   });
   ```

---

## Middleware Usage Example

```js
const express = require('express');
const app = express();

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Server Error');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## Summary

- Middleware functions are essential building blocks in Express.js.
- They help handle requests systematically, add features, handle errors, and keep code modular.
- Use built-in, third-party, and custom middleware to build powerful and scalable applications.


