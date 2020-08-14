function pog(str) {
  console.log(str.split('').map(changeCase).join(''));
};

function changeCase(char) {
  return char.toLowerCase() === char ?
    char.toUpperCase() :
    char.toLowerCase();
}

pog('PogChamp');