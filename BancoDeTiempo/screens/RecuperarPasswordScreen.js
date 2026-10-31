import React from 'react';
import { Page, T, Card, Btn, Heading, C, Input } from '../components/UI';

export default function RecuperarPasswordScreen() {
  return (
    <Page>
      <Heading right="🔑">Recuperar Contraseña</Heading>
      
      <Card>
        <T color={C.muted}>
          Ingresa tu correo institucional y te enviaremos las instrucciones para restablecer tu contraseña.
        </T>
        <T bold style={{ marginTop: 16 }}>Correo Institucional</T>
        <Input placeholder="usuario@universidad.edu" />

        <Btn style={{ marginTop: 20 }}>Enviar Instrucciones</Btn>
      </Card>
    </Page>
  );
}
