# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
## umi在antdpro中的应用

1. layout
 需安装 @ant-design/pro-layout
```bash
$ yarn add @ant-design/pro-layout
```
配置需查看[@ant-design/pro-layout](https://www.npmjs.com/package/@ant-design/pro-layout)npm文档
给umi的router拓展了配置参数，方便一键生成菜单

```javascript
export interface MenuDataItem {
  /** @name submenu */
  children?: MenuDataItem[];
  /** @name Hide child nodes in the menu */
  hideChildrenInMenu?: boolean;
  /** @name hideSelf and children in menu */
  hideInMenu?: boolean;
  /** @name Icon of the menu */
  icon?: React.ReactNode;
  /** @name Internationalization key for custom menus */
  locale?: string | false;
  /** @name The name of the menu */
  name?: string;
  /** @name is used to calibrate the selected value, default is path */
  key?: string;
  /** @name disable menu option */
  disabled?: boolean;
  /** @name path */
  path?: string;
  /**
   * When this node is selected, the node of parentKeys is also selected
   *
   * @name custom parent node
   */
  parentKeys?: string[];
  /** @name hides itself and elevates child nodes to its level */
  flatMenu?: boolean;

  [key: string]: any;
}
```

