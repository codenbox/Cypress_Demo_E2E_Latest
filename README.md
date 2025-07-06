🚀 Project Overview
This project demonstrates automated E2E testing using Cypress, featuring best practices for test automation, page object model implementation, and comprehensive reporting. It's designed as a learning resource for QA engineers and developers looking to implement robust testing frameworks.
📋 Features

-Modern Cypress Framework: Built with the latest Cypress version
-Page Object Model (POM): Maintainable and scalable test architecture
-Custom Commands: Reusable Cypress commands for common operations
-Data-Driven Testing: Support for external test data and fixtures
-Cross-Browser Testing: Support for Chrome, Firefox, and Edge
-Reporting Integration: Mochawesome reports with screenshots and videos-
-CI/CD Ready: GitHub Actions workflow configuration


🛠️ Prerequisites
Before running this project, ensure you have the following installed:
-Node.js (v14 or higher)
-npm or yarn
-Git

📦 Installation

Clone the repository:
bashgit clone https://github.com/codenbox/Cypress_Demo_E2E_Latest.git
cd Cypress_Demo_E2E_Latest

Install dependencies:
bashnpm install

🏃‍♂️ Running Tests
Interactive Mode (Cypress Test Runner)
bashnpm run cy:open

Headless Mode
bashnpm run cy:run

Run Tests in Specific Browser
bashnpm run cy:run:chrome
npm run cy:run:firefox
npm run cy:run:edge

Run Tests with Tags
bashnpm run cy:run:smoke
npm run cy:run:regression

📁 Project Structure
cypress/
├── e2e or Integration/
│   ├── smoke/           # Smoke test suite
│   ├── regression/      # Regression test suite
│   └── api/            # API test suite
├── fixtures/           # Test data files
├── support/
│   ├── commands.js     # Custom Cypress commands
│   ├── e2e.js         # Global configuration
│   └── page-objects/   # Page Object Model classes
├── plugins/           # Cypress plugins
└── screenshots/       # Test failure screenshots

🎯 Test Categories
✅Smoke Tests
✅Essential functionality tests that run quickly to ensure basic features work.
✅Regression Tests
✅ Develop end to end project with frameworkls: Mocha & BDD-Cucumber
✅Comprehensive test suite covering all major features and user workflows.

📊 Test Reporting
The project uses Mochawesome for generating comprehensive test reports:
👉HTML Reports: Detailed test execution reports with screenshots
👉JSON Reports: Machine-readable test results
👉Screenshots: Captured on test failures
👉Videos: Test execution recordings


🌱 Environment Setup
You can configure environment variables inside:
// cypress.env.json
{
  "baseUrl": "https://example.com",
  "username": "demoUser",
  "password": "demoPass"
}

Use with:bash/cmd
npx cypress run --env username=admin,password=secret

🙌 Acknowledgments:
-Cypress.io
-Mocha
-Chai
-Cucumber

🔗 Stay Connected:
📺 Subscribe on YouTube (https://www.youtube.com/codenboxautomationlab)
👨‍💼 Follow on LinkedIn (https://www.linkedin.com/in/sarifuli/) for more insights- QA & Automation, Mock Interviews & Career Growth content.

