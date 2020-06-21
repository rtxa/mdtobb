function $(q) {
  return document.querySelector(q)
};

function removeTrailingWhitespace(text) {
  return text.replace(/\s+$/, '');
}

function removeLeadingWhitespace(text) {
  return text.replace(/^\s+/, '');
}

var mdToBB = new marked.Renderer();

mdToBB.code = function (text, infostring) {
  // to do: add option for php using infostring
  if (document.getElementById('useCodeTag').checked) {
    return '[code]' + text.trim() + '[/code]\n\n';
  } else {
    return '[size=4][font=Courier New]' + text + '[/font][/size]\n';
  }
};

mdToBB.blockquote = function (text) {
  return '\n[quote]' + Util.unescapeXML(text.trim()) + '[/quote]';
};

mdToBB.heading = function (text, level) {
  if (level > 4) level = 4; // i didn't define more than 4 headers levels
  var output = $("#header" + level).value.replace("$1", Util.unescapeXML(text)) + '\n';
  return output + ($("#addNewLine").checked ? '\n' : '');
};

mdToBB.hr = function () {
  return '[center][b]--------------------------------------------------------------------------------------------[/b][/center]';
};

mdToBB.list = function (body, ordered) {
  var beginTag = "[list]";
  var closeTag = "[/list]";

  if (ordered) {
    beginTag = tagOListStart;
    closeTag = tagOListEnd;
  }

  if ($("#addNewLine").checked) {
    beginTag += '\n';
    closeTag += '\n';
  }

  if ($("#addNewLineEndList").checked) {
    closeTag += '\n';
  }

  return beginTag + Util.unescapeXML(removeTrailingWhitespace(body)) + closeTag;
};

mdToBB.listitem = function (text) {
  return '[*]' + Util.unescapeXML(removeLeadingWhitespace(text)) + '\n';
};

mdToBB.paragraph = function (text) {
  return Util.unescapeXML(text) + '\n' + ($("#addNewLine").checked ? '\n' : '');
};

mdToBB.strong = function (text) {
  return '[b]' + Util.unescapeXML(text) + '[/b]';
};

mdToBB.em = function (text) {
  return '[i]' + Util.unescapeXML(text) + '[/i]';
};

mdToBB.codespan = function (text) {
  if (document.getElementById('formatCodeSpan').checked) {
    return '[font=Courier New]' + Util.unescapeXML(text) + '[/font]';
  } else {
    return '`' + Util.unescapeXML(text) + '`';
  }
};

mdToBB.br = function () {
  return '\n';
};

mdToBB.del = function (text) {
  return tagStrikeStart + Util.unescapeXML(text) + tagStrikeEnd;
};

mdToBB.link = function (href, title, text) {
  var endTag = '[/url]';

  if (title && title !== '') {
    endTag += ' (' + title + ')';
  }

  return '[url=' + href + ']' + Util.unescapeXML(text) + endTag;
};

mdToBB.image = function (href, title, text) {
  var beginTag = '';

  if (title && title !== '') {
    beginTag += '[size=5][b]' + Util.unescapeXML(title) + '[/b][/size]\n';
  }

  // gives bad output when using an image with link
  /*if (text && text !== '') {
    beginTag += Util.unescapeXML(text) + '\n';
  }*/

  beginTag += '[img]';
  return beginTag + href + '[/img]';
};

var markdownConverter = new MarkdownConverter(mdToBB);
var changeYouTubeTag = false; // last MyBB version uses different tag for video
var tagStrikeStart = "[s]";
var tagStrikeEnd = "[/s]";
var tagOListStart = "[list=1]";
var tagOListEnd = "[/list]";

function convert() {
  markdownConverter.convert(document.getElementById('markdownTextarea'), document.getElementById('bbcodeTextarea'));
  if (changeYouTubeTag) {
    let output = $("#bbcodeTextarea").value;
    output = output.replace(/\[youtube\](.*?)\[\/youtube\]/, "[video=youtube]www.youtube.com/watch?v=$1[/video]");
    $("#bbcodeTextarea").value = output;
  }
}

