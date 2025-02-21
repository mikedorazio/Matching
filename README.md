# Running the Matching Game

Here are the steps needed to download and run the Matching game.  At a high level, we need to download 2 things, execute a couple of commands and run the application with your browser.  I have run and tested the application using Chrome but I am sure it will run in any modern browser.

Step 1.   You need to download Node.js - this can be found [here]. Download this package and make sure you can run it on your command line.  Just follow the on-screen prompts and take all the default values.  The command line can be a simple Window's CMD or Window's PowerShell. If you have Git, it can be Git Bash.  Just make sure you can run the "node" command.  Try running "node --version" and make sure you get something like: v20.10.0.

Step 2.  Download the code for the matching game.  This can be done at the GitHub main page for Matching.  Since you are reading this, you are already here.  Just go to the main page and locate the green Code button at the of the Matching main page section.  It should be a dropdown.  Click the dropdown and select the option at the bottom named "Download ZIP". This will download the entire application to your computer.  You have now completed the first part of
downloading the 2 things mentioned above.

Step 3. You need to unzip the source code.  Wherever GitHub downloaded the zip file, unzip it to where you want the code to live.  I would rename the top level directory to "matching".

Step 4. You are now ready to set up the application.  Since it is a React application, we need to install the needed packages.  Make sure you are in the "matching" directory. If you list the directory (dir or ls), you should see the src folder and the index.html files.  Once in the "matching" directory, run "npm install". This will download everything needed to run the application and create a folder named "node_modules".  Do not touch this folder....

Step 5. Run the command "npm run dev" from within the same folder you just ran the "npm install" command.  You should see something that lets you know which URL the application is running on.  It will be something like "localhost:5173".

Step 6. Open your browser and in the URL section, enter the URL that was given in step 5.  Hopefully, after about 10 seconds, you should see the game.

Enjoy!!!

[here]: <https://nodejs.org/en>
