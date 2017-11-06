# coding=UTF-8
print('--------------------------for循环---------------------------')
names = ['demo1','demo2','demo3','demo4']

for item in names:
    print(item*5)

# range()函数，可以生成一个整数序列
# list()函数 可以转化为list
print('生成一个数组序列')
lists = list(range(101))
print(lists)
print('累加一个数组')
sum = 0
for num in lists:
    sum += num
print(sum)

print('--------------------------while循环---------------------------')
sum = 0
n = 100
while n > 0:
    sum += n
    n -= 1
print(sum)

print('--------------------------练习---------------------------')
L = ['Bart', 'Lisa', 'Adam']
for item in L:
    print('Hello '+item)


print('--------------------------Break---------------------------')
# 提前结束循环
m = 99
sum = 0
while m > 0:
    if m < 80:
        break
    sum += m
    m -= 2
    # print(m)
print(sum)

print('--------------------------Continue---------------------------')
