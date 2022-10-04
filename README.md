# Today I Learned

https://jhcse5189.github.io/TIL/

### Environment (as of 22.10.05)
```
$ lsb_release -a
Description:    Ubuntu 20.04 LTS
$ sudo apt-get install -y nodejs
$ node -v
v18.10.0
$ npm -v
8.19.2
```

### Build locally (as of 22.10.04)

```
$ sudo apt install nodejs
$ node -v
v10.19.0
$ sudo apt install npm
$ npm -v
6.14.4
$ sudo npm install -g yarn
$ yarn -v
1.22.19
$ yarn add -D vuepress
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
(install nodejs latest)
$ export NODE_OPTIONS=--openssl-legacy-provider

/* Reference */
https://github.com/webpack/webpack/issues/14532
```

- [x] Authentication failed for remote setting
```
$ git remote set-url origin https://jhcse5189:{token}@github.com/jhcse5189/TIL/
```

### Progress

```
2022. 02. 01. - manual deployment by deploy.sh
2022. 06. 12. - fix Node 17 openssl 3.0 Webpack issue
2022. 10. 04. - fix local-build method as of today on Ubuntu 20.04 LTS
```
