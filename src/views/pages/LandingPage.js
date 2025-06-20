import React from "react";
import { CCard, CCardBody, CButton } from '@coreui/react';
import { CheckCircle } from "lucide-react";
import Chatbot from '../../components/Chatbot';

const benefits = [
  {
    title: "Automatización de Ventas",
    description: "Optimiza cada punto de contacto con tu cliente mediante flujos automatizados.",
    color: "#FF6384",
  },
  {
    title: "Soporte Potenciado por IA",
    description: "Responde consultas frecuentes y complejas con agentes inteligentes.",
    color: "#36A2EB",
  },
  {
    title: "Análisis de Datos en Tiempo Real",
    description: "Monitorea indicadores clave con dashboards y alertas personalizadas.",
    color: "#FFCE56",
  },
  {
    title: "Gestión Automatizada",
    description: "Reduce tiempos de respuesta con flujos inteligentes y atención personalizada.",
    color: "#4BC0C0",
  },
];

export default function LandingPage({ chatbotContextMessage, clearChatbotContext }) {
  return (
    <main style={{ backgroundColor: '#f8f9fa', color: '#333' }}>
      {/* HERO */}
      <section style={{ backgroundColor: '#2c2c2c', color: 'white', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Decisiones Basadas en Datos en la Era de la IA
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '720px', margin: '0 auto', color: '#dee2e6' }}>
          Optimiza tu proceso de ventas, atención y análisis con nuestra solución de automatización.
        </p>
        <div style={{ marginTop: '2.5rem' }}>
          <CButton color="danger" style={{ backgroundColor: '#FF6384', border: 'none', padding: '0.75rem 1.5rem', fontSize: '1.125rem', borderRadius: '0.75rem' }}>
            Solicita una demo
          </CButton>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
          ¿Qué puede hacer nuestro agente IA por tu empresa?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1140px', margin: '0 auto' }}>
          {benefits.map((b, idx) => (
            <CCard key={idx} style={{ backgroundColor: 'white', border: '1px solid #dee2e6', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <CCardBody>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: b.color }}>{b.title}</h3>
                <p style={{ color: '#555' }}>{b.description}</p>
              </CCardBody>
            </CCard>
          ))}
        </div>
      </section>

      {/* INFORMACIÓN ADICIONAL */}
      <section style={{ backgroundColor: '#e9ecef', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Monitoreo Inteligente de Conversaciones
        </h2>
        <p style={{ maxWidth: '720px', margin: '0 auto', color: '#555', fontSize: '1.125rem' }}>
          Nuestro agente analiza mensajes y comportamientos en tiempo real, detectando patrones de venta, reclamos o necesidades específicas.
        </p>
      </section>

      {/* VENTAJAS */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>Ventajas Clave</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
          {[
            "Alertas automáticas por objetivos o palabras clave.",
            "Integración con CRM y herramientas de marketing.",
            "Análisis predictivo de comportamiento de usuarios.",
            "Métricas de rendimiento personalizables.",
          ].map((v, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle color="#2482e0" style={{ marginTop: '0.25rem' }} />
              <p style={{ color: '#555' }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN FINAL */}
      <section style={{ backgroundColor: '#6f42c1', color: 'white', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Conecta con el futuro de las ventas inteligentes</h2>
        <p style={{ fontSize: '1.125rem', maxWidth: '720px', margin: '0 auto 1.5rem' }}>
          Únete a empresas que ya toman decisiones más rápidas y efectivas.
        </p>
        <CButton color="light" style={{ color: '#6f42c1', padding: '0.75rem 1.5rem', fontSize: '1.125rem', borderRadius: '0.75rem' }}>
          Comenzar ahora
        </CButton>
      </section>

      {/* Chatbot floating overlay */}
      <Chatbot 
        contextMessage={chatbotContextMessage}
        clearContext={clearChatbotContext}
      />
    </main>
  );
}
