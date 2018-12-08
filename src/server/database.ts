import { Sequelize } from 'sequelize-typescript';
import { Stylist } from './models/stylistmodel';
import { Appointment } from './models/appointmentmodel';
import { Client } from './models/clientmodel';
import { dbconfig } from './config'; // DB connection parameters

export const sequelize = new Sequelize({
  database: dbconfig.database,
  dialect: dbconfig.dialect,
  username: dbconfig.username,
  password: dbconfig.password,
  host: dbconfig.host,
  port: dbconfig.port
});

sequelize.addModels([Stylist]);
sequelize.addModels([Appointment]);
sequelize.addModels([Client]);

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