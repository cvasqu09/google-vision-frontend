module.exports = function () {
    return {
        files: [
            'frontend/src/**/*.ts',
            { pattern: 'frontend/src/**/*spec.ts', ignore: true }
        ],

        tests: [
            'frontend/src/**/*spec.ts'
        ],

        env: {
            type: 'node'
        }
    };
};
