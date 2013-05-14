introtokarma
============

AngularJS, Jasmine and Karma intro sample

This is a sample code which shows how to write simple code with tests so that we can run the tests both in Jasmine,
E2E and also using Karma

<p><h3>Jasmine:</h3>

Write the tests and point your browser to specrunner.html and thats it.
If you get 0 of 0 tests run, it means Jasmine is not finding your spec file.

<p><h3>Karma - Unit testing </h3>
Make sure you have Karma installed through npm.

I always like to change the basePath to move one level up in this directory structure so that, it is pointing to the
project root path.

To run Karma, open your terminal (DOS) and go to config folder and then execute

<b><i>Karma start karma.conf.js</i></b>

<p><h3>Karma - e2e testing - Browser</h3>

It is important you run node server first before running the karma otherwise all your tests will fail.
It is also important that you use the attached lib for angular scenario otherwise your tests will fail as well.
It is because, there was a bug in 1.0.6 version of angular scenario which was breaking on running Karma

It is also very important from which directory you run the node web server. Always run the node web server from the
application root directory not inside any directory like, test or configuration directory.

To run e2e testing in the browser, point to <b>http://localhost:8000/test/runner.html</b>

<p><h3>Karma - e2e testing - Command Line</h3>

We still need to run the node web server to run even in command line as browser e2e testing.
To run karma command line, open terminal (DOS box) and on application root folder, execute

<b>karma start config\karma-e2e.conf.js</b>
