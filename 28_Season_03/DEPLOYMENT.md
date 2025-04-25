# Deployment

# STEPS:

1. signup aws  
2. launch instance (ec2)  
3. chmod 400 <secret>.pem file  
4. connected to the machine using SSH chmod:  
   `ssh -i "devTinder-secret.pem" ubuntu@ec2-16-171-19-249.eu-north-1.compute.amazonaws.com`  
   - To exit from the machine chmod  
     - `exit` hit enter.  
5. Install node version 20.15.1 (which is already installed in the system) using Git Bash in Ubuntu.  
6. git clone project in Ubuntu  
7. Frontend (Steps to deploy frontend on IP address):  

   - `client/`
     - `npm install` - dependencies on Ubuntu  
     - `npm run build`  
   - we need nginx to host our Frontend project.  
   - To install and start nginx command:  
     - `sudo apt update`  
     - `sudo apt install nginx` (nginx will give HTTP server)  
     - `sudo systemctl start nginx`  
     - `sudo systemctl enable nginx`

   - `client/`  
   - copy code from dist (build files) to `/var/www/html/`  
   - command:  
     - `sudo scp` (to copy) `-r` (recursively) `dist/* /var/www/html/` (this command helps to copy dist files into `/var/www/html/`)  
   - Enable port 80 of your instance:  
     - instance  
       - security  
         - Security groups  
           - Inbound rules  
             - Edit Inbound rules  
               - Edit inbound rules Info  
                 - Add Rules  
                   - Custom TCP  
                   - PORT 80  
                   - `/ 0.0.0.0/0` → (it will help to allow access anywhere on the internet)  
                 - Save rules (now we can see PORT 80 would be enabled).  
   - Instances  
     - Public IPv4 address  
       `16.171.19.249` (On this IP address you can see the deployed frontend).

8. Backend:

- connect to machine using SSH in Git Bash.  
- enabled 3000 (server) PORT on AWS (Security groups).  
- allowed EC2 instance public IP on MongoDB server.  
- Mongoose Atlas (added frontend AWS deployed IP address) in network access IP Access List - So, that database can access it.  
- PM2:  
  - PM2 is a daemon process manager that will help you manage and keep your application online 24/7  
  - Install PM2:  
    - `/DevTinder/server$ npm install pm2 -g`  
    - Start:  
      - `/DevTinder/server$ pm2 start npm -- start` (it will help to run server 24/7)  
    - `pm2 logs`  
    - `pm2 flush`  
    - `pm2 list`  
    - `pm2 stop npm`  
      - `pm2 start npm --name "devTinder-backend" -- start`  
      - `pm2 logs`  
      - `pm2 list`, `pm2 flush <name>`, `pm2 stop <name>`, `pm2 delete <name>`  
    - config nginx - `sudo nano /etc/nginx/sites-available/default`  
      ```
      server_name 16.171.19.249;
      location /api/ {
          proxy_pass http://localhost:3000/;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
      }
      ```

    - restart nginx - `sudo systemctl restart nginx`  
    - Modify the BASE_URL in frontend project to "/api"

frontend: `http://16.171.19.249/`  
backend: `http://16.171.19.249:3000`  

domain name = `devtinder.com` → `16.171.19.249`  
frontend = `devtinder.com`  

Mapping:  
`:3000` (SERVER PORT) → `/api`  
backend = `devtinder.com:3000` → `devtinder.com/api`

config nginx - `sudo nano /etc/nginx/sites-available/default`  
 ```
      server_name 16.171.19.249;
      location /api/ {
          proxy_pass http://localhost:3000/;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
      }
 ```

9. Adding a custom Domain name

- purchased domain name from GoDaddy  
- signup on Cloudflare & add a new domain name  
- change the nameservers on GoDaddy and point it to Cloudflare  
- wait for some time till your nameservers are updated (~15 minutes)  
- DNS record: `A devtinder.in 43.204.96.49`  
- Enable SSL for website  

10. Sending Emails via SES

- Create an IAM user  
- Give access to `AmazonSESFullAccess`  
- Amazon SES: Create an Identity  
- Verify your domain name  
- Verify an email address identity  
- Install AWS SDK - v3  
- Code Example: [AWS SES Examples](https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples)  
- Setup `SesClient`  
- Access Credentials should be created in IAM under Security Credentials tab  
- Add the credentials to the `.env` file  
- Write code for `SesClient`  
- Write code for sending email address  
- Make the email dynamic by passing more params to the `run` function  

11. Scheduling cron jobs in NodeJS

- Installing node-cron
- Learning about cron expressions syntax - crontab.guru
- Schedule a job
- date-fns
- Find all the unique  email Id who have got connection Request in previous day
- Send Email
- Explore queue mechanim to send bulk emails
- Amazon SES Bulk Emails
- Make sendEmail function dynamic
- bee-queue & bull npm packages
