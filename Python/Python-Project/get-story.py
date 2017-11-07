# coding=UTF-8

import requests, re, json

# page = 1
# url = 'https://www.qiushibaike.com/hot/page/' + str(page)
# user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
# headers = {'User-Agent': user_agent}



# def get_data(data):
#     reg = re.compile('\'chick\']\)">\s*<h2>([\s\S]+?)<\/h2>\s*<\/a>[\s\S]+?'
#                          '<div class="content">\s*<span>([\s\S]+?)<\/span>', re.S)
#     list_con = re.findall(reg, data)
#     story = []
#     with open('data.json', 'w', encoding='utf-8') as f:
#         for item in list_con:
#             story.append({
#                 "name": item[0].strip('\n'),
#                 "con": item[1].strip('\n')
#             })
#         json_data = json.dumps(story, ensure_ascii=False)
#         f.write(json_data)
#
# try:
#     with requests.get(url, headers=headers) as f:
#         # print(f.text)
#         get_data(f.text)
# except ValueError as e:
#     print(e)


class Qs:
    def __init__(self):
        self.pageIndex = 1
        self.user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
        self.headers = {"User-Agent": self.user_agent}

        self.stories = []

        self.enable = False

    # 返回页面数据
    def get_page(self, pageIndex):
        try:
            url = 'https://www.qiushibaike.com/hot/page/' + str(pageIndex)
            with requests.get(url, headers=self.headers) as f:
                print('请求成功')
                return f.text
        except ValueError as e:
            print(e)

    # 处理页面数据
    def get_page_data(self, pageIndex):
        pageCode = self.get_page(pageIndex)
        if not pageCode:
            print('页面加载失败...请重试')
            return None

        # 用来存储每页的段子们
        pageStories = []

        # 可以拿到作者和内容
        # reg = re.compile('\'chick\']\)">\s*<h2>([\s\S]+?)<\/h2>\s*<\/a>[\s\S]+?'
        #                  '<div class="content">\s*<span>([\s\S]+?)<\/span>', re.S)
        reg = re.compile('\'chick\']\)">\s*<h2>([\s\S]+?)<\/h2>\s*<\/a>[\s\S]+?' \
                                '<div class="content">\s*<span>([\s\S]+?)<\/span>[\s\S]+?' \
                                '<!-- 图片或gif -->(?:\s*[\s\s]+?<div class="thumb">[\s\S]+?<img\s*src="([^"]+))?')

        listInfo = re.findall(reg, pageCode)
        # print(listInfo)
        for item in listInfo:
            if item[2] != '':
                pageStories.append({
                    "name": item[0].strip('\n'),
                    "con": item[1].strip('\n'),
                    "img": item[2]
                })
            else:
                pageStories.append({
                    "name": item[0].strip('\n'),
                    "con": item[1].strip('\n')
                })

        return pageStories

    def load_page(self):
        # 如果当前未看的页数少于2页，则加载新一页
        if self.enable == True:
            if len(self.stories) < 8:
                pageStories = self.get_page_data(self.pageIndex)
                # 将数据加入全局list中
                if pageStories:
                    self.stories.append(pageStories)
                    self.pageIndex += 1

    def start(self):

        self.enable = True

        self.load_page()
        a = 0
        while a < 8:
            self.load_page()
            a += 1
        with open('data.json', 'w', encoding='utf-8') as f:
            json_data = json.dumps(self.stories, ensure_ascii=False)
            f.write(json_data)
        print(self.stories)


spider = Qs()
spider.start()

