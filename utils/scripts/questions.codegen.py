import selenium
from selenium import webdriver
from selenium.webdriver import ActionChains

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait

import os

URL = 'https://www.notion.so/c42d9c0b391b4088b4799ddc9f075d77'

driver = webdriver.Chrome(executable_path=os.path.join('~','util/chromedriver'))
driver.get(url=URL)
try:
    element = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.CLASS_NAME , 'notion-collection-item'))
    )
finally:
    driver.quit()