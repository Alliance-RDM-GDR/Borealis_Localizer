const fs = require('fs');

const filesToUpdate = ['index.html', 'QuickStart.md', 'UPDATES.md', 'ARCHITECTURE.md', 'README.md'];

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace names
    content = content.replace(/Translation Assistant/g, 'Borealis Localizer');
    content = content.replace(/Translation App/g, 'Borealis Localizer');
    content = content.replace(/Translation tool/g, 'Borealis Localizer tool');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
