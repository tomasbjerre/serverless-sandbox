# Serverless Sandbox

A demo of [Serverless Server Spawner](https://github.com/tomasbjerre/serverless-server-spawner). A user would typically have a repository like this to keep track of configuration and simplify usage.

Start the server with:

```sh
npm run start -- --matchers-folder `pwd`/matchers
```

*Note: On Windows, and GitBash, this would be `pwd -W` to get Windows-style absolute path.*

You may try dispatching an app with:

http://localhost:8080/api/dispatch?cloneurl=https%3A%2F%2Fgithub.com%2Ftomasbjerre%2Fserverless-server-spawner-demo-app.git&branch=master

Or just browse to the built in dashboard:

http://localhost:8080/
