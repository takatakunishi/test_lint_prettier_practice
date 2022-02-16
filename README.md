# What is this Repository?
This repository is playground to learning test and fomatter.

# commands
## test
apply jest command for all file in __test__ folder
if warning in snapshot test, run `npm run test -- -u`

## lint:eslint
run eslint check for all file in /src folder

## fix:eslint
run eslint fix for all file in /src folder

## fmt:write
run prettier to format code for all file in /src folder

## fmt:check
run prettier check code format for all file in /src folder

## fmt
format all code in /src folder

# npm packages
## eslint-import-resolver-typescript
This package resolve import problem about tsconfig for baseUrl.
This package need to add two below setting.

In eslintrc
```
settings: {
    'import/resolver': {
        typescript: {},
    },
},
```

In jest.config
```
moduleDirectories: [
    "src"
],
```