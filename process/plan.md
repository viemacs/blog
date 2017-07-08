# new T1 算法 Schedule 48
<span style="font-size:small">所有时间估计实施时长乘系数 0.5~3</span>

## 程序
### apps 23.5 + 3*?
+ bills 4.5
    - list 1/4
    - get 1/4
    - 入库 1
    - 出库 1
    - 指定单据入库退货manual 1
    - 指定单据出库退货manual 1
+ stocks 11 + ? + ? + ?
    - app.stocks 3 + ?
        - 入库 1/4
        - 出库 1/4
        - list 1/8
        - get 1/8
        - 指定单据入库退货manual 1
        - 指定单据出库退货manual 5/4
        - 修改 ？？
    - api.settlement 3 + ?
        - 入库 1/4
        - 出库 1/4
        - list 1/8
        - get 1/8
        - 指定单据入库退货manual 1
        - 指定单据出库退货manual 5/4
        - 修改 ？？
    - 关联表 1
        - 出库关联 1/8
        - 关联修改 1/8
        - **关联调用** 3/4
    - app.inventory 4 + ?
        - 入库 1/2
        - 出库 1/2
        - list 1/8
        - get 1/8
        - 指定单据入库退货manual 5/4
        - 指定单据出库退货manual 6/4
        - 修改 ？？

+ queues 8
    - 入队
    - 处理
    - 完成
    - 单记录单步的操作
    - 单记录顺序的操作
    - 插入新记录的处理
    - 多记录
    - 清除

### models 8
- settlement 修改 1  
  2016-12-25 数据库单元用例时发现的settlement的问题
- inventory 全部 3
- queues 全部 4

## 单元用例 12
- bills 4
- stocks 4
    - stocks 1+
    - settlement 1+
    - inventory 1+
- queues 4

## 集成用例 4
- 出入库 4
- 指定单据退货manual

## 解决方案 8
    超过8小时就不做，先确定问题
指定单据退货fifo
指定单据退货avg
不指定单据退货manual
不指定单据退货fifo
不指定单据退货avg
修改单据

