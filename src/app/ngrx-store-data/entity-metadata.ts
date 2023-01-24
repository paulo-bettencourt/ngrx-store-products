import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Product: {
  }
};

// because the plural of "hero" is not "heros"
const pluralNames = { Product: 'Product' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
