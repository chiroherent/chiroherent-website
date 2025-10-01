module.exports = (collection, tag) => {
  const collectionSorted = collection.getFilteredByTag(tag)
    .sort((a, b) => { // sorteer op volgorde van 'order' in de frontmatter
      return Number(a.data.order) - Number(b.data.order);
    });
  return collectionSorted;
};