# coding=UTF-8

import requests, re, json

page = 1
url = 'https://www.qiushibaike.com/hot/page/' + str(page)
user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
headers = {'User-Agent': user_agent}



def get_data(data):
    reg = re.compile('\'chick\']\)">\s*<h2>([\s\S]+?)<\/h2>\s*<\/a>[\s\S]+?'
                         '<div class="content">\s*<span>([\s\S]+?)<\/span>', re.S)
    list_con = re.findall(reg, data)
    story = []
    with open('data.json', 'w', encoding='utf-8') as f:
        for item in list_con:
            story.append({
                "name": item[0].strip('\n'),
                "con": item[1].strip('\n')
            })
        json_data = json.dumps(story, ensure_ascii=False)
        f.write(json_data)

try:
    with requests.get(url, headers=headers) as f:
        # print(f.text)
        get_data(f.text)
except ValueError as e:
    print(e)


