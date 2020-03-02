# Tyche

## 项目结构与功能

```
响应基本格式
{
    <!-- 用于生成api -->
    urlname: string;
    <!-- 相应类型：实体，列表 -->
    type: 0;
    <!-- 字段数据 -->
    data: array || object;
    <!-- 描述文档 -->
    description: any;
}

响应字段类型：string; number; boolean; object; Array; any; function;

```

```
// 项目信息
	"project": {
		"name": "项目名字",
		"public": "0", 			// 是否公开项目，1是，0否
	},
	// 数据列表，每一个项表示一条json
	"josn": [{
		"name": "articles", 	// json实体名称
		"url": "articles", 	// 接口URL
		"desc": "描述",	// 描述
		"type": 0, 	// 类型，{}实体0或[]列表1
		"specs": {
			filedName: string,
			useComponentName: string;
		},
		"isActive": true,
        "data": [] || {}
	}]
```

>系统功能

第一部分：实体/列表的创建，服务器端生成相应字段，储存josn字符串。
第二部分：数据录入，创建不同版块（版块存储规范，当创建条目时将板块规范创建人一起传入（服务器），分为实体与列表两种版块类型，分配版块下

>直接使用组件创建json数据，同时生成规范


数据库表
用户表(user)：用户名（userName），密码（password），电子邮箱（email）。
项目表(project)：创建者id（creatorId），创建时间（creationTime），是否公开（isPublic），是否启用(isActive)，描述(desc)，项目名称(projectName)，唯一名称（用于url）(name)，api模板ids(templateIds)。
api模板表(template)：创建者id（creatorId），创建时间（creationTime），是否公开（未公开仅可创建者访问）（isPublic），是否启用(isActive)，api模板名称：（templateName）唯一名称(name)，类型（现仅有实体和列表）(type),描述(desc)，字段模型(fields)。
数据响应表(response)：data（字段数据），msg：（说明），code（状态码），所属项目（projectId）, 所属模板（templateId）创建者id（creatorId） ，创建时间（creationTime），是否公开（未公开仅可创建者访问）（isPublic）

>添加环境（environment）字段，
development发展（私人）0
test测试（公开测试）1
production生产（公开生产）2


>添加正式数据表，为项目表和api模板表
>公开的项目和api模板将不被允许删除，或者只有在发布的24小时内才允许删除
>在项目表和api模板表中添加版本名（version）字段、版本号（build）字段，或者在发布的24小时内

## 可视化编辑组件
1. 载体,包括数组模型和对象模型；
2. 字段，即string; number; boolean; object; Array; any; function;等数据类型的组件