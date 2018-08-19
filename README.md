# Getting Started With Schematics

Schematic implementation for Rush Hour Media.


## Getting started quickly

Install the angular client: `npm install @angular/cli` (you might want to install it globally).

Create a new empty project: `ng new MyNewApp && cd MyNewApp`

Install the necessary package: `npm install rhm-schematics`

Add a `User` Data Provider with the needed `User` Data Adaptor: `ng generate --collection=rhm-schematics data-provider --name=User --add-data-adaptor=true`

Due to issues with the Angular CLI, this is likely needed.
Add the following to your angular.json file:
```
{
  ...,
  "cli": {
    "defaultCollection": "rhm-schematics"
  }
}
```


## Data Provider

Data provider schematic creates a service in charge of handling data of a specific type (User, Article, Menu...).

Data providers expose only the (simple, clean) front-end model for that type of data,
and uses a Data Adaptor to convert back and forth between the front-end and backend models.

The Data Provider is also responsible for fetching data and sending updates to the backend, as well as caching or locally storing the data.


## Data Adaptor

Data Adaptor schematic creates a service used to convert back and forth between the front-end and backend models of a specific data type.
They also provide interfaces for these models.


## Recommended use

Create one Data Provider per category of data (all User related terms, data, roles, permissions).
Example:
- UserDataProvider

Create a separate Data Adaptor for each specific type of data.
Example:
- UserDataAdaptor
- UserRoleDataAdaptor
- UserPermissionDataAdaptor


### Naming convention

When generating a Data Provider or Data Adaptor for a given data type, provide a singular name (not plural).
Correct: user
Wrong: users


# Resources related to Angular Schematics

[How to create your first custom angular schematics with ease](https://medium.com/@tomastrajan/%EF%B8%8F-how-to-create-your-first-custom-angular-schematics-with-ease-%EF%B8%8F-bca859f3055d)

[Generating custom code with the angular cli and schematics](https://www.softwarearchitect.io/post/2017/10/29/generating-custom-code-with-the-angular-cli-and-schematics.aspx)


# Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

