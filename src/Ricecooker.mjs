import PromptSyncImpl from "./PromptSyncImpl.mjs";

export default class Ricecooker {
  constructor() {
    this.isCooking = false;
    this.isKeepWarm = false;
    this.isSteamCooking = false;
    this.timer = 0;
    this.innerBowlClean = true;
  }

  startCooking() {
    if (!this.isCooking) {
      this.isCooking = true;
      console.log('Cooking started. Adjusting temperature and pressure.');
    } else {
      console.log('Cooking is already in progress.');
    }
  }

  endCooking() {
    if (this.isCooking) {
      this.isCooking = false;
      this.isKeepWarm = true;
      console.log('Cooking complete. Switching to keep-warm mode.');
    } else {
      console.log('No active cooking process to end.');
    }
  }

  setTimer(minutes) {
    this.timer = minutes;
    console.log(`Timer set for ${minutes} minutes.`);
  }

  steamCook() {
    if (!this.isSteamCooking && !this.isCooking) {
      this.isSteamCooking = true;
      console.log('Steam cooking activated.');
    } else {
      console.log('Cannot steam cook while another process is active.');
    }
  }

  interruptCooking() {
    if (this.isCooking) {
      this.isCooking = false;
      console.log('Cooking process interrupted.');
    } else {
      console.log('No active cooking process to interrupt.');
    }
  }

  cleanInnerBowl() {
    if (!this.isCooking && !this.isKeepWarm) {
      this.innerBowlClean = true;
      console.log('Inner bowl is now clean.');
    } else {
      console.log('Cannot clean the inner bowl while cooking or in keep-warm mode.');
    }
  }
}

const ShowOption = async () => {
  const ricecooker = new Ricecooker();

  const options = [1, 2, 3, 4, 5, 6, 7, 8];

  const choice = await PromptSyncImpl(`Choose an option for the usage of your rice cooker (${options.join(', ')}): `);

  const numericChoice = parseInt(choice, 10);

  switch (numericChoice) {
    case 1:
      ricecooker.startCooking();
      break;
    case 2:
      ricecooker.endCooking();
      break;
    case 3:
      const timerValue = await PromptSyncImpl('Enter the timer value (in minutes): ');
      ricecooker.setTimer(parseInt(timerValue, 10));
      break;
    case 4:
      ricecooker.steamCook();
      break;
    case 5:
      ricecooker.interruptCooking();
      break;
    case 6:
      ricecooker.cleanInnerBowl();
      break;
    case 7:
      console.log("Plugging in the rice cooker...");
      break;
    case 8:
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
