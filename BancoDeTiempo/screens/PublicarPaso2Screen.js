import React from 'react';
import { Page, T, Card, Btn, Row, Heading, C, Input } from '../components/UI';

export default function PublicarPaso2Screen() {
  return (
    <Page tab="Publicar">
      <Heading right="2/3">Publicar Nuevo Servicio</Heading>

      {/* Indicador de pasos */}
      <Row style={{ marginBottom: 16 }}>
        <Btn outline style={{ flex: 1, marginRight: 4 }}>1. Datos</Btn>
        <Btn style={{ flex: 1, marginRight: 4, marginLeft: 4 }}>2. Horario</Btn>
        <Btn outline style={{ flex: 1, marginLeft: 4 }}>3. Confirmar</Btn>
      </Row>

      <Card>
        <T bold style={{ marginBottom: 8 }}>Disponibilidad y Horarios</T>
        <T color={C.muted}>Define los días y horas en los que puedes impartir las sesiones.</T>
        
        <T bold style={{ marginTop: 12 }}>Días disponibles</T>
        <Row>
          <Btn outline style={{ flex: 1, marginRight: 4 }}>Lun / Mié</Btn>
          <Btn style={{ flex: 1, marginLeft: 4 }}>Mar / Jue</Btn>
          <Btn outline style={{ flex: 1, marginLeft: 4 }}>Sábados</Btn>
        </Row>

        <T bold style={{ marginTop: 12 }}>Rango de Horario</T>
        <Input placeholder="Ej. 16:00 - 19:00 hrs" />

        <T bold style={{ marginTop: 12 }}>Lugar o Enlace de reunión</T>
        <Input placeholder="Ej. Biblioteca Central / Google Meet" />

        <Btn style={{ marginTop: 16 }}>Siguiente: Confirmar</Btn>
      </Card>
    </Page>
  );
}
