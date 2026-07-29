const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (!['node_modules', '.git', 'build', 'petimages'].includes(file)) {
                results = results.concat(walk(fullPath));
            }
        } else {
            if (fullPath.match(/\.(js|jsx|css|html|md|json)$/) && !fullPath.includes('package-lock.json')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('C:\\Users\\H-P\\Desktop\\pawfect-match');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/Pawfect Match/g, 'Pawfect Match')
        .replace(/Pawfect Match/g, 'Pawfect Match')
        .replace(/Pawfect Match/g, 'Pawfect Match')
        .replace(/Pawfect Match/g, 'Pawfect Match')
        .replace(/pawfect-match/g, 'pawfect-match')
        .replace(/pawfect-match/g, 'pawfect-match');
        
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated: ' + file);
    }
});
