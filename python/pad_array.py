#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):

    padCount = 0
    answer = ""
    fillLen = min_size - len(array)
    if fillLen > 1:
        while padCount < fillLen:
            array.append(value)
            padCount += 1
    
    answer = array
    return answer

print(pad([1,2,3],7,"p"))
print(pad(["w","w","w"],10,"e"))
print(pad(["fox","box"],2,"p"))
print(pad(["fox", "box","fox", "box"],8,"sox!"))
print(pad([1,"two",3,"four"],12,"number"))

# look into rjust, ljust as python padding methods