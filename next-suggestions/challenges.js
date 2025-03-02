// Challenge 1: Array Utility Functions
// Let Copilot suggest implementations for these functions
const arrayUtils = {
    // Start typing: unique: (arr) =>
    // Start typing: flatten: (arr) =>
    // Start typing: chunk: (arr, size) =>
}

// Challenge 2: Data Validator
// Let Copilot suggest validations for different data types
const validator = {
    // Start typing: isEmail: (email) =>
    // Start typing: isPhone: (phone) =>
    // Start typing: isPassword: (password) =>
}

// Test array utilities
const testArray = [1, 2, 2, 3, 3, 4, [5, 6, [7, 8]]];
console.log('Unique:', arrayUtils.unique([1, 2, 2, 3, 3, 4]));
console.log('Flatten:', arrayUtils.flatten(testArray));
console.log('Chunk:', arrayUtils.chunk([1, 2, 3, 4, 5], 2));

// Test validator
console.log('Email validation:', {
    valid: validator.isEmail('test@example.com'),
    invalid: validator.isEmail('invalid-email')
});
console.log('Phone validation:', {
    valid: validator.isPhone('+1-234-567-8900'),
    invalid: validator.isPhone('123')
});
console.log('Password validation:', {
    valid: validator.isPassword('Test123!@'),
    invalid: validator.isPassword('weak')
});
