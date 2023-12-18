import readlineSync from './ReadlineImpl.js';

function createPrompt() {
  return async function promptSync(question) {
    process.stdout.write(question);
    return await readlineSync();
  };
}

export default createPrompt();