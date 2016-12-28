freeport [![Build Status](https://secure.travis-ci.org/daaku/nodejs-freeport.png)](http://travis-ci.org/daaku/nodejs-freeport)
========

Find a free port.

```javascript
freeport()
.then(port => {
  console.log(port)
})
.catch(err => {
  console.error(err)
})

```
