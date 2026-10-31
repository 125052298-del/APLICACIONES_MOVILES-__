import React from 'react';
import {Page,T,Card,Btn,Row,Search,Chips,Service,C} from '../components/UI';
import {servicios} from '../components/Datos';
export default function InvitadoScreen(){return <Page tab="Inicio"><Row><T size={12} color={C.muted}>MODO INVITADO · NEUTRAL</T><Btn outline color={C.blue}>Registrarse</Btn></Row><T size={22} bold>Bienvenido, Invitado</T><Search/><Chips items={['Idiomas','Asesorías','Tecnología','Reparaciones']} selected={0} color="#667b96"/><Card style={{backgroundColor:'#f0f3f8'}}><T size={13}>◉  Estás explorando sin cuenta. Regístrate para solicitar intercambios.</T></Card><Row><T bold size={19}>Destacados</T><T color={C.blue}>Ver todos</T></Row>{[servicios[1],servicios[3]].map((x,i)=><Service key={i} item={x}/>)}</Page>}
