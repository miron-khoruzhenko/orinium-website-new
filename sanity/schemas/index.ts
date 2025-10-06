// import project_schema from "./home/project-schema";

// const schemas = [project_schema];

// export default schemas;

// Импортируем только существующие схемы
import projectSchema from './home/project-schema';
import heroSectionSchema from './home/hero-section';

// В массиве только то, что мы используем
const schemas = [
  projectSchema,
  heroSectionSchema,
];

export default schemas;