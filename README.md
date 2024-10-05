# cypress-demo
 
This repository demonstrates the usage of Cypress, a powerful JavaScript-based end-to-end testing framework. The project showcases a collection of sample tests and demonstrates how to effectively use Cypress to validate the functionality and user experience of a web application.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Cypress Overview](#cypress-overview)
- [Functionality & Use Cases](#functionality--use-cases)
- [Running the Tests](#running-the-tests)

## Introduction

This project is built to showcase the power and versatility of Cypress for functional and end-to-end testing. The goal is to highlight how Cypress can be used to create reliable and maintainable test cases for web applications. It includes practical examples of tests that cover a range of scenarios, such as UI interactions, API responses, and form validation.

## Getting Started

In order to use this project you will need [Node.js](https://nodejs.org/en) installed on your system.

- Clone this Repository

```git clone https://github.com/JaimieHemmings/cypress-demo.git```

- Install dependencies

```npm install```

- Features:

  - Fixtures: Contains sample data used for testing
  - support: Reusable functions and custom commands that can be used across multiple test cases

## Cypress Overview

[Cypress](https://www.cypress.io/) is a modern end-to-end testing framework that is especially popular for its ease of use, fast feedback loop, and developer-friendly features. Unlike traditional testing tools, Cypress runs directly in the browser, allowing developers to observe their tests in real-time as they execute.

Key features of Cypress include:

  - Time Travel: Debug by traversing the timeline to see exactly what happened at each stage of the test
  - Automatic Waiting: Cypress waits for elements to appear, commands to finish, and assertions to pass, reducing the need for explicit waits
  - Spies, Stubs and Clocks: Useful for controlling the behavior of functions, making tests more predictable

## Functionality & Use Cases

Included in this project is a number of varying tests to highlight the differing functionalities available with the Cypress test suite.

  - UI testing: Tests interactions like button clicks, form submissions and DOM element visibility to ensure the UI behaves as expected
  - Form validation: Includes tests for form validation, checking error messages and invalid inputs, and ensuring correct behaviour when submitting a form
  - Assertions and Verification: Demonstrates different types of assertions, such as checking element visibility, content, and URL routing.

## Running the Tests

Cypress offers two main methods through which you can run the defined tests. The test runner is an interactive experience and a command line tool for headless testing.

To run the tests interactively:

```npx cypress open```

This launches the Cypress Test Runner, allowing you to select and watch the tests being executed in real-time.

To run the test headlessly:

```npx cypress run```

This command runs all tests in a headless browser, ideal for CI/CD environments.



