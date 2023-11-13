---
title: "自架Blog，寫作動機和技術選擇"
publishedDate: "2023-11-08"
updatedDate: "2023-11-09"
canonicalURL: "https://ygdd.netlify.app/blog/beginning"
sortOrder: 0
isDraft: false
relatedPosts: []
image: {
  src: "/the-beginning-of-divine-time.jpg",
  alt: ""
}
tags: []
#relatedPosts:
#- about-me # references `src/content/blog/about-me.md`
#- my-year-in-review # references `src/content/blog/my-year-in-review.md`
---

<div>
  <h2>爲什麼要重新架一個Blog</h2>
  <p>之前會將筆記打在Notion上或是發佈在Medium上，陸續又用了Obsidian、Tana等筆記軟體，導致筆記散落各處。加上平常喜歡學習及閱讀，陸陸續續看了很多的課程及書籍，但如果要我說出自己到底學了什麼，我也說不出個所以然...</p>
  <p class="mt-4">
    我打算利用這個網站重新整理自己的知識庫，並記錄自己的想法及分享生活。
    <quote>「如果你無法清楚地說出來，你就無法真正理解。」-- John Searle</quote>
  </p>
  <h2>使用的技術</h2>
  <p>原本習慣的框架是Nuxt及Vue，但實作是最好的學習方法，順便利用這次的機會使用之前沒有用過的框架，這個網站使用的技術有:</p>
  <ul class="mt-4">
    <li>
      套件管理: <a href="https://bun.sh/" target="_blank">Bun</a>
      <ul class="pl-4 list-disc">
        <li>類似於 Node.js，但它專注於提供更快的性能和更好的開發者體驗。</li>
        <li>做爲package manager，比其他套件管理工具(例如pnpm、npm 與Yarn)快10幾倍以上。</li>
      </ul>
    </li>
    <li>
      網頁框架: <a href="https://astro.build/" target="_blank">Astro</a>
      <ul class="pl-4 list-disc">
        <li>Astro是以內容爲主的網頁框架，適合Blog、作品集等網站架設。並內建Blog的模板，可快速架設。</li>
        <li>運行快速且靈活，支援各種前端框架，例如React、Vue等。</li>
      </ul>
    </li>
    <li>
      自動部署: <a href="https://www.netlify.com/" target="_blank">Netlify</a>
      <ul class="pl-4 list-disc">
        <li>搭配github，branch push之後自動部署</li>
      </ul>
    </li>
    <li>CSS框架: <a href="https://tailwindcss.com/" target="_blank">Tailwind css</a></li>
  </ul>
</div>