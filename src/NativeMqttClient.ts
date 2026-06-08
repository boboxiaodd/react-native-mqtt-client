import { TurboModuleRegistry, type TurboModule } from 'react-native';

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

export interface Spec extends TurboModule {
  connect(
    brokerUrl: string,
    options?: ConnectOptions,
  ): Promise<string>;
  disconnect(): Promise<string>;
  subscribe(topic: string, qos: number): Promise<string>;
  unsubscribe(topic: string): Promise<string>;
  publish(topic: string, message: string, qos: number): Promise<string>;

  // Event emitter support
  addListener(eventName: string): void;
  removeListeners(count: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('MqttClient');
