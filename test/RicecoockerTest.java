import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import utils.TestHelper;

public class RicecookerTest {

    @Test
    public void testStartCooking() {
        Ricecooker ricecooker = new Ricecooker();
        ricecooker.startCooking();
        assertTrue(ricecooker.isCooking);
    }

    @Test
    public void testEndCooking() {
        Ricecooker ricecooker = new Ricecooker();
        ricecooker.isCooking = true;
        ricecooker.endCooking();
        assertFalse(ricecooker.isCooking);
        assertTrue(ricecooker.isKeepWarm);
    }

    @Test
    public void testCleanInnerBowl() {
        Ricecooker ricecooker = new Ricecooker();
        ricecooker.isCooking = false;
        ricecooker.isKeepWarm = false;
        ricecooker.cleanInnerBowl();
        assertTrue(ricecooker.innerBowlClean);
    }

    @Test
    public void testShowOptions() {
        // Mock user input for testing
        String input = "1\n3\n5\n8\nn\n";
        InputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);

        // Redirect System.out to capture printed output
        TestHelper.redirectSystemOut();

        // Run the showOptions method
        Ricecooker ricecooker = new Ricecooker();
        ricecooker.showOptions();

        // Reset System.in and System.out
        System.setIn(System.in);
        TestHelper.resetSystemOut();

        // Assert the expected output
        String expectedOutput = "Choose an option for the usage of your rice cooker:\n" +
                                "1. Start Cooking\n" +
                                "2. End Cooking\n" +
                                "3. Set Timer\n" +
                                "4. Steam Cook\n" +
                                "5. Interrupt Cooking\n" +
                                "6. Clean Inner Bowl\n" +
                                "7. Plug in Rice Cooker\n" +
                                "8. Stop\n" +
                                "Do you want to choose another option? (y/n): ";
        assertEquals(expectedOutput, TestHelper.getSystemOut());
    }
}
