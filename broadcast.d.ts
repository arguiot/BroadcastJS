declare class BroadcastJSNotification {
    name: string;
    object: unknown;
    constructor(name: string, object?: any);
}
declare class NotificationManager {
    observers: Map<string, (object: unknown) => void>;
    constructor();
    get default(): NotificationManager;
    addObserver(name: string, callback: (object: unknown) => void, reference?: any): void;
    removeObserver(name: string, reference?: any): void;
    post(notification: BroadcastJSNotification): void;
}
export { BroadcastJSNotification as Notification };
export declare const NotificationCenter: NotificationManager;
