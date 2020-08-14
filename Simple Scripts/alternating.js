String.prototype.toAlternateCase = function () {
  return this.split('').map(changeCase).join();
};

function changeCase(char) {
  return char.toLowerCase() === char ?
    char.toLowerCase() :
    char.toUpperCase();
}