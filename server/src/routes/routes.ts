import { response, Router } from 'express';
import { db } from '../server';

const routes = Router();

routes.post('/create', async (req, res) => {
  try {
    const id = req.body.bookName
    const userJson = {
      bookName: req.body.bookName,
      bookCategory: req.body.bookCategory,
      bookRealiseDate: req.body.bookRealiseDate,
      authorName: req.body.authorName,
      authorBirthDate: req.body.authorBirthDate,
      authorNationality: req.body.authorNationality,
      quantityInStock: req.body.quantityInStock
    }
    const response = await db.collection('books').doc(id).set(userJson);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
})

routes.get('/read/all', async (req, res) => {
  try {
    const userRef = db.collection("books");
    const response = await userRef.get();
    let responseArr = [];
    response.forEach(doc => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
  } catch (error) {
    res.send(error);
  }
});

routes.get('/read/:id', async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.params.id);
    const response = await userRef.get();
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

routes.put('/update', async (req, res) => {
  try {
    const id = req.body.id;
    const newFirstName = req.body.firstName;
    const userRef = await db.collection("users").doc(id).update({
      firstName: newFirstName
    });
    res.send(userRef);
  } catch (error) {
    res.send(error);
  }
});

routes.delete('/delete', async (req, res) => {
  try {
    const id = req.body.id;
    const response = await db.collection("users").doc(id).delete()
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});



export { routes };