import React from 'react';
import { Page, T, Card, Btn, Row, Heading, C, Input } from '../components/UI';

export default function ChatScreen() {
  return (
    <Page>
      <Heading right="💬">Chat con Pablo R.</Heading>
      <T color={C.muted} style={{ marginBottom: 12, textAlign: 'center' }}>
        Intercambio: Guitarra para principiantes (3 Créditos en Reserva)
      </T>

      <Card style={{ backgroundColor: '#f8f9fa' }}>
        {/* Mensaje de otro usuario */}
        <Card style={{ alignSelf: 'flex-start', maxWidth: '80%', backgroundColor: '#ffffff' }}>
          <T bold>Pablo R.</T>
          <T>¡Hola! Confirmada la sesión para el Jueves a las 16:00 en la biblioteca.</T>
          <T color={C.muted} style={{ fontSize: 10, textAlign: 'right' }}>16:30</T>
        </Card>

        {/* Mensaje propio */}
        <Card style={{ alignSelf: 'flex-end', maxWidth: '80%', backgroundColor: '#e3f2fd' }}>
          <T bold color="#0d47a1">Tú</T>
          <T>Perfecto Pablo, ahí nos vemos. Lllevaré mi propia guitarra.</T>
          <T color={C.muted} style={{ fontSize: 10, textAlign: 'right' }}>16:32</T>
        </Card>
      </Card>

      {/* Input de envío */}
      <Row style={{ marginTop: 8 }}>
        <Input placeholder="Escribe un mensaje..." style={{ flex: 1, marginRight: 8 }} />
        <Btn style={{ width: 80 }}>Enviar</Btn>
      </Row>
    </Page>
  );
}
