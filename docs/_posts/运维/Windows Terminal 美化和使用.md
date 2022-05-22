---
category: 运维
tags:
  - window terminal
  - 教程
date: 2020-07-31
title: Windows Terminal 美化和使用
vssue-id: 6
---

谁说 Windows 下没有好看使用的命令行工具？本文将介绍关于 Windows Terminal 的美化和使用。

<!-- more -->

## 介绍

`Windows Terminal` 是一款新式、快速、高效、强大且高效的终端应用程序，适用于命令行工具和命令提示符，`PowerShell` 和 `WSL` 等 `Shell` 用户。主要功能包括多个选项卡、窗格、Unicode、和 UTF-8 字符支持，GPU 加速文本渲染引擎以及自定义主题、样式和配置。

这是一个开源项目，[Github 仓库][1]

## 安装

- [Windows Terminal][2]：可以直接在 `Microsoft Store` 安装。
- [oh-my-posh][3]：美化 `Powershell` 工具。
- [posh-git][4]：使 `Powershell` 支持 `git` 命令提示。
- [Fira Code][5]：为程序员而生的字体，好看、编程连字特性、支持 `PowerLine` 字符。

安装好 `Windows Terminal` 后，输入：

```shell
# 安装 oh-my-posh 和 posh-git
Install-Module oh-my-posh -Scope CurrentUser
Install-Module posh-git -Scope CurrentUser

# 打开 PowerShell 配置文件
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```

然后在记事本打开的窗口里添加配置：

```shell
Import-Module oh-my-posh
Import-Module posh-git
Set-Theme Paradox
```

保存后就能看到变化了，但是还有点小问题，有乱码！那就安装下 `Fira Code` 吧。

### 安装字体

首先进入 `Fira Code` 仓库的 [releases][10] 里下载最新字体文件。下载完成后，解压并双击 `.ttf` 文件进行安装。

最后打开 `Windows Terminal` 的设置，修改配置文件：

```json {4}
{
  "profiles": {
    "defaults": {
      "fontFace": "Fira Code",
    }
  }
}
```

至此，一个比较好看的命令行工具已经呈现在我们眼前，让我们在加把劲，让她更好看！

## 美化

<details>
<summary>点击查看 Windows Terminal 配置文件</summary>

```json
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
  "profiles": {
    "defaults": {
      "colorScheme": "Cyberdyne", // 设置主题名称
      "background": "#191323",    // 背景颜色
      "commandline": "powershell.exe", // 此处终端打开PS
      "cursorColor": "#FFFFFF",   // 光标颜色
      "cursorShape": "bar",       // 光标形状（默认为bar，即条状）
      "fontFace": "Fira Code",    // 字体
      "fontSize": 14,             // 字号
      "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", // 唯一标识符，随机生成
      "name": "PowerShell",       // 在下拉菜单里显示的名称
      "tabTitle": "PowerShell",   // 在选项卡上显示的名称
      "startingDirectory" : "."   // 起始目录
    },
    "list": [
      {
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "PowerShell",
        "commandline": "powershell.exe",
        "hidden": false
      },
      {
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "name": "CMD",
        "commandline": "cmd.exe",
        "hidden": false
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "hidden": false,
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure"
      },
      {
        "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
        "hidden": false,
        "name": "WSL",
        "source": "c:\\WINDOWS\\System32\\wsl.exe"
      }
    ]
  },
  "schemes": [
    {
      "name": "Cyberdyne",
      "black": "#080808",
      "red": "#ff8373",
      "green": "#00c172",
      "yellow": "#d2a700",
      "blue": "#0071cf",
      "purple": "#ff90fe",
      "cyan": "#6bffdd",
      "white": "#f1f1f1",
      "brightBlack": "#2e2e2e",
      "brightRed": "#ffc4be",
      "brightGreen": "#d6fcba",
      "brightYellow": "#fffed5",
      "brightBlue": "#c2e3ff",
      "brightPurple": "#ffb2fe",
      "brightCyan": "#e6e7fe",
      "brightWhite": "#ffffff",
      "background": "#151144",
      "foreground": "#00ff92"
    }
  ],
  "keybindings": [
    // 复制黏贴默认 Ctrl+Shift+C and Ctrl+Shift+V
    {
      "command": {
        "action": "copy",
        "singleLine": false
      },
      "keys": "ctrl+c"
    },
    {
      "command": "paste",
      "keys": "ctrl+v"
    },
    // 打开新窗口
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    }
  ]
}
```
</details>

