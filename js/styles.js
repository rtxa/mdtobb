// The default style is always executed before the custom style is set
const DefaultStyle = {
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  inlineCode: "$1",
  hr: "[b]⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[/b]",
  strike: "[s]$1[/s]",
  orderedListStart: "[list=1]",
  orderedListEnd: "[/list]",
  youtubeTag: "[youtube]$1[/youtube]",
  phpTag: "[php]$1[/php]",
  htmlTag: "[html]$1[/html]",
  supportsPhpTag: false,
  supportsHtmlTag: false,
  addNewLineParagraph: false,
  addNewLineHeader: false,
  addNewLineEndOfList: false,
  smartyPants: false,
  break: false
};

const Styles = [
  {
    name: "vBulletin",
    h1: "[color=DarkOrange][size=5][b]$1[/b][/size][/color]",
    h2: "[color=RoyalBlue][size=4][b]$1[/b][/size][/color]",
    h3: "[color=DodgerBlue][size=3][b]$1[/b][/size][/color]",
    h4: "[color=SlateGray][size=3]$1[/size][/color]",
    inlineCode: "[color=DarkRed][font=Courier New]$1[/font][/color]",
    addNewLineParagraph: true,
    addNewLineHeader: true,
    addNewLineEndOfList: false,
    supportsPhpTag: true,
    supportsHtmlTag: true
  },
  {
    name: "phpBB",
    h1: "[color=DarkOrange][size=200][b]$1[/b][/size][/color]",
    h2: "[color=RoyalBlue][size=160][b]$1[/b][/size][/color]",
    h3: "[color=DodgerBlue][size=140][b]$1[/b][/size][/color]",
    h4: "[color=SlateGray][size=120]$1[/size][/color]",
    inlineCode: "[color=DarkRed]$1[/color]",
    strike: "$1",
    addNewLineParagraph: true,
    addNewLineHeader: true,
    addNewLineEndOfList: true
  },
  {
    name: "MyBB",
    h1: "[color=DarkOrange][size=x-large][b]$1[/b][/size][/color]",
    h2: "[color=RoyalBlue][size=large][b]$1[/b][/size][/color]",
    h3: "[color=DodgerBlue][size=medium][b]$1[/b][/size][/color]",
    h4: "[color=SlateGray][size=small]$1[/size][/color]",
    inlineCode: "[color=DarkRed]$1[/color]",
    youtubeTag: "[video=youtube]www.youtube.com/watch?v=$1[/video]",
    addNewLineParagraph: true,
    addNewLineHeader: true,
    addNewLineEndOfList: false
  },
  {
    name: "phpBB - ForoActivo",
    h1: "[h2][color=DarkOrange]$1[/color][/h2]",
    h2: "[h2][color=RoyalBlue]$1[/color][/h2]",
    h3: "[h3][color=DodgerBlue]$1[/color][/h3]",
    h4: "[h4][color=SlateGray]$1[/color][/h4]",
    inlineCode: "[color=Orange][font=Courier New]$1[/font][/color]",
    addNewLineParagraph: true,
    addNewLineHeader: false,
    addNewLineEndOfList: false
  },
  {
    name: "Steam BBCode",
    h1: "[h1]$1[/h1]",
    h2: "[h2]$1[/h2]",
    h3: "[h3]$1[/h3]",
    h4: "$1",
    strike: "[strike]$1[/strike]",
    orderedListStart: "[olist]",
    orderedListEnd: "[/olist]",
    youtubeTag: "[previewyoutube=$1;full][/previewyoutube]"
  }
];
