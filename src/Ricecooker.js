import PromptSyncImpl from "./PromptSyncImpl.js";

const ShowOption = async () => {
  const options = [1, 2, 3];

  const choice = await PromptSyncImpl(`Choose an option for the usage of your rice cooker (${options.join(', ')}): `);

  const numericChoice = parseInt(choice, 10);

  switch (numericChoice) {
    case 1:
      console.log("Cooking rice...");
      break;
    case 2:
      console.log("Plugging in the rice cooker...");
      break;
    case 3:
      console.log("Stopping...");
      break;
    default:
      console.log("Invalid option. Please choose a valid option.");
  }

  return numericChoice;
};

// Main code
ShowOption().then((option) => {
  console.log(`You chose: **${option} **`);
});
