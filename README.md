# Blocktrain Builders - Project Overview

Empowering transparent AI model management and fair revenue sharing through the synergy of OKP4's governance and Akash's deployment ease.

## Deployed Frontend

https://block-train-rouge.vercel.app/ 

## How to run

### A. to run AI container locally

% source env.development.blocktrain.sh
% make dev

### B. to build image and deploy to akash

### setup github token for access to write to container registry

### https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

### then login to your

% echo <TOKEN> | docker login ghcr.io -u blocktrainbuilders --password-stdin

### setup akash wallet (testing) to deploy to akash

### make sure this wallet has more than 5AKT

% provider-services keys add blocktrain --recover
"almost shy radio prepare alcohol under cruise frequent acid track card junior"
% provider-services tx cert generate client --from blocktrain
% provider-services tx cert publish client --from blocktrain

% source env.staging.blocktrain.sh
% make deploy-staging

## What the image does? (app.py)

---

1. process environment variables
2. query okp4 to check authentication (validation against environment variables), and get data paths and training parameters
3. retrieve the data
4. train the model
5. make the model available publicly via port 5000/80
