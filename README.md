# Social Hobby

#### Indpendent Project April 16, 2019

#### By **Kimberly H. Lu**

[Github repository](https://github.com/kchamp45/SocialHobby/)

Welcome to an amazing application for sharing your favorite hobbies!  This application allows you to share hobby and decorating ideas and interact with other hobbyists in real time, just like Facebook, but for serious hobby enthusiasts!

![app-screenshot](https://github.com/kchamp45/SocialHobby/blob/master/app/src/assets/images/crafts.jpeg?raw=true)

## Setup/Installation Requirements

This application can be viewed in a browser.  In your computer terminal, please navigate to your desktop and execute:  $ git clone https://github.com/kchamp45/SocialHobby.  Navigate to this cloned file with $ cd share-now.  Once in this share-now file, execute $ npm run start.  In your browser, navigate to http://localhost:8080/.  Start interacting and enjoy! In your terminal, type $ Ctrl + C to quit the application.

## Known Bugs

There are no known bugs.

## Technologies Used

Harnessing the power of the React.js library using JSX in Atom to source code.  The source code gets transpiled with Babel to Javascript ES2015, as most browsers only understands Javascript. The dependencies are managed with node package manager and the source code is bundled and minified with Webpack.  

## User Stories:

* I want to search for hobby or craft ideas.
* I want to share my hobby or craft ideas.
* I want to comment on other users' hobby or craft ideas.
* I want to share my bio.

## Specs

| Behavior  | Input | Output |
| ------------- |:-------------:| -----|
| create an account | enter user information and click "create account"| account created and saved |
| login into a saved account | enter user email and password | after authentication, user enters main view|
| display bio  | enter name and biography description| Display said info |
| display hobby that I searched | enter search term| display hobby |
| display a comment | enter comment in a form| display said comment|

## Future features

* Calculate the likes and dislikes of a comment.
* Calculate the likes and dislikes of a hobby idea.
* Sort the hobbies by popularity.
* Provide users with special hobby or craft ideas with an a la carte payment or by subscription.

### License

Published under MIT License.

Copyright (c) 2019 **_Kimberly H. Lu_**
