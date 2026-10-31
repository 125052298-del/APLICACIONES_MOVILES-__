import React from 'react';
import { Page, T, Card, Btn, Heading, C, Input } from '../components/UI';

export default function AgregarHabilidadScreen() {
  return (
    <Page tab="Perfil">
      <Heading right="✚">Agregar Habilidad</Heading>
      
      <Card>
        <T bold>Nombre de la Habilidad o Asignatura</T>
        <Input placeholder="Ej. Cálculo Multivariable, Photoshop..." />

        <T bold style={{ marginTop: 12 }}>Nivel de Dominio</T>
        <Input placeholder="Selecciona: Principiante / Intermedio / Avanzado" />

        <T bold style={{ marginTop: 12 }}>Comprobante / Certificado (Opcional)</T>
        <T color={C.muted}>Adjunta un archivo o credencial para obtener la insignia de Verificado.</T>
        <Btn outline style={{ marginTop: 8 }}>Subir Documento (PDF/JPG)</Btn>

        <Btn style={{ marginTop: 20 }}>Guardar Habilidad</Btn>
      </Card>
    </Page>
  );
}
