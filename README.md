# An example of React+GraphQL

This project is a PoC, the goal is to simulate GitHub behaviour with a ReactJS frontend, and consuming Github API GraphQL

## Functionality

This example show your profile (as you can see in the next image) at homepage, and it also let you to looking for another users profile by their username. In the profile you can see standard information, and a grid with all the user repo, they are shown paginated by 6 with a `Load more..` option.

![Homepage](https://i.imgur.com/MxpF4tU.png)

## How to run it

It's pretty simple to run, you just need to create your own Personal Access Token (without it you can't hit GitHub API V4, that's the one we want to hit because the older ones are API REST). To create it just got to `Settings > Developer Settings > Personal Access Tokens` and generate a new one, be careful and save that token because once you go out that page you can't recover it, you'll need to create a new one.

Once you have your own token you just need to set it as an environment variable, for example in the root you can add a file called `.env`, and all the variables you declare there are going to be accessibles from your application, in this case you need to declare one called `REACT_APP_GRAPHQL_TOKEN`, it's just write `REACT_APP_GRAPHQL_TOKEN=<your token goes here>` on the first line of `.env`file.

Now you just run the `yarn start`command, and it will be running on `localhost:3000` :)
