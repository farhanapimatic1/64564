/*
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package com.amazon.webservices.models;

import java.util.*;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

public class BrowseNodeLookupResponseMsg 
        implements java.io.Serializable {
    private static final long serialVersionUID = 5722816222711019297L;
    private BrowseNodeLookupResponse body;
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("body")
    public BrowseNodeLookupResponse getBody ( ) { 
        return this.body;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("body")
    public void setBody (BrowseNodeLookupResponse value) { 
        this.body = value;
    }
 
}
 