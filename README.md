# Currents.dev - CircleCI Example

This is an example repository that showcases using [CircleCI](https://circleci.com) with [Currents.dev](https://currents.dev).

The example [config file](https://github.com/currents-dev/circleci-example/blob/master/.circleci/config.yml):

- runs 5 containers with cypress tests in parallel

- uses [Cypress Orb](https://circleci.com/developer/orbs/orb/cypress-io/cypress)

- uses [Custom Test Command](https://github.com/currents-dev/circleci-example/blob/master/.circleci/config.yml#L9) to run `currents` for recording test results and parallelization with [Currents.dev](https://currents.dev)

- Note: set your `projectId` from [Currents.dev](https://app.currents.dev) in `cypress.json`

- Note: use CLI arguments to customize your cypress runs, e.g.: `currents run --record --key <your Currents.dev key>`

- Note: create an organization, get your record key at [Currents.dev](https://app.currents.dev) and set [Envitonment variable](https://circleci.com/docs/2.0/env-vars/) `CURRENTS_RECORD_KEY`

---

Here's an example of the demo run in Currents.dev dashboard, note that 3 cypress agents were used as part of this run:

<img width="1099" alt="CircleCI Demo with Currents.dev" src="https://user-images.githubusercontent.com/1637928/140193627-49b281a4-b170-4e6f-971f-34c0c719d558.png">
<img width="850" alt="Screen Shot 2021-11-03 at 2 08 34 PM" src="https://user-images.githubusercontent.com/1637928/140193744-873a2903-4918-4abd-a255-3a3fd3776ff5.png">

## Reporting Run Status to GitHub

Currents.dev dashboard GitHub integration allows you to send run detals from Currents.dev to GitHub commits / PRs. Here's an example of [PR commit status](https://github.com/currents-dev/circleci-example/pull/1) reported by Currens.dev:

<img width="916" alt="Currents.dev GitHub Integration example" src="https://user-images.githubusercontent.com/1637928/140194057-bb1f58bd-6d42-4a22-8377-704b96fac78e.png">

The integration was created from project settings within Currents.dev dashboard:

<img width="257" alt="Currents.dev GitHub Integration Setup Example" src="https://user-images.githubusercontent.com/1637928/140194291-80a315e2-f268-4675-b006-a047823bfd27.png">

To setup the integration, you'll need to provide the GitHub repository URL and create a [personal token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token):

<img width="1107" alt="Currents.dev GitHub Integration - Providing Repo URL and Access Token" src="https://user-images.githubusercontent.com/1637928/140194428-cf1b291e-2ab6-416e-9eeb-7c325d8fce74.png">





