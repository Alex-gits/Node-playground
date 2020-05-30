const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host)

// Hostname
console.log(myUrl.hostname) // doesn't include :8000 Port

// Pathname
console.log(myUrl.pathname) // /hello.html

// Serialized query
console.log(myUrl.search)

// Params object from query
console.log(myUrl.searchParams) // URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add params
myUrl.searchParams.append('new', '000')

// Loop through params
myUrl.searchParams.forEach(param => console.log(param))
myUrl.searchParams.forEach((value, param) => console.log(`${param}: ${value}`))