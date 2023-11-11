# HOW TO RUN DHIS2 DASHBOARDS VIEWER TASK

### PREREQUISITES
> node v18.18.1 or above

#### Running project locally

To start first clone the application from the repository:

```
git clone https://github.com/Jonas1015/dhis2-core-dashboards
```

Once done, navigate to the root directory of the repository:

```
cd dhis2-core-dashboards
```
after being inside the directory, install all the dependencies run:

```
npm install
```
once everything is installed, run

```
npm start
```

#### Deployment
Insie the project folder run

```
npm run build
```
after the build is done, copy the ```build``` folder and deploy to provider such as vercel, netlify etc.

Click [here](https://dhis2-dashboards.netlify.app/) to view the deployed version of the app in Netlify.

## Happy Coding!