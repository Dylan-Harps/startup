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
    db.house.find({ summary: /(modern|beach)/i }); // find houses with the text 'modern' or 'beach' in the summary
Websocket:
    Uses a peer-to-peer relatinoship instead of a client/server one. 
    This allows seding notifications and/or asynchronous exchange of information 
Typescript:
    Enforce types onto variables. In the form of variableName: type;
