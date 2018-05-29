# ld-redux-components

[![npm version](https://img.shields.io/npm/v/ld-redux-components.svg?style=flat-square)](https://www.npmjs.com/package/ld-redux-components) [![npm version](https://img.shields.io/npm/dm/ld-redux-components.svg?style=flat-square)](https://www.npmjs.com/package/ld-redux-components) [![npm version](https://img.shields.io/npm/dt/ld-redux-components.svg?style=flat-square)](https://www.npmjs.com/package/ld-redux-components) [![npm version](https://img.shields.io/npm/l/ld-redux-components.svg?style=flat-square)](https://github.com/wheniwork/ld-redux-components/blob/master/LICENSE) ![build](https://api.travis-ci.org/wheniwork/ld-redux-components.svg?branch=master)

> Feature Flag Components for Launch Darkly that work seemlessly with redux

_ld-redux-components_ is a helper library for Launch Darkly in React that relies on your feature flags being stored in redux.

It is recommended that you use [ld-redux](https://github.com/yusinto/ld-redux), as it provides an easy and clean way to connect Launch Darkly flags to redux, and works as a nice wrapper for [ldclient-js](https://github.com/launchdarkly/js-client).

## Getting Started

You should define your Launch Darkly redux strategy before using _ld-redux-components_. It won't work without your flags in redux. As stated above, [ld-redux](https://github.com/yusinto/ld-redux) is the best option, but the only compatability requirement is that you nest your flags in an object of key/value pairs under a key in the base of your redux store. Here is an example of what your store might look like,

```javascript
{
    ...,
    "LD": {
        "debugger": true,
        "newFeature": "on",
        "tasks": false,
    },
    ...,
}
```

(note: the above example is using `camelCase` as _ld-redux_ does, but you can store the flags as `lisp-case` if you so choose)

## Installation

```bash
yarn add ld-redux-components
# or
npm install ld-redux-components
```

## Quickstart

1.  In your client bootstrap, initialize _ld-redux-components_:

```jsx
import { ldrComponentConfig } from "ld-redux-components";

//This value will be the key in your redux store where your flags are stored
ldrComponentConfig.init({
  reduxKey: "LD"
});
```

2.  Import and use `Feature` and `Variant` helper components in a component:

```jsx
import React, { Component } from "react";
import { Feature, Variant } from "ld-redux-components";
import { Item } from "<my-app>/item";

export default class FeatureDisplay extends Component {
  render() {
    return (
      <Feature flagId="testFlagId">
        <Variant variation={true}>
          <Item name="FLAG IS TRUE" icon="smile" color="green" />
        </Variant>
        <Variant variation={false}>
          <Item name="FLAG IS FALSE" icon="frown" color="red" />
        </Variant>
        <Variant isDefault>
          <Item name="FLAG IS NULL/UNDEFINED" icon="meh" color="blue" />
        </Variant>
      </Feature>
    );
  }
}
```

Boom! `ld-redux-components` is working! Notice how there is no need to connect your component, as the `Feature` component does that heavy lifting for you. Just add `Feature` and `Variant` components where you please.

## Components

### `Feature`

#### props

| name        | type                      | required | default | description                       |
| ----------- | ------------------------- | -------- | ------- | --------------------------------- |
| `flagName`  | string                    | `true`   | -       | name of flag stored in redux      |
| `variation` | string, bool, array, null | `false`  | -       | value of flag                     |
| `onReady`   | function                  | `false`  | -       | callback fired when ld connected  |
| `waitForLD` | bool                      | `false`  | `false` | wait to render until ld connected |

#### Usage Details

* `Feature` is primarily used as a wrapper of `Variant` components.
* For cases where you only need to either show or not show something, you can set the `variation` prop. This allows you to avoid using unnecessary `Variant` components when you only have one variation you care about.
* `variation` should not be set if you plan on using `Variant` components underneath `Feature`.

#### Examples

`Feature`

```jsx
import React, { Component } from "react";
import { Feature, Variant } from "ld-redux-components";
import { Item } from "<my-app>/item";

export default class Display extends Component {
  render() {
    return (
      <Feature flagId="testFlagId">
        <Variant variation={true}>
          <Item name="FLAG IS TRUE" icon="smile" color="green" />
        </Variant>
        <Variant variation={false}>
          <Item name="FLAG IS FALSE" icon="frown" color="red" />
        </Variant>
      </Feature>
    );
  }
}
```

`Feature` with `variation` prop set and no `Variant` components

```jsx
import React, { Component } from "react";
import { Feature } from "ld-redux-components";
import { Item } from "<my-app>/item";

export default class Display extends Component {
  render() {
    return (
      <Feature flagId="testFlagId" variation={true}>
        <Item name="FLAG IS TRUE" icon="smile" color="green" />
      </Feature>
    );
  }
}
```

### `Variant`

`Variant` MUST be defined underneath a `Feature` component

#### props

| name        | type                      | required | default | description                         |
| ----------- | ------------------------- | -------- | ------- | ----------------------------------- |
| `variation` | string, bool, array, null | `false`  | -       | value of flag                       |
| `isDefault` | bool                      | `false`  | false   | display on null/undefined variation |

#### Usage Details

* Must be defined underneath `Feature` component
* Will always evaluate against the closest parent `Feature` component (yes, this means you can nest Feature/Variants in other Feature/Variants, and Variants can be deeply nested under Features)
* `isDefault` can be used as handler in case a flag is undefined or set to null. You can use this in combination with `variation`, or by itself

#### Examples

Two Variants

```jsx
import React, { Component, Fragment } from "react";
import { Feature, Variant } from "ld-redux-components";
import { Item } from "<my-app>/item";

export default class Display extends Component {
  render() {
    return (
      <Feature flagId="testFlagId">
        <Variant variation={true}>
          <Item name="FLAG IS TRUE" icon="smile" color="green" />
        </Variant>
        <Variant variation={false}>
          <Item name="FLAG IS FALSE" icon="frown" color="red" />
        </Variant>
      </Feature>
    );
  }
}
```

Multiple Variants

```jsx
import React, { Component, Fragment } from "react";
import { Feature, Variant } from "ld-redux-components";
import { Item } from "<my-app>/item";

export default class Display extends Component {
  render() {
    return (
      <Feature flagId="testFlagId">
        <Variant variation="control">
          <Item name="FLAG IS TRUE" icon="smile" color="green" />
        </Variant>
        <Variant variation={["treatment", "none"]}>
          <Item name="FLAG IS FALSE" icon="frown" color="red" />
        </Variant>
      </Feature>
    );
  }
}
```

Variant with isDefault

```jsx
import React, { Component, Fragment } from "react";
import { Feature, Variant } from "ld-redux-components";
import { Item } from "<my-app>/item";

export default class Display extends Component {
  render() {
    return (
      <Feature flagId="testFlagId">
        <Variant variation={true}>
          <Item name="FLAG IS TRUE" icon="smile" color="green" />
        </Variant>
        <Variant isDefault>
          <Item name="FLAG IS NULL/UNDEFINED" icon="meh" color="yellow" />
        </Variant>
      </Feature>
    );
  }
}
```

Deeply Nested Variant

```jsx
import React, { Component, Fragment } from "react";
import { Feature, Variant } from "ld-redux-components";
import { Item } from "<my-app>/item";
import { SomeOtherComponent } from "<my-app>/someOtherComponent";

export default class Display extends Component {
  render() {
    return (
      <Feature flagId="testFlagId">
        <SomeOtherComponent>
          <Variant variation={true}>
            <Item name="FLAG IS TRUE" icon="smile" color="green" />
          </Variant>
        </SomeOtherComponent>
        <Variant variation={false}>
          <Item name="FLAG IS FALSE" icon="frown" color="red" />
        </Variant>
      </Feature>
    );
  }
}
```

Feature/Variants Nested under Feature/Variants

```jsx
import React, { Component, Fragment } from "react";
import { Feature, Variant } from "ld-redux-components";
import { Item } from "<my-app>/item";

export default class Display extends Component {
  render() {
    return (
      <Feature flagId="testFlagId">
        <Variant variation={true}>
          <Feature flagId="anotherFlagId">
            <Variant variation="on">
              <Item name="FLAG IS ON" icon="smile" color="green" />
            </Variant>
            <Variant variation="off">
              <Item name="FLAG IS OFF" icon="frown" color="red" />
            </Variant>
          </Feature>
        </Variant>
        <Variant variation={false}>
          <Item name="FLAG IS FALSE" icon="frown" color="red" />
        </Variant>
      </Feature>
    );
  }
}
```

#

## Misc.

For a working example, check this [example app](https://github.com/wheniwork/ld-redux-components/tree/master/example/test-app) out (you'll need to provide your own credentials and flags to get things working locally)

## Contributions

Welcome!
