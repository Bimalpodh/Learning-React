# Namastey React 🚀

.....
# Parcel
- dev Build
- Local Server
- HMR =Hot Module Replacement(automatically refresh on web page when we change in code)
- File Watching algorithm - (parcel ) is written in c++
- catching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Comprssing File
- Consistent Hashing (Read)
- Code Splitting
- Differentiate Bundling - support older browsers
- Diagnostic
- Error Handling 
- HTTPs
- Tree Shaking - It removes unused code (Tree shaking algorithm )


# food ordering app

/**
 * 1.Header
 *    -Logo
 *    -Nav bar
 * 2.Body
 *    -Search
 *    -Reastaurant caontainer
 *    -Resto Card
 *       -image
 *       -name of the restaurant,cuisines, delivery time,etc
 *       -rating
 * Footer
 *    -copy right
 *    -links
 *    -Contack
 */


There are Two Types of Export and import

1.  Default Export / Import
    export default ComponentName
    import Componnent from "Path"
2.  Name Export /Import
    export connst Component;
    import {Component} from "path"

# React Hook
    (Normal JS utility function)
    There are  two type of  most popular hook
    1. useState()- It is used to provide super powerful state varibale
    2. useEffect()-it  is used to handle the side effects such as fetching data from API call and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering.
# Routing
    There is Two types of roting.
    1. Serverside routing
    2. Clientside routing

# Class Component Life Cycle
    /*
    - Parent Constructor
    - Parent Render
      - child(1) Constructor
      - child(1) Render 
    
      - child(2) Constructor
      - child(2) Render 
    <DOM UPDATEd - IN SINGLE BATCH>
      -child(1) ComponentDIdMOunt
      -child(2) ComponentDIdMOunt
    - Parent ComponentDidMount
    */ 

# Redux ToolKit
    - Install @reduxjs/toolkit and react-redux
    - Build Our store
    - Connect our Store to aou app
    - Slice(CartSlice)
    - Dispatche(action)
    - Selector


# Types of testing (developer)
    1- Unit Testing
    2- Integration Testing
    3- End to End Testing -(e2e testing)

# Setting up Testing in our app
    - Install React Testing Library
    - installed jest
    - installed Babel dependencies
    - configure babel
    - configure parcel config file to disable default babel         transpilation
    - jest configuration
    - jest -npx jest --init
    - install @babel/preset-react - to make jsx work in test
    - include @babel/preset-react inside my babel config  (babel.config.js)
    - npm install -D @testing-library/jest-dom