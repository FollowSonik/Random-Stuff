function r(str, x) {
  let resp = "";

  for (let i = 0; i < x; i++) {
    resp += `${str} `;
  }
  // bot.action(chan, resp); For tmi.js
  return resp;
}

let width = 15;
let size = 1;
let res = [];

for (let i = 0; i < (width * 2) + 1; i++) {
  res.push(r("* ", size));

  if (i >= width) size--
  else size++;
}

const a = res.join("\n");

// If twitch, log doesn't need.
console.log(a);