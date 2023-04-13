# Up and Running with Serverless Functions

Install netlify-cli

Run the following command:
```
npm-install netlify-cli --global
```
Note, verify that nodejs and npm are installed on your system.


You can verify the installation of netlify-cli by running the following:
```
netlify --version
```
or
```
ntl --version
```


Setup your netlify account and run the following command:
```
ntl login
```
Follow the prompts.



Once you are logged in, run the init command:
```
ntl init
```
Follow the prompts, for a typical static site there are no build commands, deployment will be via public folder and the functions will be stored in 'netlify/functions'. In addition, if a netlify.toml file hasn't been created, then answer Y to the prompt to create one.

Sample Site Here:
https://serverless-test-sample.netlify.app

Direct Function Link:
https://serverless-test-sample.netlify.app/.netlify/functions/hello-world
