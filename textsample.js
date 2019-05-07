Use modern functional JavaScript style everywhere. Avoid assignment-heavy state-mutating code.
Build tiny vertical slices of end-to-end user value.
Implement static data display first, static state display second, interaction last.
Style from the start.
More on this below.

Even if you know React, do this activity, to see how modern JavaScript and React functional techniques simplify implementing React components and state.
Prerequisites
Brush Up on Modern JavaScript
You should be familiar with modern JavaScript coding. Much has changed in the past few years. A good reference is Modern JavaScript. A good one-page resource for React is the React Handbook.

Install your Tools
Install NodeJS. If you already have, be sure it's up to date. You need npx from the new versions of Node to run the create-react-app script.

Install the React Devtools for your browser. create-react-app does a lot of repackaging of your source HTML and JavaScript for deployment. The HTML and JavaScript the browser gets is very different from what you wrote. The devtools read metadata generated by create-react-app so that you can interact with your original source in the browser debuggers.

Do the Intro React Tutorial
Do the brief introduction to ReactJS tutorial so that you are familiar with the basic concepts of a React app, such as components, props, and how interactions occur.

Do the Quick, React! Tutorial
Do the Quick, React! tutorial. This introduces the essential JavaScript and React programming concepts needed to get a React app going on a clean solid basis. It includes functional components, stylng, fetching data, and interactive UI state handling.

It follows the Agile approach of implementing applications in very thin end-to-end vertical slices, using the React development process described in the Thinking in React tutorial:

Sketch the UI.
Implement static display of the data.
Add and test statis display of UI state
Finally, implement interactive state
A slice is a thin bit of your app, including user interface and back end. Do not do all front-end first, or all back-end first. What you choose to do in each slice is largely up to you, but it should something that either provides the most value for the end user or reduces the most risk on the technical side.

The App
This activity challenges you to build a moderately complicated shopping cart app.

If you are doing this in one of my courses, I will provide spreadsheet for reporting progress, via Canvas. This is where you will enter links to your repo, your app's public site, and the various commits along the way that commplete each subtask.

Your goal is to build an app very similar to this shopping cart app.

Play with this app briefly to see how it works. Some parts of it are obvious. Some parts are not, e.g., how to remove an item from the cart, and what text like "9 x $1.21" means.

Backlog
Here is the prioritized backlog of user stories for your app, broken down into user-testable releases.

Release 1: Catalog page
Vendors can create a catalog of available T-shirts, with names, prices, and pictures.
Shoppers can see a catalog page of all available T-shirts with names, prices, and pictures.
Note: No sizes or quantity in stock for now.
Release 2: Basic shopping
Shoppers can add a shirt to their shopping cart by clicking on one of the size buttons.
The same shirt and size can be added more than once.
Shoppers can see what they've selected so far and the total cost.
Shoppers can remove a shirt from their cart.
Release 3: Persistence and Inventory
A shopper can log in so that their shopping cart is automatically saved and available from any device.
A shopper always see what is currently in stock.
Create your app repository
Use create-react-app to create an empty shell for your shopping cart app.

npx create-react-app new-shopping-cart
Test that your empty app runs.

cd new-shopping-cart
npm start
The React web page should open in your browser.

Stop the server.

Create a repo for your app on github. Commit your code to it.

Put your name and a clickable link to the Github repo in the Learn React Report spreadsheet (link on Canvas).

Commit often to your local repo. Commit to github when something new works, but never break master.
Go public
Even though you don't have anything real yet, set up a public host for your project, so that you can user test and show your client, e.g., me., where you're at.

There are many web hosting services for dynamic web apps running NodeJS, such as Firebase, Heroku, and AWS. We’ll give instructions for Firebase. It provides three services for free that we need here: hosting, authentication, and a database.

Create an account at Firebase, if you don’t already have one.

Create a Firebase project at Firebase. This will be is the back-end for your app. You can call it anything, but choose something the same as or close to your app name.

