# React Landing Page For Website Service Creation

Live version : [Click here](https://page-romulad.vercel.app/)

## Run locally

### Using Docker
The app has a public container image on docker hub\ 
and you can run it with `docker run` command.

**Note**: You need to have [Docker](https://www.docker.com/products/docker-desktop/) installed before following these instructions.

- Make sure [Docker](https://www.docker.com/products/docker-desktop/) engine is running\
on your system and Docker client is accessible from your command line
- Then run this command:
```bash
docker run --name landing-page -p 5173:5173 romulad/landing-page:0.0.1
```
And you're done! visit the url displayed in your terminal to view the app.

### By setting up the dev environment
To run this app locally make sure you have the following prerequisites on your system:
- [Node.js](https://nodejs.org/en/download/current), this include `npm` (Node Package Manager) will be use to run the app. 
- [Git](https://git-scm.com/downloads) for cloning the repository. 

#### Clone the repo
- Open your terminal
- navigate to the folder where you want to clone the repository
- then run:
```bash
git clone https://github.com/Romulad/react-landing-page.git
```
This command will clone this repository to your local machine.

#### Install dependencies and run the app
In your terminal :
- Navigate to the new directory created by running:
  ```bash
  cd react-landing-page
  ```
- install the necessary packages by running this command:
  ```bash
  npm install
  ```
- once the installation is completed start the app with:
  ```bash
  npm run dev
  ```

And you're done! visit the url displayed in your terminal to view the app.