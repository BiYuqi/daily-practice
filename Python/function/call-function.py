print('------------调用函数---------------')
# Python内置很多方法 可以直接调用
# 调用函数的时候，如果传入的参数数量不对，会报TypeError的错误，并且Python会明确地告诉你：abs()有且仅有1个参数，但给出了两个：
# 如果传入的参数数量是对的，但参数类型不能被函数所接受，也会报TypeError的错误，并且给出错误信息：str是错误的参数类型：
s = abs(-15.26)
print(s)

# m = abs('123')
# print(m)

# n = abs(-50,23)
# print(n)

print(max(1,2,5,8,9,6,5,4))
print(int(1.28))
print(int('1452'))

# print(int('255kkk')) 报错

# hex()函数把一个整数转换成十六进制表示的字符串
print(hex(256))