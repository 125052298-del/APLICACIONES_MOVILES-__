import React from 'react';
import {StatusBar} from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import InvitadoScreen from './screens/InvitadoScreen';
import InicioScreen from './screens/InicioScreen';
import PerfilScreen from './screens/PerfilScreen';
import CatalogoScreen from './screens/CatalogoScreen';
import DetalleInvitadoScreen from './screens/DetalleInvitadoScreen';
import DetalleUsuarioScreen from './screens/DetalleUsuarioScreen';
import PublicarScreen from './screens/PublicarScreen';
import SolicitudScreen from './screens/SolicitudScreen';
import IntercambiosScreen from './screens/IntercambiosScreen';
import MonederoScreen from './screens/MonederoScreen';
import AdminScreen from './screens/AdminScreen';
import GestionScreen from './screens/GestionScreen';
import MetricasScreen from './screens/MetricasScreen';
import ReportesScreen from './screens/ReportesScreen';

// Cambia SOLO este número (1 a 15) para mostrar una interfaz distinta.
// No hay navegación ni funcionalidad: únicamente FrontEnd.
const PANTALLA = 2;
const pantallas = [LoginScreen, InvitadoScreen, InicioScreen, PerfilScreen,
  CatalogoScreen, DetalleInvitadoScreen, DetalleUsuarioScreen,
  PublicarScreen, SolicitudScreen, IntercambiosScreen, MonederoScreen,
  AdminScreen, GestionScreen, MetricasScreen, ReportesScreen];
export default function App(){const Pantalla=pantallas[PANTALLA-1]||LoginScreen;return <><StatusBar style="dark"/><Pantalla/></>}
