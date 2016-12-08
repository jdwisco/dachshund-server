## Dachshund Server

A sweet little dachshboard buddy for your morning prep.

## Stack

- ES6 support via [babel](https://babeljs.io)
- Provisioning via [Vagrant](https://www.vagrantup.com/) & [Ansible](https://www.ansible.com/)
- Database Flavor is [PostgreSQL](https://www.postgresql.org/). Install using homebrew `brew install postgresql`
- ORM is [Bookshelf](http://bookshelfjs.org/)

## Develop

Clone the repository, then

```
$ npm install
```

## Usage

- [Run](#run)
- [Deploy](#deploy)

### Run

Once you have installed the dependencies, you can use the following to run a development server.

```
$ vagrant up
$ vagrant ssh
$ npm run dev
```

Once you're done working, suspend the vagrant box

```
$ logout
$ vagrant suspend
```

### Deploy

```
$ heroku push master
```
