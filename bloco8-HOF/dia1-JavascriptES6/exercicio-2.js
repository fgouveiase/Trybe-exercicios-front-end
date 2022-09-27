const verificacao = (myNumber, number) => myNumber === number;
const resultado = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 6 + 1);
  return callback(myNumber, number) ? "Lucky day, you won!" : "Try Again!";
};
console.log(resultado(20, verificacao));
