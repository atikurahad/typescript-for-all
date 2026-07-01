// Helper module for Chapter 13 demo

export interface ModuleInfo {
    moduleName: string;
    version: string;
    isCompatible: boolean;
}

export function formatModuleInfo(info: ModuleInfo): string {
    return `Module: ${info.moduleName} (v${info.version}) - Compatible: ${info.isCompatible}`;
}

export const BASE_API_VERSION = "v1.2.0";

// Default export example
export default class SimpleTracker {
    trackEvent(name: string) {
        console.log(`[Event Tracked]: ${name} at ${new Date().toLocaleTimeString()}`);
    }
}
