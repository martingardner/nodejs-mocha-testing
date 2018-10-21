# nodejs-mocha-testing

# mocha notes
* package.json  "mocha **/*.test.js"
	* the ** looks in every file, the /* is a wildstar for any file that ends with .test.js
* pass in done (and call done() ) if it's an async call for testing.
* can use describe('', ()=> { }); as wrappers to group several tests together.


# mjackson/expect notes
* toBe works for primitives, string, number, etc.. for comparing objects you have to use .toEqual()
* has spies to test multifunction pathes.

# class parts
* npm install
* uses mocha for testing
* added two npm commands, note one has \" in it for better os support as some cli may not like the single quote in the command
* note custom scripts need "npm run {command}"
* uses mjackson expect assertion library. 
* uses supertest for express testing
* uses rewire for spy testing in order to swap out variables and functions
