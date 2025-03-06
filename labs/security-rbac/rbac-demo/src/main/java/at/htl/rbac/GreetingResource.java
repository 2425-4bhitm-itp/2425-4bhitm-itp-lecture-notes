package at.htl.rbac;

import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

    @PermitAll
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus REST";
    }

    @RolesAllowed("admin")
    @GET
    @Path("admin")
    @Produces(MediaType.TEXT_PLAIN)
    public String adminGreeting() {
        return "Hello Admin!";
    }
}
