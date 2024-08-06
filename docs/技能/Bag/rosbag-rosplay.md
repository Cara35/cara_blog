# rosbag-rosplay

## 基础指令

```
#录入部分话题指令
rosbag record /topic1/topic2

#录入全部话题指令并指定名字
rosbag record -o fileName -a

#播放录包
rosbag play bag包名
```

## rosplay其他指令

```
#正常速度播放
rosbag play myRecord.bag  

#仅播放指定的topic
rosbag play myRecord.bag  --topic /topic1 /topic2   

#10倍速播放数据
rosbag play -r 10 myRecord.bag  

#循环播放
rosbag play -l  myRecord.bag  
```

