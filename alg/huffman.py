#!/usr/bin/python

class Node(object):
    def __init__(self, symbol = '', weight = 0, left = None, right = None):
        self.symbol, self.weight, self.left, self.right = symbol, weight, left, right
        if (left and right):
            self.weight = left.weight + right.weight

    def result(self, path = ''):
        self.symbol and print(self.symbol, path)
        self.left and self.left.result(path + '0')
        self.right and self.right.result(path + '1')


def genHuffman(symbol, counts):
    nodeList = []
    for i in range(len(symbol)):
        nodeList.append(Node(symbol[i], counts[i]))
    
    while (len(nodeList) >= 2):
        nodeList.sort(key = lambda x: x.weight, reverse = True)
        nodeList.append(Node(right = nodeList.pop(), left = nodeList.pop()))

    return nodeList


def getFrequency(counts):
    total = sum(counts)
    return list(map(lambda x:x/total, counts))

# test
symbol = ['A', 'B', 'C', 'D', 'E']
counts = [15, 7, 6, 6, 5]

genHuffman(symbol, counts)[0].result()