Then follow these instructions to install the Firebase tools. Use the following settings to set up your project for deployment:
Firebase services: select hosting and realtime database
Firebase project: select the project you created on Firebase for the back-end.
If it doesn't appear in the list, follow these instructions
Public directory: enter build
If you forget to do this, you can fix it by editing the value of the key public in the file firebase.json, and re-deploying.
When initialization finishes, do

npm run build
firebase deploy
This will assemble your app and deploy it to Firebase.

If deployment fails, it's probably because you are not logged into Firebase. Do firebase login and try to deploy again.
The instructions also mention changing database.rules.json so that being logged in is not required. Do this if your app is showing database access errors in the developer console.
Open the URL for your app generated by Firebase. Verify that the app is working, images and all.

Create and commit your working app to github. Put your public URL on the report spreadsheet.

From this point on, your process for closing each task will be

Code until the app works locally, using npm start.
Build with npm run build, deploy with firebase deploy, and test your public version
Commit to Github.
Enter the link to the commit into the progress report spreadsheet.
Implement a static page
Always start an app by building the static view. This will give you something you can test and show to users, and provide the basis for designing the interactive parts. There are several steps to creating a static catalog page.

Create the data to display.
Sketch the user interface, in terms of logical components.
Implement the components as data-driven React components and HTML
Design and test your data
Always use realistic data. No dummy "lorem ipsum" stuff. Keep the amount of data small but complete enough to demonstrate the user stories you want to implement first.

Organize your data into a logical JSON structure.

For this project, use this products.json file. It's a modified version of the one in Ribeiro's shopping cart.

Put this file somewhere under the application's public directory. This will make it easy to fetch at runtime. We'll assume here the file is in public/data/products.json.

See fetching data section of the Quick, React! tutorial for how to get your data.

Run your app. If everything is set up correctly, instead of the React logo, you should see a plain list of the product titles. When this works, you're ready to do a real display of that data.

When your app is working locally and on the public site, commit to github, and update the progress sheet. Don't forget to npm run build before doing firebase deploy.

Design your UI component hierarchy
Create a sketch of the UI similar to that in the example app. You can use pencil and paper, a sketching tool, or just annotate a screen grab of the current UI.

Study the example on Thinking in React:

On your UI sketch, outline what you think would be appropriate containers and components.

Implement the components
Here, your app needs to show the T-shirt pictures, names, and prices, and the buttons for selecting a size. Even this is a lot to build, if you don't know React. The way to get things done is to follow the agile Thinking in React process and work in tiny functional slices. The following would be good slices. They can be done in almost any order:

Show a grid of "cards" with the product titles
Show the pictures of the shirts
Show the descriptions of the shirts
Show the prices of the shirts
Show the four size buttons, S, M, L, XL
Steal code ideas from React Old and New and the example app repository, but be aware that the shopping cart code includes an Express server, Redux state management (not needed for something this simple), a fairly complex component hierarchy, and bare CSS rather than a React style package.

As soon as a slice works, test it on your public host. When the entire page displays correctly, commit to github, and update the report spreadsheet.

Get the images from the example app repository. Put them under the public folder, e.g., public/data/products/.

To style your app, use a React-compatible framework, such as

Material-UI
Semantic UI React -- which is based on but different from Semantic UI; my current favorite but less popular than Material UI
React BootStrap
ReactStrap -- a somewhat new, smaller version of Bootstrap for React
This chart shows the number of downloads from Github for each package.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Add interaction
Adding the ability to add items to a cart means adding what React calls state. Read carefully what Thinking in React says counts as state. State has to do with the local user interface, not the state of the application. State in React does not include static data, nor anything that can be calculated from other bits of state.

The trick to implementing state is to first create the state variables with different values, and update your static display code to show the state appropriately. Don't try to implement state change until static state display works.

Identify the necessary state
In this case, there are two pieces of UI state:

Where the shopping cart is visible or not.
What's in the cart
Implement static state diplay
Add state using the useState() hook. See React Old and New for how to do this, and how to pass state down to subcomponents with props.

Define the new state in the smallest containing component possible. This makes the app easier to maintain and modify, and reduces how much prop passing you have to do. Thinking in React notes you might find it useful to create an intermediate component to hold state.

