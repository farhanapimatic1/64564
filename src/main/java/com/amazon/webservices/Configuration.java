/*
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package com.amazon.webservices;

import java.util.EnumMap;
import java.util.HashMap;
import java.util.Map;

import com.amazon.webservices.models.*;

public class Configuration {
    /**
     * Current API environment
     */
    public static Environments environment = Environments.PRODUCTION;

    /**
     * Get base URI by current environment
     * @param server Server for which to get the base URI
     * @return Processed base URI
     */
    public static String getBaseUri(Servers server) {
        StringBuilder baseUrl = new StringBuilder(environmentsMap.get(Configuration.environment).get(server));
        Map<String, Object> parameters = new HashMap<String, Object>() {
            private static final long serialVersionUID = 4727952982786171301L;
            {
            }
        };
        APIHelper.appendUrlWithTemplateParameters(baseUrl, parameters);
        return baseUrl.toString();
    }
    
    /**
     * Get base URI by current environment
     * @return Processed base URI
     */
    public static String getBaseUri() {
        return Configuration.getBaseUri(Servers.AWSECOMMERCESERVICEPORT);
    }
    
    /**
     * Map of all base URLs by environments and server aliases 
     */
    private static EnumMap<Environments, EnumMap<Servers, String>> environmentsMap = new EnumMap<Environments, EnumMap<Servers,String>>(Environments.class) {
        private static final long serialVersionUID = 4772955125503749936L;
        {
            put(Environments.PRODUCTION , new EnumMap<Servers, String>(Servers.class) {
                private static final long serialVersionUID = 5284570670034410247L;
                {
                    put(Servers.AWSECOMMERCESERVICEPORT, "https://webservices.amazon.com/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTCA, "https://webservices.amazon.ca/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTCN, "https://webservices.amazon.cn/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTDE, "https://webservices.amazon.de/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTES, "https://webservices.amazon.es/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTFR, "https://webservices.amazon.fr/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTIN, "https://webservices.amazon.in/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTIT, "https://webservices.amazon.it/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTJP, "https://webservices.amazon.co.jp/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTUK, "https://webservices.amazon.co.uk/onca/soap?Service=AWSECommerceService");
                    put(Servers.AWSECOMMERCESERVICEPORTUS, "https://webservices.amazon.com/onca/soap?Service=AWSECommerceService");
                }
            });
        }
    };
}
