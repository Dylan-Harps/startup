# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Server
Elastic IP Address: 3.220.198.243

Command to ssh: ssh -i byu/"CS 260"/dylan-harps-keypair.pem ubuntu@3.220.198.243

Domain is registered thru Namecheap

Domain: dylanharps.click

## Using VIM
To go into editing mode, type 'i'.

To exit editing mode, press 'esc'.

To then save and quit, type ':wq'.

## Using node
Follow the following steps:
1. Create your project directory
2. Initialize it for use with NPM by running ```npm init -y```
3. Make sure ```.gitignore``` file contains ```node_modules```
4. Install any desired packages with ```npm install <package name here>```
5. Add ```require('<package name here>')``` to your application's JavaScript
6. Use the code the package provides in your JavaScript
7. Run your code with ```node index.js```

## Using Vite
Using ```npm run dev``` runs a react build from the Vite server.
'h' shows the possible commands.
Using ```npm run build``` putputs it into a deploy-ready subdirectory ```dist```.


## DeployFiles
Deploying allows me to edit files outside of the server and then deploy them to the server. 

Go to the directory of the files I want to deploy (i.e. byu/"CS 260"/startup/startup-html), then use the following:

Command to deploy simon: ./deployFiles.sh -k ../dylan-harps-keypair.pem -h dylanharps.click -s simon

Command to deploy startup: ./../simon-html/deployFiles.sh -k ../../dylan-harps-keypair.pem -h dylanharps.click -s startup

Command to deploy simon react: ./deployReact.sh -k ../dylan-harps-keypair.pem -h dylanharps.click -s simon

Command to deploy startup react: ./deployReact.sh -k ../../dylan-harps-keypair.pem -h dylanharps.click -s startup

## Notes for Final
SOP (Same Origin Policy): JavaScript can only make requests to a domain from that same domain
CORS (Cross Origin Resource Sharing): a system where the client (browser) will specify the origin of the request and the server respond with whether it's allowed or not
The server uses access-control-allow-origin to specify which origins are allowed
PM2 starts and stops "service deamons," which are programs that don't terminate when the console closes and instead keep running in the background. 
AWS S3 is a good storage service 
As for Databases, there are many options, each with its own specialty. MongoDB specializes in JSON objects
Examples of MongoDB queries:
    db.house.find(); // find all houses
    db.house.find({ beds: { $gte: 2 } }); // find houses with two or more bedrooms
    db.house.find({ status: 'available', beds: { $lt: 3 } }); // find houses that are available with less than three beds
    db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] }); // find houses with either less than three beds or less than $1000 a night
    db.house.find({ summary: /(modern|beach)/i }); // find houses with the text 'modern' or 'beach' in the summary using regex
Websocket:
    Uses a peer-to-peer relatinoship instead of a client/server one. 
    This allows seding notifications and/or asynchronous exchange of information 
Typescript:
    Enforce types onto variables. In the form of variableName: type;

## Final Exam T.A. Review Notes:
await vs .then: await saves it as a variable, while then is used immediately

## Study Guide Questions:
What is the default port for HTTP/HTTPS/SSH? 
    HTTP: 80
    HTTPS: 443
    SSH: 22
What does an HTTP status code in the range of 300/400/500 indicate?
    200: ok
    300: Redirects 
    400: Client error (bad input/authentication)
    500: Server error
What does the HTTP header content-type allow you to do?
    Specifies what content we are sending. e.g. images, json, html, etc. 
    Types: application, audio, font, haptics, image, message, model, multipart, text, video
What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
    Secure cookie: can only be sent over https
    Http-only: JavaScript can't modify it
    Same-site: can only be accessed by the site that made them 
Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
    (there should be code here)
    Example Express middleware: apiRouter.post('/path', async (req, res, next) => { \[insert code here]; next(); });
    You need next() in order to continue to the next middleware function
    POST (create resource), GET (access resource. no body), DELETE (delete resource), PUT (update/modify resource) 
Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
    (there should be code here)
    example server response: {email: user.email}
Given the following MongoDB query, select all of the matching documents {name:Mark}
    (there should be code here)
    see above examples 
How should user passwords be stored?
    Hashed (encrypted), salted
Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?
    (there should be code here)
What is the websocket protocol intended to provide?
    Peer-to-peer connections. The server can tell the client whenever it wants, instead of the client having to ask the server
What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
    JSX: JavaScript XML (XML is HTML format)
    JS: JavaScript
    AWS: Amazon Web Services
    NPM: Node Package Manager 
    NVM: Node Version Manager
Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
    (there should be code here)
    props.username is the same thing as {username}
Given a set of React components that include each other, what will be generated?
What does a React component with React.useState do?
    Whenever the state changes, the component will be re-rendered
What are React Hooks used for?
    Depends on the hook. They let you interact with states and variables so you can dynamically change your website 
    useState (see prev question)
    useEffect: whenever a thing changes (or the first time it renders, if no parameter), rerender
What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
    State Hook: remember a state and change it
    Context Hooks: retreives top-level information without having to pass it down through props. e.g. dark/light theme
    Ref Hooks: holds informatino not needed for rendering. Changing it does not re-render the page
    Effect Hooks: create connections with external information/code
    Performance Hooks: optimizes re-rendering by using caches
Given React Router code, select statements that are true.
    (there should be code here)
What does the package.json file do?
    Node stuff. Does stuff to name, describe, and write scripts for your project
What does the fetch function do?
    Simplifies making HTTP requests
What does node.js do?
    Runs our backend JS code
    It's kinda like an interpreter simulating a browser
What does pm2 do?
    PM2 starts and stops "service deamons," which are programs that don't terminate when the console closes and instead keep running in the background. 
    PM2 is the daemon. It runs code for us
What does Vite do?
    Builds the Javascript into stuff that the browser can run
    Good for testing/debugging and also building/bundling/deploying 
    Also works with TypeScript 
