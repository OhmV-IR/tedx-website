'use client'
import { useEffect, useState } from 'react';

export default function UnsubcribeForm() {
  const [emailInputValue, setEmailInputValue] = useState("");
  const bannerDisplayTime = 4000; // in ms
  function OnEmailSubmit() {
    console.log("submitted email: " + emailInputValue);
    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };
    fetch("/api/unsubscribe?email=" + emailInputValue, requestOptions).then((res) => {
      if (res.status == 200) {
        console.log("Email submitted successfully");
        document.getElementById("successAlert").style.display = "block";
        setTimeout(() => {
          document.getElementById("successAlert").style.display = "none";
        }, bannerDisplayTime);
      }
      else {
        console.error("Email submission failed");
        document.getElementById("failedAlert").style.display = "block";
        setTimeout(() => {
          document.getElementById("failedAlert").style.display = "none";
        }, bannerDisplayTime);
      }
    })
  }
  function OnEmailTextChange(evt) {
    setEmailInputValue(evt.target.value);
    if (evt.target.value.match("[a-z0-9].*\@[a-z0-9].*\..*")) {
      document.getElementById("formEmail").classList.remove("border-danger");
      document.getElementById("formEmail").classList.add("border-success");
      document.getElementById("formEmailSubmit").disabled = false;
    }
    else {
      document.getElementById("formEmail").classList.remove("border-success")
      document.getElementById("formEmail").classList.add("border-danger");
      document.getElementById("formEmailSubmit").disabled = true;
    }
  }
  useEffect(() => {
    document.getElementById("formEmail").onchange = OnEmailTextChange;
    document.getElementById("formEmailSubmit").onclick = OnEmailSubmit;
  });
  return (
    <div className="divRoot">
      <style jsx>{`
        #successAlert {
            display: none;
        }
        #failedAlert {
            display: none;
        }
        #emailLabel {
          position: relative;
          margin-top: 10vh;
        }
        #formEmail {
          position: relative;
          margin-top: 2vh;
=       }
        #formEmailSubmit {
          position: relative;
          margin-top: 2vh;
        }
        `}</style>
      <div id="successAlert" className="alert alert-success" role="alert">Mailing list unsubscribe successful!</div>
      <div id="failedAlert" className="alert alert-danger" role="alert">Mailing list unsubscribe failed!</div>
      <label className="form-label" id="emailLabel">Email</label>
      <input type="text" className="form-control" name="emailTextInput" placeholder="something@example.com" id="formEmail" />
      <button type="button" className="btn btn-danger align-right" id="formEmailSubmit" disabled={true}>Unsubscribe</button>
    </div>
  )
}