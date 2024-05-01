//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var whiteSpaceName = "\n\t Junaid Ahmed \t\n";
console.log(whiteSpaceName);
var withoutWhiteSpaceName = whiteSpaceName.trim();
console.log(withoutWhiteSpaceName);
