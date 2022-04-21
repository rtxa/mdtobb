/* globals Utils */

const BREAK_CHAR = "\x0B";

let Converter = { style: {}, renderer: {} };

Converter.renderer.heading = function (text, level) {
  if (level > 4) {
    level = 4; // i didn't define more than 4 headers levels
  }

  const header = Converter.style["h" + level.toString()];

  if (!header.includes("$1")) {
    return text + "\n\n";
  }

  let output = header.replace("$1", text) + "\n";

  if (Converter.style.addNewLineHeader) {
    output += "\n";
  }

  return output;
};

Converter.renderer.paragraph = function (text) {
  let output = text;

  // Do replacements to fix paragraphs with 2 spaces
  output = Utils.removeTrailingWhitespace(output);
  output = Utils.removeLeadingWhitespace(output);
  output = Utils.replaceNewLine(output, " ");
  output = Utils.replaceBreakCharacter(output, "\n");

  output += "\n";

  if (Converter.style.addNewLineParagraph) {
    output += "\n";
  }

  return output;
};

Converter.renderer.code = function (text, lang, escaped) {
  // Default tag if no lang is specified
  let codeTag = "[code]$1[/code]\n";

  if (lang === "html" && Converter.style.supportsHtmlTag) {
    codeTag = Converter.style.htmlTag;
  // Any lang will use php tags
  } else if (lang.length > 0 && Converter.style.supportsPhpTag) {
    codeTag = Converter.style.phpTag;
  }

  return codeTag.replace("$1", text);
};

Converter.renderer.blockquote = function (text) {
  let fmt = "[quote]$1[/quote]\n";
  return fmt.replace("$1", text);
};

Converter.renderer.hr = function () {
  return Converter.style.hr + "\n";
};

Converter.renderer.list = function (body, ordered, start) {
  let beginTag = "[list]";
  let closeTag = "[/list]";

  if (ordered) {
    beginTag = Converter.style.orderedListStart;
    closeTag = Converter.style.orderedListEnd;
  }

  // TODO add option to add extra line to fix formatting
  // in some websites that don't format properly
  let fmt = beginTag + body + closeTag + "\n";

  if (Converter.style.addNewLineEndOfList) {
    fmt += "\n";
  }

  return fmt;
};

Converter.renderer.listitem = function (text) {
  text = text.replace(/\n/gm, " ");  // Replace any new line with space
  text = text.replace(/\x0B/gm, "\n"); // Replace any break character \x0B
  return "[*]" + text + "\n";
};

Converter.renderer.checkbox = function (checked) {
  if (checked) {
    return "☑ ";
  } else {
    return "☐ ";
  }
};

Converter.renderer.strong = function (text) {
  return "[b]" + text + "[/b]";
};

Converter.renderer.em = function (text) {
  return "[i]" + text + "[/i]";
};

Converter.renderer.codespan = function (text) {
  return Converter.style.inlineCode.replace("$1", text);
};

Converter.renderer.br = function () {
  return BREAK_CHAR;
};

Converter.renderer.del = function (text) {
  let fmt = Converter.style.strike + "\n";

  return fmt.replace("$1", text);
};

Converter.renderer.link = function (href, title, text) {
  return `[url=${href}]${text}[/url]`;
};
Converter.renderer.image = function (href, title, text) {
  return "[img]" + href + "[/img]";
};
