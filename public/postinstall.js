const fs = require('fs');
const path = require('path');

console.log('Running post-install script...');

try {
  // Check for required environment variables
  const requiredEnvVars = ['NODE_ENV', 'VUE_APP_API_URL'];
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is not defined!`);
    }
  });

  // Create directory if it doesn't exist
  const directoryPath = path.join(__dirname, 'some-directory');
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    console.log(`Created directory: ${directoryPath}`);
  } else {
    console.log(`Directory already exists: ${directoryPath}`);
  }

  // Copy configuration file if source exists
  const sourceFile = path.join(__dirname, 'src', 'config', 'default.config.js');
  const destinationFile = path.join(__dirname, 'config', 'default.config.js');
  if (fs.existsSync(sourceFile)) {
    // Ensure destination directory exists
    const destinationDir = path.dirname(destinationFile);
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true });
      console.log(`Created directory: ${destinationDir}`);
    }

    fs.copyFileSync(sourceFile, destinationFile);
    console.log(`Copied ${sourceFile} to ${destinationFile}`);
  } else {
    console.warn(`Source file not found: ${sourceFile}. Skipping file copy.`);
  }

  console.log('Post-installation tasks completed successfully.');
} catch (error) {
  console.error('Error during post-install:', error.message);
  process.exit(1);
}
