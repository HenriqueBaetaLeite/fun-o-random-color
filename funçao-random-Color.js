const red = () => Math.floor(Math.random() * 256);

const blue = () => Math.floor(Math.random() * 256);

const green = () => Math.floor(Math.random() * 256);

const colorRandom = `rgb( ${red()}, ${green()}, ${blue()} )`;

console.log(colorRandom);



const randomColor = () => `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`

console.log(randomColor());
