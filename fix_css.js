const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const target = `header {
  background-color: #004080;
  color: white;
  padding: 1rem;
  text-align: center;
}`;

const replacement = `header {
  background-color: #004080;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
}

header h1 {
  margin-top: 0;
  margin-bottom: 1rem;
}

header p {
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1.05rem;
  color: #f1f5f9;
}

header a {
  color: #60a5fa;
  text-decoration: underline;
  font-weight: bold;
}

header a:hover {
  color: #93c5fd;
  text-decoration: none;
}`;

css = css.replace(target, replacement);

fs.writeFileSync('styles.css', css);
