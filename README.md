# CST8918 Lab-A03 Pulumi Weather App

## Group Name
Group 3

## Team Members
- Jingjing Duan (Student ID: )
- Khalid Amchat (Student ID: 041125350)

## Project Overview

This lab deploys the Remix Weather application to Microsoft Azure using Pulumi as the Infrastructure as Code tool. The application is packaged as a Docker image, pushed to Azure Container Registry, and deployed publicly using Azure Container Instances.

## Lab Objectives

- Use Pulumi with TypeScript to define Azure infrastructure.
- Create an Azure Resource Group.
- Create an Azure Container Registry.
- Build and push the Docker image to Azure Container Registry.
- Create an Azure Container Instance / Container Group.
- Configure the container with required environment variables.
- Expose the application using a public DNS name.
- Verify the deployment in the browser.

## Technologies Used

- Pulumi
- TypeScript
- Azure Container Registry
- Azure Container Instances
- Docker
- Remix
- OpenWeather API

## Azure Resources Created

- Resource Group
- Azure Container Registry
- Docker image stored in ACR
- Azure Container Instance / Container Group
- Public DNS endpoint

## Deployment Screenshot

The Remix Weather application was successfully deployed to Azure Container Instances.

Screenshot : [lab-a03.png](./lab-a03.png)
![alt text](lab-a03.png)

## Team Contributions

### Jingjing Duan

- Initialized the Pulumi infrastructure project.
- Configured the Pulumi production stack.
- Created the Azure Resource Group.
- Created the Azure Container Registry.
- Configured Docker image build and push to ACR.

### Khalid Amchat

- Added the Azure Container Instance / Container Group resource.
- Configured the container group for public access.
- Deployed and tested the Remix Weather app on Azure.
- Added the deployment verification screenshot.

## How to Deploy

From the `infrastructure` folder:

```bash
pulumi up
