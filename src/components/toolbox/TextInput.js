import React from "react";

// {name, label} => props ile gönderdiğimiz değişkenleri eşleşip yakalayacak
// this.props gibi kullan bunları
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {  // hata varsa ve length 0 dan büyükse wrapper class a ekle.
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">                 {/*Burada artık jsx döndürecek*/}
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        ></input>
        {error && <div className="alert alert-danger">{error}</div>} {/*  eğer hata varsa özelmiş*/}
      </div>
    </div>
  );
};

export default TextInput;
