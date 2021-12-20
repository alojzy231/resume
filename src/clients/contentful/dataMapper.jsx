import { documentToReactComponents, BLOCKS, MARKS, INLINES } from 'contentful';

function extractAsset(itemData, assets) {
  const assetId = itemData.sys.id;
  const asset = assets.find((collectionAsset) => collectionAsset.sys.id === assetId);
  const assetData = { url: asset.fields.file.url, title: asset.fields.title };
  return assetData;
}

function addAssetsToItems(data) {
  const { items } = data;
  const assets = data.includes.Asset;

  items.forEach((item) => {
    const itemData = item.fields;

    Object.keys(itemData).forEach((contentKey) => {
      const contentData = itemData[contentKey];
      if (contentData.sys?.linkType === 'Asset') {
        const asset = extractAsset(contentData, assets);
        itemData[contentKey] = asset;
      }
    });
  });
  return data;
}

function extractItems(data) {
  const collection = addAssetsToItems(data);
  return collection.items;
}

function mapByContentType(items) {
  const sortedItems = {};
  items.forEach((item) => {
    const itemData = item.fields;
    const contentType = item.sys.contentType.sys.id;
    sortedItems[contentType] = [...(sortedItems[contentType] || []), itemData];
  });
  return sortedItems;
}
function mapItemsCollection(collection) {
  const mappedCollection = mapByContentType(collection);
  return mappedCollection;
}

export function convertRichTextToReactComponent(Component, richText) {
  const options = {
    renderText: (text) =>
      text.split('\n').reduce(
        (children, textSegment, index) => [
          ...children,
          // eslint-disable-next-line react/no-array-index-key
          index > 0 && <br key={index} />,
          textSegment,
        ],
        [],
      ),
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Component>{children}</Component>,
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <ins>{text}</ins>,
    },
    rednerInline: {
      // Make sure to prepare generic Hyperlink component
      // eslint-disable-next-line react/prop-types
      [INLINES.HYPERLINK]: ({ data }, text) => <a href={data.uri}>{text}</a>,
    },
  };
  return documentToReactComponents(richText, options);
}

export default function mapData(data) {
  const itemCollection = extractItems(data);
  const mappedCollection = mapItemsCollection(itemCollection);
  return mappedCollection;
}
