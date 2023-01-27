try {
    hello();
} catch (error) {
    console.log(error);
}

// catch

try {
    anotherFn();
} catch {
    console.log("Esto es un error");
}