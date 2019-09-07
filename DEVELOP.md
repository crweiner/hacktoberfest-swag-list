# How To Run This Site Locally In Jekyll

Are you looking to run this site locally and play around with Jekyll? It is a great idea and a fun way to introduce you to a simple Jekyll project!

This guide will teach you how to get Jekyll setup on an Ubuntu 18.04 Cloud VPS for testing. You can certainly also follow this on your own local install of Ubuntu as well!

Note: This guide has affiliate links where I get a small kickback if you signup. Thank you for supporting the Hacktoberest Swag List!

Follow these steps:

## Setup an Ubuntu server

- Want a Cloud VPS? Well, [DigitalOcean](digitalocean.com) is the main sponsor of Hacktoberfest after all, so let's spin up a server with them. They call their servers "droplets". Yay marketing!

- Don't have an account? [Signup by clicking here](https://m.do.co/c/8754f9ede747) **Affiliate link** You'll get a $50 credit which is enough to run your droplet free for 10 months!

- Next, select to create an Ubuntu 18.04 droplet from the available operating systems.

- Under "**Choose a plan**", select the **Standard** option and scroll to the left to the **$5/month** droplet.

- Pick a datacenter closest to you.

- Under "**Authentication**" choose "**One-time password**" to get a password for the droplet emailed to you.

- Click "**Create Droplet**"

- You will get an email address with the droplet's IP address, username "(will be 'root')", and the password.

- If you're on a Mac, open up **Terminal** and type

```bash
ssh root@IP_ADDRESS

```

Then enter your password.

If using Windows, follow [this guide on using PuTTY to connect to your droplet](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/putty/)

- You'll be asked to change your password, so do so and be sure to pick something very long and secure! Using SSH Keys is beyond the scope of this very limited tutorial.

- Run

```apt-get update```

to tell the server to update the list of programs that we can install on this version of Ubuntu.

- Then run

```apt-get install ruby-full build-essential zlib1g-dev nano -y```

to install the needed dependencies and programs.

- It is best not to run Ruby as a root user, so copy and paste the following lines one at a time into your SSH terminal and hit Enter for each line:

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

```

Above source taken from the [Jekyll install guidelines](https://jekyllrb.com/docs/installation/ubuntu/)

- Then run the following command to install Bundler which will help install and configire Jekyll later.

```
gem install bundler

```

## Using Git, GitHub, and Jekyll to clone this repo

- Go back to GitHub and make a [fork of this repo](https://github.com/crweiner/hacktoberfest-swag-list/fork) if you haven't already.

- Click on the big green "Download or Clone" button and copy the full URL of your cloned repo.

- Go back to your terminal window and type

```bash
git clone HTTP-URL-to-your-fork

```

- Once cloned, change into that new directory:

```bash
cd ./hacktoberfest-swag-list/

```

Disclaimer: This website is a fan and community made creation. It is not affiliated with [Hacktoberfest](https://hacktoberfest.digitalocean.com/) or any company offering swag.