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
once everything is installed, run tests to make sure that it is working
```
npm run tests
```
and the output should be
```
 PASS  src/components/DashboardItems/__tests__/DashboardsList.test.js
 PASS  src/components/DashboardsList/__tests__/DashboardsList.test.js
 PASS  src/components/LoadDashboards/__tests__/LoadDashboards.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.063 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```
Once you are sure everything is working, run

```
npm start
```


#### Deployment
Before building the app, run tests to ensure everything is working as expected, run
```
npm run tests
```
Depending on how much code you've changed, there might be more tests (if you have added), all tests should pass before you build the project by running

```
npm run build
```
after the build is done, copy the ```build``` folder and deploy to provider such as vercel, netlify etc.

Click [here](https://dhis2-dashboards.netlify.app/) to view the deployed version of the app.