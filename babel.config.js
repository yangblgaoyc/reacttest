const presets = [
    ["@babel/env", {
        targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1"
        },
        useBuiltIns: "usage"
    }],
    ["@babel/preset-react","@babel/preset-stage-0"]
];
// const presets = [
//     ["@babel/env","@babel/preset-react","@babel/preset-stage-0"]
// ];

module.exports = { presets };