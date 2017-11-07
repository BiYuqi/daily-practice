# coding=UTF-8
# 统计一个文件中每个单词出现的次数，列出出现频率最多的5个单词

import io
import re

# mapping = dict()
#
# with io.open('count.txt', encoding='utf-8') as f:
#     data = f.read()
#     words = [s.lower() for s in re.findall('\w+', data)]
#     print(words)
#     for word in words:
#         mapping[word] = mapping.get(word, 0) + 1
#     print(mapping.items())
#     print(sorted(mapping.items(), key=lambda item: item[1], reverse=True)[:3])


class Counter:
    def __init__(self, path):
        self.mapping = dict()

        with io.open(path, encoding='utf-8') as f:
            data = f.read()
            words = [s.lower() for s in re.findall('\w+', data)]
            for word in words:
                self.mapping[word] = self.mapping.get(word, 0) + 1

    def most_common(self, n):
        if n <= 0:
            print('n should be large than 0')
        return sorted(self.mapping.items(), key=lambda item: item[1], reverse=True)[:n]


get_5 = Counter('count.txt').most_common(5)
for item in get_5:
    print(item)


for i in range(1, 10):
    for j in range(1, i+1):
        print(str(i) + '*' + str(j) + '=' + str(i * j) + ' ', end='')
    print('\r')