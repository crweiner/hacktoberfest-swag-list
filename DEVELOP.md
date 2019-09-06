# How To Run This Site Locally In Jekyll

Are you looking to run this site locally and play around with Jekyll? It is a great idea and a fun way to introduce you to a simple Jekyll project!

This guide will teach you how to get Jekyll setup on an Ubuntu 16.04 or 18.04 Cloud VPS for testing. You can certainly also follow this on your own local install of Ubuntu as well!

Note: This guide has affiliate links where I get a small kickback if you signup. Thank you for supporting the Hacktoberest Swag List! :smiley:

Follow these steps:

## Setup an Ubuntu server

- Want a Cloud VPS? Well, [DigitalOcean](digitalocean.com) is the main sponsor of Hacktoberfest after all, so let's spin up a server with them. They call their servers "droplets". Yay marketing!

- Don't have an account? [Signup by clicking here](https://m.do.co/c/8754f9ede747) **Affiliate link** You'll get a $50 credit which is enough to run your droplet free for 10 months!

- Next, launch a new Ruby on Rails droplet by [clicking here](https://do.co/2PQE3SR). This will automaticlly select for your droplet to be an Ubuntu 18.04 server with [all of these things preconfigured](https://marketplace.digitalocean.com/apps/ruby-on-rails).

- Under "**Choose a plan**", select the **Standard** option and scroll to the left to the **$5/month** droplet.

- Pick a datacenter closest to you.

- Under "**Authentication**" choose "**One-time password**" to get a password for the droplet emailed to you.

- Click "**Create Droplet**"

- You will get an email address with the droplet's IP address, username "(will be 'root')", and the password.

- If you're on a Mac, open up **Terminal** and type 
```
ssh root@IP_ADDRESS

```
Then enter your password.

If using Windows, follow [this guide on using PuTTY to connect to your droplet](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/putty/)

- You'll be asked to change your password, so do so and be sure to pick something very long and secure! Using SSH Keys is beyond the scope of this very limited tutorial.

