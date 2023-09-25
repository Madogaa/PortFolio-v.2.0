import React, { useState } from "react";
import Divider from "../../Styling/Divider";
import "./Contact.css";
import axios from "axios";
import { useDataContext } from "../../Context/DataContext";
import { toast } from "react-toastify";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { addAlert, language } = useDataContext();

  const translations = {
    es: {
      title: "¡Contáctame!",
      emailLabel: "Email:",
      emailPlaceholder: "ejemplo@dominio.com",
      subject: "Asunto",
      message: "Mensaje",
      sendButton: "Enviar",
      successMessage: "¡Email enviado con éxito!",
      errorMessage: "Error enviando el email",
    },
    en: {
      title: "Contact me!",
      emailLabel: "Email:",
      emailPlaceholder: "example@domain.com",
      subject: "Subject",
      message: "Message",
      sendButton: "Send",
      successMessage: "Email sent successfully!",
      errorMessage: "Error sending email",
    },
  };

  const translation = translations[language];

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://backend-chi-fawn.vercel.app/send-email",
        {
          email,
          subject,
          message,
        }
      );
      addAlert(translation.successMessage, "success");
    } catch (error) {
      addAlert(translation.errorMessage, "warning");
    } finally {
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center contact w-full text-white px-8"
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="text-shadow grid grid-cols-12 gap-6 font-semibold "
      >
        <h1 className="text-shadow text-center col-span-12 font-bold text-5xl sm:text-7xl mb-16">
          {translations[language].title}
        </h1>
        <p className="col-span-4">{translations[language].emailLabel}</p>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="col-span-8 w-full  p-2 "
          placeholder={translations[language].emailPlaceholder}
          type="email"
          required
        />
        <p className="col-span-4">{translations[language].subject}:</p>
        <input
          name="subject"
          className="col-span-8 w-full  p-2"
          placeholder={translations[language].subject}
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <p className="col-span-4">{translations[language].message}:</p>
        <textarea
          name="message"
          placeholder={translations[language].message}
          className="col-span-8 w-full  p-2"
          cols="30"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="col-span-12 text-center">
          <button type="submit">{translations[language].sendButton}</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
