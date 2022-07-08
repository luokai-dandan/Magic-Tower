# coding=utf-8
import re
import json
 
def txtToJson():
    # 文件路径
    path = "test.txt"
    # 读取文件
    with open(path,'r', encoding="utf-8") as file:
        # 定义一个用于切割字符串的正则
        seq = re.compile(":")
        result = []
        # 逐行读取
        for line in file:
            lst = seq.split(line.strip())
            item = {
                "content": lst[0]
            }
            result.append(item)
        print(type(result))
    # 关闭文件
    with open('txtToJson.json', 'w') as dump_f:
        json.dump(result,dump_f)
 
if __name__ == '__main__':
    txtToJson()