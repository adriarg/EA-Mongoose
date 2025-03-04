import mongoose from 'mongoose';
import { DroneModel, IDrone } from './drone.js';
import { MissionModel, IMission } from './mission.js';

async function main() {
  mongoose.set('strictQuery', true); 

  await mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connectat a MongoDB'))
    .catch(err => console.error('Error en connectar:', err));

  // CRUD per a Drone
  console.log("\nOPERACIONS AMB DRON\n");

  // Crear un nou dron
  const nouDron = new DroneModel({ name: "Phantom 4", type: "Quadcopter" });
  const dronGuardat = await nouDron.save();
  console.log("Dron creat:", dronGuardat);

  // Llegir un dron per ID
  const dronTrobat = await DroneModel.findById(dronGuardat._id);
  console.log("Dron trobat:", dronTrobat);

  // Actualitzar el nom del dron
  const dronActualitzat = await DroneModel.findByIdAndUpdate(
    dronGuardat._id,
    { name: "DJI Mavic Air" },
    { new: true } // Retorna el document actualitzat
  );
  console.log("Dron actualitzat:", dronActualitzat);

  // Esborrar un dron
  const dronEsborrat = await DroneModel.findByIdAndDelete(dronGuardat._id);
  console.log("Dron esborrat:", dronEsborrat);

  // CRUD per a Missió
  console.log("\nOPERACIONS AMB MISSIÓ\n");

  // Crear una nova missió
  const novaMissio = new MissionModel({ name: "Reconaixement", description: "Examinar la zona per obstacles." });
  const missioGuardada = await novaMissio.save();
  console.log("Missió creada:", missioGuardada);

  // Llegir una missió per ID
  const missioTrobada = await MissionModel.findById(missioGuardada._id);
  console.log("Missió trobada:", missioTrobada);

  // Actualitzar la descripció de la missió
  const missioActualitzada = await MissionModel.findByIdAndUpdate(
    missioGuardada._id,
    { description: "Actualitzat: Escaneja tot el sector." },
    { new: true } // Retorna el document actualitzat
  );
  console.log("Missió actualitzada:", missioActualitzada);

  // Esborrar una missió
  const missioEsborrada = await MissionModel.findByIdAndDelete(missioGuardada._id);
  console.log("Missió esborrada:", missioEsborrada);
}

// Executem la funció principal
main();
