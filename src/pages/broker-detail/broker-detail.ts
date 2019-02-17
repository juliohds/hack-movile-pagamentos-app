import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { BrokerService } from "../../providers/broker-service-mock";
import { BrokerListPage } from "../broker-list/broker-list";

@Component({
  selector: "page-broker-detail",
  templateUrl: "broker-detail.html"
})
export class BrokerDetailPage {
  broker: any;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: BrokerService
  ) {
    this.broker = this.navParams.data;
    service.findById(this.broker.id).then(broker => (this.broker = broker));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      title: "Crédito Liberado",
      subTitle: "$100,00",
      message: "adicionados a sua carteira.",
      buttons: ["OK"]
    });

    await alert.present();
    this.navCtrl.push(BrokerListPage);
  }
}