Do states in tiny slices, e.g., first do the state variable for whether the cart is open or closed. Test by initializing the variable to true and false, and make sure the shopping is visible only when it's supposed to be. After that works, add the state variable for the list of items selected so far. Be sure to be able to handle more than one of an item. Initialize with different lists and verify that the cart shows the right list, and, eventually, the right total cost.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Implement interactive state
This is where you add interactivity to your app. There are three primary user actions: viewing the cart, adding items to the cart, and removing items from the cart. That's a good order to do them in.

Do opening and closing the cart first. Clicking on the cart icon or any "buy" button should open the cart. Click on the close button should close the cart. See React Old and New for how to do this.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

When this works, move on to adding items to the cart. Note that adding an item should automatically open the cart and update the total.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Add removing items from the cart.
Add a control for removing an item. If more than one of a specific item has been selected, the count should be decremented by one.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Fetch from a database
Up to this point, all the data has been static. Most interesting web applications need to keep dynamic data on a server, whether it be game scores, comment posts, or whatever.

For this project, two examples of dynamic data would be

the inventory of shirts in stock
the user's shopping cart
Start with the inventory, since it doesn't require implementing authentication.

Show availability in your user interface
Add a state variable for inventory. The value of the variable will have the same format as inventory.json. Initialize to a small inventory with just a few shirt sizes. Use useState().

Update your product display code to only show a size button for sizes of shirts in stock. You decide what to do if no sizes of a shirt are available.

When that works, update your code to take into account the items in the shopping cart.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Add a database
The Firebase Real-time Database (Firebase RT) is a very simple cloud database. While simple, there are several very unintuitive aspects of Firebase RT:

Your data is literally just one big JSON object.
Arrays are evil.
You subscribe to the database rather than fetch data once.
One big JSON object
Your data is one JSON object. You can get the entire thing, but normally you want a subpart. You can address a specific piece of data with a URL-like sequence of keys. For example, person/name/first applied to the database is like x.person.name.first applied to an object x.

It's up to you to design and update the object appropriately in your code. Follow best practices. You can define rules to check that the structure of data being stored is correct, but they're beyond the scope of this tutorial.

Arrays are evil
The most counterintuitive thing when designing JSON for Firebase is that arrays are evil. This may seem odd if you're used to spreadsheets or SQL databases, which are just like big arrays. As the link explains, arrays are evil in Firebase because an array index is a terrible key for retrieving a data item. If the array is modified, the item's position can easily change.

Therefore, use only distinct keys and values in your JSON data. Both products.json and inventory.json follow this rule. Any piece of data has a path with stable keys, e.g., inventory/12064273040195392/M to get the number of medium size shirts with that SKU.

Arrays are OK for short lists whose elements would never be retrieved individually, e.g., a list of size types ["S", "M", "L", "XL"].

Subscribing versus fetching
Firebase RT is called "realtime" because the normal usage is to subscribe to the database or some subpart of it. Subscribing means your code listens for changes in that part of the database. For example, the Firebase RT give this example of listening for changes to the number of stars on a particular post in a Facebook-like app:

var starCountRef = firebase.database().ref(`posts/${postId}/starCount`);
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});
The first line sets up the path to the starCount field for the post with some ID stored in the variable postId. The second line subscribes to changes in that key's value. From this point on, whenever the star count for that post is modified, the function given in the on() call will be called with a snapshot object. In that code, snapsot.val() will have the new value. For a large object with many keys, you can listen for a new child being added, and just get the child data, instead of the entire object.

Initialize the inventory
For your first step, initialize the database with inventory.json file. Use the import button on the Firebase database console.

Importing a JSON file completely replaces all data. Only do this to initialize or reset your database.
Using Firebase with React Hooks
Where to put code to fetch data from a dynamically database is one of the more confusing aspects of React. Putting the code in the wrong place can lead to:

Pages that never show new data until the user does something silly like go to another page and come back, or, worse, restarts the app.
Apps that run very slowly because it turns out they're fetching data from the database everytime the user types a character.
In class-based React components, you put code to fetch data in the componentDidMount() lifecycle method of the appropriate component. See this example.

