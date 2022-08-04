import { useState } from "react";
import AuthorInfo from "./Steps/AuthorInfo";
import BookInfo from "./Steps/BookInfo";
import StockInfo from "./Steps/StockInfo";

export default function MultiStepForm(){

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

    const FormTitles = ["BookInfo", "AuthorInfo", "StockInfo"];

    const PageDisplay = () => {
      if (page === 0){
        return <BookInfo formData={formData} setFormData={setFormData} />
      }else if (page === 1) {
        return <AuthorInfo />
      }else {
        return <StockInfo />
      }
    }

  return(
    <div className="form">
      <div className="form-container"></div>
      <div className="form-header">{FormTitles[page]}</div>
      <div className="form-body">{PageDisplay()}</div>
      <div className="form-footer">
      <button 
          disabled={page == 0} 
          onClick={() =>  {
            setPage((currPage) => currPage - 1);
        }}>Prev</button>
        <button  
          onClick={() =>  {
            if (page === FormTitles.length - 1){
              alert("Form Submitted!")
              console.log(formData)
            }
            setPage((currPage) => currPage + 1);
        }}>{page === FormTitles.length - 1 ? "Submit" : "Next"}</button>
      </div>
    </div>
  );
}