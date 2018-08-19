# Getting Started With Schematics

Schematics for Rush Hour Media's Angular front-end apps.

Available blueprints:
- data adaptor
- data provider (+ optional data adaptor)
- site section
- site sub-section

Next on the to-do list:
- site section + several sub-sections (simultaneous and all linked and ready)
- basic app (with authentication and api services ready for use)
- custom shared component (button, tag label, card...)
- instructions on how to 

## Getting started quickly

### Creating an empty project for testing

Install the angular client: `npm install @angular/cli` (you might want to install it globally).

Create a new empty project: `ng new MyNewApp && cd MyNewApp`

### Adding a Data Provider and a Data Adaptor

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

### Adding a Site Section

Install the necessary package: 
`npm install rhm-schematics`

Then add the site section:
`ng generate --collection=rhm-schematics site-section --name=MyTest` 

Then add one or more sub section to the previous new site section:
`ng generate --collection=rhm-schematics site-sub-section --sectionname=MyTest --subsectionname=MyTestDetails`

Then, for each sub section:

1. Manually add the Subsection component to the Site section's .module.ts file, in the `declarations:{}` and `exports:{}` sections.
2. Manually add the routes for each Subsection to the site section's routes ...-routing.module.ts file.


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

