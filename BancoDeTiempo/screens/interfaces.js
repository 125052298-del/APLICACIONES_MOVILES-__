import AdminScreen from './AdminScreen';
import CatalogoScreen from './CatalogoScreen';
import DetalleInvitadoScreen from './DetalleInvitadoScreen';
import DetalleUsuarioScreen from './DetalleUsuarioScreen';
import GestionScreen from './GestionScreen';
import InicioScreen from './InicioScreen';
import IntercambiosScreen from './IntercambiosScreen';
import InvitadoScreen from './InvitadoScreen';
import LoginScreen from './LoginScreen';
import MetricasScreen from './MetricasScreen';
import MonederoScreen from './MonederoScreen';
import PerfilScreen from './PerfilScreen';
import PublicarScreen from './PublicarScreen';
import ReportesScreen from './ReportesScreen';
import SolicitudScreen from './SolicitudScreen';

export const interfaces = [
  { name: 'Iniciar sesión', Screen: LoginScreen },
  { name: 'Modo invitado', Screen: InvitadoScreen },
  { name: 'Inicio', Screen: InicioScreen },
  { name: 'Perfil', Screen: PerfilScreen },
  { name: 'Catálogo', Screen: CatalogoScreen },
  { name: 'Detalle para invitados', Screen: DetalleInvitadoScreen },
  { name: 'Detalle de servicio', Screen: DetalleUsuarioScreen },
  { name: 'Publicar servicio', Screen: PublicarScreen },
  { name: 'Solicitar intercambio', Screen: SolicitudScreen },
  { name: 'Mis intercambios', Screen: IntercambiosScreen },
  { name: 'Monedero', Screen: MonederoScreen },
  { name: 'Administración', Screen: AdminScreen },
  { name: 'Gestión de usuarios', Screen: GestionScreen },
  { name: 'Métricas', Screen: MetricasScreen },
  { name: 'Reportes', Screen: ReportesScreen },
];
