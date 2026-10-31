import React from 'react';
import { Page, T, Heading, Btn, Card } from '../components/UI';
import { interfaceGroups } from './interfaces';

export default function InterfacesMenuScreen({ onSelect }) {
  return (
    <Page>
      <Heading>Interfaces disponibles</Heading>
      <T color="#778393" style={{ marginBottom: 16 }}>
        Selecciona la interfaz que quieres consultar.
      </T>
      {interfaceGroups.map((group) => (
        <Card key={group.title}>
          <T bold size={17} color="#213f91" style={{ marginBottom: 8 }}>
            {group.title}
          </T>
          {group.items.map(({ name, Screen }) => (
            <Btn
              key={name}
              outline
              color="#213f91"
              style={{ marginVertical: 4 }}
              onPress={() => onSelect(Screen)}
            >
              {name}
            </Btn>
          ))}
        </Card>
      ))}
    </Page>
  );
}