function copyToClipboard() {
  var copyText = document.getElementById("bbcodeTextarea");
  copyText.select();
  document.execCommand("copy");

}

function defaultStyle() {
  $("#header1").value = "";
  $("#header2").value = "";
  $("#header3").value = "";
  $("#header4").value = "";
  $("#formatCodeSpan").checked = false;
  $("#addNewLineEndList").checked = false;
  $("#addNewLine").checked = false;
  changeYouTubeTag = false; 
  tagStrikeStart = "[s]";
  tagStrikeEnd = "[/s]";
  tagOListStart = "[list=1]";
  tagOListEnd = "[/list]";
}

// VBulletin
function onClick_Style1() {
  defaultStyle();
  $("#header1").value = "[color=DarkOrange][size=5][b]$1[/b][/size][/color]";
  $("#header2").value = "[color=RoyalBlue][size=4][b]$1[/b][/size][/color]";
  $("#header3").value = "[color=DodgerBlue][size=3][b]$1[/b][/size][/color]";
  $("#header4").value = "[color=SlateGray][size=3]$1[/size][/color]";
  $("#formatCodeSpan").checked = true;
  $("#addNewLineEndList").checked = false;
  $("#addNewLine").checked = true;
  changeYouTubeTag = false;
}

// phpBB
function onClick_Style2() {
  defaultStyle();
  $("#header1").value = "[color=DarkOrange][size=200][b]$1[/b][/size][/color]";
  $("#header2").value = "[color=RoyalBlue][size=160][b]$1[/b][/size][/color]";
  $("#header3").value = "[color=DodgerBlue][size=140][b]$1[/b][/size][/color]";
  $("#header4").value = "[color=SlateGray][size=120]$1[/size][/color]";
  $("#formatCodeSpan").checked = false;
  $("#addNewLineEndList").checked = true;
  $("#addNewLine").checked = true;
  changeYouTubeTag = false;
}

// MyBB
function onClick_Style3() {
  defaultStyle();
  $("#header1").value = "[color=DarkOrange][size=12][b]$1[/b][/size][/color]";
  $("#header2").value = "[color=RoyalBlue][size=6][b]$1[/b][/size][/color]";
  $("#header3").value = "[color=DodgerBlue][size=3][b]$1[/b][/size][/color]";
  $("#header4").value = "[color=SlateGray][size=2]$1[/size][/color]";
  $("#formatCodeSpan").checked = true;
  $("#addNewLineEndList").checked = false;
  $("#addNewLine").checked = true;
  changeYouTubeTag = true;
}

// phpBB ForoActivo
function onClick_Style4() {
  defaultStyle();
  $("#header1").value = "[h2][color=DarkOrange]$1[/color][/h2]";
  $("#header2").value = "[h2][color=RoyalBlue]$1[/color][/h2]";
  $("#header3").value = "[h3][color=DodgerBlue]$1[/color][/h3]";
  $("#header4").value = "[h4][color=SlateGray]$1[/color][/h4]";
  $("#formatCodeSpan").checked = false;
  $("#addNewLineEndList").checked = false;
  $("#addNewLine").checked = false;
  changeYouTubeTag = false;
}

// Steam BBCode
// To do:
// 1. Add [spoiler]string[/spoiler] (usar ~~string~~)
// 2. Add [noparse]text[/noparse] (usar ``string``)
// 3. Add [quote=yourname]text[/quote] (usar >[yourname] text)
function onClick_Style5() {
  defaultStyle();
  $("#header1").value = "[h1]$1[/h1]";
  $("#header2").value = "[h2]$1[/h2]";
  $("#header3").value = "[h3]$1[/h3]";
  $("#header4").value = "$1";
  $("#formatCodeSpan").checked = true;
  $("#addNewLineEndList").checked = false;
  $("#addNewLine").checked = false;
  tagStrikeStart = "[strike]";
  tagStrikeEnd = "[/strike]";
  tagOListStart = "[olist]";
  tagOListEnd = "[/olist]";
  changeYouTubeTag = false;
}