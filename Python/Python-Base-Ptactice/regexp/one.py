# coding=UTF-8

# re模块 包含所有正则表达式的功能

# 常见判断方法
import re

# 用户输入字符
test = 'biyuqi123'

if re.match(r'^[\da-zA-Z]{5,16}$', test):
    print('ok')
else:
    print('no-ok')



# 切分字符串
# 用正则表达式切分字符串比用固定的字符更灵活，请看正常的切分代码：

print('a b   c'.split(' '))
print(re.split(r'\s+', 'a b   c'))

# 分组

p = '18937323365'
reg = '(\d{3})(\d{4})(\d{4})'
res = p.replace(r'(\d{3})(\d{4})(\d{4})', '$1')
print(res)


def get_param(kw):
    s = '?'
    L = []
    for item in kw:
        if kw[item] == '' or kw[item] == None:
            continue
        if len(L) == 0:
            L.append(s)
        L.append(item)
        L.append('=')
        L.append(kw[item])
        L.append('&')

    param = ''.join(L)
    last = re.sub(r"&$", '', param)
    return last


a = {
    "name": "biyuqi",
    "age": "999",
    "adress": ''
}
print(get_param(a))

reg = '(\d{3})(\d{4})(\d{4})'


def get(match):
    v1 = match.group(1)
    v2 = match.group(2)
    v3 = match.group(3)

    return str(v1+'****'+v3)


print(re.sub(reg, get, '18923456789'))