import React, { useState, useEffect } from "react";
import { CFormInput, CButton } from "@coreui/react";
import { IMaskMixin } from "react-imask";

const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
  <CFormInput {...props} ref={inputRef} />
));

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [agendarCita, setAgendarCita] = useState("no"); 
  useEffect(() => {
    setMessages([{ sender: "bot", text: "Hola! Soy tu asistente de compras, ¿en qué te puedo ayudar hoy?" }]);
  }, []);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userMessage }];
    setMessages(newMessages);
    setUserMessage("");

    try {
        const response = await fetch("http://127.0.0.1:3009/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        setMessages([...newMessages, { sender: "bot", text: data.response }]);

        if (data.buttons && !formularioEnviado) {
            setMostrarFormulario(true);
        }
    } catch (error) {
        console.error("Error:", error);
        setMessages([...newMessages, { sender: "bot", text: "Lo siento, hubo un error de mi parte." }]);
    }
  };

  const handleSubmit = async () => {
    const data = {
        nombre: document.getElementById("nombre").value,
        cedula: document.getElementById("cedula").value,
        email: document.getElementById("email").value,
        numero: document.getElementById("numero").value,
        producto: document.getElementById("producto").value,
        agendarCita: agendarCita,  
    };

    try {
        const response = await fetch("http://127.0.0.1:3009/enviar_formulario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Formulario enviado correctamente");
            setMostrarFormulario(false);
            setFormularioEnviado(true);
            setMessages([...messages, { sender: "bot", text: "¡Gracias por completar el formulario!" }]);
        } else {
            console.error("Error al enviar el formulario");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="chat-widget">
      <button className="chat-toggle" onClick={() => document.getElementById("chat-container").classList.toggle("hidden")}>💬</button>
      <div id="chat-container" className="chat-container hidden">
        <div id="chat-header">
          <h3>Asistente</h3>
          <button onClick={() => document.getElementById("chat-container").classList.add("hidden")}>×</button>
        </div>
        <div id="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}-message`}>
              {msg.text}
            </div>
          ))}

          {mostrarFormulario && (
            <div className="formulario-chat">
              <h3>Completa tus datos</h3>
              <CFormInput type="text" id="nombre" floatingLabel="Nombre" placeholder="Nombre" required />
              <CFormInput type="text" id="cedula" floatingLabel="C.I" placeholder="Cedula" required />
              <CFormInput type="email" id="email" floatingLabel="Email" placeholder="Email" required />
              <CFormInputWithMask id="numero" mask="+{595}(000)000-000" floatingLabel="Teléfono" required />
              <CFormInput type="text" id="producto" floatingLabel="Producto" placeholder="Producto" required />

              {/* Radio Input para Agendar Cita */}
              <div>
                <label>¿Desea agendar cita?</label>
                <input
                  type="radio"
                  name="agendarCita"
                  value="sí"
                  onChange={() => setAgendarCita("sí")}
                /> Sí
                <input
                  type="radio"
                  name="agendarCita"
                  value="no"
                  onChange={() => setAgendarCita("no")}
                  defaultChecked
                /> No
              </div>

              <CButton type="submit" color="success" onClick={handleSubmit}>Enviar Datos</CButton>
            </div>
          )}
        </div>
        <div id="chat-input-area">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Escribe tu pregunta..."
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;