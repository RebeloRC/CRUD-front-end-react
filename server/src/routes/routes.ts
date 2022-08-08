import { Router } from 'express';
import { db } from '../server';

const routes = Router();

interface bookJson {
  bookName: string;
  bookCategory?: string;
  bookRealiseDate?: Date;
  authorName?: string;
  authorBirthDate?: Date;
  authorNationality?: string;
  quantityInStock?: number;
}

routes.post('/create', async (req, res) => {
  try {
    const id = req.body.bookName
    const userJson: bookJson = {
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

routes.get('/read/:bookName', async (req, res) => {
  try {
    const userRef = db.collection("books").doc(req.params.bookName);
    const response = await userRef.get();
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

routes.put('/update', async (req, res) => {
  try {
    const id = req.body.bookName
    const userJson: bookJson = {
      bookName: req.body.bookName,
      bookCategory: req.body.bookCategory,
      bookRealiseDate: req.body.bookRealiseDate,
      authorName: req.body.authorName,
      authorBirthDate: req.body.authorBirthDate,
      authorNationality: req.body.authorNationality,
      quantityInStock: req.body.quantityInStock
    }
    const userRef = await db.collection("books").doc(id).update({
      bookName: req.body.bookName,
      bookCategory: req.body.bookCategory,
      bookRealiseDate: req.body.bookRealiseDate,
      authorName: req.body.authorName,
      authorBirthDate: req.body.authorBirthDate,
      authorNationality: req.body.authorNationality,
      quantityInStock: req.body.quantityInStock
    });
    res.send(userRef);
  } catch (error) {
    res.send(error);
  }
});

routes.delete('/delete/:bookName', async (req, res) => {
  try {
    const response = await db.collection("books").doc(req.params.bookName).delete()
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});



export { routes };