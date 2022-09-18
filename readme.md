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
import Button from '@aadeshkulkarni/oxygen';
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
