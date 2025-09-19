# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Introductory Assignment
I already had a GitHub account but since I've always used an IDE to do my commits and pulls, I'm still not used to running commands in the command line. It was nice to practice that. 

## AWS Server
Elastic IP Address: 3.220.198.243
Command to ssh: ssh -i byu/"CS 260"/dylan-harps-keypair.pem ubuntu@3.220.198.243
Domain is registered thru Namecheap
Domain: dylanharps.click
type :wq to save and equit out of vim

## HTML
Command to deploy simon: ./deployFiles.sh -k byu/"CS 260"/dylan-harps-keypair.pem -h dylanharps.click -s simon
Deploying allows me to edit files outside of the server and then deploy them to the server. 
