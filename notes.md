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

Command to deploy simon: ./deployFiles.sh -k ../../dylan-harps-keypair.pem -h dylanharps.click -s simon

Command to deploy startup: ./../simon-html/deployFiles.sh -k ../../dylan-harps-keypair.pem -h dylanharps.click -s startup
