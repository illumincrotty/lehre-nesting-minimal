const exampleVariable = 18;

function exampleNamedFunction(input: string): number {
	return input.length;
}

const exampleAnonymousFunction = function name(input: boolean): boolean {
	return input;
};

const exampleArrowFunction = (input: boolean): boolean => input;

type exampleType = (input: boolean) => boolean;

interface exampleInterface {
	exampleInterfacePropertyVariable: number;
	exampleInterfacePropertyFunction: (input: number) => number;
}

class exampleClass {
	exampleClassVariable: number;

	constructor(input: number) {
		this.exampleClassVariable = input;
	}

	exampleClassArrowFunction = (input: number, input2: number): number =>
		this.exampleClassVariable;

	exampleClassNamedFunction(input: boolean, input2: boolean): boolean {
		return input && input2 && this.exampleClassVariable !== 0;
	}
}

class exampleClassExtension extends exampleClass {
	exampleClassExtensionFunction(input: number) {
		return input;
	}
}
