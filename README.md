# Today I Learned

https://jhcse5189.github.io/TIL/


### Build locally

```
$ yarn docs:dev
```

### Shell Script Deploy

```
(check remote && install node, npm, yarn)
$ yarn install
$ sh deploy.sh
```

### Issues

- [x] Node 17 openssl 3.0 Webpack issue

```
$ export NODE_OPTIONS=--openssl-legacy-provider

/* Reference */
https://github.com/webpack/webpack/issues/14532
```

### Progress

```
2022. 02. 01. - manual deployment by deploy.sh
2022. 06. 12. - fix Node 17 openssl 3.0 Webpack issue
```
