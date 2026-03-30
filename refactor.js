const fs = require('fs');

let b = fs.readFileSync('app.js', 'utf8');

// Replace standard variables and strings
const replacements = [
  [/englishContent/g, 'sourceContent'],
  [/frenchContent/g, 'targetContent'],
  [/englishRawLines/g, 'sourceRawLines'],
  [/frenchRawValues/g, 'targetRawValues'],
  [/englishKeyOrder/g, 'sourceKeyOrder'],
  [/duplicateEnglish/g, 'duplicateSource'],
  [/duplicateFrench/g, 'duplicateTarget'],
  [/exportFrenchFile/g, 'exportTargetFile'],
  [/"en"/g, '"source"'],
  [/"fr"/g, '"target"'],
  [/English/g, 'Source language'],
  [/French/g, 'Target language'],
  [/englishFile/g, 'sourceFile'],
  [/frenchFile/g, 'targetFile'],
  [/engData/g, 'sourceData'],
  [/frData/g, 'targetData'],
  [/englishPathInput/g, 'sourcePathInput'],
  [/frenchPathInput/g, 'targetPathInput'],
  [/englishUrl/g, 'sourceUrl'],
  [/frenchUrl/g, 'targetUrl'],
  [/englishBlob/g, 'sourceBlob'],
  [/frenchBlob/g, 'targetBlob'],
  [/englishValue/g, 'sourceValue'],
  [/engText/g, 'sourceText'],
  [/frText/g, 'targetText'],
  [/englishKeySet/g, 'sourceKeySet'],
  [/frenchKeys/g, 'targetKeys'],
  [/missingInFrench/g, 'missingInTarget'],
  [/extraInFrench/g, 'extraInTarget'],
  [/engLower/g, 'sourceLower'],
  [/frLower/g, 'targetLower'],
  [/engMatch/g, 'sourceMatch'],
  [/frMatch/g, 'targetMatch'],
  [/'en'/g, "'source'"],
  [/'fr'/g, "'target'"]
];

replacements.forEach(([regex, replacement]) => {
  b = b.replace(regex, replacement);
});

fs.writeFileSync('app.js', b);

let html = fs.readFileSync('index.html', 'utf8');
const htmlReplacements = [
  [/English/g, 'Source language'],
  [/French/g, 'Target language'],
  [/englishFile/g, 'sourceFile'],
  [/frenchFile/g, 'targetFile'],
  [/githubEnglishPath/g, 'githubSourcePath'],
  [/githubFrenchPath/g, 'githubTargetPath'],
  [/<p>Compare and translate \.properties files<\/p>/g, '<p>The Translation Assistant is a client-side web tool that compares two .properties files in different languages, highlights missing or changed translations, and helps translators export updated bundles. This tool was originally designed to support the Source language to Canadian Target language localization of Dataverse. To report an issue, or to provide feedback, please fill out the <a href="https://forms.gle/PEH3Az3bbEFRZStw9" target="_blank">Translation Assistant Feedback Form</a>, or contact <a href="mailto:info@borealisdata.ca">info@borealisdata.ca</a>.</p>']
];

htmlReplacements.forEach(([regex, replacement]) => {
  html = html.replace(regex, replacement);
});
fs.writeFileSync('index.html', html);
