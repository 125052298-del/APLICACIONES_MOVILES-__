import React from 'react';
import { Page, T, Card, Btn, Row, Heading, C, Input } from '../components/UI';

export default function CalificarServicioScreen() {
  return (
    <Page tab="Intercambios">
      <Heading right="★">Calificar Servicio</Heading>
      
      <Card>
        <T bold style={{ fontSize: 18 }}>Python desde cero</T>
        <T color={C.muted}>Tutor: Ana Ruiz · 4 Horas realizadas</T>

        <T bold style={{ marginTop: 16, textAlign: 'center' }}>¿Qué tal fue tu experiencia?</T>
        <Row style={{ justifyContent: 'center', marginVertical: 12 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Btn 
              key={star} 
              style={{ paddingHorizontal: 12, marginHorizontal: 2 }}
            >
              ★
            </Btn>
          ))}
        </Row>

        <T bold style={{ marginTop: 8 }}>Escribe una reseña para el tutor</T>
        <Input placeholder="Ej. Excelente explicación, muy paciente y puntual..." multiline numberOfLines={4} />

        <Btn style={{ marginTop: 16, backgroundColor: C.green }}>Enviar Calificación</Btn>
      </Card>
    </Page>
  );
}
