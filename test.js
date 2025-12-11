// simple test runner that always passes if Node can require lodash
try {
  const _ = require('lodash');
  console.log('Test passed — lodash found, size:', Object.keys(_).length);
  process.exit(0);
} catch (err) {
  console.error('Test failed — cannot require lodash', err);
  process.exit(1);
}
