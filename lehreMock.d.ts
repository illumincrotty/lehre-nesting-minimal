import { ClassElement, TypeElement } from 'typescript';
declare type Target =
	| 'es3'
	| 'es5'
	| 'es2015'
	| 'es2016'
	| 'es2017'
	| 'es2018'
	| 'es2019'
	| 'es2020'
	| 'esnext';
declare type Kind = 'js' | 'jsx' | 'ts' | 'tsx';
export declare type CompilerOptionProps = {
	scriptTarget: Target;
	scriptKind: Kind;
};
export declare type ConfigProps = {
	parser: 'babel' | 'ts';
	targetDir?: string;
	targetFile?: string;
	isStdin?: boolean;
	formatter: string;
	templatePath: string;
	style: string;
	ignores: string[];
	ignorePatterns: string;
	nest: boolean;
	write: boolean;
} & CompilerOptionProps;
export declare type ParseProps = {
	code: string;
	lines: string[];
	nest?: boolean;
	scriptTarget?: Target;
	scriptKind?: Kind;
};
export declare type LineProps = {
	line: number;
	column: number;
};
export declare type ParamProps = {
	name: string;
	type: string;
	default: string;
	alias: string;
};
export declare type FunctionDocProps = {
	name: string;
	type: string;
	start: LineProps;
	end: LineProps;
	params: ParamProps[];
	returnType: string;
};
export declare type HeritageClauseProps = {
	type: string;
	value: string;
};
export declare type ClassDocProps = {
	name: string;
	type: string;
	start: LineProps;
	end: LineProps;
	methods: FunctionDocProps[];
	heritageClauses: HeritageClauseProps[];
};
export declare type MemberProps = ClassElement | TypeElement;
export declare type DocProps = {
	name: string;
	type: string;
	start: LineProps;
	end: LineProps;
	methods?: FunctionDocProps[];
	params?: ParamProps[];
	heritageClauses?: HeritageClauseProps[];
};
export declare type OutputProps = {
	doc: string;
	start: LineProps;
	end: LineProps;
	type: string;
};
export {};
