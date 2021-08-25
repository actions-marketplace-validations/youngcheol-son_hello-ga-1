const core = require('@actions/core');
const github = require('@actions/github');

try {
  // action.yml에 있는 inputs로부터 값을 가져온다.
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);

  // action.yml에 있는 outputs에 값을 지정한다
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
