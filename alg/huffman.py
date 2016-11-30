#!/usr/bin/python

def getFrequency(counts):
    total = sum(counts)
    return list(map(lambda x:x/total, counts))

class Node(object):
    def __init__(self, symbol = '', weight = 0, left = None, right = None):
        self.symbol = symbol
        self.left = left
        self.right = right
        self.weight = weight
        if (left and right):
            self.weight = left.weight + right.weight

    def result(self, path = ''):
        if self.symbol:
            print(self.symbol, path)
        if self.left:
            self.left.result(path + '0')
        if self.right:
            self.right.result(path + '1')

def genHuffman(symbol, counts):
    nodeList = []
    for i in range(len(symbol)):
        nodeList.append(Node(symbol[i], counts[i]))
    
    
    while (len(nodeList) >= 2):
        nodeList.sort(key = lambda x: x.weight, reverse = True)
        nodeList.append(Node(right = nodeList.pop(), left = nodeList.pop()))
    
    nodeList[0].result()

# test
symbol = ['A', 'B', 'C', 'D', 'E']
counts = [15, 7, 6, 6, 5]

genHuffman(symbol, counts)
