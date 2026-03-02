🚀 CI/CD Deployment of Flask and Express Applications Using Jenkins
📌 Project Overview

This project demonstrates the deployment and automation of a Flask backend application and an Express frontend application using AWS EC2 and Jenkins CI/CD pipeline.

The assignment is divided into two parts:

Part 1 – Manual Deployment

Part 2 – CI/CD Automation using Jenkins

🟢 Part 1: Manual Deployment on EC2
Objective

Deploy both Flask and Express applications on a single EC2 instance.

Process

Launched an Ubuntu EC2 instance.

Configured required security group ports (SSH, application ports, Jenkins port).

Installed necessary software such as Python, NodeJS, and PM2.

Cloned both Flask and Express repositories from GitHub.

Installed application dependencies.

Started both applications using a process manager to ensure they run in the background.

Verified that both applications were accessible via browser using the EC2 public IP.

Outcome

Both Flask and Express applications were successfully deployed and running on the EC2 instance.

🟢 Part 2: CI/CD Pipeline Using Jenkins
Objective

Automate the deployment process of Flask and Express applications using Jenkins.

Process

Installed Jenkins on the EC2 instance.

Configured required Jenkins plugins (Git, Pipeline, NodeJS).

Created two separate Jenkins pipeline jobs:

One for Flask application

One for Express application

Configured pipelines to:

Pull the latest code from GitHub

Install dependencies

Restart the applications automatically

Integrated GitHub Webhooks to trigger Jenkins builds on every push to the repository.

CI/CD Workflow

GitHub Push → Jenkins Triggered → Build Process → Dependency Installation → Application Restart → Deployment Complete

Outcome

Automated deployment pipeline created successfully.

Applications are automatically updated whenever new code is pushed to GitHub.

Manual SSH deployment is no longer required.

✅ Deliverables

Running Flask and Express applications

Working Jenkins CI/CD pipelines

Automatic deployment using GitHub Webhooks

Successful build history in Jenkins dashboard
