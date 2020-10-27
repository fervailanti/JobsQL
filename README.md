<p align="center">
  <img src="https://user-images.githubusercontent.com/54537095/97338630-611ab780-1860-11eb-93b8-7c3294d3d648.png" width="120" />
</p>
<h3 align="center">
  JobsQL
</h3>
<p align="center">Work with GraphQL in a modern startup 🙌</p>

## Stack
This project is builded with: **[React Native](https://reactnative.dev/)** (hooks), **[GraphQL](https://graphql.org/)**, **[Apollo](https://www.apollographql.com/)**, **[React Navigation](https://reactnavigation.org/)**, and a couple more detailed in `package.json`.

## Setting up

### Android

1. Create a file called `local.properties` at `JobsQL/android/` with the following line:

#### For Windows users:
````
sdk.dir=C:\\Users\\UserName\\AppData\\Local\\Android\\sdk
````
_Replace UserName with your pc user name . Also make sure the folder is sdk or Sdk._

#### For Mac users:
````
sdk.dir = /Users/USERNAME/Library/Android/sdk
````
_Where USERNAME is your OSX username._

#### For Linux (Ubuntu) users:
````
sdk.dir = /home/USERNAME/Android/Sdk
````
_Where USERNAME is your linux username (Linux paths are case-sensitive: make sure the case of `S` in `Sdk` matches)._
<br />

2. Run `yarn android`

### iOS

1. Run `cd ios && pod install`.<br/>
2. Run `cd ..`.<br/>
3. Run `yarn ios`.<br/>

## Available Scripts

In the project directory, you can run:

- `yarn android`: Build and install de app in Android (debug mode).

- `yarn ios`: Build and install de app in iOS (debug mode).

- `yarn start`: Starts the metro bundler.

- `yarn test`: Run jest tests.
