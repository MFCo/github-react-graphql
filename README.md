# An example of React+GraphQL

This project is a PoC, the goal is to simulate GitHub behaviour with a ReactJS frontend, and consuming Github API GraphQL

## Functionality

This website show your GitHub profile (as you can see in the next image) at homepage, and it also let you to look for another users profile by their username. In the profile you can see standard information and a grid with all the selected user repo, repositories are shown paginated by 6 with a `Load more..` option. In this page you can also see wich repositories are watched/starred by the viewer.

![Homepage](https://i.imgur.com/YbiamBZ.png)

You can also navigate through your repositories as you can see in the next image, every time you go into one directory only that information is fetched! There is also an extra functionality...you are able to star/unstar repositories from the app! And if that's not enough you can also watch/unwatch repositories.

![Navigating](https://i.imgur.com/MM0bRR6.png)

I know there are some issues on navigation for example, everytime you go into one directory when you go back another request is performed, we could save the last state and then just go back to this last state, but I think if we are not in a data restricted environment (for example an application to be used with 3G connection) doing that extra request is a better choice.

## How to run it

It's pretty simple to run, you just need to create your own Personal Access Token (without it you can't hit GitHub API V4, that's the one we want to hit because the older ones are API REST). To create it just got to `Settings > Developer Settings > Personal Access Tokens` and generate a new one, be careful and save that token because once you go out that page you can't recover it, you'll need to create a new one.

Once you have your own token you just need to set it as an environment variable, for example in the root you can add a file called `.env`, and all the variables you declare there are going to be accessibles from your application, in this case you need to declare one called `REACT_APP_GRAPHQL_TOKEN`, it's just write `REACT_APP_GRAPHQL_TOKEN=<your token goes here>` on the first line of `.env`file.

Now you just run the `yarn start`command, and it will be running on `localhost:3000` :)
