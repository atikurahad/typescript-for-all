// Chapter 13: tsconfig.json & Modules Example

// Importing named exports and default export
import Tracker, { BASE_API_VERSION, formatModuleInfo, ModuleInfo } from "./helper";

const config: ModuleInfo = {
    moduleName: "tsconfig_and_modules",
    version: "1.0.0",
    isCompatible: true
};

// 1. Using imported functions and types
const outputStr = formatModuleInfo(config);
console.log(outputStr);
console.log("Base API Version Constant:", BASE_API_VERSION);

// 2. Using imported default class
const tracker = new Tracker();
tracker.trackEvent("UserLoadedExample");
tracker.trackEvent("ExampleCompletedSuccessfully");
