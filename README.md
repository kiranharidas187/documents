# Document Service


## 1. Cloning the Documents repository into your system

Goto https://github.com/ELEVATE-Project/documents From the code tab copy the link. Using that link clone the repository into your local machine.

Let's make it more easy for you:

    1. Create a new folder where you want to clone the repository.
    2. Goto that directory through the terminal and execute the commands.

git clone https://github.com/ELEVATE-Project/documents

## 2. Add .env file to the project /src/ directory

    create  a file named as .env in ./src/ directory of the project and copy below code into that file.
    Add fallowing enviorment configs

### Required Environment variables:

````
```

#Documents Service Config

# Port on which service runs
APPLICATION_PORT = 3000

# Service environment
APPLICATION_ENV = development

#Route after base url
APPLICATION_BASE_URL = /documents/  

```
````

## 3. Install Npm

    npm i
    To install the dependencies in your local machine.

## 4. To Run server

    npm start