# Currents.dev - CircleCI Example

This is an example repository that showcases using [CircleCI](https://circleci.com) with [Currents.dev](https://currents.dev).

The example [config file](https://github.com/currents-dev/circleci-example/blob/master/.circleci/config.yml):

- runs 3 containers with cypress tests in parallel

- uses [Cypress Orb](https://circleci.com/developer/orbs/orb/cypress-io/cypress)

- uses [Custom Test Command](https://github.com/currents-dev/circleci-example/blob/master/.circleci/config.yml#L9) to run `cypress-cloud` for recording test results and parallelization with [Currents.dev](https://currents.dev)

- Note: set your `projectId` from [Currents.dev](https://app.currents.dev) in `currents.config.js`

- Note: use CLI arguments to customize your cypress runs, e.g.: `cypress-cloud run --record --key <your Currents.dev key>`

- Note: create an organization, get your record key at [Currents.dev](https://app.currents.dev) and set [Environment variable](https://circleci.com/docs/2.0/env-vars/) `CURRENTS_RECORD_KEY`

---

Here's an example of the demo run in Currents.dev dashboard, note that 3 cypress agents were used as part of this run:
