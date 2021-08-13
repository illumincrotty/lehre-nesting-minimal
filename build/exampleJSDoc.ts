const exampleVariable = 18;

/**
 * exampleNamedFunction.
 *
 * @param {string} input
 * @returns {number}
 */
function exampleNamedFunction(input: string): number {
	return input.length;
}

/**
 * exampleAnonymousFunction.
 *
 * @param {boolean} input
 * @returns {boolean}
 */
const exampleAnonymousFunction = function name(input: boolean): boolean {
	return input;
};

/**
 * exampleArrowFunction.
 *
 * @param {boolean} input
 * @returns {boolean}
 */
const exampleArrowFunction = (input: boolean): boolean => input;

/**
 * exampleInterface.
 */
interface exampleInterface {
	/**
	 * @type {number}
	 */
	exampleInterfacePropertyVariable: number;

	/**
	 * @type {(input: number) => number}
	 */
	exampleInterfacePropertyFunction: (input: number) => number;
}

/**
 * exampleClass.
 */
class exampleClass {
	/**
	 * @type {number}
	 */
	exampleClassVariable: number;

	/**
	 * constructor.
	 *
	 * @param {number} input
	 */
	constructor(input: number) {
		this.exampleClassVariable = input;
	}

	/**
	 * @type {}
	 */
	exampleClassArrowFunction = (input: number, input2: number): number =>
		this.exampleClassVariable;

	/**
	 * exampleClassNamedFunction.
	 *
	 * @param {boolean} input
	 * @param {boolean} input2
	 * @returns {boolean}
	 */
	exampleClassNamedFunction(input: boolean, input2: boolean): boolean {
		return input && input2 && this.exampleClassVariable !== 0;
	}
}

/**
 * exampleClassExtension.
 *
 * @extends {exampleClass}
 */
class exampleClassExtension extends exampleClass {
	/**
	 * exampleClassExtensionFunction.
	 *
	 * @param {number} input
	 */
	exampleClassExtensionFunction(input: number) {
		return input;
	}
}
