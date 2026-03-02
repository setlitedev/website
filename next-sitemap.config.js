/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.setlite.com',  // ✅ change to your primary domain
  generateRobotsTxt: true,         // will create robots.txt
  sitemapSize: 7000,
  outDir: 'public',                // places sitemap/robots.txt in /public
  changefreq: 'weekly',
  priority: 0.7,
  // Optional: include/exclude patterns
  exclude: ['/404', '/500'],
};
