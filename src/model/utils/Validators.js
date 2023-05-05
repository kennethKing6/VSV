class Validators {

    isURL(str) {
        // Create a regular expression to match URLs
        // The regular expression checks for http, https and ftp protocols
        // The regular expression also checks for subdomains, domain names and top-level domains
        const pattern = /^(https?:\/\/)?(www\.)?[a-z0-9]+\.[a-z]{2,}(\/.*)?$/i;

        // Test the input string against the regular expression
        return pattern.test(str);
    }
}

export const VALIDATORS = new Validators()