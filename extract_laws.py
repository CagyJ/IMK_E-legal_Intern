import requests
from bs4 import BeautifulSoup
import random
from tqdm import tqdm
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

import re
nltk.download('punkt')
nltk.download('stopwords')


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
            
  


def clean_text(text):
    text = text.lower()
    text = re.sub(r'\d+', '', text)
    text = re.sub(r'[^\w\s]', '', text)
    tokens = word_tokenize(text)
    stop_words = set(stopwords.words('hungarian'))
    filtered_tokens = [token for token in tokens if not token in stop_words]
    clean_text = ' '.join(filtered_tokens)
    return clean_text

            

with open("laws.txt", "w", encoding="utf-8") as txt_file:
    for line in results:
        txt_file.write("".join(line) + "\n")
        
        

