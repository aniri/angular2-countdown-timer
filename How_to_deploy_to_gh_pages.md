# How to host the Angular2 app on GitHub Pages using Angular CLI

I've recently started playing around with [Angular2](https://angular.io/) :) It takes a bit of getting used to, but I finally managed to build a demo app that I was ready to host online and share with friends. Since I already had the code up on [GitHub](https://github.com/), using [GitHub Pages](https://pages.github.com/) to host it seemed like the most convenient choice. Easier said that done!

Since Angular2 uses TypeScript code, has lots of node dependencies and a 'production mode', deploying on GitHub Pages turned out not to be so straightforward. But a few blog posts, github repos and comments, some updates and only one reboot later, I managed to deploy the app :D Using [Angular CLI](https://cli.angular.io/), a command-line interface for building Angular 2 applications, surely made things easier! Here are the steps I took:

## Step 1 - Update Node

Since I had an old version of node, I decided to update it to the latest version before installing Angular CLI.

I currently have version 6.10.0 of node and 4.4.0 of npm.

## Step 2 - Install Angular CLI

The Angular CLI is a tool to initialize, develop, scaffold and maintain Angular applications. It can be installed by running:

```
npm install -g @angular/cli
```

## Step 3 - Create and run a demo app with Angular CLI

```
ng new demo-project
cd demo-project
ng serve
```

After running these commands, http://localhost:4200/ should point to the new app. Also, the app will automatically reload if you change any of the source files.

If you've tried creating an Angular2 app from scratch you probably noticed how many dependencies have to be configured. Angular CLI took care of all and also provided the scaffolding for a new app!

### Step 3.1 - fix weird error that showed up when trying to create the new app

I assume it turned up because something was misaligned with the node-sass version that was installed. The error was fixed after running:

```
npm rebuild node-sass
```

## Step 4 - Deploy the app on GitHub Pages
First, you need to create a new repository for the app on GitHub. After that, you have to register the new repo and push the code to GitHub.

```
git remote add origin https://github.com/USERNAME/PROJECT_NAME.git
git push origin master
```

The code is now up, all there is left to do is to setup GitHub Pages for it.

## Step 5 - Setup GitHub Pages

Angular CLI used to include a command for setting up GitHub Pages

```
ng github-pages:deploy
```

but it was removed from the latest version. The command created a new git branch named gh-pages, built a production version of the app, committed and pushed the code to the new branch. GitHub Pages was also automatically set to start the app from this new branch.

The workaround was to use the [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) command.

It can be installed by running:

```
npm i -g angular-cli-ghpages
```

Before executing it, we need to create the dist folder for the project.

```
ng build --prod --base-href "https://USERNAME.github.io/PROJECT_NAME/"
```

We're now ready to run it:

```
angular-cli-ghpages
```

And our app is finally up and running at https://USERNAME.github.io/PROJECT_NAME ! :D

A few options are available for this command, you can [check them out on GitHub](https://github.com/angular-schule/angular-cli-ghpages).
