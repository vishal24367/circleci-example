# Currents.dev - CircleCI Example

This is an example repository that showcases using [CircleCI](https://circleci.com) with [Currents.dev](https://currents.dev).

The example [config file](https://github.com/currents-dev/circleci-example/blob/master/.circleci/config.yml):

- runs 5 containers with cypress tests in parallel

- uses [Cypress Orb](https://circleci.com/developer/orbs/orb/cypress-io/cypress)

- uses [Custom Test Command](https://github.com/currents-dev/circleci-example/blob/master/.circleci/config.yml#L9) to run `currents` for recording test results and parallelization with [Currents.dev](https://currents.dev)

- Note: set your `projectId` from [Currents.dev](https://app.currents.dev) in `cypress.json`

- Note: use CLI arguments to customize your cypress runs, e.g.: `currents run --record --key <your Currents.dev key>`

- Note: create an organization, get your record key at [Currents.dev](https://app.currents.dev) and set [Envitonment variable](https://circleci.com/docs/2.0/env-vars/) `CURRENTS_RECORD_KEY`

Here's an example of how the demo workflow appears in Currents dashboard:

![Kapture 2021-09-16 at 12 14 16](https://user-images.githubusercontent.com/1637928/133671707-cd809410-863e-4118-9204-60410e17b0bd.gif)
