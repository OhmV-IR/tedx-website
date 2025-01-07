### Viewing the site without hosting it yourself
The site is hosted at tedx-website-nine.vercel.app for testing & design purposes but this is only available when I turn it on, so if you need to see the site send me a message.

### Feature requests, bug reports
To report bugs or request features, please create an issue and I will take a look. Please be as specific as possible.

### Required downloads
Latest version of nodejs. Can either download use a package manager like fnm or just download from the website(nodejs.org/en/download)

### Installing dependencies(MUST do BEFORE starting site)
Navigate to the project directory in a command prompt and run `npm install`. This will install all the dependencies and this might take a few minutes.

### Starting a local development instance of the site
After performing the dependency install section, navigate to the project directory in a command prompt and run `npm run dev`. This will start a development instance of the site with extra logging, but this can cause some weird behaviour especially with charts since the site is actually rendered twice for debugging purposes. To open the site, simply type localhost:3000 into your address bar, but it should automatically open a window with the site for you. To stop, either close the command prompt window or press Ctrl + C and then type y and enter while focused on the command prompt window. 

### Starting a production instance of the site
After performing the dependency install section, navigate to the project directory in a command prompt and run `npm run build` to create a production build of the site. Finally, run `npm run start` to serve the built webpage and navigate again to localhost:3000 in your browser to view the page. To stop serving the build, either close the command prompt window or press Ctrl + C while in the window.
