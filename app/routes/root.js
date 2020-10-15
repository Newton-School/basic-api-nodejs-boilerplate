/*
 * POST /calculate to calculate.
 */
function get(req, res) {
  // your code goes here
  return res.send(`
  endpoint -> GET /route should return "Hello World" (without quotes) <br />
  endpoint -> POST /route empty <br />
  endpoint -> DELETE /route empty <br />
  endpoint -> PUT /route empty <br />
  See server.js file for further details.
  `);
}

//export all the functions
module.exports = { get };
