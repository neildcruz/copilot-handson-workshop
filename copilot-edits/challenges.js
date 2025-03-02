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
