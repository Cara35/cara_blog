# SCP传输

设本机为c远程机为m

```bash
#查看openssh-server是否启动
ps -e | grep ssh

#如果没有任何提示则是没有启动,需要进行安装
sudo /etc/init.d/ssh -start 

#启动进程,若提示找不到命令则需要安装openssh-server
sudo apt-get install openssh-server

#另外，openssh-client ubuntu是默认已经安装好的，如果没有安装可以用以下命令安装：
sudo apt-get install openssh-client

#查看ip地址
ifconfig
```

## 使用

```
#SSH 远程登入m
ssh m@m’s ip (eg.192.168.8.14) 

#将文件/文件夹 m ---> c
scp -r m@192.168.8.14:/home/m/file /home/c/file

#c ---> m
scp -r /home/c/file m@192.168.8.14:/home/m/file
```

