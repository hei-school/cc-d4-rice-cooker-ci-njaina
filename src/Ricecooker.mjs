import PromptSyncImpl from "./PromptSyncImpl.mjs";

export default class Ricecooker {
  constructor() {
    this.isPluggedIn = false;
    this.isCooking = false;
    this.isKeepWarm = false;
    this.isSteamCooking = false;
    this.timer = 0;
    this.innerBowlClean = true;
  }

  plugIn() {
    this.isPluggedIn = true;
    console.log('Rice cooker is plugged in.');
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

  setTimer() {
    const timerValue = parseInt(PromptSyncImpl('Enter the timer value (in minutes): '), 10);
    if (!isNaN(timerValue)) {
      this.timer = timerValue;
      console.log(`Timer set for ${timerValue} minutes.`);
    } else {
      console.log('Invalid timer value. Please enter a valid number.');
    }
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

  static async ShowOption() {
    const ricecooker = new Ricecooker();
    let continueChoosing = true;

    while (continueChoosing) {
      let options = [
        { number: 1, name: 'Plug in Rice Cooker', enabled: !ricecooker.isPluggedIn },
        { number: 2, name: 'Start Cooking', enabled: ricecooker.isPluggedIn && !ricecooker.isCooking },
        { number: 3, name: 'Interrupt Cooking', enabled: ricecooker.isCooking },
        { number: 4, name: 'End Cooking', enabled: ricecooker.isCooking },
        { number: 5, name: 'Set Timer', enabled: !ricecooker.isCooking },
        { number: 6, name: 'Steam Cook', enabled: !ricecooker.isCooking && !ricecooker.isSteamCooking },
        { number: 7, name: 'Clean Inner Bowl', enabled: !ricecooker.isCooking && !ricecooker.isKeepWarm },
        { number: 8, name: 'Stop', enabled: true },
      ];

      options = options.filter(option => option.enabled);

      const formattedOptions = options.map(option => `${option.number}. ${option.name}`).join('\n');
      const choice = await PromptSyncImpl(`Choose an option for the usage of your rice cooker:\n${formattedOptions}\n`);

      const numericChoice = parseInt(choice, 10);

      const selectedOption = options.find(option => option.number === numericChoice);

      if (selectedOption) {
        switch (numericChoice) {
          case 1:
            console.log("Plugging in the rice cooker...");
            ricecooker.plugIn();
            break;
          case 2:
            console.log("Starting cooking...");
            ricecooker.startCooking();
            break;
          case 3:
            console.log("Interrupting cooking...");
            ricecooker.interruptCooking();
            break;
          case 4:
            console.log("Ending cooking...");
            ricecooker.endCooking();
            break;
          case 5:
            console.log("Setting timer...");
            ricecooker.setTimer();
            break;
          case 6:
            console.log("Starting steam cooking...");
            ricecooker.steamCook();
            break;
          case 7:
            console.log("Cleaning inner bowl...");
            ricecooker.cleanInnerBowl();
            break;
          case 8:
            console.log("Stopping...");
            continueChoosing = false;
            break;
          default:
            console.log("Invalid option. Please choose a valid option.");
        }
      } else {
        console.log("Invalid option. Please choose a valid option.");
      }

      const continueChoice = await PromptSyncImpl('Do you want to choose another option? (y/n): ');
      continueChoosing = continueChoice.toLowerCase() === 'y';
    }
  }
}
