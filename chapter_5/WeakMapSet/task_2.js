let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakMap();

readMessages.set(messages[0], Date.now());
readMessages.set(messages[1], Date.now());
readMessages.set(messages[2], Date.now());