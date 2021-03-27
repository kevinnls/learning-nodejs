function main (greeting, name) {
  greeting = greeting ?? "hello";
  name = name ?? "world";
  console.log(`${greeting}, ${name}!`);
}

module.exports = main;
