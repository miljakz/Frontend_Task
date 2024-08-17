const fs = require('fs');
const path = require('path');

console.log('Running post-install script...');

try {
  const requiredEnvVars = ['NODE_ENV', 'VUE_APP_API_URL'];
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is not defined!`);
    }
  });

  const directoryPath = path.join(__dirname, 'some-directory');
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
    console.log(`Created directory: ${directoryPath}`);
  }

  const sourceFile = path.join(__dirname, 'src', 'config', 'default.config.js');
  const destinationFile = path.join(__dirname, 'config', 'default.config.js');
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destinationFile);
    console.log(`Copied ${sourceFile} to ${destinationFile}`);
  }

  console.log('Post-installation tasks completed successfully.');
} catch (error) {
  console.error('Error during post-install:', error.message);
  process.exit(1);
}
