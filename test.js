const { sum } = require('./index');

try {
  if (sum(2, 3) === 5) {
    console.log("Test passed: sum() works correctly.");
    process.exit(0);
  } else {
    console.error("Test failed: sum() returned wrong result.");
    process.exit(1);
  }
} catch (error) {
  console.error("Test failed with error:", error);
  process.exit(1);
}
