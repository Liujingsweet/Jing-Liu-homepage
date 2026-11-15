# Jing Liu homepage · 使用与修改说明

这是刘静（Jing Liu）的英文学术个人主页项目。**网页入口是 [`index.html`](index.html)**，本文件是使用说明，进入仓库后会显示在文件列表下方。

**当前状态（2026 年 11 月 15 日）：仓库为 Private，GitHub Pages 尚未启用，网站没有通过 GitHub 对外发布。**

## 1. 主页在哪里，怎么看？

### 直接查看现有网站

[打开当前 Sites 预览（仅本人可见，需要用拥有该网站的账号登录）](https://jing-liu-mathematics.aware-frost-9868.chatgpt.site/)

这份 Sites 预览与 GitHub 仓库分别保存。**修改 GitHub 中的文件，不会自动更新上面的 Sites 预览。** 想看 GitHub 最新文件对应的效果，请用下面的方法。

### 查看这个仓库的最新网页

1. 回到[仓库首页](https://github.com/Liujingsweet/Jing-Liu-homepage)，点击文件列表上方的绿色 **Code** 按钮。
2. 点击 **Download ZIP**，下载整个项目。下载方法见 [GitHub 官方说明](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives)。
3. 解压 ZIP，进入解压得到的文件夹。
4. 用浏览器打开里面的 **`index.html`**。在 Mac 上可以右键该文件 → **打开方式** → Chrome 或 Safari。
5. 页面上的 **Curriculum vitae · PDF ↓** 是简历下载入口。

请保留整个文件夹结构：`index.html`、`styles.css`、`app.js` 和 `assets` 文件夹要放在一起。只下载一个 HTML 文件会缺少样式、照片和简历。论文、导师等外部链接需要联网。

**在 GitHub 网页里点击 `index.html` 会看到代码，这是正常的。** 它不是已经上线的网站地址；编辑器中的 Preview 也不能替代完整网页预览。

### 以后公开时的网站地址

预定地址：<https://liujingsweet.github.io/Jing-Liu-homepage/>（**尚未启用**）。

当前请继续保留 Private，修改完整并决定公开后再发布。GitHub Pages 是把仓库里的网页文件发布成网站的功能，项目网站默认地址包含仓库名；GitHub Free 支持从公开仓库发布。参见 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)。

## 2. 每个文件是做什么的？

| 文件 | 用途 | 什么情况下修改 |
| --- | --- | --- |
| [`index.html`](index.html) | 主页入口，保存姓名、简介、教育经历、论文、报告、邮箱，以及图片和 PDF 的链接 | 修改网页文字、论文或链接时，主要改它 |
| [`styles.css`](styles.css) | 控制颜色、字体、字号、间距、双栏布局及手机显示效果 | 修改网页外观时 |
| [`app.js`](app.js) | 控制导航栏目高亮、复制邮箱按钮及提示 | 修改交互功能，或更换邮箱时 |
| [`assets/jing-liu.png`](assets/jing-liu.png) | 个人照片 | 更换头像时 |
| [`assets/courtyard-header.png`](assets/courtyard-header.png) | 页面顶部的中式建筑横幅 | 更换横幅时 |
| [`assets/Jing_Liu_CV.pdf`](assets/Jing_Liu_CV.pdf) | 网页提供下载的 PDF 简历 | 更新简历时 |
| [`assets/favicon.svg`](assets/favicon.svg) | 浏览器标签页的小图标 | 更换网站图标时 |
| [`.nojekyll`](.nojekyll) | 空文件，让 GitHub Pages 按现有静态文件发布 | 保留即可，无需填写内容 |
| [`.gitignore`](.gitignore) | 使用 Git 同步时，忽略 `.DS_Store`、`Thumbs.db` 等电脑生成的杂项文件 | 通常不用改；网页手动上传时仍需自己避开杂项文件 |
| [`README.md`](README.md) | 你正在看的使用说明 | 想补充操作说明时 |

本项目是简单的 HTML / CSS / JavaScript 网页，没有数据库；预览和修改文字不需要安装依赖或执行构建命令。

## 3. 最简单的文字修改方法：直接在 GitHub 编辑

1. 登录自己的 GitHub 账号，打开要修改的文件，例如 [`index.html`](index.html)。
2. 点击文件右上角的**铅笔图标 / Edit this file**，进入编辑页面。
3. 找到要改的原句，只替换对应文字；保留周围的 `<p>`、`<a>` 等标签，以及引号和括号。
4. 点击 **Commit changes…**，填写简短说明，例如 `Update About me`。
5. 在当前个人私有草稿中，可选择 **Commit directly to the main branch**，再点击 **Commit changes** 保存。
6. 下载最新 ZIP，在浏览器中检查修改后的网页。以后启用 GitHub Pages 后，再到正式网址检查发布结果。

这里的 **Commit changes** 可以理解为“保存这次修改，并留下历史记录”。当前保存文件不会自动把私有仓库设为公开。编辑界面的操作见 [GitHub 官方说明](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)。

也可以先在电脑上用纯文本或代码编辑器修改、预览，再到仓库相应目录选择 **Add file → Upload files** 上传同名文件，最后保存。不要使用 Word 编辑 HTML / CSS / JS 文件。GitHub 上的修改与电脑里的旧文件不会自动同步，每次修改前先确认使用的是最新版本。

## 4. 修改某一块内容，应该找哪里？

以下内容都在 [`index.html`](index.html) 中。文件中部分内容写在较长的一行，按标题或原句查找比按行号更方便。

| 想修改的内容 | 可以搜索的文字或标记 |
| --- | --- |
| 顶部姓名、学科 | `class="masthead"` 或 `Mathematics · Combinatorics` |
| 侧栏身份、学校、照片和 CV 链接 | `class="profile"` |
| 侧栏研究领域 | `RESEARCH AREAS` |
| About me 简介 | `id="about"` 或简介中的原句 |
| Education 教育经历 | `id="education"` |
| 已发表论文 | `id="published"` 或论文标题 |
| 预印本和投稿中论文 | `id="preprints"` 或论文标题 |
| Talks & conferences | `id="talks"` |
| 底部联系方式 | `id="contact"` |
| 浏览器标签页标题、分享摘要 | `<title>`、`name="description"`、`og:title`、`og:description` |

### 改邮箱

在 `index.html` 中查找旧邮箱，替换显示文字和所有 `mailto:` 链接；再打开 `app.js`，替换复制按钮使用的同一个邮箱。**只改网页上的文字，会导致复制按钮仍复制旧邮箱。**

### 改论文或增加论文

- 修改已有论文：搜索论文标题，调整标题、作者和发表信息。论文标题和下方 **DOI / arXiv** 按钮各有一个链接，换链接时两处一起检查。
- 新增论文：找到对应分组，复制一整条 `<li class="paper">…</li>`，再换成新论文的真实信息；不要只复制中间一段。
- 稿件正式发表后：将该条目移到已发表分组，更新正式发表信息和 DOI。投稿中的文章只写稿件状态或 arXiv 信息，沿用本项目不展示具体投稿期刊的做法。
- 两个分组旁的 **`4 papers`** 是手动填写的数量，新增、删除或移动论文后要一起更新。

**连续编号也需检查：** 当前有 4 篇已发表论文，预印本从 5 开始。若已发表篇数变成 N，需要把预印本列表的 `start="5"` 改成 N+1，并在 `styles.css` 中把 `.paper-group:nth-of-type(4) .paper-list{counter-reset:item 4}` 的末尾数字改成 N。显示出来的编号主要由这条样式控制，只改 `start` 不够。若还要改分组结构，可以请我一起处理编号。

### 改照片、横幅或 PDF 简历

1. 准备好新文件。
2. 在仓库中进入 **`assets` 文件夹**。
3. 选择 **Add file → Upload files**，上传与旧文件**同名、同格式**的新文件。
4. 点击 **Commit changes** 保存，再下载最新项目检查。

保留原文件名最省事：照片用 `jing-liu.png`，横幅用 `courtyard-header.png`，简历用 `Jing_Liu_CV.pdf`。上传 PDF 或照片时请进入 `assets`，不要误放到仓库根目录。JPG 图片应先真正转换为 PNG，或保留 JPG 格式并同步修改 HTML 中的文件路径；只修改扩展名并不等于转换格式。

**网页与 PDF 简历不会自动同步。** 更新个人经历或论文后，需要分别修改网页和简历原文档，再把简历导出为 PDF，替换这里的 `Jing_Liu_CV.pdf`。Word 原稿由你在电脑上保存，网站继续提供 PDF 下载。

### 改字体、大小、颜色和排版

修改 [`styles.css`](styles.css)。可按下面的标记查找：

| 标记 | 控制内容 |
| --- | --- |
| 开头的 `:root` | 整体配色与字体；`--paper` 是页面底色，`--ink` 是正文色，`--accent` 是朱红强调色，`--link` 是链接色 |
| `body` | 默认正文字号和行距，目前为 `14px/1.65` |
| `.name h1` | 顶部英文姓名字号 |
| `h2` | 栏目标题字号 |
| `.page`、`.layout` | 页面宽度、左右两栏和间距 |
| `.portrait`、`.courtyard` | 个人照片和建筑横幅的大小、裁切方式 |
| `@media` | 较窄屏幕、手机和打印时的专用样式 |

部分栏目单独设置了字号，所以修改 `body` 不会改变所有文字。同一个标记也可能在手机样式中再次出现。每次少改一项，预览后把浏览器缩窄，再检查手机布局。

## 5. 修改后检查什么？

- 页面能否正常打开，照片、横幅、字体和布局是否正常。
- About、Education、Publications、Talks、Contact 导航能否跳到正确位置。
- 论文标题和 DOI / arXiv 按钮是否链接到同一篇正确文章，分组数量和编号是否正确。
- CV 按钮是否下载最新的 PDF，PDF 内容是否与网页一致。
- 邮箱链接和复制按钮是否使用最新邮箱。直接打开本地 HTML 时，复制按钮可能受浏览器权限限制；仍可选中邮箱手动复制。
- 缩窄浏览器窗口后，文字是否溢出、图片是否变形。

保留栏目原有的 `id` 与导航 `href="#..."` 配对。图片、样式和 PDF 继续使用 `assets/...`、`styles.css` 这样的相对路径，不要随意加开头的 `/`，以免未来在项目网址下找不到文件。

## 6. 改错了怎么办？以后怎样继续？

每次保存都有记录。打开对应文件的 **History** 可以查看旧版本；文字文件可以把旧版本内容复制回当前文件再保存，图片和 PDF 则可下载旧版本后重新上传。大改前也可以先下载一份 ZIP 留作备份。

如果请我继续修改，可以直接说明“修改哪个栏目、原内容是什么、替换为什么”，并提醒**继续保持私有**。例如：“把 About me 的这句话换成……，同步更新 GitHub，暂时不公开。”如果还希望当前 Sites 预览也更新，请一并说明。

等内容确认完整后，再单独进行公开与 GitHub Pages 发布；本次添加说明文件没有改变仓库的私有状态。
