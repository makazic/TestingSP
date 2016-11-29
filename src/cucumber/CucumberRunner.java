package cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Makazic on 11/28/2016.
 */

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:output/"}, features = "src/features/", glue = "stepDefinitions", monochrome = true)
public class CucumberRunner {
}
