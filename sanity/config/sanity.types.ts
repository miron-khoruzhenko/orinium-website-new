import schemas from "@/sanity/schemas";

const schemaTypes = schemas.map(schema => {
	return schema.name;
});

export default schemaTypes;