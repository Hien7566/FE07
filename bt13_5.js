let raw = "  ---JavaScript---  ";
let version = "  ES6  ";

let clean = raw.trim();

let replacedDashes = clean.replace(/-/g, "!");

let lowered = replacedDashes.toLowerCase();

let firstSix = lowered.slice(0, 6);

let lastFour = lowered.slice(-4);

let final = firstSix + "***" + lastFour;

let hasScript = final.includes("script");

let exclamationPos = replacedDashes.indexOf("!");

let startsWithJ = final.startsWith("j");

let versionLength3 = version.trim().length === 3;

console.log({
  clean,
  replacedDashes,
  lowered,
  firstSix,
  lastFour,
  final,
  hasScript,
  exclamationPos,
  startsWithJ,
  versionLength3,
});
