`#react.js` `#master-in-software-engineering`

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# React.js Wish List <!-- omit in toc -->

In this project you will learn how to create a React.js Wish list connected with backend
## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [The Project](#the-project)
- [Project requirements](#project-requirements)


## Getting Started

This is a wishlist feature for an e-commerce app built with React that allows users to save products they are interested in purchasing for future reference. 
## The Project

This is a wishlist feature for an e-commerce app built with React that allows users to save products they are interested in purchasing for future reference. The wishlist feature is built using useState, useEffect, useContext and input events to create a seamless user experience.


## Project requirements




### Show All the Wishes

In this step you must implement the logic to render all the wishlist items of the app.
This means that all the wishlist items are rendered without taking into account if they
are completed or not.

1. **A wishlist must be created and its state passed as props or context to the required
   page components**
2. **All the methods that modify the state must also be passed as props or context**
3. If there are no wished items created you must render a message telling the user that
   they can create their first wish to get started
4. You can also render an illustration that indicates users how they can create
   a wish to get started.

### Creating Wishes


Users should be able to add todos to their wishlist. 
1.  If the user presses enter without entering a value in the wish form, an
    error message should be rendered.
2.  Users must be able to press the `enter` key on their keyboard to create the
    wish (if you implement it using semantic html5 this comes for free)



### Editing Wishes

Users should be able to edit their wishlist. 

1. Clicking the wish name should open a form that allows users to edit the wish
   name.
2. Users should be able to delete wishes by clicking the `X` button that is
   rendered when users hover over the wish name. The removed wish should be removed from the app's state using useState.
3. Users must be able to mark a wish as completed when they press the `Done`
   button that is rendered when the user hovers over the wish name

### Filtering wishes

In this step you will create a page for each wish type.

In order to allow users to navigate to a page you will need to complete the
footer of the app that you can see in the screenshot above.

You will have to render the following in the footer:

1. The total count of all the `active` wishes
2. A link to the home page that renders `all` the wishes, **both active and
   completed**
3. A link to the active wishes page that renders the `active` wishes
4. A link to the completed wishes page that renders the `completed` wishes



