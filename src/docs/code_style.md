# **配置 editorconfig 文件**

## 步骤

⑴ 在项目下创建配置文件 .editorconfig

⑵ 配置统一的编码风格

```
# http://editorconfig.org


root = true


[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行


[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

⑶ 安装 EditorConfig for VS Code 插件

因为采用的是 VSCode 编辑器来进行开发，默认不会去读取这个上面的配置文件，所以我们需要安装 EditorConfig for VS Code 插件。如果采用的是 WebStorm 编辑器来进行开发，那么默认是会读取这个配置文件的，不需要格外的安装插件。

![1654164324811.png](image/code_style/1654164324811.png)
