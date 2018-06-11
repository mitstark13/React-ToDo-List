# React To-Do List

Uses create-react-app as the boilerplate starter files. Some of the starter comments/code is still present.

cd react-todo-app
yarn install (npm install)
yarn start (npm start)

yarn start should automatically open your browser, but if not, the site is at localhost:3000.

src/ contains the react components:
   AppHead: List input and button for adding new tasks
   AppList: Container wrapper around list items
   Task: The template for each task, accepts data to populate template
   Loader: Fanciest loading animation ever
   Index.js: Overall container which renders on the actual page at ID 'root' (see end of index.js file)

public/ contains the main index.html file, base scss, and the tasks.json which has the initial tasks to be loaded on page load.