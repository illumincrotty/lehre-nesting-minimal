const exampleVariable = 18;

/**
 * exampleNamedFunction
 * 
 * TODO describe function
 * 
 * @param input - TODO describe parameter
 * @returns TODO describe return value
 */
function exampleNamedFunction(input: string): number {
	return input.length;
}

/**
 * exampleAnonymousFunction
 * 
 * TODO describe function
 * 
 * @param input - TODO describe parameter
 * @returns TODO describe return value
 */
const exampleAnonymousFunction = function name(input: boolean): boolean {
	return input;
};

/**
 * exampleArrowFunction
 * 
 * TODO describe function
 * 
 * @param input - TODO describe parameter
 * @returns TODO describe return value
 */
const exampleArrowFunction = (input: boolean): boolean => input;

/**
 * exampleType
 * 
 * TODO describe interface
 */
type exampleType = (input: boolean) => boolean;

/**
 * exampleInterface
 * 
 * TODO describe interface
 */
interface exampleInterface {
  /**
   * Name: exampleInterfacePropertyVariable
   * 
   * type: property
   * 
   * Methods detected: false
   * 
   * Parameters detected: true
   * Number of parameters: 0
   * 
   * heritage clauses detected: false
   */
	exampleInterfacePropertyVariable: number;
  /**
   * Name: exampleInterfacePropertyFunction
   * 
   * type: property
   * 
   * Methods detected: false
   * 
   * Parameters detected: true
   * Number of parameters: 0
   * 
   * heritage clauses detected: false
   */
	exampleInterfacePropertyFunction: (input: number) => number;
}

/**
 * exampleClass
 * 
 * TODO describe class
 */
class exampleClass {
  /**
   * Name: exampleClassVariable
   * 
   * type: property
   * 
   * Methods detected: false
   * 
   * Parameters detected: true
   * Number of parameters: 0
   * 
   * heritage clauses detected: false
   */
	exampleClassVariable: number;

  /**
   * constructor
   * 
   * TODO describe function
   * 
   * @param input - TODO describe parameter
   */
	constructor(input: number) {
		this.exampleClassVariable = input;
	}

  /**
   * Name: exampleClassArrowFunction
   * 
   * type: property
   * 
   * Methods detected: false
   * 
   * Parameters detected: true
   * Number of parameters: 0
   * 
   * heritage clauses detected: false
   */
	exampleClassArrowFunction = (input: number, input2: number): number =>
		this.exampleClassVariable;

  /**
   * exampleClassNamedFunction
   * 
   * TODO describe function
   * 
   * @param input - TODO describe parameter
   * @param input2 - TODO describe parameter
   * @returns TODO describe return value
   */
	exampleClassNamedFunction(input: boolean, input2: boolean): boolean {
		return input && input2 && this.exampleClassVariable !== 0;
	}
}

/**
 * exampleClassExtension
 * 
 * TODO describe class
 * @extends exampleClass
 */
class exampleClassExtension extends exampleClass {
  /**
   * exampleClassExtensionFunction
   * 
   * TODO describe function
   * 
   * @param input - TODO describe parameter
   */
	exampleClassExtensionFunction(input: number) {
		return input;
	}
}
