from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()

driver.get("file:///C:/Users/deble/Downloads/WEBDEVPRAC/tablesCreate.html")


element =driver.find_element(By.CLASS_NAME,"Fname")
print(element.text)
time.sleep(10)
driver.quit()
