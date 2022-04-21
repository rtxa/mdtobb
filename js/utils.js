const Utils = {};

Utils.removeLeadingWhitespace= function (text) {
  return text.replace(/^\s+/gm, "");
};

Utils.removeTrailingWhitespace = function (text) {
  return text.replace(/\s+$/gm, "");
};

Utils.replaceNewLine = function (text, replaceValue) {
  return text.replace(/\n/gm, replaceValue);
}

Utils.replaceBreakCharacter = function (text, replaceValue) {
  return text.replace(/\x0B/gm, "\n")
}