这是 `Windows Terminal` 的配置文件，主要分为以下几大配置：

- profiles.defaults：全局默认设置，自定义全局配置，配置项可查看[官方文档][7]。
- profiles.list：可设置多个终端，比如 `PowerShell`、 `CMD`、自定义 `SSH` 等，配置项可查看[官方文档][8]，可在 [uuidgenerator][11] 网站生成 `UUID`。
- schemes：可自定义多个主题，在 `profiles.defaults.colorScheme` 属性中配置生效，在 [iTerm2-Color-Schemes][9] 项目中可找到你满意的主题。
- keybindings：可设置按键绑定，按 `Alt + 设置` 打开默认快捷键配置 `json`。

**我设置了主题为 `Cyberdyne`，更加好看了~哈哈。**

### 毛玻璃效果

我们来为 `profiles.list` 里的 `PowerShell` 添加毛玻璃效果吧：

<details>
<summary>点击查看 Windows Terminal 配置文件</summary>

```json {9-10}
{
  // ...略
  "profiles": {
    // ...略
    "list": [
      {
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        // ...略
        "useAcrylic": true,          // 是否启用亚克力效果
        "acrylicOpacity": 0.5,       // 亚克力不透明度
        "colorScheme" : "Cyberdyne", // 主题
        "background": "#191323",     // 背景色
        "cursorColor" : "#FFFFFF"    // 光标颜色
      },
      // ...略
    ]
  },
  // ...略
}
```
</details>

### 背景图

我们同样以 `PowerShell` 为例，添加背景图：

<details>
<summary>点击查看 Windows Terminal 配置文件</summary>

```json {9-12}
{
  // ...略
  "profiles": {
    // ...略
    "list": [
      {
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        // ...略
        "backgroundImage" : "C:/Path/To/File/.png", // 图片位置，支持.jpg、.png、.gif文件
        "backgroundImageOpacity" : 0.25,            // 透明度
        "backgroundImageAlignment" : "center",      // 对齐方式：center、left、top、right、bottom、topLeft等
        "backgroundImageStretchMode" : "uniformToFill" // 背景图像拉伸模式：none 不拉伸、fill 拉伸铺满、uniform 按比例拉伸、uniformToFill 按比例拉伸铺满
      },
      // ...略
    ]
  },
  // ...略
}
```
</details>

### 怀旧效果

我们以 `CMD` 为例，添加怀旧式命令提示符：

<details>
<summary>点击查看 Windows Terminal 配置文件</summary>

```json {9}
{
  // ...略
  "profiles": {
    // ...略
    "list": [
      {
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        // ...略
        "experimental.retroTerminalEffect": true,
        "colorScheme" : "Retro"
      },
      // ...略
    ]
  },
  "schemes": [
    {
      "name": "Retro",
      "background": "#000000",
      "black": "#00ff00",
      "blue": "#00ff00",
      "brightBlack": "#00ff00",
      "brightBlue": "#00ff00",
      "brightCyan": "#00ff00",
      "brightGreen": "#00ff00",
      "brightPurple": "#00ff00",
      "brightRed": "#00ff00",
      "brightWhite": "#00ff00",
      "brightYellow": "#00ff00",
      "cyan": "#00ff00",
      "foreground": "#00ff00",
      "green": "#00ff00",
      "purple": "#00ff00",
      "red": "#00ff00",
      "white": "#00ff00",
      "yellow": "#00ff00"
      }
    ]
  // ...略
}
```
</details>

至此，`Windows Terminal` 的美化就介绍完了，接下来，让我们来让她更好用吧~

## 使用技巧

### 添加右键菜单

新建一个 `wt.reg` 注册表文件，复制以下代码：

