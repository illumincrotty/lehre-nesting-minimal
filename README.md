# lehre-nesting-minimal

A minimal example of lehre missing arrow functions inside of classes

To build for yourself, use your package manager of choice (I use pnpm but npm and yarn should work here as well) and run the build command. That compiles the template and then runs lehre with tsdoc formatting, jsdoc formatting, and custom formatting. None detects arrow functions inside of classes as functions. The custom formatting is a debugger and shows that class properties are not passed to documentation with methods (if they have them) but do pass an empty parameter list (even if it is a variable and not a function). This makes it hard to automatically document functions inside of classes. _However_ interfaces do use generateFunctionDoc on their internal arrow functions. Ideally, classes would act the same as the interfaces do.
