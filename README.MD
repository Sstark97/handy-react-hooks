[![licence: MIT](https://badgen.net/badge/license/MIT/blue)

# Handy React Hooks

> My personal custom hooks and a compilation of comunity custom hooks

## Prerequisites

This project requires NodeJS (version 14.16.1 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
7.19.1
v14.16.1
```

## Table of contents

- [Babel Custom Hooks](#Babel Custom Hooks)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [useFetch](#usefetch)
      - [Options](#options)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/Sstark97/handy-react-hooks
$ cd PROJECT
```

To install and set up the library, run:

```sh
$ npm install -S myLib
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev myLib
```

## Usage

## useFetch

```js
useFetch(url: string = '', config: object)
```

#### Options

`url`

| Type   | Default value |
| ------ | ------------- |
| string | ''            |

If present, the request will be performed as soon as the component is mounted

Example:

```jsx
const FetchComponent = () => {
  const { data, error, loading } = useFetch(
    "https://api.icndb.com/jokes/random"
  );

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

`config`

| Type   | Default value | Description           |
| ------ | ------------- | --------------------- |
| Object | null          | Fecth optional Config |

If present, the request will be use the optional config

Example:

```jsx
const FetachComponent = () => {
  const { data, error, loading } = useFetch(
    "https://api.icndb.com/jokes/random",
    {
      method: "POST",
      body: {
        name: "I'm POST",
      },
    }
  );

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

## useNearScreen

```js
useNearScreen();
```

### Description

You can use these hook to know if an html element is inside the viewport, and
the hook returns a in the show variable true if the element is inside the viewport
and a reference to it.

## useLocalStorage

```js
useLocalStorage(key: string = '', initialValue: any)
```

#### Options

`key`

| Type   | Default value |
| ------ | ------------- |
| string | ''            |

`initialValue`

| Type | Default value | Description          |
| ---- | ------------- | -------------------- |
| any  | null          | initialValue to save |

Example:

```jsx
const LocalStorageComponent = () => {
  const { storedValue, error, setLocalStorage } = useLocalStorage("test", "These is a test");

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {storedValue}</p>}
    </div>
  );
};
```

## useSessionStorage

```js
useSessionStorage(key: string = '', initialValue: any)
```

#### Options

`key`

| Type   | Default value |
| ------ | ------------- |
| string | ''            |

`initialValue`

| Type | Default value | Description          |
| ---- | ------------- | -------------------- |
| any  | null          | initialValue to save |

Example:

```jsx
const SessionStorageComponent = () => {
  const { storedValue, error, setSessionStorage } = useSessionStorage("test", "These is a test");

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {storedValue}</p>}
    </div>
  );
};
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Authors

- **Aitor Santana** - _Initial work_ - [Aitor Santana](https://github.com/Sstark97)

## License

MIT
