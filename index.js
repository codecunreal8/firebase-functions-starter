// Firebase Functions Starter - Basic HTTP function
// Deploy with: firebase deploy --only functions

const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase Functions Starter!");

  // Example with query params
  const name = request.query.name || 'World';
  response.send(`Hello, ${name}!`);
});

// Export for deployment
exports.api = functions.https.onRequest((request, response) => {
  response.json({ message: 'Firebase Functions API ready!' });
});