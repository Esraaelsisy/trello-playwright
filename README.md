# Trello-Playwright Testing Project

This repository contains automated tests for Trello's web application using [Playwright](https://playwright.dev/). The project leverages the Page Object Model (POM) for easier maintenance and reusability of code, and includes data-driven testing by externalizing test data.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Tests](#running-the-tests)
- [Test Reports](#test-reports)
- [Architectural Decisions](#architectural-decisions)


---

## Project Structure

The repository is organized as follows:

trello-playwright/
│
├── fixtures/                # Contains test setup files
│   └── test.setup.ts        # Test setup configuration
│
├── pages/                   # Page Object Model (POM) classes representing different pages of the Trello app
│   ├── base.page.ts         # Base page class with common methods
│   ├── board.page.ts        # Class representing board-related actions
│   ├── card.page.ts         # Class for card-related actions
│   ├── home.page.ts         # Class for home page actions
│   ├── login.page.ts        # Class for login page actions
│   └── page.manager.ts      # Page manager to manage page instances
│
├── data/                    # Data-driven testing
│   └── test-data.json       # JSON file containing test data
│
├── tests/                   # Contains test specifications
│   ├── BoardTests.spec.ts   # Test cases related to boards
│   ├── cardTests.spec.ts    # Test cases related to cards
│   └── ListTests.spec.ts    # Test cases related to lists
│
├── .env                     # Environment file containing sensitive information (e.g., credentials)
├── .gitignore               # Git ignore file to exclude sensitive information and unnecessary files from version control
├── playwright.config.ts     # Configuration file for Playwright
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation


## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/trello-playwright.git
cd trello-playwright
```

### 2. Install Dependencies

```bash
npm install
```

```bash
npm init playwright@latest
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory to store sensitive information (like usernames and passwords). This file is used to keep your credentials safe and out of the source code.

#### Example `.env` file:

```plaintext
TRELLO_USERNAME=your_username_here
TRELLO_PASSWORD=your_password_here
```
Note: Make sure to add .env to your .gitignore to prevent it from being committed to version control.

## Running the Tests

To run the tests, use the following commands:

### Running All UI Tests

```bash
npx playwright test 
```

To run Tests on certain browser

```bash
npx playwright test --project=chromium
```
### Test Reports

After running the tests, Playwright generates a test report in the playwright-report directory. To view the report:
```bash
npx playwright show-report
```

### Architectural Decisions

**Page Object Model (POM)**

The Page Object Model is implemented to encapsulate UI interactions. Each page is represented as a class, and interactions with page elements are encapsulated within methods, ensuring that UI structure changes impact only the page objects, not the tests.


**Data-Driven Testing**

Data-driven testing uses JSON files (e.g., test-data.json) to supply test data, allowing tests to adapt to different data inputs without modifying the test scripts. This enables quick updates to test scenarios and improves maintainability.
