const geoCode = require("./geoCode");
const forecast = require("./forecast");

const app = async () => {
  try {
    const geoloc = await geoCode(process.argv.slice(2).join(", "));

    const temp = await forecast(geoloc);
    console.log(
      `La température à ${process.argv.slice(2).join(", ")} est de ${temp}°C.`
    );
  } catch (err) {
    console.log(err.message);
  }
};

app();
