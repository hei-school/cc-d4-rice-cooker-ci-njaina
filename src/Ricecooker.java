public class Ricecooker extends CookingAppliance {
    @Override
    public void plugIn() {
        System.out.println("Plugging in the rice cooker...");
    }

    @Override
    public void stop() {
        System.out.println("Stopping...");
    }

    public static void main(String[] args) {
        Ricecooker ricecooker = new Ricecooker();
        Scanner scanner = new Scanner(System.in);

        boolean continueChoosing = true;

        while (continueChoosing) {
            System.out.println("Choose an option for the usage of your rice cooker:");
            System.out.println("1. Start Cooking");
            System.out.println("2. End Cooking");
            System.out.println("3. Set Timer");
            System.out.println("4. Steam Cook");
            System.out.println("5. Interrupt Cooking");
            System.out.println("6. Clean Inner Bowl");
            System.out.println("7. Plug in Rice Cooker");
            System.out.println("8. Stop");

            int numericChoice = scanner.nextInt();

            switch (numericChoice) {
                case 1:
                    ricecooker.startCooking();
                    break;
                case 2:
                    ricecooker.endCooking();
                    break;
                case 3:
                    System.out.println("Enter the timer value (in minutes): ");
                    int timerValue = scanner.nextInt();
                    ricecooker.setTimer(timerValue);
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
                    ricecooker.plugIn();
                    break;
                case 8:
                    ricecooker.stop();
                    continueChoosing = false;
                    break;
                default:
                    System.out.println("Invalid option. Please choose a valid option.");
            }

            System.out.println("Do you want to choose another option? (y/n): ");
            String continueChoice = scanner.next().toLowerCase();
            continueChoosing = continueChoice.equals("y");
        }

        scanner.close();
    }
}
