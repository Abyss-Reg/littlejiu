import math as m

# 求幂集

# 十进制转二进制（逆序排列）
def Dec2Bin(num:int,totalLen:int)->list:
    n = num
    ret = []
    while(n != 0):                                      q = n % 2
        n = int(n/2)
        ret.append(q)
    if(len(ret)<totalLen):
        for i in range(totalLen - len(ret)):
            ret.append(0)                           return ret


# 拼组幂集                                      def GetResult(o:list)->list:
    oLength = len(o)
    oResultLen = int(m.pow(2,oLength))
    totalLen = len(Dec2Bin(oResultLen,0))           # 不补0，获得列表应有的位数
    ret = []
    for a in range(oResultLen):
        oIndex = Dec2Bin(a,totalLen)
        tempList = []
        for b in range(len(oIndex)):
            if(oIndex[b] == 1):
                tempList.append(o[b])
        ret.append(tempList)
    return ret


oInp = eval(input("输入待求集合(格式为“[1,2]”): "))
print(GetResult(oInp))
