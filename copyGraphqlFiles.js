const fs = require('fs');
const glob = require('fast-glob');

// Get graphql files paths
const graphqlFiles = glob.sync(['**/*.graphql']);

for (const sourceFilePath of graphqlFiles) {
  // Replace src folder with build one
  const targetFilePath = sourceFilePath.replace('src', 'build');
  // Copy file
  fs.copyFileSync(sourceFilePath, targetFilePath);
}
