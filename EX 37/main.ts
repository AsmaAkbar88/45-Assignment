// Exercise 37

function makeShirt(size: string = "large",  text: string = "I love typescript"): void{
        console.log(`you have order a ${size}, shirt that says ${text}`)
    }
    makeShirt();
    makeShirt('medium');
    // different size message
    makeShirt("small", "i need a big shirt to wear");