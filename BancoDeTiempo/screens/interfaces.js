import AdminScreen from './AdminScreen';
import AgregarHabilidadScreen from './AgregarHabilidadScreen';
import AjustesPerfilScreen from './AjustesPerfilScreen';
import CatalogoScreen from './CatalogoScreen';
import CalificarServicioScreen from './CalificarServicioScreen';
import ChatScreen from './ChatScreen';
import DetalleInvitadoScreen from './DetalleInvitadoScreen';
import DetalleUsuarioScreen from './DetalleUsuarioScreen';
import GestionScreen from './GestionScreen';
import InicioScreen from './InicioScreen';
import IntercambiosScreen from './IntercambiosScreen';
import InvitadoScreen from './InvitadoScreen';
import LoginScreen from './LoginScreen';
import MetricasScreen from './MetricasScreen';
import MonederoScreen from './MonederoScreen';
import NotificacionesScreen from './NotificacionesScreen';
import PerfilScreen from './PerfilScreen';
import PublicarScreen from './PublicarScreen';
import PublicarPaso2Screen from './PublicarPaso2Screen';
import RecuperarPasswordScreen from './RecuperarPasswordScreen';
import ReportesScreen from './ReportesScreen';
import SolicitudScreen from './SolicitudScreen';

export const interfaceGroups = [
  {
    title: 'Acceso',
    items: [
      { name: 'Iniciar sesión', Screen: LoginScreen },
      { name: 'Recuperar contraseña', Screen: RecuperarPasswordScreen },
      { name: 'Modo invitado', Screen: InvitadoScreen },
    ],
  },
  {
    title: 'Comunidad',
    items: [
      { name: 'Inicio', Screen: InicioScreen },
      { name: 'Catálogo', Screen: CatalogoScreen },
      { name: 'Detalle para invitados', Screen: DetalleInvitadoScreen },
      { name: 'Detalle de servicio', Screen: DetalleUsuarioScreen },
      { name: 'Solicitar intercambio', Screen: SolicitudScreen },
      { name: 'Mis intercambios', Screen: IntercambiosScreen },
      { name: 'Chat', Screen: ChatScreen },
      { name: 'Calificar servicio', Screen: CalificarServicioScreen },
      { name: 'Mi monedero', Screen: MonederoScreen },
      { name: 'Mi perfil', Screen: PerfilScreen },
      { name: 'Agregar habilidad', Screen: AgregarHabilidadScreen },
      { name: 'Ajustes de cuenta', Screen: AjustesPerfilScreen },
      { name: 'Notificaciones', Screen: NotificacionesScreen },
      { name: 'Publicar servicio', Screen: PublicarScreen },
      { name: 'Horario y confirmación', Screen: PublicarPaso2Screen },
    ],
  },
  {
    title: 'Administración',
    items: [
      { name: 'Panel de administración', Screen: AdminScreen },
      { name: 'Gestión de usuarios', Screen: GestionScreen },
      { name: 'Métricas', Screen: MetricasScreen },
      { name: 'Reportes', Screen: ReportesScreen },
    ],
  },
];
