## Features
- A component UI Library that's built using ReactJS with typescript
- Rollup for bundling
- Support for ESM and CommonJS
- Uses the same styling as Nitrozen-vue
- Storybook for organized UI systems making both the building process and documentation more efficient and easier to use
- React-testing-library with Jest support for unit-testing components
- Library published on NPM and can be consumed using the command ``` npm install @aadeshkulkarni/oxygen ```
------------
## Available Scripts

#### Build the library 
``` npm run rollup ```
#### Run storybook locally 
``` npm run storybook ```
#### Build storybook 
``` npm run build-storybook ```
#### Publish the library 
``` npm publish ```
#### Run tests 
``` npm run test ```

------------- 
### NPM Auth Token

Inorder to publish changes to NPM Registry, following things are necessary:

1. Changing the version number
2. The correct access-token to perform the publish command. (Hint: ``` nano ~/.npmrc ``` )
