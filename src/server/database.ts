import { Sequelize } from 'sequelize-typescript';
import { Appointment } from './models/appointmentmodel';
import { Client } from './models/clientmodel';
import { ColorCard } from './models/colorcardmodel';
import { ColorEntry } from './models/colorentrymodel';
import { RetailInventory } from './models/retailinventorymodel';
import { Retail } from './models/retailmodel';
import { Sale } from './models/salemodel';
import { Stylist } from './models/stylistmodel';
import { dbconfig } from './config'; // DB connection parameters

export const sequelize = new Sequelize({
  database: dbconfig.database,
  dialect: dbconfig.dialect,
  username: dbconfig.username,
  password: dbconfig.password,
  host: dbconfig.host,
  port: dbconfig.port
});

sequelize.addModels([Appointment]);
sequelize.addModels([Client]);
sequelize.addModels([ColorCard]);
sequelize.addModels([ColorEntry]);
sequelize.addModels([RetailInventory]);
sequelize.addModels([Retail]);
sequelize.addModels([Sale]);
sequelize.addModels([Stylist]);

initializeDatabase();
//populateData();

sequelize.authenticate().then(() => {
  console.log("Connected to DB");
})
.catch((err) => {
  console.log(err);
})

function initializeDatabase() {
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log('Connection synced')
      return;
    })
    .catch(err => {
      console.log('err');
    });
}

function populateData() {
  const mystylist = new Stylist({ name: 'Ireland', contact_number: 100 });

  mystylist.save()
    .then(() => {
      console.log("Stylist " + mystylist.name + " added to DB");
    })
    .catch((err) => {
      console.log(err);
    })
}