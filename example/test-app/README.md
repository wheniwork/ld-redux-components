# Example ld-redux-components app

_This example app was generated using [Create React App](https://github.com/facebook/create-react-app) (For reference beyond getting this running, look there)_

## Running the app

* Make sure you have [yarn](https://yarnpkg.com/en/docs/install)
* In this project directory, run `yarn install`
* In `/src/App.js`, set lines 19 and 21 to their respective values from your LD setup
* In `/src/appStuff/containers/*.js`, set the `flagId` on each `Feature` component prop as necessary
* Run `yarn start`

## Overview

This app is a simple react/redux site. It only stores state related to Launch Darkly flags
as initiated in `/src/App.js` and `/src/rootReducer.js`.

## Implementation Examples

* `/appStuff/containers/FeatureDisplay.js` --> example only using the `Feature` Component
* `/appStuff/containers/FeatureWithVariantsDisplay.js` --> example using `Feature` and `Variant` together

## Usage

When the app is up and running, you should be able to toggle the feature flag in Launch Darkly,
and the app should respond almost immediately.