```shell
Windows Registry Editor Version 5.00
​
[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows Terminal here"
"Icon"="%USERPROFILE%\\AppData\\Local\\Microsoft\\WindowsTerminal\\terminal.ico"
​
[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\{{ 你的用户名 }}\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```

如果没有 `terminal.ico` 图标，可以从[官方仓库][12]中下载。

双击运行 `wt.reg` 文件，点击确定就可以在右键中看到 `Windows Terminal here` 选项了！

### 窗格

通过窗格，你可以在同一个选项卡中并行运行多个命令行应用程序，主要快捷键有：

- `Alt + Shift + plus`：打开垂直窗格。
- `Alt + Shift + -`：打开水平窗格。
- `Ctrl + Shift + w`：关闭当前窗格。
- `Alt + Shift + ↑↓←→`：改变当前窗格大小。
- `Alt + ↑↓←→`：移动选择窗格。
- `Alt + 单击下拉菜单`：添加不同 `Shell` 窗格。

### 添加自定义 Shell

我们以自定义 `SSH 远程`为例，在 `profiles.list` 中添加一段代码：

<details>
<summary>点击查看 Windows Terminal 配置文件</summary>

```json{15}
{
  // ...略
  "profiles": {
    "list": [
      // ...略
      {
        "guid": "{5dd4202b-5f35-4951-b969-6924c8077d55}",
        "name": "Bingblue",
        "tabTitle": "Bingblue",
        "suppressApplicationTitle": true,
        "useAcrylic": true,
        "acrylicOpacity": 0.7,
        "background": "#3C0315",
        "colorScheme": "Raspberry",
        "commandline": "ssh -p 22 root@122.51.109.178",
        "icon": "%USERPROFILE%\\AppData\\Local\\Microsoft\\WindowsTerminal\\b.png",
        "hidden": false
      },
    ]
  }
}
```
</details>

点击保存后就能在 `Windows Terminal` 下拉菜单中看到自定义 `Shell` 了~

但是每次都要输入密码，很麻烦，让我们直接设置免密登陆吧！

因为我的服务器是 `Ubuntu`，所以直接在用户下的 `.ssh` 文件夹下的 `authorized_keys` 文件中添加本机的 `id_rsa.pub` 公钥就行。

再次打开自定义 `Shell` 直接就默认登陆了，完美！这就是生产力啊！

## 最后

完整的 `Windows Terminal 配置文件` 如下：

<details>
<summary>点击查看 Windows Terminal 配置文件</summary>

