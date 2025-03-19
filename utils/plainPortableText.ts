import type { PortableTextBlock } from "@sanity/types";

export const portableTextToPlainText = (portableText: PortableTextBlock[]) =>
  portableText
    .map(block => block.children?.map(span => span.text).join('') || '')
    .join('\n');
