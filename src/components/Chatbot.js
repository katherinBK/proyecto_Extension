import React, { useState, useEffect } from "react";
import { CFormInput, CButton } from "@coreui/react";
import { IMaskMixin } from "react-imask";

const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
  <CFormInput {...props} ref={inputRef} />
));

const Chatbot = ({ contextMessage, clearContext }) => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [agendarCita, setAgendarCita] = useState("no");
  const [isOpen, setIsOpen] = useState(false);
  const [fechaCita, setFechaCita] = useState("");

  useEffect(() => {
    setMessages([{ sender: "bot", text: "Hola! Soy tu asistente de compras, ¿en qué te puedo ayudar hoy?" }]);
  }, []);

  useEffect(() => {
    if (contextMessage) {
      setIsOpen(true);
      setUserMessage(contextMessage); // Set the message in the input
      sendMessage(contextMessage); // Send it automatically
      clearContext(); // Clear the context to prevent re-sending
    }
  }, [contextMessage]);

  const sendMessage = async (messageToSend = userMessage) => {
    const message = typeof messageToSend === 'string' ? messageToSend : userMessage;
    if (!message.trim()) return;

    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setUserMessage("");

    try {
      const response = await fetch("http://127.0.0.1:3009/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.response }]);

      if (data.mostrar_formulario && !formularioEnviado) {
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
      fechaCita: agendarCita === "sí" ? fechaCita : ""
    };

    try {
      const response = await fetch("http://127.0.0.1:3009/enviar_formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMostrarFormulario(false);
        setFormularioEnviado(true);
        setMessages([...messages, { sender: "bot", text: "¡Gracias por completar el formulario! ¿En qué más puedo ayudarte?" }]);
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleUserSendMessage = () => {
    sendMessage();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
            <div id="chat-header">
              <h3>Asistente CommerIA</h3>
              <button onClick={toggleChat}>×</button>
            </div>
            
            <div id="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}-message`}>
                  {msg.text}
                </div>
              ))}

              {mostrarFormulario && !formularioEnviado && (
                <div className="formulario-chat">
                  <h3>Completa tus datos</h3>
                  <CFormInput type="text" id="nombre" floatingLabel="Nombre" placeholder="Nombre" required />
                  <CFormInput type="text" id="cedula" floatingLabel="C.I" placeholder="Cedula" required />
                  <CFormInput type="email" id="email" floatingLabel="Email" placeholder="Email" required />
                  <CFormInputWithMask id="numero" mask="+{595}(000)000-000" floatingLabel="Teléfono" required />
                  <CFormInput type="text" id="producto" floatingLabel="Producto" placeholder="Producto" required />
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
                  {agendarCita === "sí" && (
                    <div style={{ margin: '10px 0' }}>
                      <label style={{ color: '#ccc', fontWeight: 500 }}>Fecha de la cita presencial</label>
                      <input
                        type="date"
                        value={fechaCita}
                        onChange={e => setFechaCita(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          borderRadius: '5px',
                          border: '1px solid #555',
                          background: '#404040',
                          color: '#fff',
                          colorScheme: 'dark',
                        }}
                        required
                      />
                    </div>
                  )}
                  <CButton type="submit" color="success" onClick={handleSubmit}>
                    Enviar Datos
                  </CButton>
                </div>
              )}
            </div>
            
            <div id="chat-input-area">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleUserSendMessage()}
                placeholder="Escribe tu pregunta..."
              />
              <button onClick={handleUserSendMessage}>Enviar</button>
            </div>
        </div>
      )}
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;