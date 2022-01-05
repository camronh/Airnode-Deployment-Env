# Airnode Deployment Environment

> This Repo is meant to be used as a GitPod environment. GitPod makes it easy to spin up pre-configured development environments in your browser. In this case we have prepared the environment with everything needed to deploy or run your Airnode.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/camronh/Airnode-Deployment-Env)

## Preparation

First, click the Open in Gitpod button above. It may take a minute, but a VSCode environment should load in your browser.

You can drag and drop your deployment package directly into the browser in the correct folders in the left pane.

It is important you maintain the correct file structure:

```
Root
├── Readme.md
├── aws.env
├── config
│   ├── config.json
│   └── secrets.env
└── output
    ├── receipt.json
```

## Commands

### Generate a mnemonic seed phrase

```sh
yarn generate-seed-phrase
```

### Start an Airnode local client

```sh
yarn start-airnode
```

### Stop your Airnode local client

```sh
yarn stop-airnode
```

### Deploy Airnode to AWS

>**Be sure to download and save the resulting `receipt.json` file from the `output` folder!**

```sh
yarn deploy-airnode
```
