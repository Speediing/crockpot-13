import { type SchemaTypeDefinition } from 'sanity'

import hero from './schemas/hero'
import home from './schemas/home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, home],
}
