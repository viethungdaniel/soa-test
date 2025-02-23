# TEST Website

Model: TEST

Node verions: 20

Tech: Next.js (v14), React.js (v18), Material UI (v6), Typescript (v5)

## Website

#### Production

[project-name.com](https://domain.com)

#### Development

[project-name.com](https://domain.com)

## Install

```bash
yarn
```

## Run localhost

```bash
yarn dev
```

## Build Project

```bash
yarn build
yarn start
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
