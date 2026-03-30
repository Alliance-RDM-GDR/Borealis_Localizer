const fs = require('fs');

const docs = ['ARCHITECTURE.md', 'README.md', 'UPDATES.md'];

docs.forEach(doc => {
  if (fs.existsSync(doc)) {
    let content = fs.readFileSync(doc, 'utf8');
    
    // replacements for docs
    const replacements = [
      [/English/g, 'Source language'],
      [/French/g, 'Target language'],
      [/englishContent/g, 'sourceContent'],
      [/frenchContent/g, 'targetContent'],
      [/englishRawLines/g, 'sourceRawLines'],
      [/frenchRawValues/g, 'targetRawValues'],
      [/englishKeyOrder/g, 'sourceKeyOrder'],
      [/duplicateEnglish/g, 'duplicateSource'],
      [/duplicateFrench/g, 'duplicateTarget'],
      [/exportFrenchFile/g, 'exportTargetFile'],
      [/englishFile/g, 'sourceFile'],
      [/frenchFile/g, 'targetFile'],
    ];

    replacements.forEach(([regex, replacement]) => {
      content = content.replace(regex, replacement);
    });

    fs.writeFileSync(doc, content);
  }
});
