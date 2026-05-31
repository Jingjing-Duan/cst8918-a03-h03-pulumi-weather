import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as containerregistry from "@pulumi/azure-native/containerregistry";
import * as dockerBuild from "@pulumi/docker-build";

const config = new pulumi.Config();

const appPath = config.require("appPath");
const prefixName = config.require("prefixName");
const imageName = prefixName;
const imageTag = config.require("imageTag");

const containerPort = config.requireNumber("containerPort");
const publicPort = config.requireNumber("publicPort");
const cpu = config.requireNumber("cpu");
const memory = config.requireNumber("memory");

// Create a resource group
const resourceGroup = new resources.ResourceGroup(`${prefixName}-rg`);

// Create Azure Container Registry
const acrName = `${prefixName.replace(/-/g, "")}acr`;

const registry = new containerregistry.Registry(acrName, {
  resourceGroupName: resourceGroup.name,
  adminUserEnabled: true,
  sku: {
    name: containerregistry.SkuName.Basic,
  },
});

const registryCredentials = containerregistry
  .listRegistryCredentialsOutput({
    resourceGroupName: resourceGroup.name,
    registryName: registry.name,
  })
  .apply((creds) => {
    return {
      username: creds.username!,
      password: creds.passwords![0].value!,
    };
  });

  const image = new dockerBuild.Image(`${prefixName}-image`, {
  tags: [pulumi.interpolate`${registry.loginServer}/${imageName}:${imageTag}`],
  context: { location: appPath },
  dockerfile: { location: `${appPath}/Dockerfile` },
  platforms: ["linux/amd64", "linux/arm64"],
  push: true,
  registries: [
    {
      address: registry.loginServer,
      username: registryCredentials.username,
      password: registryCredentials.password,
    },
  ],
});