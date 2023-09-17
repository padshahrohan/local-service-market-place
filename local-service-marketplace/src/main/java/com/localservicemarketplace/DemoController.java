package com.localservicemarketplace;

import jakarta.annotation.security.RolesAllowed;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/backendEndPoint")
public class DemoController {

    @GetMapping("user")
    @PreAuthorize("hasAuthority('user')")
    public String hello() {
        return "Hello from Spring boot & Keycloak";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('admin')")
    public String hello1() {
        return "Hello from Spring boot & Keycloak";
    }
}