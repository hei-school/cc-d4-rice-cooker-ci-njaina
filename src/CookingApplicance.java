import java.util.Scanner;

public abstract class CookingAppliance {
    protected boolean isCooking;
    protected boolean isKeepWarm;
    protected boolean isSteamCooking;
    protected int timer;
    protected boolean innerBowlClean;

    public CookingAppliance() {
        this.isCooking = false;
        this.isKeepWarm = false;
        this.isSteamCooking = false;
        this.timer = 0;
        this.innerBowlClean = true;
    }

    public void startCooking() {
        if (!isCooking) {
            isCooking = true;
            System.out.println("Cooking started. Adjusting temperature and pressure.");
        } else {
            System.out.println("Cooking is already in progress.");
        }
    }

    public void endCooking() {
        if (isCooking) {
            isCooking = false;
            isKeepWarm = true;
            System.out.println("Cooking complete. Switching to keep-warm mode.");
        } else {
            System.out.println("No active cooking process to end.");
        }
    }

    public void setTimer(int minutes) {
        timer = minutes;
        System.out.println("Timer set for " + minutes + " minutes.");
    }

    public void steamCook() {
        if (!isSteamCooking && !isCooking) {
            isSteamCooking = true;
            System.out.println("Steam cooking activated.");
        } else {
            System.out.println("Cannot steam cook while another process is active.");
        }
    }

    public void interruptCooking() {
        if (isCooking) {
            isCooking = false;
            System.out.println("Cooking process interrupted.");
        } else {
            System.out.println("No active cooking process to interrupt.");
        }
    }

    public void cleanInnerBowl() {
        if (!isCooking && !isKeepWarm) {
            innerBowlClean = true;
            System.out.println("Inner bowl is now clean.");
        } else {
            System.out.println("Cannot clean the inner bowl while cooking or in keep-warm mode.");
        }
    }

    public abstract void plugIn();

    public abstract void stop();
}
