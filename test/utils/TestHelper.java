package utils;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintStream;

public class TestHelper {

    private static final ByteArrayOutputStream outContent = new ByteArrayOutputStream();

    public static void redirectSystemOut() {
        System.setOut(new PrintStream(outContent));
    }

    public static void resetSystemOut() {
        System.setOut(System.out);
    }

    public static String getSystemOut() {
        return outContent.toString();
    }

    public static void mockSystemIn(String input) {
        InputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);
    }
}
