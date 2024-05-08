const expression = document.querySelector("#expression");

let expressions = [
    "🤷‍♀️", "🙆‍♀️", "🙅‍♂️", "💁‍♂️", "💆‍♂️", "🤦‍♂️", "🙇‍♂️", "🧏‍♂️", "🙎‍♂️", "🙍‍♂️"
]

expression.addEventListener("mouseover", () => {
    expression.innerHTML = expressions[Math.floor(Math.random() * expressions.length)];
});
