const exampleVariable = 18;

/**
 * exampleNamedFunction.
 *
 * @param input -
 * @returns
 */
function exampleNamedFunction(input: string): number {
	return input.length;
}

/**
 * exampleAnonymousFunction.
 *
 * @param input -
 * @returns
 */
const exampleAnonymousFunction = function name(input: boolean): boolean {
	return input;
};

/**
 * exampleArrowFunction.
 *
 * @param input -
 * @returns
 */
const exampleArrowFunction = (input: boolean): boolean => input;

/**
 * exampleType.
 */
type exampleType = (input: boolean) => boolean;

/**
 * exampleInterface.
 */
interface exampleInterface {
 /**
  * exampleInterfacePropertyVariable.
  */
	exampleInterfacePropertyVariable: number;
 /**
  * exampleInterfacePropertyFunction.
  */
	exampleInterfacePropertyFunction: (input: number) => number;
}

/**
 * exampleClass.
 */
class exampleClass {
 /**
  * exampleClassVariable.
  */
	exampleClassVariable: number;

 /**
  * constructor.
  *
  * @param input -
  */
	constructor(input: number) {
		this.exampleClassVariable = input;
	}

 /**
  * exampleClassArrowFunction.
  */
	exampleClassArrowFunction = (input: number, input2: number): number =>
		this.exampleClassVariable;

 /**
  * exampleClassNamedFunction.
  *
  * @param input -
  * @param input2 -
  * @returns
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
  * @param input -
  */
	exampleClassExtensionFunction(input: number) {
		return input;
	}
}
