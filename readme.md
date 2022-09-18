## Features
- A component UI Library that's built using ReactJS with typescript
- Storybook for organized UI systems making both the building process and documentation more efficient and easier to use
- Uses the same styling as Nitrozen-vue
- Uses SCSS for styling.
- Library published on NPM and can be consumed using the command ``` npm install @aadeshkulkarni/oxygen ```
- Rollup for bundling
- Support for ESM and CommonJS
- React-testing-library with Jest support for unit-testing components

------------
### Installation
- clone the repository
- ``` npm install ```
- ``` npm run storybook ```
-------------
### To consume the library,
- In your React / Next / Typescript with React project, run ``` npm install @aadeshkulkarni/oxygen ```
- You can start consuming the components like so

``` (App.js)
import { Button } from '@aadeshkulkarni/oxygen';
.
.
<Button rounded theme="primary">Save</Button>

```
-------------- 
### Available Scripts

- #### Build the component library 
    ``` npm run rollup ```
- #### Run storybook locally 
    ``` npm run storybook ```
- #### Build storybook 
    ``` npm run build-storybook ```
- #### Publish the library to NPM registry
    ``` npm publish ```
- #### Run tests 
    ``` npm run test ```
 
-------------

### NPM Auth Token

Inorder to publish changes to NPM Registry, following things are necessary:

1. Changing the version number
2. The correct access-token to perform the publish command. (Hint: ``` nano ~/.npmrc ``` )


## FAQs

### Why Typescript ?

- TypeScript will save a ton of time for us, because it introduces types and compile-time checking. 
- In addition, TypeScript will be helpful when we build components for our library, because we will be dealing with props in React components, and defining types will avoid issues when passing props to the components.

### Why Rollup instead of Webpack for bundling ?
- Webpack is useful for bundling applications but are complicated while bundling libraries. Rollup is useful for bundling libraries / small applications.
- Rollup represents the next generation of build tools in terms of its 
    - performance (build time), 
    - intermediate configuration (less complicated than webpack but more involved than Parcel), 
    - and optional but out-of-the-box features likes source maps
    
### Why Scss, not Less for styling ?
- While both provide similiar functionalities, they are different only in syntax.
- Scss can be replaced with Less easily. Just a matter of developer's choice
