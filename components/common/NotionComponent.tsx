'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import 'react-notion-x/src/styles.css';

export const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (module) => module.Collection
  )
);

export default function NotionComponent({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      disableHeader={true}
      components={{
        nextImage: Image,
        nextLink: Link,
        Collection,
      }}
    />
  );
}
