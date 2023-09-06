# iPhone Calculator React App

Built to mimic the iPhone default Calculator IOS app (currently does not have the scientific calculator features available). 

- [Live website](https://projects.j8ahmed.com/iphone-calculator/)
- [GitHub Repo](https://github.com/j8ahmed/iphone_calculator)

## To Do:

- Finished adding integration tests
- Structure and layout plan for adding the Scientific Calculator features to the app.
- Fix some formatting bugs.

## Known Bugs:

- Formatting of floats to fit within calculator app's screen width.
    - Example bug production: 5 / 3 = 1.6666666667. Should be: 5/3 = 1.666667

## Resolved Bugs:

## `node-sass` Seemed to be Outdated

I was trying to run the app but it repeatedly failed due to the `sass` code not being read correctly by the `node-sass` package. I tried to look for an answer on [Stack Overflow](https://stackoverflow.com/questions/49475492/npm-install-error-code-ebadplatform) but ultimately that solution failed. I then ended up uninstalling `node-sass` from my `dependencies` and installing `sass` in my `devDependencies`. This resolved the issue thankfully. I guess this problem is the result of working with an older project whose dependencies may no longer be fully supported. I need to look into this further when I get some time. 

## Should `.eslintcache` Be in Our `.gitignore`

Seems like the answer is yes based on [this reddit post answer](https://www.reddit.com/r/webdev/comments/kvza92/should_eslintcache_be_in_git/) but I need to look into this a bit more. I lean towards agreeing since it's just a linter.

>Rule of thumb: If you delete it from your source tree, can you regenerate automatically it from the rest of the sources? If you make a fresh checkout on a pristine workstation, can your toolchain generate it for you? If the answer to these is "yes", then it doesn't belong in git.



---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

- `npm start`
    - Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm test`
    - See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `npm run build`
    - See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `npm run eject`
    - **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
