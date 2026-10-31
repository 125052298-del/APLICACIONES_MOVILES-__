import React from 'react';
import { Page, T, Card, Btn, Row, Heading, C } from '../components/UI';

export default function NotificacionesScreen() {
  return (
    <Page>
      <Heading right="🔔">Notificaciones</Heading>
      
      <Card style={{ borderLeftWidth: 4, borderLeftColor: C.green }}>
        <Row>
          <T bold>¡Solicitud Aceptada!</T>
          <T color={C.muted}>Hace 10 min</T>
        </Row>
        <T>Pablo R. aceptó tu solicitud para Guitarra para principiantes.</T>
        <Btn outline style={{ marginTop: 8 }}>Ver Detalle</Btn>
      </Card>

      <Card style={{ borderLeftWidth: 4, borderLeftColor: '#f3ad19' }}>
        <Row>
          <T bold>Nueva Solicitud Recibida</T>
          <T color={C.muted}>Hace 2 hrs</T>
        </Row>
        <T>Sofía L. quiere reservar tu servicio Francés básico A1.</T>
        <Btn style={{ marginTop: 8 }}>Responder</Btn>
      </Card>

      <Card>
        <Row>
          <T bold>Créditos Liberados</T>
          <T color={C.muted}>Ayer</T>
        </Row>
        <T color={C.green}>+2 Créditos abonados a tu monedero por la clase impartida.</T>
      </Card>
    </Page>
  );
}
