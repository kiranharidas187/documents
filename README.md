# Document Service


## 1. Cloning the User repository into your system

Goto https://github.com/ELEVATE-Project/documents From the code tab copy the link. Using that link clone the repository into your local machine.

Let's make it more easy for you:

    1. Create a new folder where you want to clone the repository.
    2. Goto that directory through the terminal and execute the commands.

git clone https://github.com/ELEVATE-Project/documents

## 2. Add .env file to the project /src/ directory

    create  a file named as .env in ./src/ directory of the project and copy below code into that file.
    Add fallowing enviorment configs

## 3. Run mongodb locally

spacify the mongo port and ip in .env
application takes the db as specified in the .env

### Required Environment variables:

````
```

#User Service Config

# Port on which service runs
APPLICATION_PORT = 3000

# Service environment
APPLICATION_ENV = development

#Route after base url
APPLICATION_BASE_URL = /documents/  

```
````

## 4. Install Npm

    npm i
    To install the dependencies in your local machine.

## 5. To Run server

    npm start