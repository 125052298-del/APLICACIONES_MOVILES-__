import React from 'react';
import {Page,T,Row,Search,Chips,Service,C} from '../components/UI';
import {servicios} from '../components/Datos';
export default function CatalogoScreen(){return <Page tab="Catálogo"><Row><T bold size={22}>Explorar Servicios</T><T bold color={C.blue}>☷ Filtros</T></Row><Search placeholder="¿Qué quieres aprender hoy?"/><Chips items={['Todos','Idiomas','Tecnología','+2']} selected={0} color={C.blue}/><Row><T size={12} color={C.muted}>◉ Presencial · Campus Central</T><T size={12} color={C.muted}>48 resultados</T></Row>{[servicios[0],servicios[1],servicios[2]].map((x,i)=><Service key={i} item={x}/>)}</Page>}
