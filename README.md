# TEST Website

Model: TEST
Node verions: 20

## Website

#### Production

[project-name.com](https://project-name.com)

#### Development

[project-name.com](https://project-name.com)

## Install

```bash
yarn
```

## Run localhost

you must run https under localhost according to the command below to be able to use login

```bash
yarn dev:http
```

## Build Project

##### Development

```bash
yarn dev:http
```

### Production

```bash
yarn build
yarn start
```

###### Noted: you must use https to log into the system

## Instructions for deployment on the server environment

```bash

```

## Clear Cache

```
yarn cache clean --force
```

## Upgrade Package Version

1. Check the list of packages that need updating

run

```bash
yarn upgrade-interactive
```

or run

```bash
yarn upgrade-interactive --lastest
```

if you want to upgrade the version latest

2. Updates package.json with versions installed from yarn.lock

```bash
syncyarnlock -s -k
```

3. Updates yarn.lock with current version constraint from package.json

```bash
yarn install
```
