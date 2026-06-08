export type MqttEvent = 'onMqttConnected' | 'onMqttDisconnected' | 'onMqttMessageReceived' | 'onMqttError' | 'onMqttSubscribed' | 'onMqttUnsubscribed';
export interface MqttMessage {
    topic: string;
    message: string;
}

export interface ConnectOptions {
  username: string;
  password: string;
  clientId: string;
  cleanSession: boolean;
  connectionTimeout: number;
  keepAliveInterval: number;
  isAutomaticReconnect: boolean;
  maxReconnectDelay: number;
}

export declare const Mqtt: {
    connect: (brokerUrl: string, options: {
        username: string;
        password: string;
        clientId: string;
        cleanSession: boolean;
        connectionTimeout: number;
        keepAliveInterval: number;
        isAutomaticReconnect: boolean;
        maxReconnectDelay: number;
    }) => Promise<string>;
    disconnect: () => Promise<string>;
    subscribe: (topic: string, qos?: number) => Promise<string>;
    unsubscribe: (topic: string) => Promise<string>;
    publish: (topic: string, message: string, qos?: number) => Promise<string>;
    addListener: (eventName: MqttEvent, callback: (data: any) => void) => import("react-native").EventSubscription;
};
export default Mqtt;
//# sourceMappingURL=index.d.ts.map
