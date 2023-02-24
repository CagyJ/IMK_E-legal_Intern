import requests
from bs4 import BeautifulSoup
import random
from tqdm import tqdm


years=list(range(1970, 2010))
numbers= list(range(1,300))

results=[]


for year in tqdm(years):
    for number in tqdm(numbers):
        url=f'https://njt.hu/jogszabaly/{year}-{number}-00-00'
        response = requests.get(url)
        html_content = response.content
        if response:
            soup = BeautifulSoup(html_content, 'html.parser')
            titles = soup.find_all('div',{'class':'bekezdesNyito'})
            for title in titles:
                results.append(title.text)
            print(titles)

with open("laws.txt", "w", encoding="utf-8") as txt_file:
    for line in results:
        txt_file.write("".join(line) + "\n")
