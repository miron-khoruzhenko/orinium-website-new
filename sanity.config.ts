import { defaultTheme, defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { documentInternationalization } from '@sanity/document-internationalization'

import schemas from './sanity/schemas';
import schemaTypes from './sanity/config/sanity.types';
import languageField, { supportedLanguages } from './sanity/config/sanity.language';
import { structure } from './sanity/config/sanity.structure';
import { baseOptions } from './sanity/config/sanity.client';



const config = defineConfig({
	...baseOptions,
	title: 'Orinium CMS',

	basePath: '/admin',
	schema: {
		types: schemas
	},
	plugins: [
		structureTool({
			structure: structure
		}),
		visionTool(),
		// structureTool(),
		documentInternationalization({
			// documentation:
			//doc: https://github.com/sanity-io/document-internationalization

			// example config:
			// https://github.com/sanity-io/demo-course-platform/blob/main/studio/sanity.config.tsx

			supportedLanguages,

			schemaTypes: schemaTypes,
			apiVersion: '2025-10-06',
			languageField: languageField,
			allowCreateMetaDoc: true,
			metadataFields: [
				{ name: 'slug', type: 'slug' },
			],
			weakReferences: true
		}),
	],
})

// todo: 

export default config;

