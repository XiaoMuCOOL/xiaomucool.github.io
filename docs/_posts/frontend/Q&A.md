---
category: 前端
tags:
  - Q&A
  - 小技巧
date: 2020-07-13
title: 排坑之旅
vssue-id: 5
---

坑一直都有，看见一个填一个。

<!-- more -->

## 前端坑

### 环境问题

<details>
<summary>1、安装 node-sass</summary>

```shell
npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass
```
</details>

## 后端

### 数据库问题

<details>
<summary>1、数据库保存表情图标</summary>

```sql
ALTER TABLE 表名 MODIFY 字段名 VARCHAR(128) CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;

# ALTER TABLE sys_user MODIFY nickname VARCHAR(128) CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
</details>