import { Server } from "socket.io";
import organizationEvents from "./organization.events";
export default function events(io: Server) {
  organizationEvents(io);
}
