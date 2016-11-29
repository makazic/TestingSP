package stepDefinitions;


import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Steps {
    WebDriver driver;

    @Given("^I am logged in$")
    public void iAmLoggedIn() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Makazic\\Desktop\\jars\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.shiftplanning.com/");
        driver.findElement(By.id("menu-item-4966")).click();
        driver.findElement(By.id("email")).sendKeys("makazic@gmail.com");
        driver.findElement(By.id("password")).sendKeys("garfild");
        driver.findElement(By.xpath("//*[@id=\"LoginForm\"]/div[2]/button")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        boolean result = driver.getPageSource().contains("Humanity") ;
        System.out.println(result);

    }
    @Then("^I should click staff icon on the left$")
    public void iShouldClickStaffIconOnTheLeft() throws Throwable {
//        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Makazic\\Desktop\\jars\\chromedriver.exe");


        driver.findElement(By.xpath("//*[@id=\"sn_staff\"]/i")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);



    }


    @And("^I click on 'Add Employees' button$")
    public void iClickOnAddEmployeesButton() throws Throwable {
//        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Makazic\\Desktop\\jars\\chromedriver.exe");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.id("act_primary")).click();
//        driver.get("https://www.shiftplanning.com/app/staff/add");

    }


    @Then("^I close the browser$")
    public void closeBrowser() throws Throwable {
        driver.quit();
    }


    @Then("^I should click clock icon on the left$")
    public void iShouldClickClockIconOnTheLeft() throws Throwable {
//        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Makazic\\Desktop\\jars\\chromedriver.exe");


        driver.findElement(By.xpath("//*[@id=\"sn_timeclock\"]/i")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    @And("^I click on 'CheckIn/CheckOut' button$")
    public void iClickOnCheckInCheckOutButton() throws Throwable {
//        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.findElement(By.id("tc_tl_ci")).click();
    }
}
