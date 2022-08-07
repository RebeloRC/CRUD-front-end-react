/* eslint-disable no-restricted-globals */
import { useState } from "react";
import AuthorInfo from "./Steps/AuthorInfo";
import BookInfo from "./Steps/BookInfo";
import StockInfo from "./Steps/StockInfo";

import '../MultiStepForm/styles.scss';

import axios from "axios";
import { UserAuth } from "../../context/AuthContext";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router";

export default function MultiStepForm() {
  // @ts-ignore
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    bookName: "",
    bookCategory: "",
    bookRealiseDate: "",
    authorName: "",
    authorBirthDate: "",
    authorNationality: "",
    quantityInStock: 0,
  })

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log("You are logged out!")
    } catch (error) {
      console.log(FirebaseError)
    }
  }

  const FormTitles = ["BookInfo", "AuthorInfo", "StockInfo"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BookInfo formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <AuthorInfo formData={formData} setFormData={setFormData} />
    } else {
      return <StockInfo formData={formData} setFormData={setFormData} />
    }
  }

  return (
    <div className="form">
      <h1>{FormTitles[page]}</h1>
      <div className="form-user-info">
        <h4>Bem-vindo {user && user.email}</h4>
        <button onClick={handleLogout} >logout</button>
      </div>
      <div className="form-body">{PageDisplay()}</div>


      <div className="form-footer">

        <button className="button-control"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}>Voltar</button>

        <button className="button-control"
          onClick={() => {
            if (page === FormTitles.length - 1) {
              axios.post("http://localhost:8080/create", formData).then((response) => {
                history.go(0)
              });
            }
            setPage((currPage) => currPage + 1);
          }}>{page === FormTitles.length - 1 ? "Cadastrar" : "avancar"}</button>

        <button className="button-update"
          onClick={() => {
            axios.put("http://localhost:8080/update", formData).then((response) => {
              history.go(0)
            })
          }}  >Atualizar</button>

      </div>
    </div>
  );
}