// Script to help set up app icons for Electron
const fs = require('fs');
const path = require('path');

// Create build directory if it doesn't exist
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
  console.log('Created build directory');
}

// Create placeholder icons if they don't exist
const iconFiles = [
  { name: 'icon.png', size: '512x512', description: 'Linux icon' },
  { name: 'icon.ico', size: '256x256', description: 'Windows icon' },
  { name: 'icon.icns', size: '512x512', description: 'macOS icon' }
];

iconFiles.forEach(icon => {
  const iconPath = path.join(buildDir, icon.name);
  if (!fs.existsSync(iconPath)) {
    console.log(`Note: ${icon.description} (${icon.name}) not found at ${iconPath}`);
    console.log(`Please add a ${icon.size} ${icon.description} to the build directory`);
  } else {
    console.log(`✓ Found ${icon.description}`);
  }
});

console.log('\nIcon setup check complete!');
console.log('To generate proper icons, you can use tools like:');
console.log('- electron-icon-builder');
console.log('- Icon generators online');
console.log('- Image editing software to create appropriate sizes');
