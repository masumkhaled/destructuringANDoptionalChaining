// declare a variable with an object property using destructuring
// for object property name and variable name should be same

const myObject = {x : 2, y : 50, a : 25, b : 68};
const {x, b} = myObject;
console.log(x, b);

// destucturing array 
// variable name can be anything

const [c, d] = [45, 37, 91, 86];
console.log(c, d);

// chaining

const company = {
    name : "GP",
    CEO : {id: 1, name: "ajmol", food: "fuchka"},
    web : {
        word: "Web Development",
        employee: 22,
        framework: "React",
        tech: {
            first: "HTML",
            second: "CSS",
            third: "JS"
        }
    }
}

console.log(company.web.framework);

// optional chaining 
// Jodi company er vetor backend pao taile dekhao
console.log(company?.backend?.web.tech.third);