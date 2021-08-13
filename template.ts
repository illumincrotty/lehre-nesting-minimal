import type { ClassDocProps, FunctionDocProps, DocProps } from './lehreMock';

/**
 * stringArrayToDocumentation
 *
 * Formats string array in documentation style
 *
 * @param input - documentation as an array of strings
 * @param leadingSpaces - number of leading spaces for each line
 * @returns stylized documentation
 */
const stringArrayToDocumentation = (
	input: string[],
	leadingSpaces = 0
): string =>
	`${['/**', ...input.map((line) => ' * '.concat(line)), ' */'] //adds comment open, stars for each line, and comment close
		.map((line) => `${' '.repeat(leadingSpaces)}${line}`) //add spaces to beginning of each line
		.join('\n')}`; //convert array to one string with new lines between each element

/**
 * generateClassDoc
 *
 * converts information object into class documentation
 *
 * @param input - information about a class
 * @returns class documentation string
 */
const generateClassDoc = (input: ClassDocProps): string =>
	stringArrayToDocumentation([
		input.name,
		'',
		'TODO describe class',
		...(input.heritageClauses.length > 0
			? input.heritageClauses.map(
					(clause) => `@${clause.type} ${clause.value}`
			  )
			: []),
	]);

/**
 * interfaceDocumentation
 *
 * converts information object into an array of documentation strings
 *
 * @param input - information about an interface
 * @returns interface documentation as an array of strings
 */
const interfaceDocumentation = (input: ClassDocProps): string[] => [
	input.name,
	'',
	'TODO describe interface',
];

/**
 * generateInterfaceDoc
 *
 * converts information object into interface documentation
 *
 * @param input - information about an interface
 * @returns the documentation string
 */
const generateInterfaceDoc = (input: ClassDocProps): string =>
	stringArrayToDocumentation(interfaceDocumentation(input));

/**
 * internalFunctionDoc
 *
 * converts information object into function documentation as an unformatted array of strings
 *
 * @param input - information about a function
 * @returns function documentation as unformatted string array
 */
const internalFunctionDoc = (input: FunctionDocProps): string[] => [
	...(input.name.length > 0 ? [input.name] : []),
	'',
	'TODO describe function',
	'',
	...input.params.map(
		(parameter) => `@param ${parameter.name} - TODO describe parameter`
	),
	...(input.returnType.length > 0
		? ['@returns TODO describe return value']
		: []),
];

/**
 * generateFunctionDoc
 *
 * converts information object into function documentation
 *
 * @param input - information about a function
 * @returns function documentation string
 */
const generateFunctionDoc = (input: FunctionDocProps): string =>
	stringArrayToDocumentation(internalFunctionDoc(input), input.start.column);

/**
 * generatePropertyDoc
 *
 * converts information object into property debug documentation
 *
 * @param input - object of information about class property
 * @returns debugging documentation string
 */
const generatePropertyDoc = (input: DocProps): string => {
	return stringArrayToDocumentation(
		[
			`Name: ${input.name}`,
			'',
			`type: ${input.type}`,
			'',
			`Methods detected: ${input.methods ? true : false}`,
			'',
			`Parameters detected: ${input.params ? true : false}`,
			...(input.params
				? [`Number of parameters: ${input.params.length.toString(10)}`]
				: []),
			'',
			`heritage clauses detected: ${
				input.heritageClauses ? true : false
			}`,
		],
		input.start.column
	);
};

export {
	generateClassDoc,
	generateInterfaceDoc,
	generateFunctionDoc,
	generatePropertyDoc,
};
