import React from 'react';
import { Page, T, Heading, Btn } from '../components/UI';
import { interfaces } from './interfaces';

export default function InterfacesMenuScreen({ onSelect }) {
  return (
    <Page>
      <Heading>Interfaces disponibles</Heading>
      <T color="#778393" style={{ marginBottom: 16 }}>
        Selecciona la pantalla que quieres visualizar.
      </T>
      {interfaces.map(({ name, Screen }, index) => (
        <Btn
          key={name}
          outline
          color="#213f91"
          style={{ marginVertical: 4 }}
          onPress={() => onSelect(Screen)}
        >
          {`${index + 1}. ${name}`}
        </Btn>
      ))}
    </Page>
  );
}
