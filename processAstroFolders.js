const fs = require("fs");
const path = require("path");

// Define source and destination paths
const baseDir = "/Users/murad/Boilerplates/themefisher-documentation/content";
const astroSource =
  "/Users/murad/Boilerplates/themefisher-documentation/content/atemp-astro";
const astroFiles = ["deployment.md", "updation.md", "content-management.md"];

// Function to copy a file to a target folder
function copyFile(sourceFile, targetDir, targetFileName) {
  const sourcePath = path.join(astroSource, sourceFile);
  const targetPath = path.join(targetDir, targetFileName);

  fs.copyFile(sourcePath, targetPath, (err) => {
    if (err) {
      console.error(
        `Error copying file ${sourceFile} to ${targetFileName}: `,
        err
      );
    } else {
      console.log(`Successfully copied ${sourceFile} to ${targetFileName}`);
    }
  });
}

// Main function to iterate through folders and apply changes
function processFolders() {
  fs.readdir(baseDir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error("Error reading the base directory:", err);
      return;
    }

    // Filter for folders with "-astro" in the name
    const astroFolders = files.filter(
      (file) => file.isDirectory() && file.name.includes("-astro")
    );

    console.log(`Found ${astroFolders.length} folders containing '-astro'`);

    // If there are no astro folders, exit early
    if (astroFolders.length === 0) {
      console.log('No folders with "-astro" found.');
      return;
    }

    // Process each astro folder with a basic progress message
    astroFolders.forEach((folder, index) => {
      const folderPath = path.join(baseDir, folder.name);
      console.log(
        `\nProcessing folder ${index + 1} of ${astroFolders.length}: ${
          folder.name
        }`
      );

      // Add deployment.md and updation.md files
      console.log("Copying deployment.md and updation.md...");
      copyFile("deployment.md", folderPath, "deployment.md");
      copyFile("updation.md", folderPath, "updation.md");

      // Replace content-management.md file
      console.log("Replacing content-management.md...");
      const contentManagementPath = path.join(
        folderPath,
        "content-management.md"
      );
      fs.copyFile(
        path.join(astroSource, "content-management.md"),
        contentManagementPath,
        (err) => {
          if (err) {
            console.error("Error replacing content-management.md:", err);
          } else {
            console.log("Successfully replaced content-management.md");
          }
        }
      );
    });

    console.log(`\nFinished processing ${astroFolders.length} folders.`);
  });
}

// Run the script
processFolders();
