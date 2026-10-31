import React from 'react';
import { Page, T, Card, Btn, Row, Heading, C } from '../components/UI';

export default function AjustesPerfilScreen() {
  return (
    <Page tab="Perfil">
      <Heading right="⚙">Ajustes de Cuenta</Heading>
      
      <Card>
        <T bold style={{ marginBottom: 12 }}>Cuenta y Seguridad</T>
        <Row style={{ paddingVertical: 8 }}>
          <T>Editar Perfil</T>
          <T color={C.muted}>›</T>
        </Row>
        <Row style={{ paddingVertical: 8 }}>
          <T>Cambiar Contraseña</T>
          <T color={C.muted}>›</T>
        </Row>
        <Row style={{ paddingVertical: 8 }}>
          <T>Autenticación Biométrica</T>
          <T color={C.green}>Activado</T>
        </Row>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <T bold style={{ marginBottom: 12 }}>Preferencias</T>
        <Row style={{ paddingVertical: 8 }}>
          <T>Notificaciones Push</T>
          <T color={C.green}>Activado</T>
        </Row>
        <Row style={{ paddingVertical: 8 }}>
          <T>Términos y Condiciones</T>
          <T color={C.muted}>›</T>
        </Row>
      </Card>

      <Btn outline color="#d32f2f" style={{ marginTop: 20 }}>Cerrar Sesión</Btn>
    </Page>
  );
}
