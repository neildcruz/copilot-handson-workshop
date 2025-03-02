// Challenge 1: Refactor the calculator class
// Use Copilot Edits to improve this implementation
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
    multiply(a, b) { return a * b; }
    divide(a, b) { return a / b; }
}

// Challenge 2: Add error handling
// Use Copilot Edits to add proper error handling
async function fetchUserData(userId) {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const data = await response.json();
    return data;
}

// Test Calculator
const calc = new Calculator();
console.log('Calculator tests:');
try {
    console.log('2 + 3 =', calc.add(2, 3));
    console.log('5 - 2 =', calc.subtract(5, 2));
    console.log('4 * 3 =', calc.multiply(4, 3));
    console.log('10 / 2 =', calc.divide(10, 2));
    console.log('Division by zero test:');
    calc.divide(5, 0);
} catch (error) {
    console.log('Caught expected error:', error.message);
}

// Note: fetchUserData test would require a mock API, skipping actual API call
