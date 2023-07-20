import { Injectable } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  public mqttClient!: MqttService;

  private brokerUrl = 'broker.emqx.io';
  private port = 8083;
  private username = 'your-username';
  private password = 'your-password';
  private clientId = `mqtt-client-${Math.random().toString(16).substr(2, 8)}`;

  constructor(private mqttService: MqttService,public snackBar: MatSnackBar) { }

  connect(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.mqttClient = this.mqttService.connect({
        hostname: this.brokerUrl,
        port: this.port,
        /*username: this.username,
        password: this.password,*/
        clientId: this.clientId,
        protocol: 'ws'
      });

      this.mqttClient.onConnect.subscribe(() => {
        this.snackBar.open('Connected to MQTT broker!', 'Dismiss', {
          duration: 2000
        });
        resolve();
      });

      this.mqttClient.onError.subscribe((error: any) => {
        console.error('MQTT error:', error);
        reject(error);
      });
    });
  }

  disconnect(): void {
    if (this.mqttClient) {
      this.mqttClient.disconnect();
      this.snackBar.open('Disconnected from MQTT broker!', 'Dismiss', {
        duration: 2000
      });
    }
  }
}
