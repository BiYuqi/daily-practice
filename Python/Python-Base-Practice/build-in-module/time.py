# coding=UTF-8

# datetime是Python处理日期和时间的标准库。

from datetime import datetime, timedelta
# import datetime.datetime
print(datetime.now())

# 获取指定日期和时间

print(datetime(2015, 4, 19, 12, 20))

# datetime转换为timestamp

print(datetime.now().timestamp())

# timestamp转换为datetime

print(datetime.fromtimestamp(datetime.now().timestamp()))

# str转换为datetime

cday = datetime.strptime('2017-2-2 13:23:56', '%Y-%m-%d %H:%M:%S')
print(cday)

# datetime转换为str
now = datetime.now()
aday = now.strftime('%Y-%m-%d %H:%M:%S')
print(aday)


# 时间加减