const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const express = require("express");
const cors = require("cors");

const router = express();

router.use(cors({ origin: true }));

router.get("/plant/:id", async (req, res) => {
  const plant = await admin
    .firestore()
    .collection("plants")
    .doc(req.params.id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return { id: doc.id, data: doc.data() };
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(plant);
});

router.get("/plants", async (req, res) => {
  const plants = await admin
    .firestore()
    .collection("plants")
    .get();
  var lista = [];

  plants.docs.forEach((doc) => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});

router.post("/plant", async (req, res) => {
  /*   const product = await admin
   */
  await admin
    .firestore()
    .collection("plants")
    .add(req.body);
  res.send(req.body);
});

router.put("/plant/:id", async (req, res) => {
  const plant = await admin
    .firestore()
    .collection("plants")
    .doc(req.params.id)
    .update(req.body);
  res.send(plant);
});

router.delete("/plant/:id", async (req, res) => {
  const plant = await admin
    .firestore()
    .collection("plants")
    .doc(req.params.id)
    .delete();
  res.send(plant);
});

exports.plants = functions.https.onRequest(router);
