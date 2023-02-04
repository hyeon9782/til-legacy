from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium import webdriver
import pyperclip
import time

driver = webdriver.Chrome() # 현재파일과 동일한 경로일 경우 생략 가능

user_id = 'hyeon_1997'
user_pw = 'hyun74'

# 1. 네이버 맵 이동
driver.get('https://map.naver.com/')

time.sleep(5)

# 2. 로그인 버튼 클릭
driver.find_element(By.ID,'gnb_login_button').click();

time.sleep(5)

# 3. id 복붙
driver.find_element(By.ID,'id').click();
pyperclip.copy(user_id)
driver.find_element(By.ID,'id').send_keys(Keys.CONTROL, 'v')

time.sleep(1)

# 4. pw 복붙
driver.find_element(By.ID,'pw').click();
pyperclip.copy(user_pw)
driver.find_element(By.ID,'pw').send_keys(Keys.CONTROL, 'v')

time.sleep(1)

# 5. 로그인 클릭
driver.find_element(By.ID,'log.login').click()

time.sleep(5)

# 6. 즐겨찾기 클릭
driver.find_element(By.XPATH, '//*[@id="sidebar"]/navbar/perfect-scrollbar/div/div[1]/div/ul/li[6]/a').click();

time.sleep(3)

# 7. iframe 접근
driver.switch_to.frame('myPlaceBookmarkFolderListIframe')

# 8. 저장소 클릭
driver.find_element(By.XPATH, '//*[@id="__next"]/div[1]/ul/li[2]/button').click()

time.sleep(5)

# 9. iframe 접근
driver.switch_to.frame('myPlaceBookmarkListIframe')

# 10. 이름 가져오기
name_list = driver.find_elements(By.CLASS_NAME, '_2gfp-T')

# 11. 주소 가져오기
address_list = driver.find_elements(By.CLASS_NAME, '_2EFNlx')

# # 12. 사진 가져오기
# image_list = driver.find_elements(By.CLASS_NAME,'');

# # 13. 배열 사이즈 구하기
# list_size = len(name_list)


for i in range(len(name_list)):
    print("이름 : {}".format(name_list[i].text))
    print("주소 : {}".format(address_list[i].text))

time.sleep(5)

