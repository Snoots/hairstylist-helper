import { Sequelize } from 'sequelize-typescript';
import { Appointment } from './models/appointmentmodel';
import { BrandLocation } from './models/brandlocationmodel';
import { Brand } from './models/brandmodel';
import { Client } from './models/clientmodel';
import { ColorCard } from './models/colorcardmodel';
import { ColorEntry } from './models/colorentrymodel';
import { Line } from './models/linemodel';
import { ProductCategory } from './models/productcategorymodel';
import { ProductInventory } from './models/productinventorymodel';
import { ProductLocation } from './models/productlocationmodel';
import { ProductMeasurement } from './models/productmeasurementmodel';
import { Product } from './models/productmodel';
import { RegisteredRetailer } from './models/registeredretailermodel';
import { Retailer } from './models/retailermodel';
import { RetailInventory } from './models/retailinventorymodel';
import { Retail } from './models/retailmodel';
import { Sale } from './models/salemodel';
import { Salon } from './models/salonmodel';
import { Stylist } from './models/stylistmodel';
import { WorkContract } from './models/workcontractmodel';
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
sequelize.addModels([BrandLocation]);
sequelize.addModels([Brand]);
sequelize.addModels([Client]);
sequelize.addModels([ColorCard]);
sequelize.addModels([ColorEntry]);
sequelize.addModels([Line]);
sequelize.addModels([ProductCategory]);
sequelize.addModels([ProductInventory]);
sequelize.addModels([ProductLocation]);
sequelize.addModels([ProductMeasurement]);
sequelize.addModels([Product]);
sequelize.addModels([RegisteredRetailer]);
sequelize.addModels([Retailer]);
sequelize.addModels([RetailInventory]);
sequelize.addModels([Retail]);
sequelize.addModels([Sale]);
sequelize.addModels([Salon]);
sequelize.addModels([Stylist]);
sequelize.addModels([WorkContract]);

//initializeDatabase();
populateData();

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
  const mystylist = new Stylist({ name: 'Ireland', phone_number: 100 });

  mystylist.save()
    .then(() => {
      console.log("Stylist " + mystylist.name + " added to DB");
    })
    .catch((err) => {
      console.log(err);
    })
}