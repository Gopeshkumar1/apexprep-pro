import { NextResponse } from 'next/server';
import { MOCK_PRODUCTS } from '@/lib/mock-data';

export async function GET() {
  const baseUrl = 'https://littlethreads.in';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>LittleThreads India Google Merchant Feed</title>
    <link>${baseUrl}</link>
    <description>Boutique Quality 100% Breathable Cotton Children Clothing India</description>
`;

  MOCK_PRODUCTS.forEach((p) => {
    xml += `
    <item>
      <g:id>${p.id}</g:id>
      <g:title><![CDATA[${p.title}]]></g:title>
      <g:description><![CDATA[${p.description}]]></g:description>
      <g:link>${baseUrl}/product/${p.slug}</g:link>
      <g:image_link>${p.images[0]?.url}</g:image_link>
      <g:price>${p.price} INR</g:price>
      <g:availability>in_stock</g:availability>
      <g:brand>LittleThreads India</g:brand>
      <g:condition>new</g:condition>
      <g:age_group>kids</g:age_group>
      <g:gender>${p.gender === 'girls' ? 'female' : p.gender === 'boys' ? 'male' : 'unisex'}</g:gender>
      <g:color>${p.color}</g:color>
      <g:size>${p.ageGroup}</g:size>
    </item>`;
  });

  xml += `
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
