# Evaluate News Article with NLP (Natural Language Proccessing)

## Description
The project creates a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Uses Node and Express to run on a local server.

## Prerequisite
If you don't have Node already installed on your machine, you can download it [**here**](https://nodejs.org/en/download/).
You will also need an API key for [meaningcloud.com](https://meaningcloud.com/), which you can get [**here**](https://www.meaningcloud.com/developer/sentiment-analysis). 
After you get your api key, you can create a .env file in the root of your project and add the api key.
```
API_KEY = ********************
```
For more information about the dotenv module visit this [**link**](https://www.npmjs.com/package/dotenv).

## Installation
If Node is installed, then you can use the Node Package Manager to install the packages needed to run this program. Use this command in the terminal:

```
npm install
```
When those packages have installed, make builds and start the server with the following commands.
For developer mode, which runs webpack-dev-server:
```
npm run build-dev
```
And for production mode, which uses the express server:
```
npm run build-prod
npm start
```
## Instructions for Use
Enter a url in the input field and hit the submit button.
Under Form results you will see a sentiment analysis for the article submitted, using the MeaningCloud API.

## Author
The code was written by EvelinaIo, based on starter code given by Udacity's Front-End Development Nanodegree course, Project 4.
