export default function sitemap() {
  const baseUrl = 'https://dortfolio.vercel.app/';
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
  ];
}