With hooks, you put code to fetch data inside a useEffect() function, as in this example. There are a couple important points about the code in this example that you should copy:

The function passed to useEffect() can't be asynchronous, i.e., it can't return a Promise. But it can be a regular function that calls an asynchronous function. That's why fetchData() is defined outside the useEffect() call.
By default, the function passed to useEffect() will be called every time the component is rendered. Rendering happens a lot. If you query a database that often, your app can be rejected for doing a denial of service attack. 
To avoid this, pass a list of variables as the second argument to useEffect(). The function will only be called when one of those variables changes value. An empty list means "call this function just once, on mounting". The example code says "call this function only when the URL changes".
The code that calls useState() and useEffect() is packaged into another function called useFetch(). This function is called a "custom hook". By using a name that starts with "use", linting programs can make sure you are obeying the Rules of Hooks.
Connecting to Firebase adds one more requirement. In Firebase you subscribe to changes in the database. You want to be sure to unsubscribe when the component is no longer being used. In class-based components, you would put this into the componentWillUnmount() lifecycle method. With useEffect(), you put that code into a function that useEffect() returns. React Hooks will store that function and call it if and when the component unmounts.

For how all this fits together to connect to Firebase with useState() and useEffect(), see this example.

Fetch inventory from the database
Add code to get the inventory data from Firebase and store it in your local inventory state variable.

If your code is correct, then if there are two large sizes of a shirt, the large button should disappear after you've the large button twice. It should reappear if you remove a large shirt from the cart.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Add authentication
Many developers do user accounts and login first. That's a terrible idea. There is nothing to be learned about your app idea from implementing login.

But once you have a working prototype that suggests your app is a good idea, you will probably want to keep track of users. Shopping is clearly an application that needs to know who someone is when they checkout.

Add user identity to your app
The first step is to add the ability to sign up and log in. Firebase supports multiple authentication options, e.g., email, Facebook, and Google. Add at least one form of authentication to your app. Google and email are quite simple, thanks to Firebase.

This repo has both code and a nice video that shows the basic steps for doing all the authentication methods. Even the mistakes are useful to watch. Note the use of the react-firebaseui library to get the buttons that say "log in with Google" and so on.

The example code uses class-based components. By now, you should be able to see how to rewrite it using hooks.
There is another smaller change to make to the example code. The callback signInSuccess has been deprecated by Google in favor of signInSuccessWithAuthResult. Define it to return false, to prevent redirection.
If the user is not logged in, your interface should show buttons to log in or sign up. If the user is logged in, your interface should show who is logged in and a logout button.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Add database updating
Add persistent shopping carts
Now that users can identify themselves, change your app so that the shopping cart for a user is automatically saved under the carts/userid key in the database, whenever the cart changes.

Whenever a user logs in, if there is a saved cart, it's contents should be added to the current shopping cart. Don't replace the current cart. The user may have selected some items before logging in. The user can always delete old items if they want to.

The logic for this has many edge cases. For example, whatever the user has selected plus the old cart may not be valid, given the currently available stock. When that happens, the cart has to be adjusted and a message appear telling the user what happened. This message should display until the user closes it. This kind of code would benefit greatly from automated unit testing.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

Add stock updating
As a final step, implement the logic for updating the inventory when someone checks out. When a user checks out, the inventory on the database should be updated appropriately.

Added optional functionality: when one user checks out, items in another user's cart may no longer available. One of the nice things about Firebase's realtime database is that code running on other user machines will automatically be called when the database changes. Take advantage of this to alert other users when some item has been removed from their cart. Ideally this should reuse much of the code you wrote above for loading old carts.

Test by having two different browsers open, with different users, e.g., two logged-in users, or a logged-in user and a guest, with shopping carts set up such when the logged-in user checks out, the other user's cart needs adjusting.

When your app is working locally and on the public site, commit to github, and update the progress sheet.

© 2019 Chris Riesbeck
Template design by Andreas Viklund