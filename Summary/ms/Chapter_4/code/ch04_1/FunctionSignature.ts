let printMe: (string, number) => void = function (
    name: string,
    age: number
): void {
    console.log(`name: ${name}, age: ${age}`);
};

printMe("Jack", 32); // name: Jack, age: 32