```json
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
  "profiles": {
    "defaults": {
      "colorScheme": "Cyberdyne",
      "background": "#191323",
      "cursorColor": "#FFFFFF",
      "fontFace": "Fira Code",
      "fontSize": 14,
      "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
      "startingDirectory" : "."
    },
    "list": [
      {
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "PowerShell",
        "commandline": "powershell.exe",
        "useAcrylic": true,
        "acrylicOpacity": 0.6,
        "colorScheme": "Cyberdyne",
        "hidden": false
      },
      {
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "name": "CMD",
        "commandline": "cmd.exe",
        "experimental.retroTerminalEffect": true,
        "colorScheme": "Retro",
        "hidden": false
      },
      {
        "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
        "name": "Ubuntu",
        "tabTitle": "Ubuntu",
        "suppressApplicationTitle": true,
        "useAcrylic": true,
        "acrylicOpacity": 0.6,
        "background": "#3C0315",
        "colorScheme": "Raspberry",
        "padding": "5, 5, 5, 5",
        "source": "Windows.Terminal.Wsl",
        "hidden": false
      },
      {
        "guid": "{5dd4202b-5f35-4951-b969-6924c8077d55}",
        "name": "Bingblue",
        "tabTitle": "Bingblue",
        "suppressApplicationTitle": true,
        "useAcrylic": true,
        "acrylicOpacity": 0.7,
        "background": "#3C0315",
        "colorScheme": "Raspberry",
        "commandline": "ssh -p 22 root@122.51.109.178",
        "icon": "%USERPROFILE%\\AppData\\Local\\Microsoft\\WindowsTerminal\\b.png",
        "hidden": false
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure",
        "hidden": false
      }
    ]
  },
  "schemes": [
    {
      "name": "Raspberry",
      "background": "#3C0315",
      "black": "#282A2E",
      "blue": "#0170C5",
      "brightBlack": "#676E7A",
      "brightBlue": "#80c8ff",
      "brightCyan": "#8ABEB7",
      "brightGreen": "#B5D680",
      "brightPurple": "#AC79BB",
      "brightRed": "#BD6D85",
      "brightWhite": "#FFFFFD",
      "brightYellow": "#FFFD76",
      "cyan": "#3F8D83",
      "foreground": "#FFFFFD",
      "green": "#76AB23",
      "purple": "#7D498F",
      "red": "#BD0940",
      "white": "#FFFFFD",
      "yellow": "#E0DE48"
    },
    {
      "name": "Retro",
      "background": "#000000",
      "black": "#00ff00",
      "blue": "#00ff00",
      "brightBlack": "#00ff00",
      "brightBlue": "#00ff00",
      "brightCyan": "#00ff00",
      "brightGreen": "#00ff00",
      "brightPurple": "#00ff00",
      "brightRed": "#00ff00",
      "brightWhite": "#00ff00",
      "brightYellow": "#00ff00",
      "cyan": "#00ff00",
      "foreground": "#00ff00",
      "green": "#00ff00",
      "purple": "#00ff00",
      "red": "#00ff00",
      "white": "#00ff00",
      "yellow": "#00ff00"
    },
    {
      "name": "Cyberdyne",
      "black": "#080808",
      "red": "#ff8373",
      "green": "#00c172",
      "yellow": "#d2a700",
      "blue": "#0071cf",
      "purple": "#ff90fe",
      "cyan": "#6bffdd",
      "white": "#f1f1f1",
      "brightBlack": "#2e2e2e",
      "brightRed": "#ffc4be",
      "brightGreen": "#d6fcba",
      "brightYellow": "#fffed5",
      "brightBlue": "#c2e3ff",
      "brightPurple": "#ffb2fe",
      "brightCyan": "#e6e7fe",
      "brightWhite": "#ffffff",
      "background": "#151144",
      "foreground": "#00ff92"
    },
    {
      "name": "Dracula",
      "background": "#272935",
      "black": "#21222C",
      "blue": "#BD93F9",
      "cyan": "#8BE9FD",
      "foreground": "#F8F8F2",
      "green": "#50FA7B",
      "purple": "#FF79C6",
      "red": "#FF5555",
      "white": "#F8F8F2",
      "yellow": "#FFB86C",
      "brightBlack": "#6272A4",
      "brightBlue": "#D6ACFF",
      "brightCyan": "#A4FFFF",
      "brightGreen": "#69FF94",
      "brightPurple": "#FF92DF",
      "brightRed": "#FF6E6E",
      "brightWhite": "#F8F8F2",
      "brightYellow": "#FFFFA5"
    }
  ],
  "keybindings": [
    {
      "command": {
        "action": "copy",
        "singleLine": false
      },
      "keys": "ctrl+c"
    },
    {
      "command": "paste",
      "keys": "ctrl+v"
    },
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "ctrl+n"
    }
  ]
}
```
</details>

本次文章到此就结束了，如有还有什么不会的欢迎加QQ群: [215259343][13]交流，期待你的加入~

[1]:https://github.com/microsoft/terminal
[2]:https://www.microsoft.com/zh-cn/p/windows-terminal-preview/9n0dx20hk701#activetab=pivot:overviewtab
[3]:https://github.com/JanDeDobbeleer/oh-my-posh
[4]:https://github.com/dahlbyk/posh-git
[5]:https://github.com/tonsky/FiraCode
[6]:https://github.com/mbadolato/iTerm2-Color-Schemes
[7]:https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/global-settings
[8]:https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/profile-settings
[9]:https://github.com/mbadolato/iTerm2-Color-Schemes
[10]:https://github.com/tonsky/FiraCode/releases
[11]:https://www.uuidgenerator.net/
[12]:https://github.com/microsoft/terminal/blob/master/res/terminal.ico
[13]:https://jq.qq.com/?_wv=1027&k=5tyQDAd
