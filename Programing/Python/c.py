f = open('quote.txt', 'r')
while f:
    line = f.readline()
    print(line)
    if line == "":
        break
f.close()