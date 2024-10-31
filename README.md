# Example-CRUD-Angular-18-Go
- The example shows how to Building an Angular CRUD App with a Go API and using MySQL as a database.
- The article of this repository https://blog.stackpuz.com/building-an-angular-crud-app-with-a-go-api
- To find more resources, please visit https://stackpuz.com

## Prerequisites
- Node.js
- Go 1.21
- MySQL

## Installation
- Clone this repository `git clone https://github.com/stackpuz/Example-CRUD-Angular-18-Go .`
- Change directory to Angular project. `cd view`
- Install the Angular dependencies. `npm install`
- Change directory to Go project. `cd ../api`
- Install the Go dependencies. `go mod tidy`
- Create a new database and run [/database.sql](/database.sql) script to create tables and import data.
- Edit the database configuration in [/api/.env](/api/.env) file.

## Run project

- Run Angular project. `npm start`
- Run Go API project `go run main.go`
- Navigate to http://localhost:4200